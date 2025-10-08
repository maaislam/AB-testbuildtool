import shared from '../shared/shared';

const { VARIATION } = shared;

const startV2Experiment = () => {
  if (VARIATION === '1') return;
  const ROOT_ID = 'waStickyBar';
  if (document.getElementById(ROOT_ID)) return; //guard

  //--- CDN URLs (pin versions for stability) ---
  const SPLIDE_CSS = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
  const SPLIDE_JS = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
  const AUTOSCROLL =
    'https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-auto-scroll@0.5.3/dist/js/splide-extension-auto-scroll.min.js';

  const items = [
    {
      text: "3x More Cash Than Junkyards – That's Our Promise",
      img: 'https://cdn-3.convertexperiments.com/uf/10021806/10025682/frame-35_68e65d3658aa1.png',
      alt: '3x More Cash',
      tag: 'small'
    },
    {
      text: "We've cleared nearly 44,000 tons of vehicles and paid out $23 MILLION",
      img: 'https://cdn-3.convertexperiments.com/uf/10021806/10025682/frame-5_68e65d5511981.png',
      alt: 'tons of vehicles',
      tag: 'big'
    }
  ];

  //--- Helpers to load CDN assets ---
  const loadCSS = (href) =>
    new Promise((resolve) => {
      if (document.querySelector(`link[href="${href}"]`)) return resolve();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => resolve();
      document.head.appendChild(link);
      //resolve anyway after a tick in case onload is blocked by CSP
      setTimeout(resolve, 500);
    });

  const loadJS = (src) =>
    new Promise((resolve, reject) => {
      if ([...document.scripts].some((s) => s.src === src)) return resolve();
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(s);
    });

  //--- Build sticky bar + Splide markup ---
  const infoElem = `
    <div class="info-bar">
        <div class="info-bar-inner">
        <div class="info-item">
            <span class="info-icon">
              <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025682/_68e65b48e07e9.png"/>
            </span>
            <span class="info-text">3x More Cash Than Junkyards – That’s Our Promise</span>
        </div>
        <div class="info-item">
            <span class="info-icon">
              <img src="https://cdn-3.convertexperiments.com/uf/10021806/10025682/pick-up-truck-orange-1_68e65b64548a6.png"/>
            </span>
            <span class="info-text">We’ve cleared nearly 44,000 tons of vehicles and paid out $23 MILLION</span>
        </div>
        </div>
    </div>
  
  `;
  const root = document.createElement('div');
  root.id = ROOT_ID;
  root.className = 'waSB';
  root.innerHTML = `
    <div id="waSB-splide" class="splide waSB__splide" aria-label="Benefits carousel">
      <div class="splide__track">
        <ul class="splide__list">
          ${items
            .map(
              (it) => `
            <li class="splide__slide waSB__slide splide__slide-${it.tag}">
              <img class="waSB__icon" src="${it.img}" alt="${it.alt}">
              <span class="waSB__text">${it.text}</span>
            </li>
          `
            )
            .join('')}
        </ul>
      </div>
    </div>
  `;
  document.querySelector('header').insertAdjacentHTML('afterend', infoElem);
  document.querySelector('header').insertAdjacentElement('afterend', root);

  //--- Ensure Splide + AutoScroll are available, then mount ---
  (async () => {
    try {
      await loadCSS(SPLIDE_CSS);
      if (!window.Splide) await loadJS(SPLIDE_JS);
      if (!window.splide || !window.splide.Extensions) await loadJS(AUTOSCROLL);

      //Instantiate continuous ticker
      const splide = new Splide('#waSB-splide', {
        type: 'loop',
        drag: false,
        arrows: false,
        pagination: false,
        gap: '1.25rem',
        autoWidth: true,
        perPage: 3,
        focus: 'center',
        //extra clones for seamless loop
        //make it feel like a constant rotating marquee
        autoScroll: {
          speed: 1.2, //tweak speed (px per frame-ish)
          pauseOnHover: true,
          pauseOnFocus: false
        }
      });

      //Mount with the AutoScroll extension from the CDN global
      splide.mount(window.splide ? window.splide.Extensions : {});
    } catch (e) {
      //If CDN blocked by CSP, silently fail without breaking the page
      console.warn('[waSB] Splide load failed:', e);
    }
  })();
};

export default startV2Experiment;
