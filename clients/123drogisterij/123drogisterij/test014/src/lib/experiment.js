import modal from './components/modal';
import modalContent from './components/modalContent';
//import qtyInput from './components/qtyInput';
import getProductInfo from './helpers/getProductData';
import { formatPrice } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();

  let flag = false;

  const anchorPoint = document.querySelector('.product-add-form');

  const fakeButton = (id, sku) =>
    `<button type="button" title="In Winkelmand" class="action primary tocart ${id}__openmodal" id="product-addtocart-button" data-sku="${sku}">
      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
      <span>In Winkelmand</span>
    </button>`;

  document.body.insertAdjacentHTML('afterbegin', modal(ID));

  if (anchorPoint.querySelector(`.${ID}__openmodal`)) return;
  const sku = anchorPoint.querySelector('form').getAttribute('data-product-sku');

  anchorPoint
    .querySelector('#product-addtocart-button')
    .insertAdjacentHTML('beforebegin', fakeButton(ID, sku));
  //anchorPoint
  //.querySelector(`.action.tocart:not(.${ID}__openmodal)`)
  //.insertAdjacentHTML('beforebegin', qtyInput(ID, sku));

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__atc`)) {
      const modalForm = target.closest('.ppatc__popup-form');
      const variantsWrapper = modalForm.querySelector(`.${ID}__variants`);
      const sku = variantsWrapper.getAttribute('data-active-sku');
      const primaryForm = document.querySelector(`form[data-product-sku="${sku}"]`);
      primaryForm.querySelector(`button[type="submit"]:not(.${ID}__openmodal)`).click();
    } else if (target.closest(`.${ID}__denyoffer`)) {
      const modalForm = target.closest('.ppatc__popup-form');
      const defaultLabel = modalForm.querySelector('label[data-quantity="1"]');
      const modalSubmitBtn = modalForm.querySelector(`.${ID}__atc`);
      defaultLabel.click();
      modalSubmitBtn.click();
    } else if (target.closest(`.${ID}__openmodal`)) {
      const closestParent = target.closest('.column.main');
      const productsData = getProductInfo(closestParent);

      const quantity = document.querySelector(
        `form[data-product-sku="${sku}"] input[type="number"].input-text`
      )?.value;

      const firstOptionQuantity = document.querySelector(
        `form[data-product-sku="${sku}"] label.custom-child-upsel-one input.custupsellpro`
      )?.value;

      if (productsData.variants.length > 1 && parseInt(quantity) < parseInt(firstOptionQuantity)) {
        const { sku } = target.closest('button').dataset;
        const modalInnerContent = document.querySelector('.ppatc__popup-items');
        modalInnerContent.innerHTML = '';
        modalInnerContent.insertAdjacentHTML('afterbegin', modalContent(ID, productsData, sku));
        modalInnerContent.querySelector('label[data-quantity="1"]')?.click();
        modalInnerContent.setAttribute('data-href', window.location.href);
        document.body.classList.add('ppatc__popup-enabled');

        return;
      }
      closestParent.querySelector(`.action.tocart:not(.${ID}__openmodal)`).click();
    } else if (target.closest(`.${ID}__variant`)) {
      const closestLabel = target.closest('label');
      const labelsWrapper = target.closest(`.${ID}__variants`);
      const modalBody = target.closest('.ppatc__popup-form');
      const sku = labelsWrapper.dataset.activeSku;

      const labelQty = closestLabel.dataset.quantity;
      const labelPrice = closestLabel.dataset.price;
      labelsWrapper.querySelectorAll('label').forEach((item) => {
        item.classList.remove('active');
      });
      closestLabel.classList.add('active');

      const activeInput = document.querySelector(
        `form[data-product-sku="${sku}"] input[type="number"].input-text`
      );

      if (
        (closestLabel.dataset.quantity !== '1' && !flag) ||
        (closestLabel.dataset.quantity === '1' && flag)
      ) {
        activeInput.value = labelQty;
        flag = !flag;
      }

      modalBody.querySelector('.price').innerText = formatPrice(labelPrice);
    }
  });
};
