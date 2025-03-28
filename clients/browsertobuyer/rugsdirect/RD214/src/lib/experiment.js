import { cartUnderlay } from './helpers/cartUnderlay';
import { addToCart, getUnderlay, observeDOM, pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const getSelectedRugData = () => {
  const selectedInput = document.querySelector('input[name="id"]:checked');
  if (!selectedInput) return null;

  const rugWidth = parseInt(selectedInput.getAttribute('data-width'), 10);
  const rugLength = parseInt(selectedInput.getAttribute('data-length'), 10);
  const rugPriceInPence = parseInt(selectedInput.getAttribute('data-price'), 10);
  const rugPrice = rugPriceInPence / 100;

  return {
    width: rugWidth,
    length: rugLength,
    price: rugPrice
  };
};

const updateUnderlayModalPrice = () => {
  const rugData = getSelectedRugData();
  if (!rugData) return;

  const underlay = getUnderlay(rugData.width, rugData.length);
  if (!underlay) return;

  const rugOnlyPrice = rugData.price;
  const underlayPrice = underlay.price;
  const totalPrice = (rugOnlyPrice + underlayPrice).toFixed(2);

  //Update DOM using correct selectors
  const rugOnlyPriceEl = document.querySelector('[data-modal-product-price]');
  const rugWithUnderlayPriceEl = document.querySelector('[data-modal-underlay-price]');

  if (rugOnlyPriceEl) rugOnlyPriceEl.textContent = `£${rugOnlyPrice.toFixed(2)}`;
  if (rugWithUnderlayPriceEl) rugWithUnderlayPriceEl.textContent = `£${totalPrice}`;

  //console.log(`Rug only: £${rugOnlyPrice.toFixed(2)}`);
  //console.log(`Rug + Underlay: £${totalPrice}`);
};

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/products')) {
    pollerLite(['#productUnderlayModal [data-underlay-submit]'], () => {
      const atcBtnElem = document.querySelector('#productUnderlayModal [data-underlay-submit]');
      const copyATCBtn = atcBtnElem.cloneNode(true);

      copyATCBtn.removeAttribute('data-underlay-submit');
      copyATCBtn.classList.add(`${ID}__atcBtn`);
      copyATCBtn.style.display = 'none';

      const underlayAccept = document.querySelector('#addUnderlayAccept');
      const underlayReject = document.querySelector('#addUnderlayReject');

      const toggleButtons = () => {
        if (underlayAccept.checked) {
          //Underlay selected → show cloned button
          copyATCBtn.style.display = 'block';
          atcBtnElem.style.display = 'none';
        } else {
          //Rug only selected → show Shopify original button
          copyATCBtn.style.display = 'none';
          atcBtnElem.style.display = 'block';
        }
      };

      if (underlayAccept) underlayAccept.addEventListener('change', toggleButtons);
      if (underlayReject) underlayReject.addEventListener('change', toggleButtons);

      if (!document.querySelector(`.${ID}__atcBtn`)) {
        atcBtnElem.insertAdjacentElement('beforebegin', copyATCBtn);
      }

      observeDOM('#productUnderlayModal', (mutation) => {
        const { target } = mutation;

        if (target && target.classList.contains('underlay-modal') && target.classList.contains('active')) {
          updateUnderlayModalPrice();
        }
      });
    });
  } else if (pathname.includes('/cart')) {
    pollerLite(['.quantity-box select', '.btn-add-underlay'], () => {
      cartUnderlay(ID);
    });
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__atcBtn`)) {
      const underlaySelected = document.querySelector('#addUnderlayAccept').checked;

      if (!underlaySelected) {
        return;
      }

      //Rug size & price detect from the selected radio button
      const rug = getSelectedRugData();
      if (!rug) {
        return;
      }

      //Find the underlay that matches the rug size
      const underlay = getUnderlay(rug.width, rug.length);
      if (!underlay) {
        return;
      }

      //Step 3: Add underlay to cart via Shopify AJAX API
      addToCart(underlay.variantId, 1).then(() => {
        //console.log('Underlay added to cart:', underlay.variantName);
        //Go to cart
        window.location.href = '/cart';
      });
    } else if (target.closest(`.${ID}__cartAtcBtn`)) {
      const { variantId } = target.closest(`.${ID}__cartAtcBtn`).dataset;
      if (!variantId) return;

      addToCart(variantId, 1).then(() => {
        //console.log('Underlay added from cart page');
        window.location.reload();
      });
    }
  });

  init();
};
