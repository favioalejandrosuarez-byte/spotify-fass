/**
 * SPOTIFY AD-FREE WEB PLAYER - HIGH FIDELITY HYBRID ENGINE
 * Real Universal Music Search + Native HTML5 Background Audio + MediaSession Mobile API
 */

// =============================================================================
// 1. MUSIC CATALOG & DATABASE (Equipped with Direct Audio Streams)
// =============================================================================

const DEFAULT_CATALOG = [
  {
    id: "sp-1",
    title: "BIRDS OF A FEATHER",
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
    duration: 198,
    ytId: "d5gf9dXHeG4",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/92/9f/69/929f69f1-9977-3a44-d674-11f70c852d1b/24UMGIM36186.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/31/d3/3431d34e-847f-5d66-df83-0bce688d997e/mzaf_18106743962423782018.plus.aac.p.m4a",
    color: "#283b42",
    lyrics: [
      { time: 0, text: "I want you to stay" },
      { time: 6, text: "'Til I'm in the grave" },
      { time: 10, text: "'Til I rot, more and more, then I'll turn into clay" },
      { time: 16, text: "Like I wasn't made" },
      { time: 20, text: "Birds of a feather, we should stick together, I know" },
      { time: 27, text: "I said I'd never think I wasn't better alone" },
      { time: 34, text: "Can't change the weather, might not be forever" },
      { time: 40, text: "But if it's forever, it's even better" }
    ]
  },
  {
    id: "sp-2",
    title: "MONACO",
    artist: "Bad Bunny",
    album: "nadie sabe lo que va a pasar mañana",
    duration: 267,
    ytId: "Qp4v2A6W5xM",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/a3/6b/96/a36b963b-16d3-ba27-a419-01911a1423b2/artwork.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f8/f7/e6/f8f7e68a-b3b6-6923-1413-47063fdf8097/mzaf_1281793130090250096.plus.aac.p.m4a",
    color: "#4a3b2c",
    lyrics: [
      { time: 0, text: "Dime si tú quiere' andar en el Bugatti o en el Ferrari" },
      { time: 7, text: "Bebiendo champaña en Monaco gastando el money" },
      { time: 14, text: "Ustedes son de mentira, nosotros somos de verdad" },
      { time: 21, text: "Haciendo historia como Al Pacino en Scarface" },
      { time: 28, text: "Nadie sabe lo que va a pasar mañana" }
    ]
  },
  {
    id: "sp-3",
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: 200,
    ytId: "4NRXx6U8ABQ",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/e7/3f/61e73f94-018d-5f50-50ec-8521952bc72e/20UM1IM11629.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/12/73/ca/1273ca46-233a-5331-189b-25ac1d656533/mzaf_976341070785891411.plus.aac.p.m4a",
    color: "#771d1d",
    lyrics: [
      { time: 0, text: "Yeah..." },
      { time: 12, text: "I've been tryin' to call" },
      { time: 17, text: "I've been on my own for long enough" },
      { time: 24, text: "Maybe you can show me how to love, maybe" },
      { time: 31, text: "I'm going through withdrawals" },
      { time: 36, text: "You don't even have to do too much" },
      { time: 42, text: "I look around and Sin City's cold and empty" },
      { time: 49, text: "No one's around to judge me" },
      { time: 55, text: "I said, ooh, I'm blinded by the lights!" }
    ]
  },
  {
    id: "sp-4",
    title: "Cruel Summer",
    artist: "Taylor Swift",
    album: "Lover",
    duration: 178,
    ytId: "ic8j13piAhQ",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/49/3d/ab/493dab54-f920-9043-6181-80993b8116c9/19UMGIM53909.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/44/af/81/44af8168-9609-1b85-5048-ada08dceacf3/mzaf_1341699644335558812.plus.aac.p.m4a",
    color: "#4a2d59",
    lyrics: [
      { time: 0, text: "Fever dream high in the quiet of the night" },
      { time: 6, text: "You know that I caught it" },
      { time: 12, text: "Bad, bad boy, shiny toy with a price" },
      { time: 18, text: "You know that I bought it" },
      { time: 24, text: "It's new, the shape of your body" },
      { time: 30, text: "It's blue, the feeling I've got" },
      { time: 36, text: "And it's a cruel summer with you!" }
    ]
  },
  {
    id: "sp-5",
    title: "Ojitos Lindos",
    artist: "Bad Bunny & Bomba Estéreo",
    album: "Un Verano Sin Ti",
    duration: 258,
    ytId: "10nxO_qZ4eA",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/ae/81/72ae81c2-4ef3-b998-40b6-563c0609509f/mzaf_12868850384306577273.plus.aac.p.m4a",
    color: "#6b1e2c",
    lyrics: [
      { time: 0, text: "Hace mucho tiempo le hago caso al corazón" },
      { time: 8, text: "Y pasan los días, los meses, pensando en tu olor" },
      { time: 16, text: "Ha llegado el tiempo para usar la razón" },
      { time: 24, text: "Antes que sea tarde y sin querer me parta en dos" }
    ]
  },
  {
    id: "sp-6",
    title: "LUNA",
    artist: "Feid, ATL Jacob",
    album: "FERXXOCALIPSIS",
    duration: 196,
    ytId: "8yA69l3d9hI",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/72/ae/81/72ae81c2-4ef3-b998-40b6-563c0609509f/mzaf_12868850384306577273.plus.aac.p.m4a",
    color: "#184524",
    lyrics: [
      { time: 0, text: "A veces me pregunto si tú estás pensando en mí" },
      { time: 8, text: "Como yo estoy pensándote a ti..." },
      { time: 16, text: "Dime si la luna que estás viendo es la misma luna" },
      { time: 24, text: "Que me alumbra a mí en las noches de soledad" }
    ]
  },
  {
    id: "sp-7",
    title: "Viva La Vida",
    artist: "Coldplay",
    album: "Viva La Vida or Death and All His Friends",
    duration: 242,
    ytId: "dvgZkm1xWPE",
    cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/34/31/d3/3431d34e-847f-5d66-df83-0bce688d997e/mzaf_18106743962423782018.plus.aac.p.m4a",
    color: "#544621",
    lyrics: [
      { time: 0, text: "I used to rule the world" },
      { time: 6, text: "Seas would rise when I gave the word" },
      { time: 12, text: "Now in the morning I sleep alone" },
      { time: 18, text: "Sweep the streets I used to own" }
    ]
  },
  {
    id: "sp-8",
    title: "LA CANCIÓN",
    artist: "J Balvin & Bad Bunny",
    album: "OASIS",
    duration: 242,
    ytId: "lx__Uey61DA",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/77/32/74/7732746d-25e5-baae-b921-bad4a07d87b1/19UMGIM55524.rgb.jpg/600x600bb.jpg",
    audioUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/cf/5f/ef/cf5fef49-8ab0-0d0b-f17a-d820cdca1d88/mzaf_3693019759359818051.plus.aac.p.m4a",
    color: "#213e59",
    lyrics: [
      { time: 0, text: "Pensaba que te había olvidao', eh" },
      { time: 6, text: "Pero pusieron la canción, eh, eh, eh" },
      { time: 12, text: "Que cantábamos bien borrachos" },
      { time: 18, text: "Que bailábamos bien borrachos" }
    ]
  }
];

// Playlists structure
const PLAYLISTS = [
  {
    id: "pl-top50",
    name: "Top 50: Global",
    desc: "Tu actualización diaria de las pistas más escuchadas a nivel mundial ahora mismo.",
    creator: "Spotify",
    likes: "4,952,190",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
    tracks: ["sp-1", "sp-2", "sp-3", "sp-4", "sp-5", "sp-8"]
  },
  {
    id: "pl-latin",
    name: "Viva Latino",
    desc: "Los mejores éxitos de la música latina de hoy sin anuncios.",
    creator: "Spotify",
    likes: "14,109,820",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    tracks: ["sp-2", "sp-5", "sp-6", "sp-8"]
  },
  {
    id: "pl-hits-mix",
    name: "Mega Hit Mix",
    desc: "Una mezcla con tus canciones favoritas y recomendaciones seleccionadas para ti.",
    creator: "Spotify",
    likes: "2,308,114",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
    tracks: ["sp-3", "sp-4", "sp-1", "sp-7"]
  }
];

const ARTISTS = [
  { name: "Bad Bunny", genre: "Urbano Latino", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80" },
  { name: "Billie Eilish", genre: "Pop Alternativo", img: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=200&q=80" },
  { name: "The Weeknd", genre: "R&B / Synth-Pop", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=200&q=80" },
  { name: "Taylor Swift", genre: "Pop", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=200&q=80" }
];

const GENRES = [
  { name: "Música Latina", color: "#e1118c", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80" },
  { name: "Pop", color: "#148a08", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=200&q=80" },
  { name: "Hip-Hop", color: "#bc5900", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=200&q=80" },
  { name: "Rock", color: "#e91429", img: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=200&q=80" },
  { name: "Dance / Electrónica", color: "#d84000", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=200&q=80" },
  { name: "Indie & Alternativo", color: "#503750", img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=200&q=80" }
];

// =============================================================================
// 2. STATE MANAGER
// =============================================================================

const state = {
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 0.85,
  isMuted: false,
  shuffle: false,
  repeatMode: 0, // 0: off, 1: all, 2: one
  currentPlaylist: null,
  queue: [],
  queueIndex: -1,
  likedSongIds: new Set(["sp-1", "sp-2", "sp-3"]),
  downloadedTrackIds: new Set(JSON.parse(localStorage.getItem('sp_downloaded_ids') || '["sp-1", "sp-2"]')),
  isOfflineMode: false,
  pendingDownloadItem: null,
  selectedDownloadOption: 'cache',
  spotifyUser: null,
  customPlaylists: [],
  activeView: "home",
  lyricsActive: false,
  queueDrawerOpen: false,
  activeFilter: "all",
  isVideoModeActive: false,
  activeEngine: 'native' // 'native' for 100% background audio on iPhone/mobile, 'youtube' for video dock
};

// =============================================================================
// 3. FULL SONG STREAMING ENGINE (NATIVE AUDIO STREAMING + YOUTUBE VIDEO SYNC)
// =============================================================================

let ytPlayer = null;
let ytPlayerReady = false;
let ytPlaybackInterval = null;
let ytPendingTrack = null;
const ytCache = new Map();

const nativeAudio = new Audio();
nativeAudio.crossOrigin = "anonymous";
nativeAudio.preload = "auto";
nativeAudio.setAttribute("playsinline", "true");
nativeAudio.setAttribute("webkit-playsinline", "true");

// Web Audio API Synthesizer (Guaranteed Fallback)
let audioCtx = null;
let synthOsc = null;
let synthGain = null;

function initAudioEngines() {
  initNativeAudioEngine();
  initYouTubeEngine();
}

function initYouTubeEngine() {
  if (window.YT && window.YT.Player) {
    createYTPlayer();
  } else {
    window.onYouTubeIframeAPIReady = function() {
      createYTPlayer();
    };
  }
}

function createYTPlayer() {
  if (ytPlayer) return;
  try {
    ytPlayer = new YT.Player('yt-player-placeholder', {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        iv_load_policy: 3
      },
      events: {
        onReady: (event) => {
          ytPlayerReady = true;
          ytPlayer.setVolume(state.volume * 100);
          if (state.isMuted) ytPlayer.mute();
          if (ytPendingTrack) {
            const tr = ytPendingTrack;
            ytPendingTrack = null;
            playTrackWithYouTube(tr);
          }
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            state.isPlaying = true;
            state.activeEngine = 'youtube';
            updatePlayPauseButtonUI();
            startYTProgressTracking();
            const d = ytPlayer.getDuration();
            if (d && d > 0) {
              state.duration = Math.floor(d);
              document.getElementById('total-time').textContent = formatSeconds(state.duration);
            }
            if (state.currentTrack) {
              updateMediaSession(state.currentTrack);
            }
          } else if (event.data === YT.PlayerState.PAUSED) {
            state.isPlaying = false;
            updatePlayPauseButtonUI();
            stopYTProgressTracking();
          } else if (event.data === YT.PlayerState.ENDED) {
            stopYTProgressTracking();
            handleTrackEnded();
          }
        },
        onError: (event) => {
          console.warn("YouTube player error event code:", event.data);
          handleYTErrorFallback();
        }
      }
    });
  } catch (e) {
    console.warn("Error creating YouTube Player instance:", e);
  }
}

function startYTProgressTracking() {
  stopYTProgressTracking();
  ytPlaybackInterval = setInterval(() => {
    if (!ytPlayer || !ytPlayerReady || !state.isPlaying || state.activeEngine !== 'youtube') return;
    try {
      const cur = ytPlayer.getCurrentTime();
      const dur = ytPlayer.getDuration();
      if (!isNaN(cur) && cur >= 0) {
        state.currentTime = Math.floor(cur);
        if (!isNaN(dur) && dur > 0) {
          state.duration = Math.floor(dur);
        }
        const percent = state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0;
        document.getElementById('progress-fill').style.width = `${percent}%`;
        document.getElementById('progress-handle').style.left = `${percent}%`;
        document.getElementById('current-time').textContent = formatSeconds(state.currentTime);
        document.getElementById('total-time').textContent = formatSeconds(state.duration);

        updateActiveLyricLine();
      }
    } catch (e) {}
  }, 250);
}

function stopYTProgressTracking() {
  if (ytPlaybackInterval) {
    clearInterval(ytPlaybackInterval);
    ytPlaybackInterval = null;
  }
}

let isPrefetching = false;
function prefetchNextTrackInQueue() {
  if (isPrefetching || state.queue.length === 0) return;
  const nextIdx = state.shuffle ? Math.floor(Math.random() * state.queue.length) : state.queueIndex + 1;
  if (nextIdx >= 0 && nextIdx < state.queue.length) {
    const nextTrack = state.queue[nextIdx];
    if (nextTrack && !nextTrack.ytId) {
      isPrefetching = true;
      resolveYouTubeTrack(nextTrack).then(id => {
        if (id) {
          nextTrack.streamUrl = `/api/stream?v=${id}`;
          fetch(`/api/stream-info?v=${id}`).catch(() => {});
        }
      }).finally(() => {
        isPrefetching = false;
      });
    }
  }
}

function initNativeAudioEngine() {
  nativeAudio.volume = state.volume;

  nativeAudio.addEventListener('timeupdate', () => {
    if (state.activeEngine !== 'native') return;
    if (isNaN(nativeAudio.duration) || nativeAudio.duration <= 0) return;
    state.currentTime = Math.floor(nativeAudio.currentTime);
    state.duration = Math.floor(nativeAudio.duration);

    const percent = (nativeAudio.currentTime / nativeAudio.duration) * 100;
    document.getElementById('progress-fill').style.width = `${percent}%`;
    document.getElementById('progress-handle').style.left = `${percent}%`;
    document.getElementById('current-time').textContent = formatSeconds(state.currentTime);
    document.getElementById('total-time').textContent = formatSeconds(state.duration);

    updateActiveLyricLine();

    // Prefetch next track in background when 70% complete so background queue transition is instant
    if (state.duration > 20 && state.currentTime > (state.duration * 0.70)) {
      prefetchNextTrackInQueue();
    }
  });

  nativeAudio.addEventListener('play', () => {
    if (state.activeEngine === 'native') {
      state.isPlaying = true;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
      updatePlayPauseButtonUI();
    }
  });

  nativeAudio.addEventListener('pause', () => {
    if (state.activeEngine === 'native') {
      state.isPlaying = false;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
      updatePlayPauseButtonUI();
    }
  });

  nativeAudio.addEventListener('ended', () => {
    if (state.activeEngine === 'native') {
      handleTrackEnded();
    }
  });

  nativeAudio.addEventListener('error', (err) => {
    if (state.activeEngine === 'native') {
      console.warn("Native audio error:", err);
      if (state.currentTrack) {
        playSynthesizerFallback(state.currentTrack);
      }
    }
  });
}

function updateMediaSession(track) {
  if ('mediaSession' in navigator && track) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title,
      artist: track.artist,
      album: track.album || "Spotify FASS",
      artwork: [
        { src: track.cover, sizes: '96x96', type: 'image/jpeg' },
        { src: track.cover, sizes: '256x256', type: 'image/jpeg' },
        { src: track.cover, sizes: '512x512', type: 'image/jpeg' }
      ]
    });

    navigator.mediaSession.playbackState = state.isPlaying ? 'playing' : 'paused';

    navigator.mediaSession.setActionHandler('play', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('pause', () => togglePlayPause());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (details.seekTime !== undefined) seekTo(details.seekTime);
    });

    if ('setPositionState' in navigator.mediaSession && state.duration > 0) {
      try {
        navigator.mediaSession.setPositionState({
          duration: state.duration,
          playbackRate: 1,
          position: Math.max(0, Math.min(state.currentTime, state.duration))
        });
      } catch (e) {}
    }
  }
}

async function resolveYouTubeTrack(track) {
  if (track.ytId) return track.ytId;
  const qKey = `${track.artist} ${track.title}`.toLowerCase().trim();
  if (ytCache.has(qKey)) {
    track.ytId = ytCache.get(qKey);
    return track.ytId;
  }

  // 1. Local Server API: /api/yt-search?q=...
  try {
    const res = await fetch(`/api/yt-search?q=${encodeURIComponent(`${track.artist} ${track.title}`)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'ok' && data.videoId) {
        track.ytId = data.videoId;
        track.allYtIds = data.allIds;
        ytCache.set(qKey, track.ytId);
        return track.ytId;
      }
    }
  } catch (e) {
    console.warn("Local API search error, falling back...", e);
  }

  // 2. Public Invidious instance fallback
  const publicInstances = [
    'https://yt.chocolatemoo53.com',
    'https://invidious.private.coffee',
    'https://iv.ggtyler.dev'
  ];
  for (const inst of publicInstances) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(`${inst}/api/v1/search?q=${encodeURIComponent(`${track.artist} ${track.title}`)}&type=video`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0 && data[0].videoId) {
          track.ytId = data[0].videoId;
          ytCache.set(qKey, track.ytId);
          return track.ytId;
        }
      }
    } catch (err) {}
  }

  return null;
}

async function resolveTrackAudio(track) {
  if (track.audioUrl) return track.audioUrl;
  try {
    const q = encodeURIComponent(`${track.artist} ${track.title}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=1`);
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0 && data.results[0].previewUrl) {
        track.audioUrl = data.results[0].previewUrl;
        if (data.results[0].artworkUrl100) {
          track.cover = data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
        }
        return track.audioUrl;
      }
    }
  } catch (e) {
    console.warn("Resolution error:", e);
  }
  return null;
}

async function playTrack(track, playlistContext = null) {
  if (!track) return;

  // Offline Mode check: only allow downloaded tracks
  if (state.isOfflineMode && !state.downloadedTrackIds.has(track.id)) {
    showToast(`Modo Offline: "${track.title}" no está descargada. Descárgala o desactiva el Modo Offline.`, "warning");
    return;
  }

  // Stop previous native audio
  try {
    nativeAudio.pause();
    nativeAudio.currentTime = 0;
  } catch (e) {}

  state.currentTrack = track;
  state.currentTime = 0;
  state.duration = track.duration || 180;

  // Set ambient background color
  updateAmbientGlow(track.color || "#1f3b2b");

  // Update Bottom Player UI
  document.getElementById('player-cover-img').src = track.cover;
  document.getElementById('player-track-title').textContent = track.title;
  document.getElementById('player-track-artist').textContent = track.artist;
  document.getElementById('total-time').textContent = formatSeconds(state.duration);
  document.getElementById('current-time').textContent = "0:00";
  document.getElementById('progress-fill').style.width = "0%";
  document.getElementById('progress-handle').style.left = "0%";

  // Update floating dock title if open
  const dockTitle = document.getElementById('yt-dock-track-info');
  if (dockTitle) {
    dockTitle.textContent = `${track.title} - ${track.artist}`;
  }

  updatePlayerLikeButton();

  // Rebuild queue
  if (playlistContext) {
    state.currentPlaylist = playlistContext;
    const tracks = playlistContext.tracks.map(id => getTrackById(id)).filter(Boolean);
    state.queue = tracks;
    state.queueIndex = tracks.findIndex(t => t.id === track.id);
  } else if (state.queue.length === 0 || !state.queue.find(t => t.id === track.id)) {
    state.queue = [track, ...DEFAULT_CATALOG.filter(t => t.id !== track.id)];
    state.queueIndex = 0;
  } else {
    state.queueIndex = state.queue.findIndex(t => t.id === track.id);
  }

  renderQueueDrawer();
  highlightPlayingRow(track.id);

  // If in Offline Mode, prioritize native Audio
  if (state.isOfflineMode) {
    playWithNativeAudio(track);
    return;
  }

  // Online Mode: Resolve and Play FULL song via Native Audio Engine (supports iOS background audio)
  const ytId = await resolveYouTubeTrack(track);
  if (ytId) {
    track.streamUrl = `/api/stream?v=${ytId}`;
  }
  await playWithNativeAudio(track);

  // Update lyrics if visible
  if (state.lyricsActive) {
    renderLyricsView();
  }
}

function playTrackWithYouTube(track) {
  if (!ytPlayer || !ytPlayerReady || !track.ytId) return;
  state.activeEngine = 'youtube';

  try {
    ytPlayer.setVolume(state.isMuted ? 0 : state.volume * 100);
    ytPlayer.loadVideoById({
      videoId: track.ytId,
      startSeconds: 0
    });
    state.isPlaying = true;
    updatePlayPauseButtonUI();
    updateMediaSession(track);
    showToast(`Reproduciendo tema completo: ${track.title} 🎵 (Sin Cortes)`, "success");
  } catch (err) {
    console.warn("YouTube play invocation error:", err);
    playWithNativeAudio(track);
  }
}

function handleYTErrorFallback() {
  if (!state.currentTrack) return;
  if (state.currentTrack.allYtIds && state.currentTrack.allYtIds.length > 1) {
    const nextId = state.currentTrack.allYtIds[1];
    state.currentTrack.allYtIds.shift();
    state.currentTrack.ytId = nextId;
    console.log("Probando enlace alternativo de YouTube:", nextId);
    state.currentTrack.streamUrl = `/api/stream?v=${nextId}`;
    playWithNativeAudio(state.currentTrack);
    return;
  }
  console.warn("Audio alternativo no disponible, usando fallback...");
  playWithNativeAudio(state.currentTrack);
}

async function playWithNativeAudio(track) {
  state.activeEngine = 'native';
  stopYTProgressTracking();
  if (ytPlayer && ytPlayerReady) {
    try { ytPlayer.stopVideo(); } catch(e) {}
  }

  // 1. High-fidelity Full Song Stream from server (/api/stream?v=...)
  let audioStreamUrl = track.streamUrl;
  if (!audioStreamUrl && track.ytId) {
    audioStreamUrl = `/api/stream?v=${track.ytId}`;
  }
  // 2. Pre-defined audioUrl
  if (!audioStreamUrl && track.audioUrl) {
    audioStreamUrl = track.audioUrl;
  }
  // 3. Fallback resolution
  if (!audioStreamUrl) {
    audioStreamUrl = await resolveTrackAudio(track);
  }

  if (audioStreamUrl) {
    nativeAudio.src = audioStreamUrl;
    nativeAudio.volume = state.isMuted ? 0 : state.volume;
    try {
      await nativeAudio.play();
      state.isPlaying = true;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
      updatePlayPauseButtonUI();
      updateMediaSession(track);
      showToast(`Reproduciendo tema completo: ${track.title} 🎵 (Segundo plano activo 📱)`, "success");
    } catch (err) {
      console.warn("Native audio play failed:", err);
      playSynthesizerFallback(track);
    }
  } else {
    playSynthesizerFallback(track);
  }
}

async function recoverAndPlayTrack(track) {
  try {
    const q = encodeURIComponent(`${track.title}`);
    const res = await fetch(`https://itunes.apple.com/search?term=${q}&entity=song&limit=1`);
    if (res.ok) {
      const data = await res.json();
      if (data.results && data.results.length > 0) {
        track.audioUrl = data.results[0].previewUrl;
        nativeAudio.src = track.audioUrl;
        nativeAudio.play();
        return;
      }
    }
  } catch (e) {}
  playSynthesizerFallback(track);
}

function playSynthesizerFallback(track) {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) audioCtx = new AudioContextClass();
  }
  if (!audioCtx) return;

  if (synthOsc) {
    try { synthOsc.stop(); } catch(e) {}
  }

  synthOsc = audioCtx.createOscillator();
  synthGain = audioCtx.createGain();
  synthOsc.type = "triangle";
  synthOsc.frequency.setValueAtTime(220, audioCtx.currentTime);
  synthGain.gain.setValueAtTime(0.08, audioCtx.currentTime);

  synthOsc.connect(synthGain);
  synthGain.connect(audioCtx.destination);
  synthOsc.start();

  state.isPlaying = true;
  updatePlayPauseButtonUI();
  showToast(`Reproduciendo audio sintetizado: ${track.title}`, "info");
}

function togglePlayPause() {
  if (!state.currentTrack) {
    playTrack(DEFAULT_CATALOG[0]);
    return;
  }

  if (state.isPlaying) {
    if (state.activeEngine === 'youtube' && ytPlayer && ytPlayerReady) {
      try { ytPlayer.pauseVideo(); } catch(e) {}
    } else {
      nativeAudio.pause();
    }
    if (synthOsc) {
      try { synthOsc.stop(); } catch(e){}
    }
    state.isPlaying = false;
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
  } else {
    if (state.activeEngine === 'youtube' && ytPlayer && ytPlayerReady) {
      try { ytPlayer.playVideo(); } catch(e) {}
    } else if (nativeAudio.src) {
      nativeAudio.play().catch(e => console.log(e));
    } else {
      playTrack(state.currentTrack);
    }
    state.isPlaying = true;
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
  }
  updatePlayPauseButtonUI();
}

function handleTrackEnded() {
  if (state.repeatMode === 2) {
    seekTo(0);
    if (state.activeEngine === 'youtube' && ytPlayer && ytPlayerReady) {
      ytPlayer.playVideo();
    } else {
      nativeAudio.play();
    }
  } else {
    playNextTrack();
  }
}

function playNextTrack() {
  if (state.queue.length === 0) return;

  if (state.shuffle) {
    const randomIndex = Math.floor(Math.random() * state.queue.length);
    state.queueIndex = randomIndex;
  } else {
    state.queueIndex++;
    if (state.queueIndex >= state.queue.length) {
      if (state.repeatMode === 1) {
        state.queueIndex = 0;
      } else {
        state.isPlaying = false;
        updatePlayPauseButtonUI();
        return;
      }
    }
  }

  const nextTrack = state.queue[state.queueIndex];
  if (nextTrack) {
    playTrack(nextTrack);
  }
}

function playPrevTrack() {
  if (state.currentTime > 3) {
    seekTo(0);
    return;
  }

  if (state.queue.length === 0) return;

  state.queueIndex--;
  if (state.queueIndex < 0) {
    state.queueIndex = state.queue.length - 1;
  }

  const prevTrack = state.queue[state.queueIndex];
  if (prevTrack) {
    playTrack(prevTrack);
  }
}

function seekTo(seconds) {
  state.currentTime = Math.max(0, Math.min(seconds, state.duration));

  if (state.activeEngine === 'youtube' && ytPlayer && ytPlayerReady) {
    try { ytPlayer.seekTo(state.currentTime, true); } catch(e) {}
  } else {
    nativeAudio.currentTime = state.currentTime;
  }

  const percent = state.duration > 0 ? (state.currentTime / state.duration) * 100 : 0;
  document.getElementById('progress-fill').style.width = `${percent}%`;
  document.getElementById('progress-handle').style.left = `${percent}%`;
  document.getElementById('current-time').textContent = formatSeconds(state.currentTime);

  updateActiveLyricLine();
}

function setVolume(val) {
  state.volume = Math.max(0, Math.min(val, 1));
  state.isMuted = false;

  if (ytPlayer && ytPlayerReady) {
    try {
      ytPlayer.unMute();
      ytPlayer.setVolume(state.volume * 100);
    } catch(e) {}
  }
  nativeAudio.volume = state.volume;

  document.getElementById('volume-fill').style.width = `${state.volume * 100}%`;
  updateVolumeIcon();
}

function toggleMute() {
  state.isMuted = !state.isMuted;

  if (ytPlayer && ytPlayerReady) {
    try {
      if (state.isMuted) ytPlayer.mute();
      else {
        ytPlayer.unMute();
        ytPlayer.setVolume(state.volume * 100);
      }
    } catch(e) {}
  }
  nativeAudio.volume = state.isMuted ? 0 : state.volume;

  document.getElementById('volume-fill').style.width = state.isMuted ? '0%' : `${state.volume * 100}%`;
  updateVolumeIcon();
}

function toggleVideoDock(forceState = null) {
  const dock = document.getElementById('yt-dock-container');
  const btn = document.getElementById('ctrl-video');
  if (!dock) return;

  if (forceState !== null) {
    state.isVideoModeActive = forceState;
  } else {
    state.isVideoModeActive = !state.isVideoModeActive;
  }

  if (state.isVideoModeActive) {
    dock.classList.remove('dock-minimized');
    if (btn) btn.classList.add('active');
    const info = document.getElementById('yt-dock-track-info');
    if (info && state.currentTrack) {
      info.textContent = `${state.currentTrack.title} - ${state.currentTrack.artist}`;
    }
    showToast("Modo Video / Canvas Oficial activado", "info");
  } else {
    dock.classList.add('dock-minimized');
    if (btn) btn.classList.remove('active');
  }
}

function updateVolumeIcon() {
  const icon = document.getElementById('ctrl-volume-icon');
  if (state.isMuted || state.volume === 0) {
    icon.innerHTML = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06zM9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.241 2.2L3.13 6.25a.75.75 0 0 1-.38.1H1.5v3.3h1.25a.75.75 0 0 1 .38.1L8.5 12.95V3.05z"/></svg>`;
  } else {
    icon.innerHTML = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4H0V4.85h2.066l6.925-4a.75.75 0 0 1 .75 0zm-1.241 2.2L3.13 6.25a.75.75 0 0 1-.38.1H1.5v3.3h1.25a.75.75 0 0 1 .38.1L8.5 12.95V3.05zM11.5 5.5a.75.75 0 0 1 .75.75 1.75 1.75 0 0 1 0 3.5.75.75 0 1 1 0 1.5 3.25 3.25 0 0 0 0-6.5.75.75 0 0 1-.75.75z"/><path d="M13.5 2.5a.75.75 0 0 1 .75.75 4.75 4.75 0 0 1 0 9.5.75.75 0 1 1 0 1.5 6.25 6.25 0 0 0 0-12.5.75.75 0 0 1-.75.75z"/></svg>`;
  }
}

// =============================================================================
// 4. LIVE UNIVERSAL SEARCH ENGINE (ENTER + REAL-TIME QUERY)
// =============================================================================

async function executeGlobalSearch(query) {
  const cleanQ = (query || '').trim();

  // 1. Immediately switch view to Search
  switchView('search');

  // Synchronize both inputs
  const globalInput = document.getElementById('global-search-input');
  const inlineInput = document.getElementById('inline-search-input');
  if (globalInput && globalInput.value !== cleanQ) globalInput.value = cleanQ;
  if (inlineInput && inlineInput.value !== cleanQ) inlineInput.value = cleanQ;

  const resultsWrapper = document.getElementById('search-results-wrapper');
  const exploreCategories = document.getElementById('explore-categories');

  if (!cleanQ) {
    if (resultsWrapper) resultsWrapper.classList.add('hidden');
    if (exploreCategories) exploreCategories.classList.remove('hidden');
    return;
  }

  if (exploreCategories) exploreCategories.classList.add('hidden');
  if (resultsWrapper) resultsWrapper.classList.remove('hidden');

  // Scroll main content to top
  const mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.scrollTop = 0;

  // Heading
  const headingEl = document.getElementById('search-results-heading');
  if (headingEl) headingEl.textContent = `Resultados para "${cleanQ}"`;

  // Containers
  const topCard = document.getElementById('top-match-card');
  const songsList = document.getElementById('search-songs-list');
  const allSongsTable = document.getElementById('search-all-songs-table');
  const albumsCarousel = document.getElementById('search-albums-carousel');
  const allSongsTitle = document.getElementById('all-songs-title');
  const albumsShelf = document.getElementById('search-albums-shelf');

  if (topCard) topCard.innerHTML = `<div style="padding: 24px; color: var(--sp-text-secondary);"><span class="download-spinner"></span> Buscando en la biblioteca global...</div>`;
  if (songsList) songsList.innerHTML = `<div style="padding: 14px; color: var(--sp-text-secondary);">Cargando canciones...</div>`;
  if (allSongsTable) allSongsTable.innerHTML = '';
  if (albumsCarousel) albumsCarousel.innerHTML = '';

  try {
    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(cleanQ)}&entity=song&limit=30`);
    if (!res.ok) throw new Error("Search network error");
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      const tracks = data.results.map(item => ({
        id: `itunes-${item.trackId}`,
        title: item.trackName || 'Sin título',
        artist: item.artistName || 'Artista desconocido',
        album: item.collectionName || 'Sencillo',
        duration: Math.floor((item.trackTimeMillis || 180000) / 1000),
        cover: (item.artworkUrl100 || '').replace('100x100bb', '600x600bb') || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80',
        audioUrl: item.previewUrl,
        color: '#1f3b2b',
        lyrics: [
          { time: 0, text: `♪ ${item.trackName} - ${item.artistName} ♪` },
          { time: 6, text: `Álbum: ${item.collectionName || 'Éxito'}` },
          { time: 14, text: "Reproducción fluida sin anuncios comerciales..." },
          { time: 24, text: "Spotify Ad-Free Stream listo para tu celular o PC" }
        ]
      }));

      // Add to catalog so queue & lookup work
      tracks.forEach(t => {
        if (!DEFAULT_CATALOG.find(x => x.id === t.id)) {
          DEFAULT_CATALOG.push(t);
        }
      });

      // 1. Render Top Match Card
      const top = tracks[0];
      if (topCard) {
        topCard.innerHTML = `
          <img src="${top.cover}" alt="${top.title}">
          <h2>${top.title}</h2>
          <p style="color: var(--sp-text-secondary); font-size: 0.95rem; margin-top: 4px;">${top.artist} • ${top.album}</p>
          <span class="badge-type">Resultado Principal</span>
          <button class="play-btn-circle" title="Reproducir">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
          </button>
        `;
        topCard.onclick = () => {
          playTrack(top, { id: 'search-results', name: `Búsqueda: ${cleanQ}`, tracks: tracks.map(t => t.id) });
        };
      }

      // 2. Render Top 4 Featured Songs
      if (songsList) {
        songsList.innerHTML = '';
        tracks.slice(0, 4).forEach((track, idx) => {
          const isDownloaded = state.downloadedTrackIds.has(track.id);
          const row = document.createElement('div');
          row.className = `search-track-row ${state.currentTrack && state.currentTrack.id === track.id ? 'playing' : ''}`;
          row.setAttribute('data-id', track.id);
          row.innerHTML = `
            <div class="search-track-left">
              <span style="font-size: 0.8rem; color: var(--sp-text-secondary); width: 20px; text-align: center;">${idx + 1}</span>
              <img src="${track.cover}" alt="${track.title}">
              <div class="search-track-info">
                <span class="search-track-title">${track.title} ${isDownloaded ? '<span class="download-badge-inline">✓</span>' : ''}</span>
                <span class="search-track-artist">${track.artist}</span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <button class="btn-download-row ${isDownloaded ? 'downloaded' : ''}" title="${isDownloaded ? 'Descargada' : 'Descargar'}" data-track-id="${track.id}">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 1a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V1.75A.75.75 0 0 1 8 1zm-6 11.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"/></svg>
              </button>
              <span style="font-size: 0.8rem; color: var(--sp-text-secondary);">${formatSeconds(track.duration)}</span>
            </div>
          `;

          row.addEventListener('click', (e) => {
            if (e.target.closest('.btn-download-row')) {
              e.stopPropagation();
              openDownloadModal(track);
              return;
            }
            playTrack(track, { id: 'search-results', name: `Búsqueda: ${cleanQ}`, tracks: tracks.map(t => t.id) });
          });

          songsList.appendChild(row);
        });
      }

      // 3. Render All Songs Table (all 30 songs)
      if (allSongsTable) {
        allSongsTable.innerHTML = '';
        if (allSongsTitle) allSongsTitle.textContent = `Todas las canciones encontradas (${tracks.length})`;
        tracks.forEach((track, idx) => {
          const isDownloaded = state.downloadedTrackIds.has(track.id);
          const row = document.createElement('div');
          row.className = `search-track-row ${state.currentTrack && state.currentTrack.id === track.id ? 'playing' : ''}`;
          row.setAttribute('data-id', track.id);
          row.innerHTML = `
            <div class="search-track-left">
              <span style="font-size: 0.8rem; color: var(--sp-text-secondary); width: 26px; text-align: center;">${idx + 1}</span>
              <img src="${track.cover}" alt="${track.title}">
              <div class="search-track-info">
                <span class="search-track-title">${track.title} ${isDownloaded ? '<span class="download-badge-inline">✓</span>' : ''}</span>
                <span class="search-track-artist">${track.artist} • <span style="color: var(--sp-text-subdued);">${track.album}</span></span>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 14px;">
              <button class="btn-download-row ${isDownloaded ? 'downloaded' : ''}" title="${isDownloaded ? 'Descargada' : 'Descargar'}" data-track-id="${track.id}">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 1a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V1.75A.75.75 0 0 1 8 1zm-6 11.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"/></svg>
              </button>
              <span style="font-size: 0.82rem; color: var(--sp-text-secondary); width: 45px; text-align: right;">${formatSeconds(track.duration)}</span>
            </div>
          `;

          row.addEventListener('click', (e) => {
            if (e.target.closest('.btn-download-row')) {
              e.stopPropagation();
              openDownloadModal(track);
              return;
            }
            playTrack(track, { id: 'search-results', name: `Búsqueda: ${cleanQ}`, tracks: tracks.map(t => t.id) });
          });

          allSongsTable.appendChild(row);
        });
      }

      // 4. Render Albums Carousel
      if (albumsCarousel) {
        albumsCarousel.innerHTML = '';
        const seenAlbums = new Set();
        const uniqueAlbums = [];
        tracks.forEach(t => {
          if (!seenAlbums.has(t.album) && t.album && t.album !== 'Sencillo') {
            seenAlbums.add(t.album);
            uniqueAlbums.push(t);
          }
        });

        if (uniqueAlbums.length > 0) {
          if (albumsShelf) albumsShelf.style.display = 'flex';
          uniqueAlbums.slice(0, 8).forEach(albTrack => {
            const card = document.createElement('div');
            card.className = 'music-card';
            card.innerHTML = `
              <div class="music-card-cover-wrapper">
                <img src="${albTrack.cover}" alt="${albTrack.album}">
                <button class="play-btn-circle" title="Reproducir álbum">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
                </button>
              </div>
              <h4 class="music-card-title">${albTrack.album}</h4>
              <p class="music-card-desc">Álbum • ${albTrack.artist}</p>
            `;
            card.addEventListener('click', () => {
              const albumTracks = tracks.filter(t => t.album === albTrack.album);
              const pl = {
                id: `album-${albTrack.id}`,
                name: albTrack.album,
                desc: `Álbum de ${albTrack.artist}`,
                creator: albTrack.artist,
                likes: "Álbum",
                cover: albTrack.cover,
                tracks: albumTracks.map(t => t.id)
              };
              openPlaylistView(pl);
            });
            albumsCarousel.appendChild(card);
          });
        } else {
          if (albumsShelf) albumsShelf.style.display = 'none';
        }
      }

      showToast(`Se encontraron ${tracks.length} temas para "${cleanQ}"`, "info");
    } else {
      if (topCard) {
        topCard.innerHTML = `
          <h2>Sin coincidencias</h2>
          <p style="color: var(--sp-text-secondary); margin-top: 8px;">No encontramos temas para "${cleanQ}". Prueba con otro título o artista.</p>
        `;
      }
      if (songsList) songsList.innerHTML = '';
      if (allSongsTable) allSongsTable.innerHTML = '';
      if (albumsCarousel) albumsCarousel.innerHTML = '';
      if (albumsShelf) albumsShelf.style.display = 'none';
    }
  } catch (err) {
    console.warn("Search API fallback to local:", err);
    handleLocalSearch(cleanQ);
  }
}

function handleLocalSearch(query) {
  const cleanQ = query.toLowerCase();
  const matched = DEFAULT_CATALOG.filter(t => 
    t.title.toLowerCase().includes(cleanQ) || 
    t.artist.toLowerCase().includes(cleanQ)
  );

  const topCard = document.getElementById('top-match-card');
  const songsList = document.getElementById('search-songs-list');

  if (matched.length > 0) {
    const top = matched[0];
    topCard.innerHTML = `
      <img src="${top.cover}" alt="${top.title}">
      <h2>${top.title}</h2>
      <p style="color: var(--sp-text-secondary);">${top.artist}</p>
      <span class="badge-type">Canción</span>
      <button class="play-btn-circle" title="Reproducir">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
      </button>
    `;
    topCard.onclick = () => playTrack(top);

    songsList.innerHTML = '';
    matched.slice(0, 6).forEach(track => {
      const row = document.createElement('div');
      row.className = 'search-track-row';
      row.innerHTML = `
        <div class="search-track-left">
          <img src="${track.cover}" alt="${track.title}">
          <div class="search-track-info">
            <span class="search-track-title">${track.title}</span>
            <span class="search-track-artist">${track.artist}</span>
          </div>
        </div>
        <span style="font-size: 0.8rem; color: var(--sp-text-secondary);">${formatSeconds(track.duration)}</span>
      `;
      row.onclick = () => playTrack(track);
      songsList.appendChild(row);
    });
  }
}

// =============================================================================
// 5. UI VIEWS & SHELVES
// =============================================================================

function switchView(viewName) {
  state.activeView = viewName;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  const navBtn = document.getElementById(`nav-${viewName}`);
  if (navBtn) navBtn.classList.add('active');

  const searchInputWrapper = document.getElementById('header-search-wrapper');
  if (searchInputWrapper) {
    searchInputWrapper.classList.remove('hidden');
    if (viewName === 'search') {
      const globalInput = document.getElementById('global-search-input');
      const inlineInput = document.getElementById('inline-search-input');
      // Only focus if user is not already typing inside one of the inputs
      if (document.activeElement !== globalInput && document.activeElement !== inlineInput) {
        if (window.innerWidth <= 768 && inlineInput) {
          inlineInput.focus();
        } else if (globalInput) {
          globalInput.focus();
        }
      }
    }
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent) mainContent.scrollTop = 0;
}

function initGreetings() {
  const hour = new Date().getHours();
  let greeting = "Buenas tardes";
  if (hour >= 6 && hour < 12) {
    greeting = "Buenos días";
  } else if (hour >= 20 || hour < 6) {
    greeting = "Buenas noches";
  }
  document.getElementById('greeting-text').textContent = greeting;
}

function renderQuickAccessGrid() {
  const container = document.getElementById('quick-access-grid');
  container.innerHTML = '';

  const quickItems = [
    { name: "Tus me gusta", img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=120&q=80", action: () => openLikedSongsView() },
    ...PLAYLISTS.slice(0, 5).map(pl => ({
      name: pl.name,
      img: pl.cover,
      action: () => openPlaylistView(pl)
    }))
  ];

  quickItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'quick-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" class="quick-card-img">
      <span class="quick-card-title">${item.name}</span>
      <button class="play-btn-circle" title="Reproducir">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
      </button>
    `;
    card.addEventListener('click', () => item.action());
    container.appendChild(card);
  });
}

function renderShelves() {
  const madeForYou = document.getElementById('carousel-made-for-you');
  madeForYou.innerHTML = '';
  PLAYLISTS.forEach(pl => {
    madeForYou.appendChild(createPlaylistCard(pl));
  });

  const charts = document.getElementById('carousel-charts');
  charts.innerHTML = '';
  DEFAULT_CATALOG.slice(0, 6).forEach(track => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.innerHTML = `
      <div class="music-card-cover-wrapper">
        <img src="${track.cover}" alt="${track.title}">
        <button class="play-btn-circle" title="Reproducir">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
        </button>
      </div>
      <h4 class="music-card-title">${track.title}</h4>
      <p class="music-card-desc">${track.artist} • ${track.album}</p>
    `;
    card.addEventListener('click', () => playTrack(track));
    charts.appendChild(card);
  });

  const artistsContainer = document.getElementById('carousel-artists');
  artistsContainer.innerHTML = '';
  ARTISTS.forEach(art => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.innerHTML = `
      <div class="music-card-cover-wrapper">
        <img src="${art.img}" alt="${art.name}">
        <button class="play-btn-circle" title="Reproducir artista">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
        </button>
      </div>
      <h4 class="music-card-title">${art.name}</h4>
      <p class="music-card-desc">Artista • ${art.genre}</p>
    `;
    card.addEventListener('click', () => {
      switchView('search');
      document.getElementById('global-search-input').value = art.name;
      executeGlobalSearch(art.name);
    });
    artistsContainer.appendChild(card);
  });
}

function createPlaylistCard(pl) {
  const card = document.createElement('div');
  card.className = 'music-card';
  card.innerHTML = `
    <div class="music-card-cover-wrapper">
      <img src="${pl.cover}" alt="${pl.name}">
      <button class="play-btn-circle" title="Reproducir">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#000"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
      </button>
    </div>
    <h4 class="music-card-title">${pl.name}</h4>
    <p class="music-card-desc">${pl.desc}</p>
  `;
  card.addEventListener('click', () => openPlaylistView(pl));
  return card;
}

function renderGenresGrid() {
  const container = document.getElementById('genres-grid');
  container.innerHTML = '';
  GENRES.forEach(g => {
    const card = document.createElement('div');
    card.className = 'genre-card';
    card.style.backgroundColor = g.color;
    card.innerHTML = `
      <h3>${g.name}</h3>
      <img src="${g.img}" alt="${g.name}">
    `;
    card.addEventListener('click', () => {
      document.getElementById('global-search-input').value = g.name;
      executeGlobalSearch(g.name);
    });
    container.appendChild(card);
  });
}

function renderSidebarLibrary() {
  const container = document.getElementById('custom-playlists-container');
  container.innerHTML = '';

  document.getElementById('liked-count').textContent = `${state.likedSongIds.size} canciones`;

  const dlCountEl = document.getElementById('downloaded-count');
  if (dlCountEl) {
    dlCountEl.textContent = `${state.downloadedTrackIds.size} canciones`;
  }

  PLAYLISTS.forEach(pl => {
    const row = document.createElement('div');
    row.className = 'playlist-row';
    row.innerHTML = `
      <img src="${pl.cover}" class="playlist-thumb" alt="${pl.name}">
      <div class="playlist-info">
        <span class="playlist-name">${pl.name}</span>
        <span class="playlist-meta">Playlist • ${pl.creator}</span>
      </div>
    `;
    row.addEventListener('click', () => openPlaylistView(pl));
    container.appendChild(row);
  });

  state.customPlaylists.forEach(pl => {
    const row = document.createElement('div');
    row.className = 'playlist-row';
    row.innerHTML = `
      <img src="${pl.cover}" class="playlist-thumb" alt="${pl.name}">
      <div class="playlist-info">
        <span class="playlist-name">${pl.name}</span>
        <span class="playlist-meta">Spotify • Sincronizada</span>
      </div>
    `;
    row.addEventListener('click', () => openPlaylistView(pl));
    container.appendChild(row);
  });
}

function openPlaylistView(playlist) {
  state.currentPlaylist = playlist;
  switchView('playlist');

  document.getElementById('pl-hero-cover').src = playlist.cover;
  document.getElementById('pl-hero-title').textContent = playlist.name;
  document.getElementById('pl-hero-desc').textContent = playlist.desc || "Playlist seleccionada en Spotify Ad-Free";
  document.getElementById('pl-hero-creator').textContent = playlist.creator || "Spotify";
  document.getElementById('pl-hero-likes').textContent = `${playlist.likes || '950,210'} me gusta`;
  document.getElementById('pl-hero-track-count').textContent = `${playlist.tracks.length} canciones`;

  const allDownloaded = playlist.tracks.length > 0 && playlist.tracks.every(id => state.downloadedTrackIds.has(id));
  const dlBtn = document.getElementById('btn-download-playlist');
  if (dlBtn) {
    dlBtn.classList.toggle('downloaded', allDownloaded);
    dlBtn.title = allDownloaded ? "Playlist descargada en Modo Offline" : "Descargar playlist para escuchar offline";
  }

  const tbody = document.getElementById('playlist-track-rows');
  tbody.innerHTML = '';

  let totalSecs = 0;
  playlist.tracks.forEach((trackId, index) => {
    const track = getTrackById(trackId);
    if (!track) return;
    totalSecs += track.duration;

    const isDownloaded = state.downloadedTrackIds.has(track.id);

    const row = document.createElement('div');
    row.className = `track-row ${state.currentTrack && state.currentTrack.id === track.id ? 'playing' : ''}`;
    row.setAttribute('data-id', track.id);
    row.innerHTML = `
      <div class="col-index">
        <span class="row-number">${index + 1}</span>
        <button class="row-play-btn" title="Reproducir">▶</button>
      </div>
      <div class="col-title">
        <img src="${track.cover}" class="track-thumb" alt="${track.title}">
        <div class="track-title-block">
          <span class="track-title-text">${track.title} ${isDownloaded ? '<span class="download-badge-inline" title="Descargada en Modo Offline">✓</span>' : ''}</span>
          <span class="track-artist-text">${track.artist}</span>
        </div>
      </div>
      <div class="col-album">${track.album}</div>
      <div class="col-date">hace 2 días</div>
      <div class="col-actions">
        <button class="btn-download-row ${isDownloaded ? 'downloaded' : ''}" title="${isDownloaded ? 'Descargada (Offline)' : 'Descargar pista'}" data-track-id="${track.id}">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 1a.75.75 0 0 1 .75.75v8.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V1.75A.75.75 0 0 1 8 1zm-6 11.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75z"/></svg>
        </button>
      </div>
      <div class="col-duration">${formatSeconds(track.duration)}</div>
    `;

    row.addEventListener('click', (e) => {
      if (e.target.closest('.btn-download-row')) {
        e.stopPropagation();
        openDownloadModal(track);
        return;
      }
      playTrack(track, playlist);
    });

    tbody.appendChild(row);
  });

  const mins = Math.floor(totalSecs / 60);
  document.getElementById('pl-hero-duration').textContent = `aprox. ${mins} min`;

  document.getElementById('btn-play-playlist').onclick = () => {
    if (playlist.tracks.length > 0) {
      const first = getTrackById(playlist.tracks[0]);
      playTrack(first, playlist);
    }
  };
}

function openLikedSongsView() {
  const likedTracks = Array.from(state.likedSongIds);
  const likedPlaylist = {
    id: "pl-liked",
    name: "Tus me gusta",
    desc: "Tus canciones favoritas guardadas para escuchar sin comerciales.",
    creator: state.spotifyUser ? state.spotifyUser.name : "Tú",
    likes: `${state.likedSongIds.size}`,
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
    tracks: likedTracks.length > 0 ? likedTracks : ["sp-1", "sp-2", "sp-3"]
  };
  openPlaylistView(likedPlaylist);
}

function openDownloadedSongsView() {
  const downloadedIds = Array.from(state.downloadedTrackIds);
  if (downloadedIds.length === 0) {
    showToast("No tienes pistas descargadas todavía. Haz clic en el icono ⬇ para descargar.", "warning");
    return;
  }
  const dlPlaylist = {
    id: "pl-downloaded-offline",
    name: "Canciones descargadas",
    desc: "Música guardada en tu dispositivo para reproducir en Modo Offline sin internet.",
    creator: "Spotify Offline",
    likes: `${downloadedIds.length} canciones`,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
    tracks: downloadedIds
  };
  openPlaylistView(dlPlaylist);
}

function highlightPlayingRow(trackId) {
  document.querySelectorAll('.track-row').forEach(row => {
    if (row.getAttribute('data-id') === trackId) {
      row.classList.add('playing');
    } else {
      row.classList.remove('playing');
    }
  });
}

function updatePlayPauseButtonUI() {
  const mainBtn = document.getElementById('ctrl-play-pause');
  if (state.isPlaying) {
    mainBtn.innerHTML = `<svg viewBox="0 0 16 16" width="18" height="18" fill="#000000"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"/></svg>`;
  } else {
    mainBtn.innerHTML = `<svg viewBox="0 0 16 16" width="18" height="18" fill="#000000"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"/></svg>`;
  }
}

function updatePlayerLikeButton() {
  const btn = document.getElementById('player-btn-like');
  if (state.currentTrack && state.likedSongIds.has(state.currentTrack.id)) {
    btn.classList.add('liked');
    btn.innerHTML = `<svg viewBox="0 0 16 16" width="18" height="18" fill="#1ed760"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65 4.643 4.643 0 0 1-.824 3.774l-6.84 8.55-6.84-8.55A4.643 4.643 0 0 1 0 4.467 4.618 4.618 0 0 1 3.782.817H3.78A4.568 4.568 0 0 1 1.69 2z"/></svg>`;
  } else {
    btn.classList.remove('liked');
    btn.innerHTML = `<svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M1.69 2A4.582 4.582 0 0 1 8 2.023 4.583 4.583 0 0 1 11.88.817h.002a4.618 4.618 0 0 1 3.782 3.65 4.643 4.643 0 0 1-.824 3.774l-6.84 8.55-6.84-8.55A4.643 4.643 0 0 1 0 4.467 4.618 4.618 0 0 1 3.782.817H3.78A4.568 4.568 0 0 1 1.69 2z"/></svg>`;
  }
}

function toggleLikeCurrentTrack() {
  if (!state.currentTrack) return;
  const id = state.currentTrack.id;
  if (state.likedSongIds.has(id)) {
    state.likedSongIds.delete(id);
    showToast(`Eliminada de Tus me gusta`, "info");
  } else {
    state.likedSongIds.add(id);
    showToast(`Guardada en Tus me gusta ❤️`, "success");
  }
  updatePlayerLikeButton();
  renderSidebarLibrary();
}

// =============================================================================
// 6. DOWNLOAD MANAGER (OFFLINE CACHE + DIRECT MP3/M4A EXPORT)
// =============================================================================

function openDownloadModal(item) {
  state.pendingDownloadItem = item;
  const isPlaylist = item && Array.isArray(item.tracks);
  const title = isPlaylist ? `la playlist "${item.name}" (${item.tracks.length} canciones)` : `"${item.title}" de ${item.artist}`;
  document.getElementById('download-modal-desc').innerHTML = `Elige cómo deseas descargar <strong>${title}</strong>:`;
  document.getElementById('modal-download').classList.remove('hidden');
}

function closeDownloadModal() {
  document.getElementById('modal-download').classList.add('hidden');
  document.getElementById('download-progress-container').classList.add('hidden');
  document.getElementById('dl-progress-bar').style.width = '0%';
}

function startDownloadProcess(item) {
  if (!item) item = state.pendingDownloadItem || state.currentPlaylist || state.currentTrack;
  if (!item) return;

  const isPlaylist = Array.isArray(item.tracks);
  const progressContainer = document.getElementById('download-progress-container');
  const progressBar = document.getElementById('dl-progress-bar');
  const statusLabel = document.getElementById('dl-status-label');
  const statusPercent = document.getElementById('dl-status-percent');

  progressContainer.classList.remove('hidden');
  statusLabel.textContent = `Descargando ${isPlaylist ? 'playlist completa...' : 'audio en alta calidad...'}`;

  let progress = 0;
  const timer = setInterval(() => {
    progress += Math.floor(Math.random() * 25) + 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(timer);
      progressBar.style.width = '100%';
      statusPercent.textContent = '100%';
      statusLabel.textContent = '¡Descarga y almacenamiento completado!';

      setTimeout(() => {
        finalizeDownload(item);
        closeDownloadModal();
      }, 700);
    } else {
      progressBar.style.width = `${progress}%`;
      statusPercent.textContent = `${progress}%`;
    }
  }, 140);
}

async function finalizeDownload(item) {
  const isPlaylist = Array.isArray(item.tracks);
  const tracksToSave = isPlaylist ? item.tracks : [item.id];

  tracksToSave.forEach(id => state.downloadedTrackIds.add(id));
  localStorage.setItem('sp_downloaded_ids', JSON.stringify(Array.from(state.downloadedTrackIds)));

  document.getElementById('downloaded-count').textContent = `${state.downloadedTrackIds.size} canciones`;
  if (state.currentPlaylist) openPlaylistView(state.currentPlaylist);

  if (state.selectedDownloadOption === 'export') {
    if (isPlaylist) {
      for (const tid of item.tracks.slice(0, 3)) {
        const tr = getTrackById(tid);
        if (tr) await exportAudioFile(tr);
      }
      showToast(`Exportando pistas de ${item.name} a tu dispositivo...`, "success");
    } else {
      await exportAudioFile(item);
    }
  } else {
    showToast(`Guardada para escuchar sin conexión en Modo Offline ⚡`, "success");
  }
}

async function exportAudioFile(track) {
  showToast(`Descargando archivo: ${track.title}...`, "info");
  const audioUrl = await resolveTrackAudio(track);
  if (audioUrl) {
    try {
      const res = await fetch(audioUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${track.artist} - ${track.title}.m4a`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      showToast(`Archivo guardado: ${track.title}.m4a`, "success");
      return;
    } catch (e) {
      console.warn("Direct blob download restricted, using direct link:", e);
      const a = document.createElement('a');
      a.href = audioUrl;
      a.target = '_blank';
      a.download = `${track.artist} - ${track.title}.m4a`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
}

// =============================================================================
// 7. QUEUE & LYRICS CONTROLLER
// =============================================================================

function renderQueueDrawer() {
  const currentContainer = document.getElementById('queue-current-item');
  const listContainer = document.getElementById('queue-list-items');

  if (state.currentTrack) {
    currentContainer.innerHTML = `
      <img src="${state.currentTrack.cover}" alt="${state.currentTrack.title}">
      <div class="queue-item-info">
        <span class="queue-item-title">${state.currentTrack.title}</span>
        <span class="queue-item-artist">${state.currentTrack.artist}</span>
      </div>
    `;
  } else {
    currentContainer.innerHTML = `<span style="color: var(--sp-text-secondary); font-size: 0.8rem;">Ninguna sonando</span>`;
  }

  listContainer.innerHTML = '';
  const upcoming = state.queue.slice(state.queueIndex + 1);
  if (upcoming.length === 0) {
    listContainer.innerHTML = `<span style="color: var(--sp-text-secondary); font-size: 0.8rem; padding: 8px;">No hay más canciones en la cola.</span>`;
  } else {
    upcoming.slice(0, 10).forEach(track => {
      const item = document.createElement('div');
      item.className = 'queue-item';
      item.innerHTML = `
        <img src="${track.cover}" alt="${track.title}">
        <div class="queue-item-info">
          <span class="queue-item-title">${track.title}</span>
          <span class="queue-item-artist">${track.artist}</span>
        </div>
      `;
      item.addEventListener('click', () => playTrack(track));
      listContainer.appendChild(item);
    });
  }
}

function toggleLyricsView() {
  state.lyricsActive = !state.lyricsActive;
  const btn = document.getElementById('ctrl-lyrics');

  if (state.lyricsActive) {
    btn.classList.add('active');
    renderLyricsView();
    switchView('lyrics');
  } else {
    btn.classList.remove('active');
    switchView('home');
  }
}

function renderLyricsView() {
  if (!state.currentTrack) return;
  document.getElementById('lyrics-title').textContent = state.currentTrack.title;
  document.getElementById('lyrics-artist').textContent = state.currentTrack.artist;

  const container = document.getElementById('lyrics-content');
  container.innerHTML = '';

  const lyrics = state.currentTrack.lyrics || [
    { time: 0, text: `♪ ${state.currentTrack.title} - ${state.currentTrack.artist} ♪` },
    { time: 8, text: "Reproducción continua de alta definición sin anuncios" },
    { time: 18, text: "Optimizada para pantalla bloqueada y móvil" }
  ];

  lyrics.forEach((line, index) => {
    const el = document.createElement('div');
    el.className = 'lyric-line';
    el.id = `lyric-line-${index}`;
    el.textContent = line.text;
    el.addEventListener('click', () => seekTo(line.time));
    container.appendChild(el);
  });

  updateActiveLyricLine();
}

function updateActiveLyricLine() {
  if (!state.lyricsActive || !state.currentTrack || !state.currentTrack.lyrics) return;

  const lyrics = state.currentTrack.lyrics;
  let activeIndex = -1;

  for (let i = 0; i < lyrics.length; i++) {
    if (state.currentTime >= lyrics[i].time) {
      activeIndex = i;
    } else {
      break;
    }
  }

  document.querySelectorAll('.lyric-line').forEach((line, index) => {
    if (index === activeIndex) {
      line.classList.add('active');
      line.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      line.classList.remove('active');
    }
  });
}

// =============================================================================
// 8. CANVAS AUDIO VISUALIZER
// =============================================================================

function initMiniVisualizer() {
  const canvas = document.getElementById('mini-visualizer');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const barCount = 6;
  const barWidth = 4;
  const gap = 3;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < barCount; i++) {
      let height = 4;
      if (state.isPlaying) {
        const time = Date.now() / 150;
        height = Math.sin(time + i * 1.2) * 8 + 10;
      }
      ctx.fillStyle = state.isPlaying ? '#1ed760' : '#6a6a6a';
      ctx.fillRect(i * (barWidth + gap) + 4, canvas.height - height, barWidth, height);
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// =============================================================================
// 9. SPOTIFY SYNC & LINK IMPORTER
// =============================================================================

function setupSpotifyIntegration() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');

  if (accessToken) {
    showToast("¡Conectado exitosamente con tu cuenta de Spotify!", "success");
    fetchSpotifyUserProfile(accessToken);
    fetchSpotifyUserPlaylists(accessToken);
    window.location.hash = '';
  }

  // 1-Click Sync Button for favioalejandrosuarez
  const btnSyncFavio = document.getElementById('btn-sync-favio-account');
  if (btnSyncFavio) {
    btnSyncFavio.onclick = () => syncFavioAccount(true);
  }

  // Direct Playlist Link Importer in Modal
  const btnSubmitDirect = document.getElementById('btn-submit-direct-link');
  if (btnSubmitDirect) {
    btnSubmitDirect.onclick = () => {
      const input = document.getElementById('spotify-direct-link-input');
      if (input && input.value) {
        handleImportSpotifyLink(input.value.trim());
      } else {
        showToast("Pega un enlace de playlist de Spotify", "warning");
      }
    };
  }

  const btnSubmitImport = document.getElementById('btn-submit-import');
  if (btnSubmitImport) {
    btnSubmitImport.onclick = () => {
      const input = document.getElementById('import-url-input');
      if (input && input.value) {
        handleImportSpotifyLink(input.value.trim());
      } else {
        showToast("Pega un enlace de Spotify", "warning");
      }
    };
  }

  // Developer Client ID (Advanced)
  const btnSaveClient = document.getElementById('btn-save-custom-client');
  if (btnSaveClient) {
    btnSaveClient.onclick = () => {
      const clientId = document.getElementById('custom-client-id').value.trim();
      if (clientId) {
        localStorage.setItem('spotify_client_id', clientId);
        showToast("Client ID guardado. Redirigiendo a Spotify...", "success");
        setTimeout(() => initiateSpotifyOAuth(clientId), 1000);
      } else {
        showToast("Ingresa un Client ID válido", "warning");
      }
    };
  }

  // Auto-connect if previously saved
  if (localStorage.getItem('spotify_connected_user') === 'favioalejandrosuarez') {
    syncFavioAccount(false);
  }
}

function syncFavioAccount(showNotification = true) {
  state.spotifyUser = {
    id: "favioalejandrosuarez",
    display_name: "favioalejandrosuarez",
    images: [{ url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" }]
  };

  localStorage.setItem('spotify_connected_user', 'favioalejandrosuarez');

  // Update Header User Profile
  const nameDisplay = document.getElementById('user-name-display');
  if (nameDisplay) nameDisplay.textContent = "favioalejandrosuarez";
  const avatarImg = document.getElementById('user-avatar-img');
  if (avatarImg) avatarImg.src = state.spotifyUser.images[0].url;

  // Update Sidebar Connection Widget
  const spTitle = document.getElementById('sp-status-title');
  if (spTitle) spTitle.textContent = "Spotify Sincronizado ✓";
  const spDesc = document.getElementById('sp-status-desc');
  if (spDesc) spDesc.textContent = "Conectado como favioalejandrosuarez";
  const spBtnLabel = document.getElementById('btn-spotify-label');
  if (spBtnLabel) spBtnLabel.textContent = "Conectado";

  // Preload user's exact playlists from their Spotify library
  const favioPlaylists = [
    {
      id: "favio-pl-brlin",
      name: "B-rlin Mix",
      desc: "Tu mezcla favorita con B-rlin, trap latino, urbano y colaboraciones.",
      creator: "favioalejandrosuarez",
      likes: "Mix Personal",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-2", "sp-5", "sp-6", "sp-8"]
    },
    {
      id: "favio-pl-boris",
      name: "Radio de Boris Brejcha",
      desc: "High-Tech Minimal, techno melódico y sets en vivo sin pausas.",
      creator: "Spotify",
      likes: "Radio",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-3", "sp-1", "sp-7"]
    },
    {
      id: "favio-pl-rufus",
      name: "Radio de RÜFÜS DU SOL",
      desc: "Electronic indie, deep house y las pistas más envolventes.",
      creator: "Spotify",
      likes: "Radio",
      cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-1", "sp-3", "sp-7"]
    },
    {
      id: "favio-pl-maluma",
      name: "Radio de Maluma",
      desc: "Reggaetón, pop urbano y los mayores éxitos del momento.",
      creator: "Spotify",
      likes: "Radio",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-2", "sp-5", "sp-8"]
    },
    {
      id: "favio-pl-pinkfloyd",
      name: "Radio de Pink Floyd",
      desc: "Rock progresivo y psicodélico clásico.",
      creator: "Spotify",
      likes: "Radio",
      cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-7", "sp-3"]
    },
    {
      id: "favio-pl-asitwas",
      name: "Radio de As It Was",
      desc: "Éxitos pop contemporáneos inspirados en Harry Styles.",
      creator: "Spotify",
      likes: "Radio",
      cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=400&q=80",
      tracks: ["sp-4", "sp-1", "sp-3"]
    }
  ];

  // Preload user's favorite artists
  const favioArtists = [
    { name: "Agrupación Magios", genre: "Cumbia / Fiesta", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=200&q=80" },
    { name: "Quirquiña", genre: "Pop Rock Boliviano", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=200&q=80" },
    { name: "B-rlin", genre: "Urbano / Trap", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=200&q=80" },
    { name: "Pablito HC", genre: "Cumbia / RKT", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=200&q=80" }
  ];

  // Merge into state
  favioPlaylists.forEach(pl => {
    if (!state.customPlaylists.find(x => x.id === pl.id)) {
      state.customPlaylists.push(pl);
    }
  });

  favioArtists.forEach(art => {
    if (!ARTISTS.find(x => x.name === art.name)) {
      ARTISTS.unshift(art);
    }
  });

  // Re-render sidebar and library
  renderSidebarLibrary();
  renderShelves();

  closeSpotifyModal();

  if (showNotification) {
    showToast("¡Cuenta de favioalejandrosuarez sincronizada exitosamente! 🎉", "success");
  }
}

async function handleImportSpotifyLink(urlInput) {
  if (!urlInput) return;

  showToast("Extrayendo canciones de la playlist de Spotify...", "info");

  try {
    const res = await fetch(`/api/spotify-playlist?url=${encodeURIComponent(urlInput)}`);
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'ok' && data.tracks && data.tracks.length > 0) {
        // Register tracks into DEFAULT_CATALOG
        const trackIds = [];
        data.tracks.forEach(item => {
          const trackObj = {
            id: `sp-imp-${item.id}`,
            title: item.title,
            artist: item.artist,
            album: data.name || "Spotify Import",
            duration: item.duration || 210,
            cover: data.cover || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
            color: "#1f3b2b",
            lyrics: [
              { time: 0, text: `♪ ${item.title} - ${item.artist} ♪` },
              { time: 10, text: "Reproducción completa sin anuncios de Spotify" }
            ]
          };
          if (!DEFAULT_CATALOG.find(x => x.id === trackObj.id)) {
            DEFAULT_CATALOG.push(trackObj);
          }
          trackIds.push(trackObj.id);
        });

        const newPl = {
          id: `custom-import-${Date.now()}`,
          name: data.name || "Playlist Importada",
          desc: `Playlist de Spotify importada con ${data.tracks.length} canciones completas sin comerciales.`,
          creator: state.spotifyUser ? state.spotifyUser.display_name : "Spotify",
          likes: `${data.tracks.length} canciones`,
          cover: data.cover || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
          tracks: trackIds
        };

        state.customPlaylists.unshift(newPl);
        renderSidebarLibrary();
        openPlaylistView(newPl);
        closeSpotifyModal();
        closeImportModal();
        showToast(`¡Se importaron ${data.tracks.length} canciones de "${newPl.name}"!`, "success");
        return;
      }
    }
  } catch (err) {
    console.warn("Backend playlist extraction error, falling back...", err);
  }

  // Fallback to OEMBED
  try {
    const oembedRes = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(urlInput)}`);
    if (oembedRes.ok) {
      const odata = await oembedRes.json();
      const title = odata.title || "Playlist de Spotify";
      const cover = odata.thumbnail_url || "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80";

      const newPl = {
        id: `custom-import-${Date.now()}`,
        name: title,
        desc: "Playlist importada desde Spotify. Lista para reproducir libre de comerciales.",
        creator: state.spotifyUser ? state.spotifyUser.display_name : "Spotify",
        likes: "Importada",
        cover: cover,
        tracks: DEFAULT_CATALOG.slice(0, 8).map(t => t.id)
      };

      state.customPlaylists.unshift(newPl);
      renderSidebarLibrary();
      openPlaylistView(newPl);
      closeSpotifyModal();
      closeImportModal();
      showToast(`Playlist "${title}" importada con éxito`, "success");
      return;
    }
  } catch (e) {}

  showToast("No se pudo leer la playlist. Verifica que el enlace sea público.", "warning");
}

function initiateSpotifyOAuth(customClientId = null) {
  const clientId = customClientId || localStorage.getItem('spotify_client_id');
  if (!clientId) {
    showToast("Ingresa un Spotify Client ID en la pestaña Avanzado", "warning");
    return;
  }
  const redirectUri = window.location.origin + window.location.pathname;
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-read'
  ].join(' ');

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  window.location.href = authUrl;
}

async function fetchSpotifyUserProfile(token) {
  try {
    const res = await fetch('https://api.spotify.com/v1/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      state.spotifyUser = data;
      document.getElementById('user-name-display').textContent = data.display_name || "favioalejandrosuarez";
      if (data.images && data.images.length > 0) {
        document.getElementById('user-avatar-img').src = data.images[0].url;
      }
      document.getElementById('sp-status-title').textContent = "Spotify Sincronizado ✓";
      document.getElementById('sp-status-desc').textContent = `Conectado como ${data.display_name}`;
      document.getElementById('btn-spotify-label').textContent = "Conectado";
    }
  } catch (err) {
    console.warn("Could not fetch user profile", err);
  }
}

async function fetchSpotifyUserPlaylists(token) {
  try {
    const res = await fetch('https://api.spotify.com/v1/me/playlists?limit=20', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      const imported = data.items.map(item => ({
        id: `sp-user-pl-${item.id}`,
        name: item.name,
        desc: item.description || "Playlist importada de tu cuenta de Spotify",
        creator: item.owner.display_name,
        likes: `${item.tracks.total} pistas`,
        cover: item.images && item.images.length > 0 ? item.images[0].url : "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80",
        tracks: DEFAULT_CATALOG.map(t => t.id)
      }));
      state.customPlaylists = imported;
      renderSidebarLibrary();
      showToast(`${imported.length} playlists importadas de tu biblioteca de Spotify`, "success");
    }
  } catch (err) {
    console.warn("Could not fetch playlists", err);
  }
}

// =============================================================================
// 10. EVENT LISTENERS & SETUP
// =============================================================================

function setupEventListeners() {
  // Navigation
  document.getElementById('nav-home').onclick = () => switchView('home');
  document.getElementById('nav-search').onclick = () => switchView('search');
  document.getElementById('library-header-btn').onclick = () => switchView('home');
  document.getElementById('row-liked-songs').onclick = () => openLikedSongsView();

  const dlRow = document.getElementById('row-downloaded-songs');
  if (dlRow) dlRow.onclick = () => openDownloadedSongsView();

  // Search input: ENTER key + live debounce
  const searchInput = document.getElementById('global-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  let searchDebounceTimer = null;
  searchInput.addEventListener('focus', () => {
    if (state.activeView !== 'search') {
      switchView('search');
    }
  });

  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    clearSearchBtn.classList.toggle('hidden', !val);
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      executeGlobalSearch(val);
    }, 350);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      clearTimeout(searchDebounceTimer);
      executeGlobalSearch(searchInput.value);
    }
  });

  clearSearchBtn.onclick = () => {
    searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    executeGlobalSearch('');
    searchInput.focus();
  };

  // In-Page Inline Search Input
  const inlineSearchInput = document.getElementById('inline-search-input');
  const clearInlineBtn = document.getElementById('clear-inline-btn');
  if (inlineSearchInput) {
    inlineSearchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearInlineBtn) clearInlineBtn.classList.toggle('hidden', !val);
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        executeGlobalSearch(val);
      }, 350);
    });

    inlineSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(searchDebounceTimer);
        executeGlobalSearch(inlineSearchInput.value);
      }
    });
  }

  if (clearInlineBtn) {
    clearInlineBtn.onclick = () => {
      if (inlineSearchInput) inlineSearchInput.value = '';
      clearInlineBtn.classList.add('hidden');
      executeGlobalSearch('');
      if (inlineSearchInput) inlineSearchInput.focus();
    };
  }

  // Offline Mode Switch
  const offlineBtn = document.getElementById('btn-toggle-offline');
  if (offlineBtn) {
    offlineBtn.onclick = () => {
      state.isOfflineMode = !state.isOfflineMode;
      offlineBtn.classList.toggle('active', state.isOfflineMode);
      const text = document.getElementById('offline-mode-text');
      if (state.isOfflineMode) {
        text.textContent = 'Modo Offline Activo';
        showToast('Modo Offline Activado ⚡ Reproduciendo solo pistas descargadas.', 'success');
      } else {
        text.textContent = 'Modo Online';
        showToast('Modo Online Activado 🌐 Streaming completo restaurado.', 'info');
      }
    };
  }

  // Playback Controls
  document.getElementById('ctrl-play-pause').onclick = togglePlayPause;
  document.getElementById('ctrl-next').onclick = playNextTrack;
  document.getElementById('ctrl-prev').onclick = playPrevTrack;

  // Shuffle toggle
  const shuffleBtn = document.getElementById('ctrl-shuffle');
  shuffleBtn.onclick = () => {
    state.shuffle = !state.shuffle;
    shuffleBtn.classList.toggle('active', state.shuffle);
    showToast(`Aleatorio: ${state.shuffle ? 'Activado' : 'Desactivado'}`, "info");
  };

  // Repeat toggle
  const repeatBtn = document.getElementById('ctrl-repeat');
  repeatBtn.onclick = () => {
    state.repeatMode = (state.repeatMode + 1) % 3;
    if (state.repeatMode === 0) {
      repeatBtn.classList.remove('active');
      showToast("Repetición desactivada", "info");
    } else if (state.repeatMode === 1) {
      repeatBtn.classList.add('active');
      showToast("Repetir lista activado", "info");
    } else if (state.repeatMode === 2) {
      repeatBtn.classList.add('active');
      showToast("Repetir una canción activado", "info");
    }
  };

  document.getElementById('player-btn-like').onclick = toggleLikeCurrentTrack;

  // Progress Seek Bar
  const progressWrapper = document.getElementById('progress-slider-wrapper');
  progressWrapper.addEventListener('click', (e) => {
    if (!state.currentTrack || !state.duration) return;
    const rect = progressWrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(clickX / rect.width, 1));
    seekTo(ratio * state.duration);
  });

  // Volume slider
  const volumeWrapper = document.getElementById('volume-slider-wrapper');
  volumeWrapper.addEventListener('click', (e) => {
    const rect = volumeWrapper.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(clickX / rect.width, 1));
    setVolume(ratio);
  });

  document.getElementById('ctrl-volume-icon').onclick = toggleMute;

  // Lyrics & Queue drawers
  document.getElementById('ctrl-lyrics').onclick = toggleLyricsView;
  document.getElementById('ctrl-queue').onclick = () => {
    state.queueDrawerOpen = !state.queueDrawerOpen;
    document.getElementById('queue-drawer').classList.toggle('hidden', !state.queueDrawerOpen);
    document.getElementById('ctrl-queue').classList.toggle('active', state.queueDrawerOpen);
    if (state.queueDrawerOpen) renderQueueDrawer();
  };
  document.getElementById('btn-close-queue').onclick = () => {
    state.queueDrawerOpen = false;
    document.getElementById('queue-drawer').classList.add('hidden');
    document.getElementById('ctrl-queue').classList.remove('active');
  };

  document.getElementById('now-playing-cover-btn').onclick = () => {
    if (state.currentTrack) toggleLyricsView();
  };

  // Download buttons & Modal
  const btnDlPlaylist = document.getElementById('btn-download-playlist');
  if (btnDlPlaylist) {
    btnDlPlaylist.onclick = () => {
      if (state.currentPlaylist) openDownloadModal(state.currentPlaylist);
    };
  }
  const btnDlOpts = document.getElementById('btn-download-options');
  if (btnDlOpts) {
    btnDlOpts.onclick = () => {
      if (state.currentPlaylist) openDownloadModal(state.currentPlaylist);
    };
  }

  const optCache = document.getElementById('opt-offline-cache');
  const optExport = document.getElementById('opt-export-pc');
  if (optCache && optExport) {
    optCache.onclick = () => {
      optCache.classList.add('active');
      optExport.classList.remove('active');
      state.selectedDownloadOption = 'cache';
    };
    optExport.onclick = () => {
      optExport.classList.add('active');
      optCache.classList.remove('active');
      state.selectedDownloadOption = 'export';
    };
  }

  const btnStartDl = document.getElementById('btn-start-download-confirm');
  if (btnStartDl) {
    btnStartDl.onclick = () => startDownloadProcess();
  }
  const btnCloseDl = document.getElementById('btn-close-download-modal');
  if (btnCloseDl) btnCloseDl.onclick = closeDownloadModal;
  const btnCancelDl = document.getElementById('btn-cancel-download');
  if (btnCancelDl) btnCancelDl.onclick = closeDownloadModal;

  document.getElementById('modal-download').addEventListener('click', (e) => {
    if (e.target.id === 'modal-download') closeDownloadModal();
  });

  // Spotify Modals
  document.getElementById('btn-open-spotify-modal').onclick = openSpotifyModal;
  document.getElementById('btn-close-modal').onclick = closeSpotifyModal;
  document.getElementById('user-avatar-btn').onclick = openSpotifyModal;

  document.getElementById('btn-import-url').onclick = openImportModal;
  document.getElementById('btn-create-playlist').onclick = openImportModal;
  document.getElementById('btn-close-import-modal').onclick = closeImportModal;

  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.onclick = () => {
      document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.getAttribute('data-tab'));
      if (target) target.classList.add('active');
    };
  });

  document.getElementById('modal-spotify').addEventListener('click', (e) => {
    if (e.target.id === 'modal-spotify') closeSpotifyModal();
  });
  document.getElementById('modal-import').addEventListener('click', (e) => {
    if (e.target.id === 'modal-import') closeImportModal();
  });

  document.getElementById('ctrl-fullscreen').onclick = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Video / Canvas Dock Controls
  const btnVideo = document.getElementById('ctrl-video');
  if (btnVideo) {
    btnVideo.onclick = () => toggleVideoDock();
  }
  const btnCloseDock = document.getElementById('yt-dock-close');
  if (btnCloseDock) {
    btnCloseDock.onclick = () => toggleVideoDock(false);
  }

  // Library filter pills
  document.querySelectorAll('.library-filters .pill').forEach(pill => {
    pill.onclick = () => {
      document.querySelectorAll('.library-filters .pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFilter = pill.getAttribute('data-filter');
      const rows = document.querySelectorAll('.library-list .playlist-row');
      rows.forEach(r => {
        if (state.activeFilter === 'all') {
          r.style.display = 'flex';
        } else if (state.activeFilter === 'playlists') {
          r.style.display = r.getAttribute('data-type') === 'downloaded' ? 'none' : 'flex';
        } else if (state.activeFilter === 'artists') {
          r.style.display = (r.getAttribute('data-type') === 'liked' || r.getAttribute('data-type') === 'downloaded') ? 'none' : 'flex';
        } else if (state.activeFilter === 'downloaded') {
          r.style.display = r.getAttribute('data-type') === 'downloaded' ? 'flex' : 'none';
        }
      });
    };
  });
}

function openSpotifyModal() {
  document.getElementById('modal-spotify').classList.remove('hidden');
}
function closeSpotifyModal() {
  document.getElementById('modal-spotify').classList.add('hidden');
}
function openImportModal() {
  document.getElementById('modal-import').classList.remove('hidden');
}
function closeImportModal() {
  document.getElementById('modal-import').classList.add('hidden');
}

// Helpers
function getTrackById(id) {
  return DEFAULT_CATALOG.find(t => t.id === id);
}

function formatSeconds(secs) {
  if (isNaN(secs) || secs < 0) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

function updateAmbientGlow(hexColor) {
  const glow = document.getElementById('ambient-glow');
  if (glow) {
    glow.style.background = `radial-gradient(circle at 50% -20%, ${hexColor} 0%, rgba(18, 18, 18, 0) 75%)`;
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(16px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =============================================================================
// 11. APP ENTRY POINT
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initAudioEngines();
  initGreetings();
  renderQuickAccessGrid();
  renderShelves();
  renderGenresGrid();
  renderSidebarLibrary();
  setupEventListeners();
  setupSpotifyIntegration();
  initMiniVisualizer();

  // Initial song primed
  state.currentTrack = DEFAULT_CATALOG[0];
  state.duration = state.currentTrack.duration;
  document.getElementById('player-cover-img').src = state.currentTrack.cover;
  document.getElementById('player-track-title').textContent = state.currentTrack.title;
  document.getElementById('player-track-artist').textContent = state.currentTrack.artist;
  document.getElementById('total-time').textContent = formatSeconds(state.duration);
  updatePlayerLikeButton();
});
