import modal from './components/modal';
import modalContent from './components/modalContent';
import qtyInput from './components/qtyInput';
import getProductInfo from './helpers/getProductData';
import { formatPrice } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorPoints = document.querySelectorAll('.product-item-actions');

  const fakeButton = (
    id,
    sku
  ) => `<button type="submit" title="kies uw voordeel" class="${id}__openmodal" data-sku="${sku}">
    <span><i class="fas fa-shopping-cart"></i>  kies uw voordeel</span>
  </button>`;

  document.body.insertAdjacentHTML('afterbegin', modal(ID));

  anchorPoints.forEach((anchorPoint) => {
    if (anchorPoint.querySelector(`.${ID}__openmodal`)) return;
    const sku = anchorPoint.querySelector('form').getAttribute('data-product-sku');

    anchorPoint.insertAdjacentHTML('afterbegin', fakeButton(ID, sku));
    anchorPoint
      .querySelector('.action.tocart')
      .insertAdjacentHTML('beforebegin', qtyInput(ID, sku));
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('🚀target:', target);

    if (target.closest(`.${ID}__atc`)) {
      //get sku
      const modalForm = target.closest('.ppatc__popup-form');
      const variantsWrapper = modalForm.querySelector(`.${ID}__variants`);

      const sku = variantsWrapper.getAttribute('data-active-sku');
      const primaryForm = document.querySelector(`form[data-product-sku="${sku}"]`);
      primaryForm.querySelector('button[type="submit"]').click();
      //submit form using js .submit()
    } else if (target.closest(`.${ID}__denyoffer`)) {
      const modalForm = target.closest('.ppatc__popup-form');
      const defaultLabel = modalForm.querySelector('label[data-quantity="1"]');
      const modalSubmitBtn = modalForm.querySelector(`.${ID}__atc`);
      defaultLabel.click();
      modalSubmitBtn.click();
    } else if (target.closest(`.${ID}__openmodal`)) {
      const closestParent = target.closest('.product-item-info');

      const prodUrl = closestParent?.querySelector('a')?.getAttribute('href');
      if (!prodUrl) return;
      getProductInfo(prodUrl).then((productsData) => {
        //console.log('test', productsData);
        if (productsData.variants.length > 1) {
          //update modal
          const { sku } = target.closest('button').dataset;

          const modalInnerContent = document.querySelector('.ppatc__popup-items');
          modalInnerContent.innerHTML = '';
          modalInnerContent.insertAdjacentHTML('afterbegin', modalContent(ID, productsData, sku));
          modalInnerContent.querySelector('label[data-quantity="1"]')?.click();
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
      const sku = labelsWrapper.dataset.activeSku;

      const labelQty = closestLabel.dataset.quantity;
      const labelPrice = closestLabel.dataset.price;
      labelsWrapper.querySelectorAll('label').forEach((item) => {
        item.classList.remove('active');
      });
      closestLabel.classList.add('active');
      const activeInput = document.querySelector(`input[data-sku="${sku}"]`);
      console.log(activeInput, 'activeInput');
      activeInput.value = labelQty;

      modalBody.querySelector('.price').innerText = formatPrice(labelPrice);
    }
  });
};
