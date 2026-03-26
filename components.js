/* ═══════════════════════════════════════════════════
   components.js — Shared с Хората
   Shared components: Footer · Shop Preview Section

   HOW TO EDIT:
   ─────────────
   • To change the FOOTER: edit FOOTER_HTML below
   • To change the SHOP CARDS: edit SHOP_PRODUCTS below
   • Changes apply to ALL pages automatically ✅

   Add <div id="shared-footer"></div> where you want
   the footer, and <div id="shared-shop"></div> where
   you want the shop preview section.
   ═══════════════════════════════════════════════════ */


// ─────────────────────────────────────────────────
// SHOP PRODUCTS
// Edit this list to update shop cards on ALL pages
// that have a shop preview section (index, about).
// For the full shop page (shop.html), edit it there.
// ─────────────────────────────────────────────────
const SHOP_PRODUCTS = [

  // ── Product 1 ──────────────────────────────────────
  {
    id: 'tshirt',
    image: 'images/white-t-shirt-mirching.png',
    badge:   'Топ продукт',   // shown on the card corner — set to null to hide
    badgeEn: 'Best Seller',
    cat:    'Облекло',
    catEn:  'Apparel',
    name:   'Тениска Shared Podcast',
    nameEn: 'Shared Podcast T-Shirt',
    desc:   'Премиум 100% органичен памук. Минималистично бродирано лого на гърдите. Налично в размери S–XXL.',
    descEn: 'Premium 100% organic cotton. Minimalist embroidered logo on chest. Available in sizes S–XXL.',
    price:  '€39',
    link:   'product.html?id=tshirt',
  },

  // ── Product 2 ──────────────────────────────────────
  {
    id: 'pens',
    image: 'images/pen-shared-s-horata.png',
    badge:   null,
    badgeEn: null,
    cat:    'Аксесоари',
    catEn:  'Accessories',
    name:   'Химикалка - Shared с хората',
    nameEn: 'Pen - Shared с хората',
    desc:   'Химикалката Shared е създадена за хората, които вярват, че най-добрите проекти се раждат в споделянето.',
    descEn: 'The Shared Pen isn\'t just a writing instrument — it\'s a statement of collaboration.',
    price:  '€6',
    link:   'product.html?id=pens',
  },

  // ── Product 3 ──────────────────────────────────────
  {
    id: 'cap',
    image: 'images/pink-cap-mirching.png',
    badge:   null,
    badgeEn: null,
    cat:    'Аксесоари',
    catEn:  'Accessories',
    name:   'Шапка Shared Podcast',
    nameEn: 'Shared Podcast Cap',
    desc:   'Класическа 6-панелна шапка. Принтирано лого отпред. Регулируема каишка. Един размер за всички.',
    descEn: 'Classic 6-panel structured cap. Printed logo on front. Adjustable strap. One size fits most.',
    price:  '€30',
    link:   'product.html?id=cap',
  },

  // ── Product 4 ──────────────────────────────────────
  {
    id: 'badge',
    image: 'images/badge-mirching.png',
    badge:   'Ново',
    badgeEn: 'New',
    cat:    'Аксесоари',
    catEn:  'Accessories',
    name:   'Значка Mirching',
    nameEn: 'Badge Mirching',
    desc:   'Значката Shared с хората е малкият детайл с голямо послание.',
    descEn: 'The Shared с хората pin is the subtle detail that speaks volumes.',
    price:  '€10',
    link:   'product.html?id=hoodie',
  },

  // ── Product 5 ──────────────────────────────────────
  {
    id: 'bundle-starter',
    image: 'images/starter-bundle-shared-s-horata.png',
    badge:   null,
    badgeEn: null,
    cat:    'Комплекти',
    catEn:  'Bundles',
    name:   'Starter Комплект (Отварачка + Химикалка)',
    nameEn: 'Starter Bundle (Opener + Pen)',
    desc:   'Вземи Shared s хората отварачка и химикалка заедно на специална цена.',
    descEn: 'Get the Shared с хората Opener and the pen together at a special bundle price.',
    price:  '€10',
    link:   'product.html?id=bundle-starter',
  },

  // ── Product 6 ──────────────────────────────────────
  {
    id: 'opener',
    image: 'images/opener-shared-s-horata.png',
    badge:   null,
    badgeEn: null,
    cat:    'Аксесоари',
    catEn:  'Accessories',
    name:   'Отварачка Shared с хората',
    nameEn: 'Shared с хората Opener',
    desc:   'Стилна и винаги под ръка, тя е ключът към моментите на релакс с екипа или приятелите след края на работния ден.',
    descEn: 'Sleek, and always ready for action, it\'s the key to those post-grind moments with the team.',
    price:  '€6',
    link:   'product.html?id=opener',
  },

];


// ─────────────────────────────────────────────────
// FOOTER HTML
// Edit this once — updates all pages instantly.
// ─────────────────────────────────────────────────
const FOOTER_HTML = `
<footer>
  <div class="container">
    <div class="footer-grid">

      <div class="footer-brand">
        <a href="index.html" class="footer-logo">Shared <span>с Хората</span></a>
        <p data-en="Real conversations with remarkable people.">Истински разговори със забележителни хора.</p>
      </div>

      <div class="footer-col">
        <h4 data-en="Podcast">Подкаст</h4>
        <ul>
          <li><a href="episodes.html" data-en="All Episodes">Всички Епизоди</a></li>
          <li><a href="about.html" data-en="About">За нас</a></li>
          <li><a href="https://www.youtube.com/@SharedSHorata" target="_blank">YouTube</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 data-en="Shop">Магазин</h4>
        <ul>
          <li><a href="shop.html" data-en="All Products">Всички продукти</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 data-en="Contact">Контакти</h4>
        <ul>
          <li><a href="mailto:sharedshorata@gmail.com">sharedshorata@gmail.com</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <p data-en="© 2026 Shared с Хората. All rights reserved.">© 2026 Shared с Хората. Всички права запазени.</p>
      <div class="footer-social">
        <a href="https://www.youtube.com/@SharedSHorata" target="_blank" title="YouTube">▶</a>
        <a href="https://open.spotify.com/show/5Ny8UTNXTDtNiDOfDbvIvE?si=8536fae1da0e4954" title="Spotify" target="_blank">🎵</a>
      </div>
    </div>

  </div>
</footer>`;


// ─────────────────────────────────────────────────
// FOOTER CSS
// Injected once into <head> — covers all pages.
// ─────────────────────────────────────────────────
const FOOTER_CSS = `
  footer { background: var(--ink); color: rgba(250,248,243,0.55); padding: 60px 0 32px; }
  .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 56px; }
  .footer-brand .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 900; letter-spacing: -0.02em; color: var(--cream); text-decoration: none; display: block; margin-bottom: 16px; }
  .footer-brand .footer-logo span { color: var(--gold); }
  .footer-brand p { font-size: 0.88rem; line-height: 1.7; max-width: 260px; }
  .footer-col h4 { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--cream); font-weight: 700; margin-bottom: 20px; }
  .footer-col ul { list-style: none; }
  .footer-col ul li { margin-bottom: 10px; }
  .footer-col ul a { text-decoration: none; font-size: 0.88rem; color: rgba(250,248,243,0.55); transition: color 0.2s; }
  .footer-col ul a:hover { color: var(--gold); }
  .footer-bottom { padding-top: 28px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-bottom p { font-size: 0.78rem; }
  .footer-social { display: flex; gap: 16px; }
  .footer-social a { width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.82rem; text-decoration: none; color: rgba(250,248,243,0.55); transition: all 0.2s; }
  .footer-social a:hover { border-color: var(--gold); color: var(--gold); }
  @media(max-width:1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
  @media(max-width:768px)  { .footer-grid { grid-template-columns: 1fr; } }
`;


// ─────────────────────────────────────────────────
// SHOP PREVIEW CSS
// Injected once — covers all pages with shop preview.
// ─────────────────────────────────────────────────
const SHOP_CSS = `
  .shared-shop-section { background: var(--cream); padding: 100px 0; }
  .shared-shop-section .shop-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 28px; }
  .shared-shop-section .product-card { background: var(--warm-white); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; }
  .shared-shop-section .product-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.09); }
  .shared-shop-section .product-img { aspect-ratio: 1/1; background: #F0EDE6; overflow: hidden; position: relative; }
  .shared-shop-section .product-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; display: block; }
  .shared-shop-section .product-card:hover .product-img img { transform: scale(1.04); }
  .shared-shop-section .product-badge { position: absolute; top: 12px; right: 12px; background: #C44B2B; color: white; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; }
  .shared-shop-section .product-body { padding: 22px; }
  .shared-shop-section .product-cat { font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-muted); font-weight: 600; margin-bottom: 8px; }
  .shared-shop-section .product-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.3; }
  .shared-shop-section .product-excerpt { font-size: 0.83rem; color: var(--ink-muted); line-height: 1.65; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .shared-shop-section .product-foot { display: flex; justify-content: space-between; align-items: center; }
  .shared-shop-section .product-price { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 900; color: var(--ink); }
  .shared-shop-section .btn-shop { background: var(--ink); color: var(--cream); text-decoration: none; padding: 9px 18px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 4px; transition: all 0.2s; }
  .shared-shop-section .btn-shop:hover { background: var(--gold); color: var(--ink); }
  .shared-shop-section .section-header-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 52px; flex-wrap: wrap; gap: 20px; }
  .shared-shop-section .section-label { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
  .shared-shop-section .section-label span { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); font-weight: 700; }
  .shared-shop-section .section-label-line { width: 32px; height: 2px; background: var(--gold); }
  .shared-shop-section .section-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem,3.5vw,2.8rem); font-weight: 900; letter-spacing: -0.02em; line-height: 1.1; color: var(--ink); }
  .shared-shop-section .btn-secondary-dark { display: inline-flex; align-items: center; gap: 10px; background: transparent; color: var(--ink); text-decoration: none; padding: 13px 28px; font-size: 0.88rem; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; border-radius: 4px; border: 2px solid var(--border); transition: all 0.25s; }
  .shared-shop-section .btn-secondary-dark:hover { border-color: var(--ink); transform: translateY(-2px); }
  @media(max-width:1024px) { .shared-shop-section .shop-grid { grid-template-columns: repeat(2,1fr); } }
  @media(max-width:768px)  { .shared-shop-section .shop-grid { grid-template-columns: 1fr; } }
`;


// ─────────────────────────────────────────────────
// RENDER FUNCTIONS
// Called automatically on DOMContentLoaded
// ─────────────────────────────────────────────────

function renderSharedFooter() {
  const el = document.getElementById('shared-footer');
  if (!el) return;
  el.innerHTML = FOOTER_HTML;
  // Re-apply language to footer links if lang is already set
  if (typeof currentLang !== 'undefined' && currentLang === 'en') {
    el.querySelectorAll('[data-en]').forEach(node => {
      if (!node.dataset.bgText) node.dataset.bgText = node.innerHTML;
      node.innerHTML = node.dataset.en;
    });
  }
}

function renderSharedShop() {
  const el = document.getElementById('shared-shop');
  if (!el) return;
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'bg';

  // ── How many products to show in the preview ──
  // Change this number to show more or fewer cards on index/about.
  // The full list is always on shop.html.
  const PREVIEW_COUNT = 3;
  const previewProducts = SHOP_PRODUCTS.slice(0, PREVIEW_COUNT);

  const cards = previewProducts.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.image}"
             onerror="this.src='https://placehold.co/500x500/E8E4DC/3a3530?text=${encodeURIComponent(lang === 'en' ? p.nameEn : p.name)}'"
             alt="${lang === 'en' ? p.nameEn : p.name}">
        ${p.badge ? `<div class="product-badge" data-en="${p.badgeEn || ''}">${lang === 'en' ? (p.badgeEn || p.badge) : p.badge}</div>` : ''}
      </div>
      <div class="product-body">
        <div class="product-cat"   data-en="${p.catEn}">${lang === 'en' ? p.catEn : p.cat}</div>
        <div class="product-name"  data-en="${p.nameEn}">${lang === 'en' ? p.nameEn : p.name}</div>
        <div class="product-excerpt" data-en="${p.descEn}">${lang === 'en' ? p.descEn : p.desc}</div>
        <div class="product-foot">
          <div class="product-price">${p.price}</div>
          <a href="${p.link}" class="btn-shop" data-en="Buy">
            ${lang === 'en' ? 'Buy' : 'Купи'}
          </a>
        </div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <section class="shared-shop-section">
      <div class="container">
        <div class="section-header-row">
          <div>
            <div class="section-label">
              <div class="section-label-line"></div>
              <span data-en="Merch &amp; More">Мърч и повече</span>
            </div>
            <h2 class="section-title" data-en="Shop">Магазин</h2>
          </div>
          <a href="shop.html" class="btn-secondary-dark" data-en="View All →">Виж всички →</a>
        </div>
        <div class="shop-grid">${cards}</div>
      </div>
    </section>`;
}

function injectCSS(id, css) {
  if (document.getElementById(id)) return; // already injected
  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

// ─────────────────────────────────────────────────
// INIT — runs on every page
// ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectCSS('shared-footer-css', FOOTER_CSS);
  injectCSS('shared-shop-css', SHOP_CSS);
  renderSharedFooter();
  renderSharedShop();
});
