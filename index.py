import http.server
import urllib.parse
import urllib.request
import json
import re

cache = {}
playlist_cache = {}

def search_youtube_video(query):
    clean_q = query.strip()
    if clean_q in cache:
        return cache[clean_q]
    
    encoded = urllib.parse.quote(clean_q)
    url = f"https://www.youtube.com/results?search_query={encoded}"
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
    })
    try:
        with urllib.request.urlopen(req, timeout=6) as response:
            html = response.read().decode('utf-8', errors='ignore')
            matches = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', html)
            seen = set()
            unique_vids = []
            for v in matches:
                if v not in seen:
                    seen.add(v)
                    unique_vids.append(v)
            if unique_vids:
                result = {
                    "status": "ok",
                    "videoId": unique_vids[0],
                    "allIds": unique_vids[:5]
                }
                cache[clean_q] = result
                return result
    except Exception as e:
        print(f"Error searching YouTube for {clean_q}: {e}")
    
    return {"status": "error", "message": "No video found"}

def get_spotify_playlist_data(url):
    clean_url = url.strip()
    if clean_url in playlist_cache:
        return playlist_cache[clean_url]

    match = re.search(r'spotify\.com/(?:intl-[a-z]+/)?(playlist|album|track)/([a-zA-Z0-9]+)', clean_url)
    if not match:
        return {"status": "error", "message": "Enlace no válido"}
    
    entity_type = match.group(1)
    entity_id = match.group(2)
    
    embed_url = f"https://open.spotify.com/embed/{entity_type}/{entity_id}"
    req = urllib.request.Request(embed_url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=8) as r:
            html = r.read().decode('utf-8', errors='ignore')
            m = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html)
            if m:
                data = json.loads(m.group(1))
                props = data.get('props', {}).get('pageProps', {}).get('state', {}).get('data', {})
                entity = props.get('entity', {})
                track_list = entity.get('trackList', [])
                cover = entity.get('coverArt', {}).get('sources', [{}])[0].get('url', '')
                
                parsed_tracks = []
                for t in track_list:
                    parsed_tracks.append({
                        "id": f"sp-{t.get('id', '')}",
                        "title": t.get('title', ''),
                        "artist": t.get('subtitle', ''),
                        "duration": int(t.get('duration', 180000) / 1000)
                    })
                res = {
                    "status": "ok",
                    "type": entity_type,
                    "id": entity_id,
                    "name": entity.get('name', 'Playlist de Spotify'),
                    "cover": cover,
                    "tracks": parsed_tracks
                }
                playlist_cache[clean_url] = res
                return res
    except Exception as e:
        print("Spotify playlist extract error:", e)
    return {"status": "error", "message": "No se pudo extraer la playlist"}

class handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if 'yt-search' in parsed.path:
            params = urllib.parse.parse_qs(parsed.query)
            q = params.get('q', [''])[0]
            if not q:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Missing query parameter 'q'"}).encode('utf-8'))
                return

            res = search_youtube_video(q)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        elif 'spotify-playlist' in parsed.path:
            params = urllib.parse.parse_qs(parsed.query)
            target_url = params.get('url', [''])[0]
            if not target_url:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Missing parameter 'url'"}).encode('utf-8'))
                return

            res = get_spotify_playlist_data(target_url)
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(res).encode('utf-8'))
            return

        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps({"status": "ok"}).encode('utf-8'))
