import setup from './services/setup';
import shared from './shared/shared';
import { addToCart, clickUntilModalAppears, fetchProductDetails, isMobile } from './helpers/utils';
import modal from './components/modal';
import openModal from './helpers/openModal';
import { closeModal } from './helpers/closeModal';
import updatePaginationUI from './helpers/updatePaginationUI';

const { ID, VARIATION } = shared;
const itemsPerPage = isMobile() ? 1 : 3;
let currentPage = 0;
const productsData = [];

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('#shopping-cart-table .product-item-name a')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.toLowerCase().trim().includes(searchString.toLowerCase().trim()));
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

  const productTitleElem = document.querySelector('.page-title [data-ui-id="page-title-wrapper"]');
  const productTitle = productTitleElem?.textContent?.trim();
  const dontForgetItems = document.querySelectorAll('.product-item.plp:not(.flooring-product) .product-item-info');

  const extractedData = Array.from(dontForgetItems).map((item) => {
    const productLink = item.querySelector('.product-item-link')?.href;

    return productLink;
  });

  fetchProductDetails(extractedData)
    .then((results) => {
      if (results.length === 0) return;

      results.forEach((doc) => {
        const image = doc.querySelector('.gallery__item--image img');
        const priceElem = doc.querySelector('[data-price-type="finalPrice"]');
        const productTitleElement = doc.querySelector('.page-title');
        const sku = doc.querySelector('input[name="product"]')?.value;
        const formKey = doc.querySelector('input[name="form_key"]')?.value;
        const addFormWrapper = doc.querySelector('#product_addtocart_form');
        const url = addFormWrapper.action;

        const imgSrc = image?.getAttribute('src');
        const productTitleText = productTitleElement?.textContent?.trim();
        const price = priceElem?.textContent?.trim();

        const productData = {
          imgSrc,
          productTitleText,
          price,
          sku,
          formKey,
          url
        };

        productsData.push(productData);
      });

      if (!document.querySelector(`.${ID}__modal`)) {
        document.body.insertAdjacentHTML('beforeend', modal(ID, imageSrc, productTitle, VARIATION, productsData));
      }
    });
};

export default () => {
  setup();

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
          .then(() => {
            openModal(ID);
            contentUpdate(price, meterInfo, packInfo);
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      }
    } else if (target.closest(`.${ID}__modal-overlay`) || target.closest(`.${ID}__closeWrapper`)) {
      closeModal(ID);
    } else if (target.closest(`.${ID}__prodAccessoriesBtn`)) {
      const clickedItem = target.closest(`.${ID}__prodAccessoriesBtn`);
      const productTitle = clickedItem.getAttribute('data-name');
      window.sessionStorage.setItem(`${ID}__productTitle`, productTitle);
    } else if (target.closest('#prevBtn')) {
      if (currentPage > 0) {
        currentPage--;
        updatePaginationUI(ID, currentPage, itemsPerPage);
      }
    } else if (target.closest('#nextBtn')) {
      const allCards = document.querySelectorAll(`.${ID}__productCard`);
      const totalPages = Math.ceil(allCards.length / itemsPerPage);
      if (currentPage < totalPages - 1) {
        currentPage++;
        updatePaginationUI(ID, currentPage, itemsPerPage);
      }
    } else if (target.closest(`.${ID}__plusBtn`)) {
      const qtyInput = target
        .closest(`.${ID}__actionWrapper`)
        .querySelector(`.${ID}__qtyInput`);
      if (qtyInput) {
        const currentValue = parseInt(qtyInput.value) || 1;
        if (currentValue > 1) {
          qtyInput.value = currentValue - 1;
        }
      }
    } else if (target.closest(`.${ID}__minusBtn`)) {
      const qtyInput = target
        .closest(`.${ID}__actionWrapper`)
        .querySelector(`.${ID}__qtyInput`);
      if (qtyInput) {
        const currentValue = parseInt(qtyInput.value) || 1;
        qtyInput.value = currentValue + 1;
      }
    } else if (target.closest(`#${ID}__productAtcBtn`)) {
      const productAtcBtn = target.closest(`#${ID}__productAtcBtn`);
      const productCard = productAtcBtn.closest(`.${ID}__productCard`);
      const formKey = productCard.getAttribute('data-formKey');
      const sku = productCard.getAttribute('data-sku');
      const url = productCard.getAttribute('data-url');
      const quantity = productCard.querySelector(`.${ID}__qtyInput`).value;

      const actionWrapper = productCard.querySelector(`.${ID}__actionWrapper`);
      const addedToBasketElement = productCard.querySelector(`.${ID}__addedToBasket`);
      addToCart(sku, formKey, url, quantity).then(() => {
        actionWrapper.classList.add(`${ID}__hide`);
        addedToBasketElement.classList.remove(`${ID}__hide`);
      });
    }
  });

  init();
};
