//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import fakeIframe from './components/fakeIframe';
import newCartButton from './components/newCartButton';
import addToCart from './helpers/addToCart';
import openMiniCart from './helpers/openMiniCart';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  if (sessionStorage.getItem('reloaded-by-atc')) {
    sessionStorage.removeItem('reloaded-by-atc');
    openMiniCart(ID);
  }

  const oldCartButton = document.getElementById('product-addtocart-button');
  const atcForm = document.getElementById('product_addtocart_form');

  //preselect first option

  const priceRadioCount = atcForm.querySelectorAll('label').length;
  if (priceRadioCount > 1 || (priceRadioCount === 1 && atcForm.querySelector('label>input'))) {
    const highestVal = [...atcForm.querySelectorAll('label')]
      .map((item) => item.querySelector('input').getAttribute('value'))
      .reduce((prev, curr) => {
        return Math.max(prev, curr);
      });

    atcForm.querySelector(`label>input[value="${highestVal}"]`)?.click();
  }

  const checkVariantSelection = () => {
    const selectElem = document.querySelector('#attribute162');
    if (!selectElem) return;
    const noVariantSelected = selectElem && selectElem.value === '';
    const atcBtn = document.querySelector(`.${ID}__product-addtocart-button`);
    noVariantSelected ? atcBtn.classList.add('inactive') : atcBtn.classList.remove('inactive');
  };

  //get selected upsell val
  const getSelectedUpsell = () => {
    const activeUpsell = atcForm.querySelector('label.active>input');
    const activeUpsellKey = activeUpsell?.getAttribute('name') || '';
    return {
      upsellKey: activeUpsellKey,
      upsellValue: activeUpsell?.value || ''
    };
  };

  const getQuantity = () => {
    const quantityInput = document.querySelector('.box-tocart input[type="number"]');

    return quantityInput.value;
  };

  const getAtcPayload = () => {
    const productId = atcForm.querySelector('input[name="product"]').value;
    const formKey = atcForm.querySelector('input[name="form_key"]').value;
    const relatedProd = atcForm.querySelector('#related-products-field')?.value || '';
    const configOption =
      atcForm.querySelector('[name="selected_configurable_option"]')?.value || '';
    const variantOption = atcForm.querySelector('#attribute162')?.value || '';
    const { upsellKey, upsellValue } = getSelectedUpsell();
    const payload = {
      product: productId,
      selected_configurable_option: configOption,
      related_product: relatedProd,
      'super_attribute[162]': variantOption,
      form_key: formKey,
      [upsellKey]: upsellValue,
      qty: getQuantity()
    };
    return Object.keys(payload)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
      .join('&');
  };

  //render new button
  oldCartButton.classList.add(`${ID}__hide`);
  document.querySelector(`.${ID}__product-addtocart-button`)?.remove();
  oldCartButton.insertAdjacentHTML('beforebegin', newCartButton(ID));
  checkVariantSelection();

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__product-addtocart-button`) && !target.closest('.inactive')) {
      console.time('ATC');
      target.closest('.box-tocart').classList.add('adding');
      const formAction = atcForm.getAttribute('action');
      addToCart(formAction, getAtcPayload()).then(() => {
        document.body.insertAdjacentHTML('beforeend', fakeIframe(ID));
        document.querySelector(`.${ID}__fake-iframe`).addEventListener('load', () => {
          console.timeEnd('ATC');
          setTimeout(() => {
            window.location.reload();
            sessionStorage.setItem('reloaded-by-atc', true);
          }, 500);
        });
      });
    } else if (target.closest(`.${ID}__product-addtocart-button`) && target.closest('.inactive')) {
      oldCartButton.click();
    } else if (
      (target.closest(`.${ID}__overlay`) || target.closest('#btn-minicart-close')) &&
      document.querySelector(`.${ID}__overlay`)
    ) {
      window.location.reload();
    }
  });

  document.body.addEventListener('change', ({ target }) => {
    if (target.matches('#attribute162')) {
      checkVariantSelection();
    }
  });
};
