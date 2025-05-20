/*eslint-disable no-param-reassign */
/*eslint-disable no-restricted-globals */
/*eslint-disable radix */
import setup from './services/setup';
import shared from './shared/shared';
import { addToCart, extractCartTotals, getVariationSelections, pollerLite } from './helpers/utils';
import fakeButton from './components/fakeButton';
import modal from './components/modal';
import contentWrapper from './components/contentWrapper';
import cartDescription from './components/cartDescription';

const { ID, VARIATION } = shared;

const openModal = (ID) => {
  const modalElem = document.querySelector(`.${ID}__modal`);

  modalElem.classList.add(`${ID}__open`);
  modalElem.classList.remove(`${ID}__closing`);
};

export const closeModal = () => {
  const modalElem = document.querySelector(`.${ID}__modal`);

  modalElem.classList.add(`${ID}__closing`);
  modalElem.classList.remove(`${ID}__open`);
};

const renderFakeButton = (targetElement) => {
  if (!document.querySelector(`.${ID}__fakeAtb`)) {
    targetElement.insertAdjacentHTML('beforebegin', fakeButton(ID));
  }
};

const initVariationHandler = () => {
  const form = document.querySelector('.variations_form');

  if (!form) return;

  form.addEventListener('change', (event) => {
    const select = event.target;
    if (select.tagName.toLowerCase() === 'select') {
      //Delay to allow DOM update
      setTimeout(() => {
        const { value } = select;
        const addToCartBtn = document.querySelector('.post--pdp__cta--add-to-cart');
        const { display } = window.getComputedStyle(addToCartBtn);

        if (value && display === 'inline-block') {
          renderFakeButton(addToCartBtn);
        }
      }, 50);
    }
  });
};

const renderModalContent = (mainProductObj, cartInfoObj, totalQuantity, selections) => {
  const accessoriesWrapper = document.querySelector('.accessories__wrapper');
  const varaitionAccessoriesWrapper = accessoriesWrapper.cloneNode(true);
  varaitionAccessoriesWrapper?.classList.add(`${ID}__accessoriesWrapper`);
  const modalContentWrapper = document.querySelector(`.${ID}__modal-content`);
  modalContentWrapper.innerHTML = '';
  modalContentWrapper.innerHTML = contentWrapper(
    ID,
    mainProductObj,
    cartInfoObj,
    totalQuantity,
    selections
  );

  const contentWrapperElem = document.querySelector(`.${ID}__contentWrapper`);
  if (!contentWrapperElem.querySelector(`.${ID}__accessoriesWrapper`)) {
    contentWrapperElem.insertAdjacentElement('beforeend', varaitionAccessoriesWrapper);
  }
  const allButtons = document.querySelectorAll(`.${ID}__modal .accessory__cta`);
  allButtons.forEach((button) => {
    button.innerText = 'ADD TO CART';
    button.classList.add(`${ID}__atcCTA`);
  });
  openModal(ID);
};

const init = () => {
  pollerLite(['form.variations_form'], () => {
    initVariationHandler();
  });

  if (!document.querySelector(`.${ID}__modal`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup();

  document.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeAtb`)) {
      const clickedItem = target.closest(`.${ID}__fakeAtb`);
      const wrapper = clickedItem.closest('div');
      const productIdElement = wrapper.querySelector('input[name="add-to-cart"]');
      const productId = productIdElement.value;
      const selections = getVariationSelections();
      const productTitle = document.querySelector('.post__title')?.cloneNode(true);
      const mainImageElement = document.querySelector('.woocommerce-main-image img');
      const productImage = mainImageElement.src;
      const priceElement = document.querySelector('.post--pdp__price');
      const priceAmountElem = priceElement.querySelector('.woocommerce-Price-amount');
      const priceAmount = priceAmountElem ? priceAmountElem.innerText.trim() : '';

      const mainProductObj = {
        title: productTitle,
        image: productImage,
        price: priceAmount
      };
      clickedItem.disabled = true;
      addToCart(1, productId)
        .then((doc) => {
          const cartTotalElement = doc.querySelector('.cart_totals');
          const cartInfoObj = extractCartTotals(cartTotalElement);
          const totalCartItemElems = doc.querySelectorAll('.cart_item .input-text.qty');
          const totalQuantity = Array.from(totalCartItemElems).reduce((sum, input) => {
            const value = parseInt(input.value, 10);
            return sum + (isNaN(value) ? 0 : value);
          }, 0);
          if (cartInfoObj && totalQuantity) {
            renderModalContent(mainProductObj, cartInfoObj, totalQuantity, selections);
          }
          clickedItem.disabled = false;
        })
        .catch(() => {
          clickedItem.disabled = false;
        });
    } else if (
      target.closest(`.${ID}__modal-overlay`) ||
      (target.closest(`.${ID}__closeWrapper`) && target.closest('svg'))
    ) {
      closeModal();
    } else if (target.closest(`.${ID}__atcCTA`)) {
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__atcCTA`);
      const productId = clickedItem.href.split('&p=')[1];
      clickedItem.classList.add('disabled-link');
      addToCart(1, productId)
        .then((doc) => {
          const cartTotalElement = doc.querySelector('.cart_totals');
          const cartInfoObj = extractCartTotals(cartTotalElement);
          const totalCartItemElems = doc.querySelectorAll('.cart_item .input-text.qty');
          const totalQuantity = Array.from(totalCartItemElems).reduce((sum, input) => {
            const value = parseInt(input.value, 10);
            return sum + (isNaN(value) ? 0 : value);
          }, 0);
          console.log(totalQuantity, 'totalQuantity');
          const contentContainer = document.querySelector(`.${ID}__contentContainer`);
          const cartDescriptionElem = contentContainer.querySelector(`.${ID}__bag-summary`);
          if (cartDescriptionElem) cartDescriptionElem.remove();
          if (cartInfoObj && totalQuantity) {
            contentContainer.insertAdjacentHTML(
              'beforeend',
              cartDescription(ID, cartInfoObj, totalQuantity)
            );
          }
          clickedItem.classList.remove('disabled-link');
        })
        .catch(() => {
          clickedItem.classList.remove('disabled-link');
        });
    }
  });

  init();
};
