/* ═══════════════════════════════════════════════
   shared.js — Shared с Хората
   Utilities: Language, Analytics, Video loader
   ═══════════════════════════════════════════════ */

// ─────────────────────────────────────────────
// GOOGLE ANALYTICS — Replace with your GA4 ID
// ─────────────────────────────────────────────
const GA_ID = 'G-XXXXXXXXXX'; // ← REPLACE with your real GA4 Measurement ID

function initAnalytics() {
  if (!GA_ID || GA_ID === 'G-XXXXXXXXXX') return; // skip if not configured
  const s1 = document.createElement('script');
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s1);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

// Track custom events (call from anywhere)
function trackEvent(action, category, label, value) {
  if (typeof gtag === 'undefined') return;
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
}

// ─────────────────────────────────────────────
// LANGUAGE SYSTEM
// ─────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'bg';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';

  document.querySelectorAll('.lang-toggle button').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && lang === 'bg') || (i === 1 && lang === 'en'));
  });

  document.querySelectorAll('[data-en]').forEach(el => {
    if (lang === 'en') {
      if (!el.dataset.bgText) el.dataset.bgText = el.innerHTML;
      el.innerHTML = el.dataset.en;
    } else {
      if (el.dataset.bgText) el.innerHTML = el.dataset.bgText;
    }
  });

  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    el.placeholder = lang === 'en' ? el.dataset.enPlaceholder : el.dataset.bgPlaceholder || el.placeholder;
  });

  // Re-render dynamic video cards if present
  if (typeof renderVideos === 'function') renderVideos();
  if (typeof renderShopCards === 'function') renderShopCards();
}

function initLang() {
  // Apply saved language on page load
  if (currentLang === 'en') setLang('en');
  else setLang('bg');
}

// ─────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.reveal').forEach(el => {
    // If already in viewport (e.g. page just loaded), show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
}

// Re-observe any newly added .reveal elements (called after dynamic injection)
function reObserveReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('visible');
    } else {
      observer.observe(el);
    }
  });
}

// ─────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────
function toggleMenu() {
  const links = document.getElementById('nav-links');
  const isOpen = links.dataset.open === 'true';
  if (isOpen) {
    links.removeAttribute('style');
    links.dataset.open = 'false';
  } else {
    Object.assign(links.style, {
      display: 'flex', flexDirection: 'column', position: 'fixed',
      top: '72px', left: '0', right: '0',
      background: 'var(--cream)', padding: '24px 40px 40px',
      borderBottom: '1px solid var(--border)', gap: '20px', zIndex: '99'
    });
    links.dataset.open = 'true';
  }
}

// ─────────────────────────────────────────────
// VIDEO DATA — embedded fallback so the site
// works when opened locally (file://) AND when
// hosted on a server (fetch overrides this).
//
// HOW TO ADD A NEW EPISODE WITHOUT THE ADMIN:
//   Add an object to VIDEOS_DATA below, then
//   re-upload shared.js. Or use admin.html +
//   download videos.json for server hosting.
// ─────────────────────────────────────────────
const VIDEOS_DATA = [
  {
    id: "ep52",
    youtubeId: "YOUTUBE_VIDEO_ID_52",
    episode: 52,
    title: "Как да изградим живот, който си заслужава да се живее",
    titleEn: "How to Build a Life Worth Living",
    guest: "Иван Георгиев",
    guestEn: "Ivan Georgiev",
    category: "Бизнес",
    categoryEn: "Business",
    duration: "1ч 32мин",
    durationEn: "1h 32min",
    description: "Честен и открит разговор за успеха, провала и за това, което наистина има значение.",
    descriptionEn: "An honest and vulnerable conversation about success, failure, and what really matters.",
    featured: true,
    date: "2025-03-10"
  },
  {
    id: "ep51",
    youtubeId: "YOUTUBE_VIDEO_ID_51",
    episode: 51,
    title: "Изкуството да започнеш отначало",
    titleEn: "The Art of Starting Over",
    guest: "Мария Петрова",
    guestEn: "Maria Petrova",
    category: "Личностно развитие",
    categoryEn: "Personal Growth",
    duration: "1ч 24мин",
    durationEn: "1h 24min",
    description: "Прераждане, устойчивост и смелост да опиташ отново след провал.",
    descriptionEn: "Reinvention, resilience and the courage to try again after failure.",
    featured: false,
    date: "2025-03-03"
  },
  {
    id: "ep50",
    youtubeId: "YOUTUBE_VIDEO_ID_50",
    episode: 50,
    title: "Пари, Мислене и Свобода",
    titleEn: "Money, Mindset & Freedom",
    guest: "Димитър Илиев",
    guestEn: "Dimitar Iliev",
    category: "Финанси",
    categoryEn: "Finance",
    duration: "1ч 08мин",
    durationEn: "1h 08min",
    description: "Психологията зад богатството и истинското щастие.",
    descriptionEn: "The psychology behind wealth and true happiness.",
    featured: false,
    date: "2025-02-24"
  },
  {
    id: "ep49",
    youtubeId: "YOUTUBE_VIDEO_ID_49",
    episode: 49,
    title: "Намиране на смисъл след 40",
    titleEn: "Finding Purpose After 40",
    guest: "Елена Стоянова",
    guestEn: "Elena Stoyanova",
    category: "Личностно развитие",
    categoryEn: "Personal Growth",
    duration: "58мин",
    durationEn: "58min",
    description: "Животът няма срок на годност за прераждане.",
    descriptionEn: "Life doesn't have an expiry date for reinvention.",
    featured: false,
    date: "2025-02-17"
  },
  {
    id: "ep48",
    youtubeId: "YOUTUBE_VIDEO_ID_48",
    episode: 48,
    title: "Максимална ефективност и психично здраве",
    titleEn: "Peak Performance & Mental Health",
    guest: "Георги Колев",
    guestEn: "Georgi Kolev",
    category: "Здраве",
    categoryEn: "Health",
    duration: "1ч 15мин",
    durationEn: "1h 15min",
    description: "Какво елитните спортисти могат да ни научат за устойчивостта.",
    descriptionEn: "What elite athletes can teach us about resilience.",
    featured: false,
    date: "2025-02-10"
  },
  {
    id: "ep47",
    youtubeId: "YOUTUBE_VIDEO_ID_47",
    episode: 47,
    title: "Създаване от болка",
    titleEn: "Creating From Pain",
    guest: "Нина Андреева",
    guestEn: "Nina Andreeva",
    category: "Изкуство",
    categoryEn: "Arts & Culture",
    duration: "1ч 02мин",
    durationEn: "1h 02min",
    description: "Как уязвимостта се превръща в най-мощното творческо гориво.",
    descriptionEn: "How vulnerability becomes the most powerful creative fuel.",
    featured: false,
    date: "2025-02-03"
  }
];

let _videosCache = null;

async function loadVideos() {
  if (_videosCache) return _videosCache;

  // Only try fetch when running on a real server (http/https).
  // On file:// (opening locally), skip straight to the embedded data.
  const isServer = location.protocol === 'http:' || location.protocol === 'https:';

  if (isServer) {
    try {
      const res = await fetch('videos.json?v=' + Date.now());
      if (res.ok) {
        _videosCache = await res.json();
        return _videosCache;
      }
    } catch (e) {
      // fetch failed — fall through to embedded data
    }
  }

  // Use embedded data (works locally and as server fallback)
  _videosCache = VIDEOS_DATA;
  return _videosCache;
}

// Build YouTube thumbnail URL from video ID
function ytThumb(videoId, quality = 'hqdefault') {
  if (!videoId || videoId.startsWith('YOUTUBE_')) {
    return `https://placehold.co/600x340/2a2522/FAF8F3?text=Shared+с+Хората`;
  }
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// Build YouTube watch URL
function ytUrl(videoId) {
  if (!videoId || videoId.startsWith('YOUTUBE_')) return 'https://www.youtube.com/@SharedSHorata';
  return `https://www.youtube.com/watch?v=${videoId}`;
}

// Category color map
const CAT_COLORS = {
  'Бизнес': '#2a2522', 'Business': '#2a2522',
  'Личностно развитие': '#3a3530', 'Personal Growth': '#3a3530',
  'Финанси': '#C8942A', 'Finance': '#C8942A',
  'Здраве': '#C44B2B', 'Health': '#C44B2B',
  'Изкуство': '#5A7060', 'Arts & Culture': '#5A7060',
};

// ─────────────────────────────────────────────
// INIT — called on DOMContentLoaded
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initAnalytics();
  initLang();
  initReveal();
});
