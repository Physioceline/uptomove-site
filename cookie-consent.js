/* ============================================================
   UP TO MOVE — Gestion du consentement cookies (RGPD)
   ------------------------------------------------------------
   Le bandeau et la page "Politique de cookies" sont actifs, mais
   AUCUNE donnée n'est collectée pour le moment : ANALYTICS_ENABLED
   est à false ci-dessous, donc aucun script de suivi ne se charge,
   même si le visiteur clique sur "Accepter".

   Pour activer la collecte plus tard :
   1. Crée un compte Google Analytics 4 et récupère ton identifiant
      de mesure (format G-XXXXXXXXXX).
   2. Colle-le dans GA_MEASUREMENT_ID ci-dessous.
   3. Passe ANALYTICS_ENABLED à true.
   ============================================================ */
var ANALYTICS_ENABLED = false;
var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

(function () {
  var STORAGE_KEY = 'utm_cookie_consent';
  var CONSENT_VALIDITY_DAYS = 180;

  function getConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      var ageDays = (Date.now() - data.timestamp) / (1000 * 60 * 60 * 24);
      if (ageDays > CONSENT_VALIDITY_DAYS) return null;
      return data;
    } catch (e) { return null; }
  }

  function setConsent(analytics) {
    var data = { analytics: !!analytics, timestamp: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
    return data;
  }

  function loadAnalytics() {
    if (!ANALYTICS_ENABLED) return;
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;
    if (document.getElementById('ga4-script')) return;
    var s = document.createElement('script');
    s.id = 'ga4-script';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function applyConsent(data) {
    if (data && data.analytics) loadAnalytics();
  }

  function injectStyles() {
    if (document.getElementById('cc-styles')) return;
    var style = document.createElement('style');
    style.id = 'cc-styles';
    style.textContent = [
      '#cc-banner{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:#1E2952;color:#fff;padding:20px 24px;display:flex;align-items:center;gap:24px;flex-wrap:wrap;box-shadow:0 -8px 30px rgba(0,0,0,0.18);font-family:\'Nunito\',sans-serif;}',
      '#cc-banner p{margin:0;font-size:13.5px;line-height:1.6;color:rgba(255,255,255,0.85);flex:1;min-width:240px;}',
      '#cc-banner a{color:#FFDE59;text-decoration:underline;}',
      '#cc-banner .cc-actions{display:flex;gap:10px;flex-wrap:wrap;}',
      '#cc-banner button{font-family:\'Encode Sans Compressed\',sans-serif;font-weight:700;font-size:13px;padding:11px 20px;border-radius:100px;border:none;cursor:pointer;white-space:nowrap;}',
      '#cc-refuse{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.35) !important;}',
      '#cc-manage{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.35) !important;}',
      '#cc-accept{background:#FF914D;color:#fff;}',
      '#cc-modal-overlay{position:fixed;inset:0;background:rgba(30,41,82,0.55);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;}',
      '#cc-modal{background:#fff;border-radius:18px;max-width:480px;width:100%;padding:32px;font-family:\'Nunito\',sans-serif;color:#1E2952;max-height:86vh;overflow-y:auto;}',
      '#cc-modal h3{font-family:\'Encode Sans Compressed\',sans-serif;font-weight:800;font-size:19px;margin-bottom:16px;}',
      '#cc-modal p{font-size:13.5px;color:#4B5563;line-height:1.6;margin-bottom:18px;}',
      '.cc-row{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-top:1px solid #E8E6E0;}',
      '.cc-row-title{font-weight:700;font-size:14px;}',
      '.cc-row-desc{font-size:12.5px;color:#6B7280;margin-top:3px;}',
      '.cc-switch{position:relative;width:44px;height:24px;flex-shrink:0;}',
      '.cc-switch input{opacity:0;width:0;height:0;}',
      '.cc-switch .cc-slider{position:absolute;inset:0;background:#D1D5DB;border-radius:100px;transition:.2s;cursor:pointer;}',
      '.cc-switch .cc-slider::before{content:"";position:absolute;width:18px;height:18px;left:3px;top:3px;background:#fff;border-radius:50%;transition:.2s;}',
      '.cc-switch input:checked + .cc-slider{background:#2EC4B6;}',
      '.cc-switch input:checked + .cc-slider::before{transform:translateX(20px);}',
      '.cc-switch input:disabled + .cc-slider{opacity:0.6;cursor:not-allowed;}',
      '#cc-modal .cc-modal-actions{display:flex;gap:10px;margin-top:24px;flex-wrap:wrap;}',
      '#cc-modal .cc-modal-actions button{flex:1;font-family:\'Encode Sans Compressed\',sans-serif;font-weight:700;font-size:13px;padding:12px 18px;border-radius:100px;border:none;cursor:pointer;min-width:140px;}',
      '#cc-save{background:#FF914D;color:#fff;}',
      '#cc-close{background:#F7F6F2;color:#1E2952;}',
      '#cc-reopen{position:fixed;left:18px;bottom:18px;z-index:9998;background:#1E2952;color:#fff;border:none;border-radius:50%;width:44px;height:44px;font-size:19px;cursor:pointer;box-shadow:0 6px 18px rgba(30,41,82,0.3);display:flex;align-items:center;justify-content:center;}',
      '@media (max-width:600px){#cc-banner{flex-direction:column;align-items:stretch;}#cc-banner .cc-actions{justify-content:stretch;}#cc-banner button{flex:1;}}'
    ].join('');
    document.head.appendChild(style);
  }

  function buildBanner() {
    var el = document.createElement('div');
    el.id = 'cc-banner';
    el.innerHTML =
      '<p>Nous utilisons des cookies pour mesurer l\'audience du site et améliorer votre expérience. Vous pouvez accepter, refuser ou gérer vos préférences à tout moment. En savoir plus : <a href="politique-cookies.html">Politique de cookies</a>.</p>' +
      '<div class="cc-actions">' +
        '<button id="cc-refuse" type="button">Refuser</button>' +
        '<button id="cc-manage" type="button">Gérer</button>' +
        '<button id="cc-accept" type="button">Accepter</button>' +
      '</div>';
    document.body.appendChild(el);

    document.getElementById('cc-accept').addEventListener('click', function () {
      applyConsent(setConsent(true));
      closeBanner();
    });
    document.getElementById('cc-refuse').addEventListener('click', function () {
      setConsent(false);
      closeBanner();
    });
    document.getElementById('cc-manage').addEventListener('click', openModal);
  }

  function closeBanner() {
    var el = document.getElementById('cc-banner');
    if (el) el.remove();
    showReopenButton();
  }

  function openModal() {
    var current = getConsent() || { analytics: false };
    var overlay = document.createElement('div');
    overlay.id = 'cc-modal-overlay';
    overlay.innerHTML =
      '<div id="cc-modal">' +
        '<h3>Gérer mes préférences cookies</h3>' +
        '<p>UP TO MOVE utilise des cookies pour assurer le fonctionnement du site et, si vous l\'acceptez, mesurer son audience. Retrouvez le détail sur notre <a href="politique-cookies.html">politique de cookies</a>.</p>' +
        '<div class="cc-row">' +
          '<div><div class="cc-row-title">Cookies essentiels</div><div class="cc-row-desc">Nécessaires au fonctionnement du site. Toujours actifs.</div></div>' +
          '<label class="cc-switch"><input type="checkbox" checked disabled><span class="cc-slider"></span></label>' +
        '</div>' +
        '<div class="cc-row">' +
          '<div><div class="cc-row-title">Cookies de mesure d\'audience</div><div class="cc-row-desc">Google Analytics — nous aide à comprendre l\'usage du site.</div></div>' +
          '<label class="cc-switch"><input type="checkbox" id="cc-toggle-analytics"' + (current.analytics ? ' checked' : '') + '><span class="cc-slider"></span></label>' +
        '</div>' +
        '<div class="cc-modal-actions">' +
          '<button id="cc-close" type="button">Annuler</button>' +
          '<button id="cc-save" type="button">Enregistrer</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    document.getElementById('cc-close').addEventListener('click', function () {
      overlay.remove();
    });
    document.getElementById('cc-save').addEventListener('click', function () {
      var wantsAnalytics = document.getElementById('cc-toggle-analytics').checked;
      applyConsent(setConsent(wantsAnalytics));
      overlay.remove();
      closeBanner();
    });
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) overlay.remove();
    });
  }

  function showReopenButton() {
    if (document.getElementById('cc-reopen')) return;
    var btn = document.createElement('button');
    btn.id = 'cc-reopen';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Gérer les cookies');
    btn.title = 'Gérer les cookies';
    btn.textContent = '🍪';
    btn.addEventListener('click', openModal);
    document.body.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();
    var consent = getConsent();
    if (consent === null) {
      buildBanner();
    } else {
      applyConsent(consent);
      showReopenButton();
    }
  });
})();
