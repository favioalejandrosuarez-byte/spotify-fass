import http.server
import socketserver
import urllib.parse
import urllib.request
import json
import re
import os
import sys
import time
import socket
import yt_dlp

PORT = int(os.environ.get('PORT', 3000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

cache = {}
playlist_cache = {}
stream_cache = {}

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

def get_audio_stream_url(video_id):
    clean_id = video_id.strip()
    now = time.time()
    if clean_id in stream_cache:
        cached = stream_cache[clean_id]
        if cached['expires'] > now:
            return cached['url']

    ydl_opts = {
        'format': 'bestaudio/best',
        'quiet': True,
        'no_warnings': True,
        'extract_flat': False,
        'extractor_args': {
            'youtube': {
                'player_client': ['android', 'ios', 'web']
            }
        }
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(clean_id, download=False)
            url = info.get('url')
            if url:
                stream_cache[clean_id] = {
                    'url': url,
                    'duration': info.get('duration', 180),
                    'expires': now + 14400 # 4 hours
                }
                return url
    except Exception as e:
        print(f"Error extracting audio stream for {clean_id}: {e}")
    return None

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

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_HEAD(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/stream':
            params = urllib.parse.parse_qs(parsed.query)
            vid = params.get('v', [''])[0]
            if not vid:
                self.send_error(400)
                return
            audio_url = get_audio_stream_url(vid)
            if not audio_url:
                self.send_error(404)
                return
            try:
                remote_req = urllib.request.Request(audio_url, headers={'User-Agent': 'Mozilla/5.0', 'Range': 'bytes=0-1'})
                with urllib.request.urlopen(remote_req, timeout=8) as resp:
                    self.send_response(200)
                    self.send_header('Content-Type', 'audio/mp4')
                    self.send_header('Accept-Ranges', 'bytes')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    content_range = resp.headers.get('Content-Range')
                    if content_range and '/' in content_range:
                        total_len = content_range.split('/')[-1]
                        self.send_header('Content-Length', total_len)
                    self.end_headers()
            except Exception:
                self.send_response(200)
                self.send_header('Content-Type', 'audio/mp4')
                self.send_header('Accept-Ranges', 'bytes')
                self.end_headers()
            return
        if parsed.path in ('/api/yt-search', '/api/stream-info', '/api/spotify-playlist'):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            return
        return super().do_HEAD()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/api/yt-search':
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

        elif parsed.path == '/api/stream':
            params = urllib.parse.parse_qs(parsed.query)
            vid = params.get('v', [''])[0]
            if not vid:
                self.send_error(400, "Missing 'v' parameter")
                return
            
            audio_url = get_audio_stream_url(vid)
            if not audio_url:
                self.send_error(404, "Audio stream not found")
                return
            
            client_range = self.headers.get('Range')
            req_headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            if client_range:
                req_headers['Range'] = client_range
            
            try:
                remote_req = urllib.request.Request(audio_url, headers=req_headers)
                with urllib.request.urlopen(remote_req, timeout=12) as resp:
                    self.send_response(resp.status)
                    self.send_header('Content-Type', 'audio/mp4')
                    self.send_header('Accept-Ranges', 'bytes')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    
                    cr = resp.headers.get('Content-Range')
                    if cr:
                        self.send_header('Content-Range', cr)
                    
                    cl = resp.headers.get('Content-Length')
                    if cl:
                        self.send_header('Content-Length', cl)
                    
                    self.end_headers()
                    
                    while True:
                        chunk = resp.read(64 * 1024)
                        if not chunk:
                            break
                        self.wfile.write(chunk)
            except (BrokenPipeError, ConnectionResetError, socket.error):
                pass
            except Exception as e:
                print(f"Stream error for {vid}: {e}")
            return

        elif parsed.path == '/api/stream-info':
            params = urllib.parse.parse_qs(parsed.query)
            vid = params.get('v', [''])[0]
            if not vid:
                self.send_response(400)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": "Missing 'v'"}).encode('utf-8'))
                return
            audio_url = get_audio_stream_url(vid)
            info = stream_cache.get(vid, {})
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "ok" if audio_url else "error",
                "videoId": vid,
                "streamUrl": f"/api/stream?v={vid}" if audio_url else None,
                "duration": info.get('duration', 180)
            }).encode('utf-8'))
            return
        
        elif parsed.path == '/api/spotify-playlist':
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
        
        return super().do_GET()

def run_server():
    server_address = ('', PORT)
    with http.server.ThreadingHTTPServer(server_address, CustomHandler) as httpd:
        print(f"Spotify Web Player Server running at http://localhost:{PORT}")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            pass

if __name__ == '__main__':
    run_server()
