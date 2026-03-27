/* ═══════════════════════════════════════════════════
   shared.js — Shared с Хората
   Utilities: Analytics · Language · Videos
   ═══════════════════════════════════════════════════

   HOW VIDEOS WORK
   ───────────────
   • On Cloudflare (or any http/https server): always
     fetches the latest videos.json automatically.
     Just upload a new videos.json → site updates. ✅

   • Opening locally (file://): fetch is blocked by
     browsers, so falls back to the VIDEOS_DATA array
     below. Keep this in sync when testing locally.

   TO ADD A NEW EPISODE:
   1. Use admin.html → export videos.json
   2. Upload videos.json to GitHub
   3. Done — site updates automatically on Cloudflare
   ═══════════════════════════════════════════════════ */


// ─────────────────────────────────────────────────
// GOOGLE ANALYTICS — GA4
//
// SETUP (do this once):
// 1. Replace the GA_ID value below with your real
//    Measurement ID (format: G-XXXXXXXXXX)
// 2. The gtag snippet is loaded via shared.js so
//    you only need to set it in one place.
//
// HOW TO FIND YOUR ID:
//   analytics.google.com → Admin → Data Streams
//   → your stream → Measurement ID
// ─────────────────────────────────────────────────
const GA_ID = 'G-VH3927PPW3'; // ← replace with your real Measurement ID

(function initAnalytics() {
  if (!GA_ID) return; // skip if not configured

  // Inject the gtag.js script into <head>
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.insertBefore(script, document.head.firstChild);

  // Set up the gtag function before the script finishes loading
  // (this is the standard Google-recommended pattern)
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, {
    // Sends a pageview automatically on every page load ✅
    send_page_view: true,
  });
})();

function trackEvent(action, category, label, value) {
  if (typeof gtag === 'undefined') return;
  gtag('event', action, { event_category: category, event_label: label, value });
}


// ─────────────────────────────────────────────────
// LANGUAGE SYSTEM
// Persists the chosen language in localStorage so
// it stays the same across pages.
// ─────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'bg';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';

  // Update toggle button states
  document.querySelectorAll('.lang-toggle button').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && lang === 'bg') || (i === 1 && lang === 'en'));
  });

  // Swap all [data-en] elements
  document.querySelectorAll('[data-en]').forEach(el => {
    if (lang === 'en') {
      if (!el.dataset.bgText) el.dataset.bgText = el.innerHTML;
      el.innerHTML = el.dataset.en;
    } else {
      if (el.dataset.bgText) el.innerHTML = el.dataset.bgText;
    }
  });

  // Swap placeholders
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    el.placeholder = lang === 'en'
      ? el.dataset.enPlaceholder
      : (el.dataset.bgPlaceholder || el.placeholder);
  });

  // Re-render any dynamic content that uses the language
  if (typeof renderVideos === 'function') renderVideos();
}

function initLang() {
  setLang(currentLang);
}


// ─────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────
function toggleMenu() {
  const links = document.getElementById('nav-links');
  const isOpen = links.dataset.open === 'true';
  if (isOpen) {
    links.removeAttribute('style');
    // Restore link colours back to whatever the nav state dictates
    links.querySelectorAll('a').forEach(a => a.style.removeProperty('color'));
    links.dataset.open = 'false';
  } else {
    Object.assign(links.style, {
      display: 'flex', flexDirection: 'column', position: 'fixed',
      top: '72px', left: '0', right: '0', zIndex: '99',
      background: 'var(--cream)', padding: '24px 40px 40px',
      borderBottom: '1px solid var(--border)', gap: '20px'
    });
    // Force dark text on all links — nav may still be in
    // transparent/white-text state if user hasn't scrolled yet
    links.querySelectorAll('a').forEach(a => {
      a.style.color = 'var(--ink-soft)';
    });
    links.dataset.open = 'true';
  }
}


// ─────────────────────────────────────────────────
// VIDEO DATA — local fallback for file:// testing
// This is ONLY used when you open the files locally.
// On Cloudflare, videos.json is always fetched fresh.
//
// Keep this in sync with your videos.json when
// testing locally — or just use a local server:
//   npx serve .    (requires Node.js)
// ─────────────────────────────────────────────────
const VIDEOS_FALLBACK = [
  {
    id: "ep52", youtubeId: "YOUTUBE_VIDEO_ID_52", episode: 52,
    title: "Как да изградим живот, който си заслужава да се живее",
    titleEn: "How to Build a Life Worth Living",
    guest: "Иван Георгиев", guestEn: "Ivan Georgiev",
    category: "Бизнес", categoryEn: "Business",
    duration: "1ч 32мин", durationEn: "1h 32min",
    description: "Честен и открит разговор за успеха, провала и за това, което наистина има значение.",
    descriptionEn: "An honest and vulnerable conversation about success, failure, and what really matters.",
    featured: true, date: "2025-03-10"
  },
  {
    id: "ep51", youtubeId: "YOUTUBE_VIDEO_ID_51", episode: 51,
    title: "Изкуството да започнеш отначало", titleEn: "The Art of Starting Over",
    guest: "Мария Петрова", guestEn: "Maria Petrova",
    category: "Личностно развитие", categoryEn: "Personal Growth",
    duration: "1ч 24мин", durationEn: "1h 24min",
    description: "Прераждане, устойчивост и смелост да опиташ отново след провал.",
    descriptionEn: "Reinvention, resilience and the courage to try again after failure.",
    featured: false, date: "2025-03-03"
  },
  {
    id: "ep50", youtubeId: "YOUTUBE_VIDEO_ID_50", episode: 50,
    title: "Пари, Мислене и Свобода", titleEn: "Money, Mindset & Freedom",
    guest: "Димитър Илиев", guestEn: "Dimitar Iliev",
    category: "Финанси", categoryEn: "Finance",
    duration: "1ч 08мин", durationEn: "1h 08min",
    description: "Психологията зад богатството и истинското щастие.",
    descriptionEn: "The psychology behind wealth and true happiness.",
    featured: false, date: "2025-02-24"
  },
  {
    id: "ep49", youtubeId: "YOUTUBE_VIDEO_ID_49", episode: 49,
    title: "Намиране на смисъл след 40", titleEn: "Finding Purpose After 40",
    guest: "Елена Стоянова", guestEn: "Elena Stoyanova",
    category: "Личностно развитие", categoryEn: "Personal Growth",
    duration: "58мин", durationEn: "58min",
    description: "Животът няма срок на годност за прераждане.",
    descriptionEn: "Life doesn't have an expiry date for reinvention.",
    featured: false, date: "2025-02-17"
  },
  {
    id: "ep48", youtubeId: "YOUTUBE_VIDEO_ID_48", episode: 48,
    title: "Максимална ефективност и психично здраве", titleEn: "Peak Performance & Mental Health",
    guest: "Георги Колев", guestEn: "Georgi Kolev",
    category: "Здраве", categoryEn: "Health",
    duration: "1ч 15мин", durationEn: "1h 15min",
    description: "Какво елитните спортисти могат да ни научат за устойчивостта.",
    descriptionEn: "What elite athletes can teach us about resilience.",
    featured: false, date: "2025-02-10"
  },
  {
    id: "ep47", youtubeId: "YOUTUBE_VIDEO_ID_47", episode: 47,
    title: "Създаване от болка", titleEn: "Creating From Pain",
    guest: "Нина Андреева", guestEn: "Nina Andreeva",
    category: "Изкуство", categoryEn: "Arts & Culture",
    duration: "1ч 02мин", durationEn: "1h 02min",
    description: "Как уязвимостта се превръща в най-мощното творческо гориво.",
    descriptionEn: "How vulnerability becomes the most powerful creative fuel.",
    featured: false, date: "2025-02-03"
  }
];

// Cache so we only fetch once per page load
let _videosCache = null;

async function loadVideos() {
  if (_videosCache) return _videosCache;

  const onServer = location.protocol === 'http:' || location.protocol === 'https:';

  if (onServer) {
    try {
      // Add timestamp to bust Cloudflare's cache so new videos.json
      // always loads immediately after you upload it
      const res = await fetch('videos.json?t=' + Date.now());
      if (res.ok) {
        _videosCache = await res.json();
        return _videosCache;
      }
    } catch (e) {
      console.warn('videos.json fetch failed, using fallback data', e);
    }
  }

  // Local file:// — use embedded fallback
  _videosCache = VIDEOS_FALLBACK;
  return _videosCache;
}


// ─────────────────────────────────────────────────
// YOUTUBE HELPERS
// ─────────────────────────────────────────────────
function ytThumb(videoId, quality = 'hqdefault') {
  if (!videoId || videoId.startsWith('YOUTUBE_')) {
    return 'https://placehold.co/600x340/2a2522/FAF8F3?text=Shared+с+Хората';
  }
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

function ytUrl(videoId) {
  if (!videoId || videoId.startsWith('YOUTUBE_')) {
    return 'https://www.youtube.com/@SharedSHorata';
  }
  return `https://www.youtube.com/watch?v=${videoId}`;
}


// ─────────────────────────────────────────────────
// INIT — runs on every page automatically
// Works whether scripts load sync or deferred
// (e.g. Cloudflare Rocket Loader)
// ─────────────────────────────────────────────────
(function() {
  function _init() { initLang(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _init);
  } else {
    _init(); // DOMContentLoaded already fired — run immediately
  }
})();
