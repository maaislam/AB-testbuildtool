import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import modal from './components/modal';

const { ID, VARIATION } = shared;
const cartCountElem = document.querySelector('#CartCount');
const cartValue = Number(cartCountElem.dataset.count);

const cartName = {
  nl: 'winkelwagen',
  de: 'Warenkorb',
  fr: 'panier',
  es: 'carro',
  en: 'cart'
};

const gotoText = {
  en: 'Go to',
  fr: 'Aller à',
  de: 'Gehe zu',
  nl: 'Ga naar',
  es: 'Ir a'
};

const init = () => {
  //Add your experiment code here
  const promoElement = document.querySelector('.product-single__form-banner');
  const promoTitleElement = promoElement.querySelector('center');
  const mainPromoText = promoTitleElement.querySelector('b').innerText.trim();
  const promoDesc = promoTitleElement.innerText.trim().split(mainPromoText)[1];
  const navElement = document.querySelector('.breadcrumb-nav > span');
  const collectionElement =
    navElement.querySelector('.breadcrumb-nav__separator + span[itemprop="itemListElement"] a') ||
    document.querySelector('.product-single__subtitle');
  const colectionUrl = collectionElement.href;
  const collectionName =
    collectionElement.querySelector('span')?.innerText.trim() || collectionElement.innerText.trim();
  const cartUrl = window.Shopify.locale === 'en' ? '/cart' : `/${window.Shopify.locale}/cart`;

  const data = {
    text: mainPromoText,
    desc: promoDesc,
    colectionName: collectionName,
    commonText: gotoText[window.Shopify.locale],
    colectionUrl,
    cartText: cartName[window.Shopify.locale],
    cartUrl
  };

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID, data)); //
  }
};

export default () => {
  if (cartValue > 0) return;

  setup();
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('#AddToCartNew') || target.closest('.product-single__floating-bar button')) {
      pollerLite(['body.header-cart__sidebar-visible'], () => {
        const bodyElement = document.body;
        const modalWrapper = document.querySelector(`.${ID}__modal`);
        const cartQuantity = Number(cartCountElem.innerText.trim());
        if (cartQuantity > 1) return;
        bodyElement.classList.remove('header-cart__sidebar-visible');
        modalWrapper.classList.add('open');
      });
    } else if (target.closest(`.${ID}__closeModal`)) {
      const modalWrapper = document.querySelector(`.${ID}__modal`);
      modalWrapper.classList.remove('open');
      window.location.reload();
    }
  });

  init();
};
