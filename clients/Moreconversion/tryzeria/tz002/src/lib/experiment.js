/*eslint-disable object-curly-newline */
import setup from './services/setup';
import shared from './shared/shared';
import { blackCheckIcon, circleCheckIcon } from './assets/icons';
import { addToCart, getSearchResult } from './helpers/utils';

const { ID } = shared;

const subscription = () => {
  const htmlStr = `
  <div class="${ID}__subscriptionBox ${ID}__productBox" data-type="subscription" data-quanity="1" data-sellingplan="10322706726" data-variant="49808769188134">
      <div class="most-popular">★ MOST POPULAR ★</div>
      <div class='supply-text'>1 Month Supply<br>Subscribe & Save</div>
      <div class="subs-product-container subs-product-image">
          <img src="https://tryzeria.com/cdn/shop/files/Screenshot2024-11-19at4.18.05PM.png" alt="Zeria Drops" class="product-image">
      </div>
      <ul class="features">
        <li class="subsMonthlyDelivery">
          <span>${blackCheckIcon}</span>
          <div class="feature">30-day supply delivered monthly</div> 
          <div class='feature-price'>$44</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">30% off for life</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> African net sponge
          </div>
          <div class='feature-price price-strike-through'>$30</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Sunkissed Secrets Ebook
          </div>
          <div class='feature-price price-strike-through'>$24</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Shipping!
          </div>
          <div class='feature-price price-strike-through'>$12</div>
        </li>
      </ul>
      <div class="interaction-container">
        <div class="counter-box">
          <button class="counter-btn minus">-</button>
          <input type="number" class="counter-input" value="1" min="1" readonly>
          <button class="counter-btn plus">+</button>
        </div>
        <div class="subs-price">
          <span class="subs-original-price subscription-original-price"></span>
          <span class="subs-discounted-price subscription-discounted-price"></span>
        </div>
      </div>
      <div class="reviews">★★★★★ 94,284 Reviews</div>
      <div class="subs-action">
        <button class="subs-add-to-cart ${ID}__atc atc-button product-form__submit button button--full-width button--margin-x main-product-atc">ADD TO CART ▸</button>
      </div>
      <div class="guarantees">
        <p>${circleCheckIcon} Delivered Monthly</p>
        <p>${circleCheckIcon} 365 Money Back Guarantee</p>
        <p>${circleCheckIcon} Online portal for easy cancel, skip, or pause</p>
      </div>
  </div>
  `;

  return htmlStr;
};

const oneTimePurchase = () => {
  const htmlStr = `
  <div class="${ID}__oneTimePurchaseBox ${ID}__productBox" data-type="oneTimePurchase" data-quanity="1" data-variant="49820249358630">
      <div class='supply-text'>1 Month Supply<br>One Time Purchase</div>
      <div class="subs-product-container one-time-product-image">
          <img src="https://tryzeria.com/cdn/shop/files/Screenshot2024-11-19at4.23.42PM.png" alt="Zeria Drops" class="product-image">
      </div>
      <ul class="features">
        <li class="oneTimeMonthlyDelivery">
          <span>${blackCheckIcon}</span>
          <div class="feature">30-day supply</div> 
          <div class='feature-price'>$44</div>
        </li>
        <li class="african-net-sponge">
          <span>${blackCheckIcon}</span>
          <div class="feature">30% off for life</div>
        </li>
        <li class="african-net-sponge">
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> African net sponge
          </div>
          <div class='feature-price price-strike-through'>$30</div>
        </li>
        <li class="african-net-sponge">
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Sunkissed Secrets Ebook
          </div>
          <div class='feature-price price-strike-through'>$24</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Shipping!
          </div>
          <div class='feature-price price-strike-through'>$12</div>
        </li>
      </ul>
      <div class="interaction-container">
        <div class="counter-box">
          <button class="counter-btn minus">-</button>
          <input type="number" class="counter-input" value="1" min="1" readonly>
          <button class="counter-btn plus">+</button>
        </div>
        <div class="subs-price">
          <span class="subs-original-price one-time-original-price">$110</span>
          <span class="subs-discounted-price one-time-discounted-price">$44</span>
        </div>
      </div>
      <div class="reviews">★★★★★ 94,284 Reviews</div>
      <div class="subs-action">
        <button class="subs-add-to-cart ${ID}__atc atc-button product-form__submit button button--full-width button--margin-x main-product-atc">ADD TO CART ▸</button>
      </div>
      <div class="guarantees">
        <p>${circleCheckIcon} FREE SHIPPING</p>
        <p>${circleCheckIcon} 30 DAY MONEY BACK GUARANTEE</p>
      </div>
  </div>
  `;

  return htmlStr;
};

const formatPrice = (price) => {
  return price % 1 === 0 ? `$${price.toFixed(0)}` : `$${price.toFixed(2)}`;
};

const updatePrices = (productBox, quantity) => {
  const oldPriceElem = productBox.querySelector('.subs-original-price');
  const discountPriceElem = productBox.querySelector('.subs-discounted-price');

  const isSubscription = productBox.dataset.type === 'subscription';

  const baseOldPrice = isSubscription
    ? parseFloat(window.subsOldPrice.textContent.replace('$', ''))
    : parseFloat(window.oneTimeOldPrice.textContent.replace('$', ''));

  const baseDiscountPrice = isSubscription
    ? parseFloat(window.subsDiscountedPrice.textContent.replace('$', ''))
    : parseFloat(window.oneTimeDiscountedPrice.textContent.replace('$', ''));

  oldPriceElem.textContent = formatPrice(baseOldPrice * quantity);
  discountPriceElem.textContent = formatPrice(baseDiscountPrice * quantity);
};

//Handle quantity change
const handleQuantityChange = (target, increment) => {
  const counterBox = target.closest('.counter-box');
  const productBox = target.closest(`.${ID}__productBox`);
  const input = counterBox.querySelector('.counter-input');

  //Calculate the new quantity
  const newQuantity = increment
    ? Number(input.value) + 1
    : Math.max(Number(input.value) - 1, 1);

  //Update the input value and prices
  input.value = newQuantity;
  updatePrices(productBox, newQuantity);
};

const init = () => {
  const winterSaleContainer = `
    <div class="${ID}__winterSaleContainer">
      <div class="winter-sale">Winter Sale</div>
      <div class="join-zeria-today">↓ Join Zeria Today ↓</div>
      <div class="box-container">
        ${subscription()}
        ${oneTimePurchase()}
      </div>
    </div>
  `;
  const attachPoint = document.querySelector('#shopify-section-main-product');
  if (!document.querySelector(`.${ID}__winterSaleContainer`)) {
    attachPoint.insertAdjacentHTML('afterend', winterSaleContainer);
  }
  attachPoint.style.display = 'none';

  getSearchResult('https://tryzeria.com/').then((buySection) => {
    const oldPrices = buySection.querySelectorAll('[data-replo-compare-price="true"] span.money');
    const discountedPrices = buySection.querySelectorAll('[data-replo-price="true"] span.money');

    const subsOriginalPriceElem = document.querySelector('.subscription-original-price');
    const oneTimeOriginalPriceElem = document.querySelector('.one-time-original-price');

    const subsDiscountedPriceElem = document.querySelector('.subscription-discounted-price');
    const oneTimeDiscountedPriceElem = document.querySelector('.one-time-discounted-price');

    const subsMonthlyDeliveryElem = document.querySelector('.subsMonthlyDelivery .feature-price');
    const oneTimeMonthlyDeliveryElem = document.querySelector('.oneTimeMonthlyDelivery .feature-price');

    oldPrices.forEach((oldPrice, index) => {
      if (index === 0) {
        window.subsOldPrice = oldPrice;
        subsOriginalPriceElem.textContent = oldPrice.textContent;
      } else if (index === 1) {
        window.oneTimeOldPrice = oldPrice;
        oneTimeOriginalPriceElem.textContent = oldPrice.textContent;
      }
    });

    discountedPrices.forEach((discountedPrice, index) => {
      if (index === 0) {
        window.subsDiscountedPrice = discountedPrice;
        subsDiscountedPriceElem.textContent = discountedPrice.textContent;
        subsMonthlyDeliveryElem.textContent = discountedPrice.textContent;
      } else if (index === 1) {
        window.oneTimeDiscountedPrice = discountedPrice;
        oneTimeDiscountedPriceElem.textContent = discountedPrice.textContent;
        oneTimeMonthlyDeliveryElem.textContent = discountedPrice.textContent;
      }
    });
  });
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.counter-btn.plus')) {
      handleQuantityChange(target, true); //Increment quantity
    } else if (target.closest('.counter-btn.minus')) {
      handleQuantityChange(target, false); //Decrement quantity
    } else if (target.closest(`.${ID}__atc`)) { //add to cart button click
      const productBox = target.closest(`.${ID}__productBox`);
      const quantity = productBox.querySelector('.counter-input').value;
      const { type, variant, sellingplan } = productBox.dataset;

      let payload = {};

      if (type === 'subscription') {
        payload = {
          items: [
            {
              id: variant,
              quantity,
              properties: {},
              selling_plan: sellingplan
            }
          ]
        };
      } else if (type === 'oneTimePurchase') {
        payload = {
          items: [
            {
              id: variant,
              quantity,
              properties: {
              }
            }
          ]
        };
      }
      addToCart(payload);
    }
  });
};
