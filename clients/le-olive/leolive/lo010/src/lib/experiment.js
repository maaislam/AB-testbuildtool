import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, collectionName } from './helpers/utils';
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
  const isCollection = collectionName.filter((item) =>
    window.location.href.includes(item.urlPortion));

  const cartUrl = window.location.href.includes(`/${window.Shopify.locale}/`)
    ? `/${window.Shopify.locale}/cart`
    : '/cart';

  const data = {
    text: mainPromoText,
    desc: promoDesc,
    colectionName: isCollection[0].name,
    commonText: gotoText[window.Shopify.locale],
    colectionUrl: isCollection[0].link,
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
      const cartQuantity = Number(cartCountElem.innerText.trim());
      if (cartQuantity > 1) return;
      const modalWrapper = document.querySelector(`.${ID}__modal`);
      modalWrapper.classList.add('open');
      pollerLite(['body.header-cart__sidebar-visible'], () => {
        const bodyElement = document.body;
        bodyElement.classList.remove('header-cart__sidebar-visible');
      });
    } else if (target.closest(`.${ID}__closeModal`) || target.closest(`.${ID}__modal-overlay`)) {
      const modalWrapper = document.querySelector(`.${ID}__modal`);
      modalWrapper.classList.remove('open');
      window.location.reload();
    }
  });

  init();
};
