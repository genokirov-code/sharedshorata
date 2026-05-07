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
    id: "ep25", youtubeId: "_fYizt8-HYU", episode: 25,
    title: "Самотата когато си на 30: имаш всичко и пак ти липсва нещо",
    titleEn: "Loneliness in Your 30s: You Have Everything and Still Something Is Missing",
    guest: "Добри", guestEn: "Dobri",
    category: "Личностно развитие", categoryEn: "Personal Growth",
    duration: "52мин", durationEn: "52min",
    description: "Имаш работа, приятели, може би дори семейство — и все пак нощем ти е самотно. Добри разказва как е да си на 30 с всичко наред отвън и с огромна празнота отвътре.",
    descriptionEn: "You have a job, friends, maybe even a family — and still feel lonely at night. Dobri shares what it's like to be in your 30s with everything looking fine on the outside, and a huge void on the inside.",
    featured: true, date: "2026-05-07"
  },
  {
    id: "ep24", youtubeId: "t-2BonX9_OU", episode: 24,
    title: "Как се гледа на кафе? Баба Донка за символите, ритуалите и истината в Shared с хората #24",
    titleEn: "Coffee Fortune Telling: Symbols, Rituals, and Truth with Grandma Donka | Shared with People #24",
    guest: "Баба Донка", guestEn: "Grandma Donka",
    category: "Мистика", categoryEn: "Mystic",
    duration: "28мин", durationEn: "28min",
    description: "В този епизод се потапяме в света на тасеографията (гледане на кафе) заедно с баба Донка.",
    descriptionEn: "Join us for a captivating journey into the aromatic world of tasseography with the venerable Grandma Donka.",
    featured: false, date: "2026-03-20"
  },
  {
    id: "ep23", youtubeId: "SXJbmpg1rCs", episode: 23,
    title: "Изкуственият интелект ще ти вземе ли работата? Ето какво казва експертът Мира в Shared с хората #23",
    titleEn: "The Future of Work: Expert Mira discusses AI job replacement in Shared with People #23",
    guest: "Мирена Митева - Мира", guestEn: "Mirena Miteva - Mira",
    category: "Бизнес", categoryEn: "Business",
    duration: "53мин", durationEn: "53min",
    description: "Изкуственият интелект вече не е бъдеще – той е тук и променя правилата на играта.",
    descriptionEn: "AI isn't the future — it's the present, and it's rewriting the rulebook.",
    featured: false, date: "2025-06-01"
  },
  {
    id: "ep22", youtubeId: "jzyI81vqA5g", episode: 22,
    title: "Апитерапия и пчелна къща за здраве, красота и дълголетие с Боряна Първанова в Shared с хората #22",
    titleEn: "Unlocking Health, Beauty, and Longevity through Apitherapy with Boryana Parvanova | Shared with People #22",
    guest: "Боряна Първанова", guestEn: "Boryana Parvanova",
    category: "Уелнес", categoryEn: "Wellness",
    duration: "1ч 17мин", durationEn: "1h 17min",
    description: "Потопете се в удивителния свят на апитерапията и разкрийте как пчелните съкровища могат да бъдат ключът към вашето здраве и красота.",
    descriptionEn: "Explore the transformative power of apitherapy and see how bee-derived products can be the key to longevity and wellness.",
    featured: false, date: "2025-03-25"
  },
  {
    id: "ep21", youtubeId: "gQHrobLY6t8", episode: 21,
    title: "Българската нумерология е ключът към тайните на живота и нашата същност Пламен в Shared с хората #21",
    titleEn: "Bulgarian Numerology: The key to life's secrets and our true essence | Plamen in 'Shared with People' #21",
    guest: "Пламен Ангелов", guestEn: "Plamen Angelov - Plabo",
    category: "Мистика", categoryEn: "Mystic",
    duration: "43мин", durationEn: "43min",
    description: "В този епизод на подкаста ви срещам с Пламен Ангелов, посветен в тайните на българската нумерология.",
    descriptionEn: "Can numbers really change your life? Plamen Angelov talks about the hidden power of Bulgarian numerology.",
    featured: false, date: "2025-02-20"
  },
  {
    id: "ep19", youtubeId: "CUpMZPGXGc4", episode: 19,
    title: "Предсказания за бъдещето на човечеството, дигитализацията и AI - Силва Дончева в Shared с хората #19",
    titleEn: "Predictions for the Future of Humanity, Digitalization, and AI – Silva Doncheva on 'Shared with People' #19",
    guest: "Силва Дончева", guestEn: "Silva Doncheva",
    category: "Мистика", categoryEn: "Mystic",
    duration: "1ч 04мин", durationEn: "1h 04min",
    description: "Готови ли сте за пътешествие в бъдещето? Силва Дончева ни разкрива какво ни очаква.",
    descriptionEn: "Ever wonder what the future actually looks like? Silva Doncheva joins us to talk about the road ahead.",
    featured: false, date: "2024-09-17"
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
