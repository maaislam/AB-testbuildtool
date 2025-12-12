/*eslint-disable no-use-before-define */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const FE = {
  mountSelector: '[data-react="vehicle-form"]', //change if you want to mount elsewhere
  rootClass: 'fe-vehicle-tabs',
  tabClass: 'fe-vehicle-tabs__tab',
  activeClass: 'is-active',
  tabs: [
    {
      key: 'make_model',
      label: 'MAKE & MODEL'
    },
    {
      key: 'vin',
      label: 'VIN'
    },
    {
      key: 'plate',
      label: 'PLATE'
    }
  ]
};

const DATA = [
  {
    key: 'truck',
    title: 'Free collection in </br>just 48 hours',
    body: 'From any residential or business premises'
  },
  {
    key: 'car',
    title: 'Any vehicle - any </br>condition',
    body: 'Including non-starters and crash damaged'
  },
  {
    key: 'dollar',
    title: 'Best Price Guaranteed',
    body: 'We compare prices from 120 junk yards, salvage yards, dealers'
  }
];

const isMobile = () => window.matchMedia('(max-width: 768px)').matches;

const renderTabs = () => {
  function build() {
    const mount = document.querySelector(FE.mountSelector);
    if (!mount) return;

    const root = document.createElement('div');
    root.className = FE.rootClass;
    root.setAttribute('role', 'tablist');

    //add multiple classes to root
    root.classList.add('rounded', 'max-w-[525px]', 'ms-auto', 'shadow-lg');

    root.innerHTML = FE.tabs
      .map(
        (tab, i) => `
          <button
            data-index="${i + 1}"
            type="button"
            class="${FE.tabClass} ${i === 0 ? FE.activeClass : ''}"
            role="tab"
            aria-selected="${i === 0}"
            tabindex="${i === 0 ? '0' : '-1'}"
            data-tab="${tab.key}"
          >
            ${tab.label}
          </button>
        `
      )
      .join('');

    mount.prepend(root);
    bind(root);
  }

  function setActive(root, activeBtn) {
    const tabs = root.querySelectorAll(`.${FE.tabClass}`);

    tabs.forEach((btn) => {
      const isActive = btn === activeBtn;
      btn.classList.toggle(FE.activeClass, isActive);
      btn.setAttribute('aria-selected', isActive);
      btn.tabIndex = isActive ? 0 : -1;
    });

    console.log('[Vehicle Tabs] active:', activeBtn.dataset.tab);
  }

  function bind(root) {
    root.addEventListener('click', (e) => {
      const btn = e.target.closest(`.${FE.tabClass}`);
      if (!btn) return;
      setActive(root, btn);
      const clickedDataIndex = btn.getAttribute('data-index');

      const controlBtns = document.querySelectorAll('header > button');
      controlBtns.forEach((controlBtn, indx) => {
        if (indx + 1 === Number(clickedDataIndex)) {
          controlBtn.click();
        }
      });
    });
  }
  //if alreeady exist don't build again
  if (document.querySelector(`.${FE.rootClass}`)) return;
  build();
};

function buildItem(item, isLast) {
  return `
      <div class="fe-info-item ${isLast ? 'fe-info-item--last' : ''}">
        <div class="fe-info-item__icon fe-info-item__icon--${item.key}"></div>
        <div class="fe-info-item__content">
          <div class="fe-info-item__title">${item.title}</div>
          <div class="fe-info-item__body">${item.body}</div>
        </div>
      </div>
    `;
}

function rendeerNewTickElem() {
  if (document.querySelector('.fe-info-bar')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'fe-info-bar';

  wrapper.innerHTML = DATA.map((item, i) => buildItem(item, i === DATA.length - 1)).join('');

  //adjust insertion point if needed
  const tickedElems = document.querySelectorAll('.ticked-list');

  tickedElems.forEach((el) => {
    const parentElem = el.closest('div');
    if (parentElem) {
      parentElem.classList.add('ticked-list-parent');
    }
  });

  const attachpoint = tickedElems[0].closest('div');
  attachpoint.parentNode.insertBefore(wrapper, attachpoint.nextSibling);
}

const rendeerFeatureStrip = () => {
  const TARGET_SELECTOR = '[data-ref="hero-banner"]';
  const MODULE_CLASS = 'fe-hero-quals';

  const items = [
    'Damaged Cars',
    'Mechanical issues',
    'Broken Vehicles',
    'Non-starters',
    'Free Collection',
    'Fast & Easy Process'
  ];

  const tickSvg =
    '<svg class="fe-hero-quals__tick" xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">' +
    '<path d="M0.558959 10.8318C0.397241 10.6701 0.263647 10.526 0.158178 10.3994C0.0527094 10.2658 -2.49688e-05 10.1498 -2.49688e-05 10.0514C-2.49688e-05 9.9459 0.0456782 9.85449 0.137084 9.77715C0.235522 9.69277 0.351538 9.62598 0.485131 9.57676C0.618725 9.52051 0.75935 9.48184 0.907006 9.46074C1.06169 9.43262 1.19177 9.41855 1.29724 9.41855C1.40974 9.41855 1.50115 9.44668 1.57146 9.50293C1.6488 9.55215 1.73669 9.62598 1.83513 9.72441C2.49607 10.3854 3.09373 11.0955 3.6281 11.8549C4.16951 12.6143 4.66873 13.3666 5.12576 14.1119C6.00466 11.6791 7.02771 9.32012 8.1949 7.03496C9.36208 4.7498 10.6769 2.60879 12.1394 0.611914C12.2801 0.415039 12.498 0.263867 12.7933 0.158398C13.0957 0.0529294 13.4332 0.00019503 13.8058 0.00019503C13.9254 0.00019503 14.0203 0.0248044 14.0906 0.0740232C14.1609 0.116211 14.1961 0.179492 14.1961 0.263867C14.1961 0.348242 14.1855 0.42207 14.1644 0.485351C14.1433 0.541601 14.0941 0.618945 14.0168 0.717383C13.2363 1.75098 12.4769 2.83379 11.7386 3.96582C11.0074 5.09785 10.3078 6.29316 9.63982 7.55176C8.97185 8.80332 8.33904 10.1182 7.74138 11.4963C7.14373 12.8744 6.59529 14.3229 6.09607 15.8416C6.08201 15.8838 6.04333 15.9225 5.98005 15.9576C5.91677 15.9857 5.83943 16.0104 5.74802 16.0314C5.65662 16.0525 5.55466 16.0666 5.44216 16.0736C5.32966 16.0877 5.21716 16.0947 5.10466 16.0947C4.94294 16.0947 4.79529 16.0771 4.66169 16.042C4.5281 16.0139 4.42966 15.9471 4.36638 15.8416C4.02888 15.265 3.71599 14.7588 3.42771 14.3229C3.13943 13.8799 2.84763 13.4686 2.55232 13.0889C2.25701 12.7092 1.94763 12.34 1.62419 11.9814C1.30779 11.6229 0.952709 11.2396 0.558959 10.8318Z" fill="#00A5A5"/>' +
    '</svg>';

  function build() {
    if (document.querySelector(`.${MODULE_CLASS}`)) return;

    const anchor = document.querySelector(TARGET_SELECTOR);
    if (!anchor) return;

    const wrap = document.createElement('div');
    wrap.className = MODULE_CLASS;

    wrap.innerHTML = `<div class="fe-hero-quals__inner">${items
      .map((txt) => {
        return (
          `<div class="fe-hero-quals__item">${tickSvg}<span class="fe-hero-quals__text">${txt}</span>` +
          '</div>'
        );
      })
      .join('')}</div>`;

    anchor.insertAdjacentElement('afterend', wrap);
  }

  build();
};

const renderTrustpilot = () => {
  const TRUSTID = 'fe-trustpilot-rating';
  const INSERT_AFTER_SEL = '[data-ref="hero-banner"]';

  const STAR_SVG = `
    <svg class="${TRUSTID}__star" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
      <path d="M40 0H0V40H40V0Z" fill="#00B67A"/>
      <path d="M19.9995 26.9578L26.0828 25.4162L28.6245 33.2495L19.9995 26.9578ZM33.9995 16.8328H23.2912L19.9995 6.74951L16.7078 16.8328H5.99951L14.6662 23.0828L11.3745 33.1662L20.0412 26.9162L25.3745 23.0828L33.9995 16.8328Z" fill="white"/>
    </svg>
  `.trim();

  const LOGO_SVG = `
    <svg class="${TRUSTID}__logo-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#04DA8D"/>
    </svg>
  `.trim();

  function build() {
    //dedupe
    const existing = document.getElementById(ID);
    if (existing) existing.remove();

    const hero = document.querySelector(INSERT_AFTER_SEL);
    if (!hero) return;

    const wrap = document.createElement('section');
    wrap.id = TRUSTID;
    wrap.className = TRUSTID;
    wrap.setAttribute('aria-label', 'Trustpilot rating');

    wrap.innerHTML = `
      <div class="${TRUSTID}__inner">
        <div class="${TRUSTID}__title">
          <span class="${TRUSTID}__title-desktop">Excellent</span>
          <span class="${TRUSTID}__title-mobile">Rated Excellent</span>
        </div>

        <div class="${TRUSTID}__stars" aria-hidden="true">
          ${STAR_SVG}${STAR_SVG}${STAR_SVG}${STAR_SVG}${STAR_SVG}
        </div>

        <div class="${TRUSTID}__brand" aria-hidden="true">
          ${LOGO_SVG}
          <span class="${TRUSTID}__brand-text">Trustpilot</span>
        </div>
      </div>
    `;

    hero.insertAdjacentElement('afterend', wrap);
  }

  build();
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (document.querySelector(`.${FE.rootClass}`)) return;

  //use matchmedia to detect mobile

  //show all fields
  const formElem = document.getElementById('makeForm');
  const fieldRows = formElem.querySelectorAll(':scope > div.hidden');
  fieldRows.forEach((rowParam) => {
    const row = rowParam;
    !isMobile() && row.classList.remove('hidden');
  });

  renderTabs();
  rendeerNewTickElem();
  renderTrustpilot();
  rendeerFeatureStrip();
  if (isMobile()) {
    const infoBar = document.querySelector('.fe-info-bar');
    const hero = document.querySelector('[data-ref="hero-banner"]');
    hero.insertAdjacentElement('afterend', infoBar);
  }
};
