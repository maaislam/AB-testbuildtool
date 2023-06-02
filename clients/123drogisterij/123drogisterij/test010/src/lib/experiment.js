import modal from './components/modal';
import qtyInput from './components/qtyInput';
import getProductInfo from './helpers/getProductData';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

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

  const fakeButton = `<button type="submit" title="kies uw voordeel" class="${ID}__openmodal">
    <span><i class="fas fa-shopping-cart"></i>  kies uw voordeel</span>
  </button>`;

  document.body.insertAdjacentHTML('afterbegin', modal(ID));

  anchorPoints.forEach((anchorPoint) => {
    if (anchorPoint.querySelector(`.${ID}__openmodal`)) return;
    anchorPoint.insertAdjacentHTML('afterbegin', fakeButton);
    //anchorPoint.querySelector('.action.tocart').insertAdjacentHTML('beforebegin', qtyInput(ID));
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    console.log('🚀target:', target);

    if (target.closest(`.${ID}__atc`)) {
      //get sku
      const sku = target.closest('button').getAttribute('data-sku');
      const primaryForm = document.querySelector(`form[data-product-sku="${sku}"]`);
      const primaryAtc = primaryForm.querySelector('.action.tocart');
      const qty = target.closest('.ppatc__popup-form').querySelector(`.${ID}__offerqty`).innerText;
      //place quantity
      if (!primaryForm.querySelector(`.${ID}__fakeqty`)) {
        primaryAtc.insertAdjacentHTML('beforebegin', qtyInput(ID, qty));
      }
      primaryForm.submit();
      //submit form using js .submit()
    } else if (target.closest(`.${ID}__denyoffer`)) {
      const sku = target
        .closest('.ppatc__popup-form')
        .querySelector(`.${ID}__atc`)
        .getAttribute('data-sku');
      const primaryForm = document.querySelector(`form[data-product-sku="${sku}"]`);
      const primaryAtc = primaryForm.querySelector('.action.tocart');
      primaryForm.querySelector(`.${ID}__fakeqty`)?.remove();
      primaryAtc.click();
    } else if (target.closest(`.${ID}__openmodal`)) {
      const closestParent = target.closest('.product-item-info');
      const prdImg = closestParent.querySelector('.product-image-photo').getAttribute('src');
      const prodTitle = closestParent.querySelector('.product-item-link').innerText;
      const prodPrice = closestParent.querySelector('.price').innerText;
      const sku = closestParent.querySelector('[data-product-sku]').dataset.productSku;

      const prodUrl = closestParent?.querySelector('a')?.getAttribute('href');
      if (!prodUrl) return;
      getProductInfo(prodUrl).then((radioVal) => {
        console.log('test', radioVal);
        if (radioVal > 1) {
          //update modal
          const img = document.querySelector(`.${ID}__offerimg>i`);
          const title = document.querySelector(`.${ID}__title`);
          const price = document.querySelector(`.${ID}__offerprice`);
          const qty = document.querySelector(`.${ID}__offerqty`);
          const atc = document.querySelector(`.${ID}__atc`);
          img.style.backgroundImage = `url(${prdImg})`;
          title.innerText = prodTitle;
          price.innerText = prodPrice;
          qty.innerText = radioVal;
          atc.setAttribute('data-sku', sku);
          document.body.classList.add('ppatc__popup-enabled');
          return;
        }

        closestParent.querySelector('.action.tocart').click();
      });
    }
  });
};
