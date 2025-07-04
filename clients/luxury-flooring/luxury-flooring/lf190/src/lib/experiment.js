import setup from './services/setup';
import shared from './shared/shared';
import { mainData } from './data/data';
import productOverview from './components/productOverview';
import { captureElementsContainingString, pollerLite } from './helpers/utils';
import tablistener from './helpers/tablistener';
import resetSlider from './helpers/resetSlider';
import setBannerStyle from './helpers/setBannerStyle';

const { ID } = shared;
let bannerStyleTimeout;

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

const handleResize = () => {
  const productMediaElement = document.querySelector('.product.media');
  const mobileOverviewElement = document.querySelector(`.${ID}__productOverview.${ID}__mobile`);
  const productAccordion = document.querySelector(`.${ID}__productAccordion`);
  if (window.innerWidth < 991) {
    mobileOverviewElement?.insertAdjacentElement('afterend', productAccordion);
  } else {
    productMediaElement?.insertAdjacentElement('beforeend', productAccordion);
    //Clear any existing timeout to debounce
    clearTimeout(bannerStyleTimeout);
    const bodyEl = document.querySelector('body');
    if (bodyEl) {
      bodyEl.style.removeProperty('--banner-top');
      bodyEl.style.removeProperty('--banner-height');
      bodyEl.style.removeProperty('--banner-overflow-width');
    }
    bannerStyleTimeout = setTimeout(() => {
      if (typeof setBannerStyle === 'function') {
        setBannerStyle();
      } else {
        console.warn('setBannerStyle is not defined or not a function.');
      }
    }, 100);
  }
};

const init = () => {
  const productMediaElement = document.querySelector('.product.media');
  const flooringTypeElement = document.querySelector('#attr_flooringtype span');
  const flooringType = flooringTypeElement ? flooringTypeElement.textContent.trim() : '';

  const detailsSection = document.querySelector('.product-section.details');

  const isFindFlooring = mainData.find(
    (item) => item.keyWord.toLowerCase().trim() === flooringType.toLowerCase().trim()
  );

  if (isFindFlooring) {
    const targetPoint = document.querySelector('.product.media');
    const mobileTargetPoint = document.querySelector('.product-section.details');

    if (!document.querySelector(`.${ID}__productOverview.${ID}__desktop`)) {
      targetPoint.insertAdjacentHTML('beforeend', productOverview(ID, isFindFlooring, 'desktop'));
      setTimeout(() => {
        setBannerStyle();
      }, 2000);
    }

    if (!document.querySelector(`.${ID}__productOverview.${ID}__mobile`)) {
      mobileTargetPoint.insertAdjacentHTML(
        'beforebegin',
        productOverview(ID, isFindFlooring, 'mobile')
      );
    }
  }

  const productAccordionElem = document.querySelector('.product-section.accfeat');
  //const cloneProductAccordionElem = productAccordionElem.cloneNode(true);
  if (productAccordionElem && !document.querySelector(`.${ID}__productAccordion`)) {
    productMediaElement.insertAdjacentElement('beforeend', productAccordionElem);
    productAccordionElem.classList.add(`${ID}__productAccordion`);
  }

  if (detailsSection && !document.querySelector(`.${ID}__detailsSection`)) {
    document
      .querySelector('.product-accordion-pane.description .description')
      .insertAdjacentElement('beforeend', detailsSection);
    detailsSection.classList.add(`${ID}__detailsSection`);
    detailsSection.querySelector('label[for="details-toggle"] span.more')?.click();

    const dimensionElement = captureElementsContainingString('dimensions');
    if (dimensionElement.length > 0) {
      dimensionElement[0].innerText = 'Measurements';
    }
    const specElement = captureElementsContainingString('details');
    if (specElement.length > 0) {
      specElement[0].innerText = 'Specifications';
    }

    const packSizeElement = document.querySelector('[data-code="pack_size"]');
    const packSizeValue = document.querySelector('#attr_pack_size');

    const packWeightElement = document.querySelector('[data-code="pack_weight"]');
    const packWeightValue = document.querySelector('#attr_pack_weight');
    const mainTargetPoint = document.querySelector(
      `.${ID}__productAccordion .product-detail-col-list`
    );
    if (packSizeElement && packSizeValue) {
      mainTargetPoint.insertAdjacentElement('beforeend', packSizeElement);
      mainTargetPoint.insertAdjacentElement('beforeend', packSizeValue);
    }

    if (packWeightElement && packWeightValue) {
      mainTargetPoint.insertAdjacentElement('beforeend', packWeightElement);
      mainTargetPoint.insertAdjacentElement('beforeend', packWeightValue);
    }
  }

  const deliveryAccordion = document.querySelector('.product-accordion-pane.delivery');
  const deliveryTextElement = document.querySelector('.product-accordion-tab.delivery h2 > span');
  const returnAccordion = document.querySelector('.product-accordion-pane.returns');
  const allReturnItems = document.querySelectorAll('.product-accordion-pane.returns > *');

  if (deliveryTextElement) {
    deliveryTextElement.textContent = 'Delivery & Returns';
  }
  if (deliveryAccordion && !deliveryAccordion.querySelector('h4.title-delivery.title-accr-info')) {
    deliveryAccordion.insertAdjacentHTML(
      'afterbegin',
      '<h4 class="title-delivery title-accr-info">Delivery information</h4>'
    );
  }

  if (
    returnAccordion &&
    allReturnItems.length > 0 &&
    !deliveryAccordion.querySelector('h4.title-return.title-accr-info')
  ) {
    deliveryAccordion.insertAdjacentHTML(
      'beforeend',
      '<h4 class="title-return title-accr-info">Return information</h4>'
    );
  }

  if (deliveryAccordion && allReturnItems.length > 0) {
    allReturnItems.forEach((item) => {
      deliveryAccordion.appendChild(item);
    });
  }

  tablistener(ID);

  pollerLite(
    [
      '.column.main > .products .products.slick-initialized',
      () => typeof window.jQuery.fn.slick === 'function'
    ],
    () => {
      const productSlider = document.querySelector('.column.main > .products .products');
      productSlider.classList.add(`${ID}__productSlider`);

      const sliders = productSlider.querySelectorAll('.slick-slide');
      const wrapper = document.createElement('div');
      wrapper.className = 'custom-pagination-wrapper';
      wrapper.innerHTML = `
      <button class="slick-prev-dot" aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 6L9 12L15 18" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="slick-dots-placeholder"></div>
      <button class="slick-next-dot" aria-label="Next">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 6L15 12L9 18" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    `;

      if (
        productSlider &&
        productSlider.parentNode &&
        !document.querySelector('.custom-pagination-wrapper') &&
        sliders.length > 1
      ) {
        productSlider.insertAdjacentElement('afterend', wrapper);
      }
      resetSlider(ID);
    }
  );
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.readmore')) {
      const wrapper = target.closest('.product-accordion-pane');
      setTimeout(() => {
        wrapper.style.height = 'auto';
      }, 100);
    }
  });

  //Initial check
  handleResize();
  //Listen for resize
  window.addEventListener('resize', handleResize);
};
