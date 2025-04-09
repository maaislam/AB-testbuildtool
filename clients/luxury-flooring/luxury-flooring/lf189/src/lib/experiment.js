import setup from './services/setup';
import shared from './shared/shared';
import { addToCart, clickUntilModalAppears } from './helpers/utils';
import modal from './components/modal';
import openModal from './helpers/openModal';
import { closeModal } from './helpers/closeModal';

const { ID, VARIATION } = shared;

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('#shopping-cart-table .product-item-name a')]; //Get all elements as an array

  return elements.filter((el) =>
    el.textContent.toLowerCase().trim().includes(searchString.toLowerCase().trim())
  );
};

const contentUpdate = (price, meterInfo, packInfo) => {
  const modalContent = document.querySelector(`.${ID}__modal-container`);
  const meterElement = modalContent.querySelector(`.${ID}__meter`);
  const packSizeElement = modalContent.querySelector(`.${ID}__packSize`);
  const priceElement = modalContent.querySelector(`.${ID}__prodContent__price`);

  if ((price, meterInfo, packInfo)) {
    meterElement.textContent = meterInfo;
    packSizeElement.textContent = packInfo;
    priceElement.textContent = price;
  }
};

const init = () => {
  if (window.location.pathname === '/checkout/cart/' && VARIATION === '1') {
    const prodTitle = window.sessionStorage.getItem(`${ID}__productTitle`);
    if (captureElementsContainingString(prodTitle)) {
      const itemWrapper = captureElementsContainingString(prodTitle)[0].closest('.item-info');
      const accessoriesBtn = itemWrapper.querySelector('button.flooring-accessories');
      clickUntilModalAppears(accessoriesBtn, '.cart-crosssell._show');
    }

    return;
  }
  const imageElement = document.querySelector('#productCarousel .gallery__item img');
  const imageSrc = imageElement?.getAttribute('src');
  console.log(imageSrc, imageElement);
  const productTitleElem = document.querySelector('.page-title [data-ui-id="page-title-wrapper"]');
  const productTitle = productTitleElem?.textContent?.trim();
  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID, imageSrc, productTitle));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.matches('.fp-calculator #product-addtocart-button:not(.disabled)')) {
      e.preventDefault();
      console.log('show modal');
      const totalPriceElement = document.querySelector(
        '.fp-calculator .fp-require-price.price-including-tax'
      );
      const price = totalPriceElement.textContent.trim();
      const fpTotalInfo = document.querySelector('.fp-calculator .fp-total-info');
      const meterInfo = fpTotalInfo.textContent?.trim()?.split('/')[0]?.split('(')[1]?.trim();
      const packInfo = fpTotalInfo.textContent?.trim()?.split('/')[1]?.split(')')[0]?.trim();
      const addFormWrapper = document.querySelector('#product_addtocart_form');
      const sku = addFormWrapper.querySelector('input[name="product"]')?.value;
      const formKey = addFormWrapper.querySelector('input[name="form_key"]')?.value;
      const url = addFormWrapper.action;
      const quantity = document.querySelector('.fp-calculator input')?.value;

      if (price !== '£0.00' || !totalPriceElement) {
        addToCart(sku, formKey, url, quantity)
          .then((response) => {
            openModal(ID);
            contentUpdate(price, meterInfo, packInfo);
            console.log(response, 'response');
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      }
    } else if (target.closest(`.${ID}__modal-overlay`)) {
      closeModal(ID);
    } else if (target.closest(`.${ID}__prodAccessoriesBtn`)) {
      const clickedItem = target.closest(`.${ID}__prodAccessoriesBtn`);
      const productTitle = clickedItem.getAttribute('data-name');
      window.sessionStorage.setItem(`${ID}__productTitle`, productTitle);
    }
  });
  init();
};
