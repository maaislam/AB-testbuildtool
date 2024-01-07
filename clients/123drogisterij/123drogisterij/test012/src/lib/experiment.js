import modal from './components/modal';
import modalContent from './components/modalContent';
import getProductInfo from './helpers/getProductData';
import initialProductsFetch from './helpers/initialProductFetch';
import { formatPrice, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const cartItems = document.querySelectorAll('.cart.item .item-info');

  const fakeButton = (
    id,
    sku
  ) => `<button type="button" title="Wilt u Extra voordeel?" class="${id}__openmodal" data-sku="${sku}">
    <span>Wilt u Extra voordeel?</span>
  </button>`;

  document.body.insertAdjacentHTML('afterbegin', modal(ID));

  cartItems.forEach((cartItem) => {
    cartItem.classList.add(`${ID}__cartItem`);
    const url = cartItem.querySelector('a').getAttribute('href');
    const qty = cartItem.querySelector('.control.qty input.qty');
    const qtyValue = qty.value;

    initialProductsFetch(url).then((doc) => {
      const upsellOptions = doc.querySelectorAll('.custom-child-upsel-checkbox input');
      upsellOptions.forEach((upsellOption) => {
        const upsellOptionQty = upsellOption.value;
        if (upsellOptionQty === qtyValue && qtyValue !== '1') {
          cartItem.classList.add(`${ID}__matched`);
        }
      });
    });
    if (cartItem.querySelector(`.${ID}__openmodal`)) return;
    const sku = cartItem
      .querySelector('td .control.qty input.qty')
      .getAttribute('data-cart-item-id');
    const anchorPoint = cartItem.querySelector(
      '.col.item .product-item-details .product-item-name'
    );

    anchorPoint.insertAdjacentHTML('beforeend', fakeButton(ID, sku));
  });
};

export default () => {
  setup();
  if (!window.location.href.includes('/checkout/cart')) return;

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('🚀target:', target);

    if (target.closest(`.${ID}__atc`)) {
      const popupItems = target.closest('.ppatc__popup-form');
      const closestLabel = popupItems.querySelector('.ppatc__popup-items label.active');
      const labelQty = closestLabel.dataset.quantity;
      const prodUrl = document.querySelector('.ppatc__popup-items').dataset.href;
      const busketRowLink = document.querySelector(
        `table .item-info .product-item-name [href*="${prodUrl}"]`
      );
      const busketRow = busketRowLink.closest('.item-info');
      const rowQtyInput = busketRow.querySelector('.input-text.qty');
      rowQtyInput.value = labelQty;
      setTimeout(() => {
        document.querySelector('[data-cart-item-update]').click();
      }, 200);
      //get sku
      //const modalForm = target.closest('.ppatc__popup-form');
      //const variantsWrapper = modalForm.querySelector(`.${ID}__variants`);

      //const sku = variantsWrapper.getAttribute('data-active-sku');
      //const primaryForm = document.querySelector(`form[data-product-sku="${sku}"]`);
      //primaryForm.querySelector('button[type="submit"]').click();
      //submit form using js .submit()
    } else if (
      target.closest(`.${ID}__denyoffer`) ||
      (target.closest('.ppatc__popup') && !target.closest('.ppatc__popup-form'))
    ) {
      document.body.classList.remove('ppatc__popup-enabled');
    } else if (target.closest(`.${ID}__openmodal`)) {
      const closestParent = target.closest('.product-item-name');

      const prodUrl = closestParent?.querySelector('a')?.getAttribute('href');
      if (!prodUrl) return;
      getProductInfo(prodUrl).then((productsData) => {
        //console.log('productsData: ', productsData);
        if (productsData.variants.length > 1) {
          //update modal
          const { sku } = target.closest('button').dataset;

          const modalInnerContent = document.querySelector('.ppatc__popup-items');
          modalInnerContent.innerHTML = '';
          modalInnerContent.insertAdjacentHTML('afterbegin', modalContent(ID, productsData, sku));
          modalInnerContent.querySelector('.highest_badge').closest(`.${ID}__variant`)?.click();
          modalInnerContent.setAttribute('data-href', prodUrl);
          document.body.classList.add('ppatc__popup-enabled');

          return;
        }

        closestParent.querySelector('.action.tocart').click();
      });
    } else if (target.closest(`.${ID}__variant`)) {
      const closestLabel = target.closest('label');
      const labelsWrapper = target.closest(`.${ID}__variants`);
      const modalBody = target.closest('.ppatc__popup-form');

      //const labelQty = closestLabel.dataset.quantity;
      const labelPrice = closestLabel.dataset.price;
      labelsWrapper.querySelectorAll('label').forEach((item) => {
        item.classList.remove('active');
      });
      closestLabel.classList.add('active');
      //const activeInput = document.querySelector(`input[data-sku="${sku}"]`);
      //activeInput.value = labelQty;
      //setTimeout(() => {
      //const prodUrl = document.querySelector('.ppatc__popup-items').dataset.href;
      //const busketRowLink = document.querySelector(
      //`table .item-info .product-item-name [href*="${prodUrl}"]`
      //);
      //const busketRow = busketRowLink.closest('.item-info');
      //const rowQtyInput = busketRow.querySelector('.input-text.qty');
      //rowQtyInput.value = labelQty;
      //}, 1000);

      modalBody.querySelector('.price').innerText = formatPrice(labelPrice);
    } else if (target.closest('.ppatc__popup-link')) {
      const prodUrl = document.querySelector('.ppatc__popup-items').dataset.href;
      window.location.href = prodUrl;
      document.body.classList.remove('ppatc__popup-enabled');
    }
  });
};
