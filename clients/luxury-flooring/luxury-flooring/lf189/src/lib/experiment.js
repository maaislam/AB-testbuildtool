/*eslint-disable no-restricted-syntax */

import setup from './services/setup';
import shared from './shared/shared';
import {
  addToCart,
  calculateTotalPrice,
  checkCartData,
  clickUntilModalAppears,
  fetchProductDetails,
  formatPriceGBP,
  getCommonElements,
  getCookie,
  getSelectedProductIds,
  isMobile,
  VariantOptionsAddToCart
} from './helpers/utils';
import modal from './components/modal';
import openModal from './helpers/openModal';
import { closeModal } from './helpers/closeModal';
import updatePaginationUI from './helpers/updatePaginationUI';

const { ID, VARIATION } = shared;
const itemsPerPage = isMobile() ? 1 : 3;
let currentPage = 0;
const productsData = [];

const captureElementsContainingString = (searchString) => {
  const elements = [...document.querySelectorAll('.cart.item .product-item-name')]; //Get all elements as an array

  return elements.filter((el) => el.textContent.includes(searchString));
};

const contentUpdate = (price, wasPrice, meterInfo, packInfo) => {
  const modalContent = document.querySelector(`.${ID}__modal-container`);
  const meterElement = modalContent.querySelector(`.${ID}__meter`);
  const packSizeElement = modalContent.querySelector(`.${ID}__packSize`);
  const priceElement = modalContent.querySelector(`.${ID}__prodContent__price`);
  const onlyPackNumber = packInfo.split('packs')[0].trim();

  if ((price, meterInfo, packInfo)) {
    meterElement.textContent = meterInfo;
    packSizeElement.textContent = packInfo;
    if (wasPrice) {
      priceElement.innerHTML = `${price} <span class="${ID}__wasPrice">was: ${calculateTotalPrice(
        wasPrice,
        parseInt(onlyPackNumber)
      )}</span>`;
    } else {
      priceElement.textContent = price;
    }
  }
};

const variantPriceChange = (mainWrapper, data) => {
  const priceElement = mainWrapper.querySelector('.product-price');
  const productOptionWrapper = mainWrapper.querySelector(`.${ID}__productOptions`);
  const priceData = JSON.parse(productOptionWrapper.dataset.price);
  const variantId = data.length < 2 ? data[0] : getCommonElements(data[0], data[1])[0];
  const price = priceData[variantId].finalPrice.amount;
  const inputValue = mainWrapper.querySelector(`.${ID}__qtyInput`)?.value;
  priceElement.textContent = calculateTotalPrice(price, parseInt(inputValue || 1));
  priceElement.dataset.price = formatPriceGBP(price);
};

const init = () => {
  if (window.sessionStorage.getItem('hasSeenCheckout')) {
    window.sessionStorage.removeItem('hasSeenCheckout');
  }
  if (window.location.pathname === '/checkout/cart/' && VARIATION === '1') {
    if (!document.documentElement.classList.contains(ID)) {
      setup();
    }
    const prodTitle = window.sessionStorage.getItem(`${ID}__productTitle`);
    if (captureElementsContainingString(prodTitle) && prodTitle) {
      const itemWrapper = captureElementsContainingString(prodTitle)[0].closest('.item-info');
      const accessoriesBtn = itemWrapper.querySelector('button.flooring-accessories');
      clickUntilModalAppears(accessoriesBtn, '.cart-crosssell._show');
      window.sessionStorage.removeItem(`${ID}__productTitle`);
    }

    return;
  }

  if (window.location.pathname === '/checkout/cart/' && VARIATION === '2') {
    if (!document.documentElement.classList.contains(ID)) {
      setup();
    }
    return;
  }

  const imageElement = document.querySelector('#productCarousel .gallery__item img');
  const imageSrc = imageElement?.getAttribute('src');

  const productTitleElem = document.querySelector('.page-title [data-ui-id="page-title-wrapper"]');
  const productTitle = productTitleElem?.textContent?.trim();
  const dontForgetItems = document.querySelectorAll(
    '.product-item.plp:not(.flooring-product) .product-item-info'
  );

  const extractedData = Array.from(dontForgetItems).map((item) => {
    const productLink = item.querySelector('.product-item-link')?.href;

    return productLink;
  });

  fetchProductDetails(extractedData).then((results) => {
    if (results.length === 0) {
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
      return;
    }

    results.forEach((item) => {
      const image = item.doc.querySelector('.gallery__item--image img');
      const priceElem = item.doc.querySelector('[data-price-type="finalPrice"]');
      const productTitleElement = item.doc.querySelector('.page-title');
      const sku = item.doc.querySelector('input[name="product"]')?.value;
      const formKey = getCookie('form_key');
      const addFormWrapper = item.doc.querySelector('#product_addtocart_form');
      const url = addFormWrapper.action;

      const imgSrc = image?.getAttribute('src');
      const productTitleText = productTitleElement?.textContent?.trim();
      const price = priceElem?.textContent?.trim();

      const scripts = item.doc.querySelectorAll('script[type="text/x-magento-init"]');
      const configurableData = [];
      let productOptionPrices;

      scripts.forEach((scriptEl) => {
        try {
          const jsonText = scriptEl.textContent.trim();
          const parsedData = JSON.parse(jsonText);

          if (parsedData['#product_addtocart_form']?.configurable?.spConfig) {
            const { spConfig } = parsedData['#product_addtocart_form'].configurable;
            const { optionPrices } = spConfig;
            productOptionPrices = optionPrices;
            for (const [key, value] of Object.entries(spConfig.attributes)) {
              configurableData.push(value);
            }
          }
        } catch (err) {
          console.warn('Skipping script due to JSON parse error:', err);
        }
      });

      const productData = {
        imgSrc,
        productTitleText,
        price,
        sku,
        formKey,
        url,
        configurableData,
        productOptionPrices,
        productLink: item.url
      };

      //console.log(productData, 'productData');

      productsData.push(productData);
    });

    if (!document.querySelector(`.${ID}__modal`)) {
      document.body.insertAdjacentHTML(
        'beforeend',
        modal(ID, imageSrc, productTitle, VARIATION, productsData)
      );
    }

    const inputHandler = (e) => {
      const wrapper = e.target.closest(`.${ID}__productContent`);
      const priceElement = wrapper.querySelector('.product-price');
      const { price } = priceElement.dataset;
      if (e.target.value === '0' || e.target.value === '') {
        priceElement.textContent = '£00.00';
        return;
      }
      priceElement.textContent = calculateTotalPrice(price, parseInt(e.target.value));
    };
    const quantityInputs = document.querySelectorAll(`.${ID}__qtyInput`);
    quantityInputs.forEach((inputEl) => {
      inputEl.removeEventListener('input', inputHandler);
      inputEl.addEventListener('input', inputHandler);
    });

    const changeHandler = (e) => {
      const { target } = e;
      const mainWrapper = target.closest(`.${ID}__productContent`);
      const actionWrapper = mainWrapper.querySelector(`.${ID}__actionWrapper`);
      const allSelectsWrapper = mainWrapper.querySelectorAll('select');
      const allSelected = [...allSelectsWrapper].every((select) => select.selectedIndex > 0);

      if (allSelected) {
        actionWrapper.removeAttribute('disabled');
        if (getSelectedProductIds(mainWrapper).length > 0) {
          variantPriceChange(mainWrapper, getSelectedProductIds(mainWrapper));
        }
      } else {
        actionWrapper.setAttribute('disabled', true);
        const priceElement = mainWrapper.querySelector('.product-price');
        const { startPrice } = priceElement.dataset;
        priceElement.textContent = startPrice;
      }
    };

    const allSelectWrapper = document.querySelectorAll(`.${ID}__product-option select`);
    allSelectWrapper.forEach((selectItem) => {
      selectItem.removeEventListener('change', changeHandler);
      selectItem.addEventListener('change', changeHandler);
    });
  });
};

export default () => {
  setup();
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.matches('.fp-calculator #product-addtocart-button:not(.disabled)')) {
      e.preventDefault();
      const totalPriceElement = document.querySelector(
        '.fp-calculator .fp-require-price.price-including-tax'
      );
      const price = totalPriceElement.textContent.trim();
      const fpTotalInfo = document.querySelector('.fp-calculator .fp-total-info');
      const packInfo = fpTotalInfo.textContent?.trim()?.split('/')[0]?.split('(')[1]?.trim();
      const meterInfo = fpTotalInfo.textContent?.trim()?.split('/')[1]?.split(')')[0]?.trim();
      const addFormWrapper = document.querySelector('#product_addtocart_form');
      const sku = addFormWrapper.querySelector('input[name="product"]')?.value;
      const formKey = addFormWrapper.querySelector('input[name="form_key"]')?.value;
      const url = addFormWrapper.action;
      //const quantity = document.querySelector('.fp-calculator input')?.value;
      const retailPriceElement = document.querySelector(
        '.product-info-price-wrapper .retail-pricing'
      );
      const wasPriceElement = retailPriceElement?.querySelector(
        '.flooring-price-pack-price .price-including-tax .price'
      );
      const wasPrice = wasPriceElement ? wasPriceElement.textContent : '';
      const onlyPackNumber = packInfo.split('packs')[0].trim();

      if (price !== '£0.00' || !totalPriceElement) {
        addToCart(sku, formKey, url, onlyPackNumber)
          .then(() => {
            openModal(ID);
            document.body.classList.add(`${ID}__scrollOff`);
            contentUpdate(price, wasPrice, meterInfo, packInfo);
            const { name } = document.querySelector(`.${ID}__modal`).dataset;
            VARIATION === '1' && window.sessionStorage.setItem(`${ID}__productTitle`, name);
            window.require(['Magento_Customer/js/customer-data'], (customerData) => {
              customerData.invalidate(['cart']); //Mark the cart data as stale
              customerData.reload(['cart'], true); //Force reload from server
              //VARIATION === '2' && checkCartData(ID);
            });
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      }
    } else if (target.closest(`.${ID}__modal-overlay`) || target.closest(`.${ID}__closeWrapper`)) {
      document.body.classList.remove(`${ID}__scrollOff`);
      closeModal(ID);
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
      const qtyInput = target.closest(`.${ID}__actionWrapper`).querySelector(`.${ID}__qtyInput`);
      const wrapper = target.closest(`.${ID}__productContent`);
      const priceElement = wrapper.querySelector('.product-price');
      const { price } = priceElement.dataset;
      if (qtyInput) {
        const currentValue = parseInt(qtyInput.value) || 1;
        if (currentValue > 1) {
          qtyInput.value = currentValue - 1;
        }
        priceElement.textContent = calculateTotalPrice(price, parseInt(qtyInput.value));
      }
    } else if (target.closest(`.${ID}__minusBtn`)) {
      const qtyInput = target.closest(`.${ID}__actionWrapper`).querySelector(`.${ID}__qtyInput`);
      const wrapper = target.closest(`.${ID}__productContent`);
      const priceElement = wrapper.querySelector('.product-price');
      const { price } = priceElement.dataset;
      if (qtyInput) {
        const currentValue = parseInt(qtyInput.value) || 1;
        qtyInput.value = currentValue + 1;
        priceElement.textContent = calculateTotalPrice(price, parseInt(qtyInput.value));
      }
    } else if (target.closest(`#${ID}__productAtcBtn`)) {
      const productAtcBtn = target.closest(`#${ID}__productAtcBtn`);
      const mainProduct = productAtcBtn.closest(`.${ID}__productCard`);
      const { productType } = mainProduct.dataset;
      const productCard = productAtcBtn.closest(`.${ID}__productCard`);
      const formKey = productCard.getAttribute('data-formKey');
      const sku = productCard.getAttribute('data-sku');
      const url = productCard.getAttribute('data-url');
      const quantity = productCard.querySelector(`.${ID}__qtyInput`).value;

      const actionWrapper = productCard.querySelector(`.${ID}__actionWrapper`);
      const addedToBasketElement = productCard.querySelector(`.${ID}__addedToBasket`);
      if (parseInt(quantity)) {
        productAtcBtn.textContent = 'Adding';
        productAtcBtn.disabled = true;
      }

      if (parseInt(quantity) >= 1) {
        const optionsWrapper = productCard.querySelector(`.${ID}__productOptions`);

        const attributeIdElem = optionsWrapper?.querySelector(`.${ID}__product-option`);

        const attributeId = attributeIdElem?.dataset.id;

        const attributeIdElem2 = optionsWrapper?.querySelector(
          `.${ID}__product-option + .${ID}__product-option`
        );

        const attributeId2 = attributeIdElem2?.dataset.id;

        const selectEl = optionsWrapper?.querySelector(`.${ID}__product-option select`);
        const selectedOption = selectEl?.options[selectEl.selectedIndex];
        const attributeValue = selectedOption?.value;

        const selectEl2 = optionsWrapper?.querySelector(
          `.${ID}__product-option + .${ID}__product-option select`
        );
        const selectedOption2 = selectEl2?.options[selectEl2.selectedIndex];
        const attributeValue2 = selectedOption2?.value;

        const productOption = selectedOption ? JSON.parse(selectedOption.dataset.products) : '';
        const productOption2 = selectedOption2 ? JSON.parse(selectedOption2.dataset.products) : '';

        const addToBasket = optionsWrapper
          ? VariantOptionsAddToCart(
              sku,
              formKey,
              url,
              quantity,
              attributeId,
              attributeId2,
              attributeValue,
              attributeValue2,
              productOption && productOption2
                ? getCommonElements(productOption.products, productOption2.products)[0]
                : productOption.products[0]
            )
          : addToCart(sku, formKey, url, quantity);

        addToBasket
          .then(() => {
            window.require(['Magento_Customer/js/customer-data'], (customerData) => {
              customerData.invalidate(['cart']); //Mark the cart data as stale
              customerData.reload(['cart'], true); //Force reload from server
              actionWrapper.classList.add(`${ID}__hide`);
              addedToBasketElement.classList.remove(`${ID}__hide`);
              productAtcBtn.textContent = '+ Add to basket';
              productAtcBtn.disabled = false;

              //if (productType === 'yes') {
              setTimeout(() => {
                actionWrapper.classList.remove(`${ID}__hide`);
                addedToBasketElement.classList.add(`${ID}__hide`);
              }, 2000);
              //}
            });
          })
          .catch((err) => {
            productAtcBtn.textContent = '+ Add to basket';
            productAtcBtn.disabled = false;
            console.error('Error:', err);
          });
      }
    } else if (target.closest('.flooring-accessories[type="button"]') && VARIATION === '2') {
      document.body.classList.add(`${ID}__hasModal`);
    } else if (target.closest('.modals-overlay') && VARIATION === '2') {
      document.body.classList.remove(`${ID}__hasModal`);
    } else if (
      target.closest('button.action-close') &&
      target.closest('.modal-popup') &&
      VARIATION === '2'
    ) {
      document.body.classList.remove(`${ID}__hasModal`);
    }
  });

  init();
};
