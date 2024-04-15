import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { getCookie, setCookie } from './helpers/utils';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here

  if (
    window.location.href.includes('products/minimeis-g4') &&
    getCookie('discount_code') !== 'summer149'
  ) {
    window.location.href =
      'https://minimeis.com/discount/summer149?redirect=%2Fproducts%2Fminimeis-g4';
  }

  setCookie('discount_code', 'summer149');
  if (document.querySelector(`.${ID}__price_div`)) return;

  document.querySelector(
    '#AddToCartPrice'
  ).innerHTML = `<div class="price price--large" style="visibility: visible;">
  <dl><div class="price__regular">
      <dt>
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
      </dt>
      <dd class="price__last">
        <span class="price-item price-item--regular money done" data-product-handle="minimeis-g4">149,00€</span>
      </dd>
    </div>
    <div class="price__sale">
      <dt class="price__compare">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
      </dt>
      <dd class="price__compare">
        <s class="price-item price-item--regular">
          <span class="money done" data-product-handle="minimeis-g4">149,00€</span>
        </s>
      </dd>
      <dt>
        <span class="visually-hidden visually-hidden--inline">Sale price</span>
      </dt>
      <dd class="price__last">
        <span class="price-item price-item--sale money done" data-product-handle="minimeis-g4">149,00€</span>
      </dd>
    </div>
    <small class="unit-price caption hidden">
      <dt class="visually-hidden">Unit price</dt>
      <dd class="price__last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </dd>
    </small>
  </dl></div>`;
  document.querySelector('variant-radios').insertAdjacentHTML(
    'afterend',
    `<div class='${ID}__price_div price_div'>
    <div class='old_price'>
    <span id='span-1'>179,00€</span>
    <span id='span-2'></span>
    </div>
    <div class='new_price'>
    <span>149,00€</span>
    </div>
    </div>`
  );

  document
    .querySelector('.product-form__buttons')
    .insertAdjacentHTML('beforeend', "<span id='discount_text'>You save €30</span>");

  //-----------------------------
  //...
};
