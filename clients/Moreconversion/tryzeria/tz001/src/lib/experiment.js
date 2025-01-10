import setup from './services/setup';
import shared from './shared/shared';
import { blackCheckIcon, circleCheckIcon } from './assets/icons';

const { ID } = shared;

const quantityMappping = {
  1: 'buy 1 + 1 free',
  2: 'buy 2 + 2 free',
  3: 'buy 3 + 3 free'
};

const subscriptionOldPriceMappping = {
  1: '$44.95',
  2: '$69.95',
  3: '$79.95'
};

const subscription = () => {
  const htmlStr = `
  <div class="${ID}__subscriptionBox ${ID}__productBox" data-type="subscription" data-quanity="1">
      <div class="most-popular">★ MOST POPULAR ★</div>
      <div class='supply-text'>1 Month Supply<br>Subscribe & Save</div>
      <div class="subs-product-container subs-product-image">
          <img src="https://cdn.shopify.com/s/files/1/0852/0584/4262/files/file_44.png?v=1735425213" alt="Zeria Drops" class="product-image">
      </div>
      <ul class="features">
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">30-day supply delivered monthly</div> 
          <div class='feature-price'>$44</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">30% off for life</div>
        </li>
        <li class="african-net-sponge">
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> African net sponge
          </div>
          <div class='feature-price'>$30</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Sunkissed Secrets Ebook
          </div>
          <div class='feature-price'>$24</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Shipping!
          </div>
          <div class='feature-price'>$12</div>
        </li>
      </ul>
      <div class="interaction-container">
        <div class="counter-box">
          <button class="counter-btn minus">-</button>
          <input type="number" class="counter-input" value="1" min="1" max="3" readonly>
          <button class="counter-btn plus">+</button>
        </div>
        <div class="subs-price">
          <span class="subs-original-price subscription-original-price">$110</span>
          <span class="subs-discounted-price subscription-discounted-price">$44</span>
        </div>
      </div>
      <div class="reviews">★★★★★ 97,439 Reviews</div>
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
  <div class="${ID}__oneTimePurchaseBox ${ID}__productBox" data-type="oneTimePurchase" data-quanity="1">
      <div class='supply-text'>1 Month Supply<br>One Time Purchase</div>
      <div class="subs-product-container one-time-product-image">
          <img src="https://cdn.shopify.com/s/files/1/0852/0584/4262/files/file_44.png?v=1735425213" alt="Zeria Drops" class="product-image">
      </div>
      <ul class="features">
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">30-day supply</div> 
          <div class='feature-price'>$44</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">30% off for life</div>
        </li>
        <li class="african-net-sponge">
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> African net sponge
          </div>
          <div class='feature-price'>$30</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Sunkissed Secrets Ebook
          </div>
          <div class='feature-price'>$24</div>
        </li>
        <li>
          <span>${blackCheckIcon}</span>
          <div class="feature">
            <span>FREE</span> Shipping!
          </div>
          <div class='feature-price'>$12</div>
        </li>
      </ul>
      <div class="interaction-container">
        <div class="counter-box">
          <button class="counter-btn minus">-</button>
          <input type="number" class="counter-input" value="1" min="1" max="3" readonly>
          <button class="counter-btn plus">+</button>
        </div>
        <div class="subs-price">
          <span class="subs-original-price one-time-original-price">$110</span>
          <span class="subs-discounted-price one-time-discounted-price">$44</span>
        </div>
      </div>
      <div class="reviews">★★★★★ 97,439 Reviews</div>
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
};

const packageSelection = (target, matchedCtrlInputElem) => {
  const ctrlSubscriptInputElem = document.querySelector('.sls-option-container:not(.sls-disabled-option-container) [type="radio"][data-type="subscription"]');
  const ctrlOneTimePurchaseInputElem = document.querySelector('[data-one-time-option-radio] [type="radio"][data-type="one_time"]');

  if (matchedCtrlInputElem) {
    matchedCtrlInputElem.click();
  }

  //check target parent data-type
  const productBoxElem = target.closest(`.${ID}__productBox`);
  if (productBoxElem.dataset.type === 'subscription') {
    ctrlSubscriptInputElem.click();
  } else if (productBoxElem.dataset.type === 'oneTimePurchase') {
    ctrlOneTimePurchaseInputElem.click();
  }
};

const setPriceForQuantity = (target, currentQuantity) => {
  const ctrlSubscriptInputElem = document.querySelector('.sls-option-container:not(.sls-disabled-option-container) [type="radio"][data-type="subscription"]');
  const ctrlOneTimePurchaseInputElem = document.querySelector('[data-one-time-option-radio] [type="radio"][data-type="one_time"]');

  let price = '';
  const productBoxElem = target.closest(`.${ID}__productBox`);
  if (productBoxElem.dataset.type === 'subscription') {
    const currentBoxPriceElem = productBoxElem.querySelector('.subscription-discounted-price');
    const boxOriginalPriceElem = productBoxElem.querySelector('.subscription-original-price');
    const currentTablePriceElem = productBoxElem.querySelector('.feature-price');
    const rowElem = ctrlSubscriptInputElem.closest('.seal-row');
    const priceElem = rowElem.querySelector('.sls-total-price .seal-money');
    const oldPrice = subscriptionOldPriceMappping[currentQuantity];
    //new price update
    price = priceElem.textContent;
    currentBoxPriceElem.textContent = price;
    currentTablePriceElem.textContent = price;
    //old price update
    boxOriginalPriceElem.textContent = oldPrice;
  } else if (productBoxElem.dataset.type === 'oneTimePurchase') {
    const currentBoxPriceElem = productBoxElem.querySelector('.one-time-discounted-price');
    const currentTablePriceElem = productBoxElem.querySelector('.feature-price');
    const rowElem = ctrlOneTimePurchaseInputElem.closest('.seal-row');
    const priceElem = rowElem.querySelector('.seal-money');

    price = priceElem.textContent;
    currentBoxPriceElem.textContent = price;
    currentTablePriceElem.textContent = price;
  }
};

const setImageForQuantity = (target, matchedCtrlInputElem) => {
  const productBoxElem = target.closest(`.${ID}__productBox`);
  const ctrlQuantityLabel = matchedCtrlInputElem.nextElementSibling;
  const ctrlSelectedPackageImgElem = ctrlQuantityLabel.querySelector('img');
  const ctrlSelectedPackageImgSrc = ctrlSelectedPackageImgElem.getAttribute('src');

  if (productBoxElem.dataset.type === 'subscription') {
    const productImageElem = productBoxElem.querySelector('.subs-product-image img');
    productImageElem.src = ctrlSelectedPackageImgSrc;
  } else if (productBoxElem.dataset.type === 'oneTimePurchase') {
    const productImageElem = productBoxElem.querySelector('.one-time-product-image img');
    productImageElem.src = ctrlSelectedPackageImgSrc;
  }
};

const initializeBoxes = () => {
  const ctrlCheckedQuantityElem = document.querySelector('input[name="Quantity"]:checked');

  if (ctrlCheckedQuantityElem) {
    const quantityValue = ctrlCheckedQuantityElem.value.toLowerCase();
    const matchedQuantity = Object.keys(quantityMappping).find(
      (key) => quantityMappping[key].toLowerCase() === quantityValue
    );

    if (matchedQuantity) {
      const productBoxes = document.querySelectorAll(`.${ID}__productBox`);

      productBoxes.forEach((productBox) => {
        const counterInput = productBox.querySelector('.counter-input');
        counterInput.value = matchedQuantity;
        productBox.setAttribute('data-quanity', matchedQuantity);

        //Update price and image for the selected quantity
        setPriceForQuantity(counterInput, matchedQuantity);
        setImageForQuantity(counterInput, ctrlCheckedQuantityElem);
      });
    }
  }
};

const updateDataQuantity = (target, quantityValue) => {
  const productBoxElem = target.closest(`.${ID}__productBox`);
  productBoxElem.setAttribute('data-quanity', quantityValue);
};

export default () => {
  setup();
  init();
  initializeBoxes();

  const DOMRENDERDELAY = 250;
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.counter-btn.plus')) {
      const counterBox = target.closest('.counter-box');
      const input = counterBox.querySelector('.counter-input');

      const value = Number(input.value) + 1;
      const quantityValue = quantityMappping[value];
      const quantityValueUppercase = quantityValue.toUpperCase();
      const matchedCtrlInputElem = document.querySelector(`input[name="Quantity"][value="${quantityValueUppercase}"]`);

      input.value = value;

      packageSelection(target, matchedCtrlInputElem);
      updateDataQuantity(target, value);
      setTimeout(() => {
        setPriceForQuantity(target, value);
        setImageForQuantity(target, matchedCtrlInputElem);
      }, DOMRENDERDELAY);
    } else if (target.closest('.counter-btn.minus')) {
      const counterBox = target.closest('.counter-box');
      const input = counterBox.querySelector('.counter-input');

      const value = Number(input.value) - 1;
      const quantityValue = quantityMappping[value];
      const quantityValueUppercase = quantityValue.toUpperCase();
      const matchedCtrlInputElem = document.querySelector(`input[name="Quantity"][value="${quantityValueUppercase}"]`);

      input.value = value;

      packageSelection(target, matchedCtrlInputElem);
      updateDataQuantity(target, value);
      setTimeout(() => {
        setPriceForQuantity(target, value);
        setImageForQuantity(target, matchedCtrlInputElem);
      }, DOMRENDERDELAY);
    } else if (target.closest(`.${ID}__atc`)) { //add to cart button click
      const ctrlAtcBtn = document.querySelector('#ProductSubmitButton-main-product');
      const counterInput = target.closest(`.${ID}__productBox`).querySelector('.counter-input');

      const quantityValue = quantityMappping[counterInput.value];
      const quantityValueUppercase = quantityValue.toUpperCase();
      const matchedCtrlInputElem = document.querySelector(`input[name="Quantity"][value="${quantityValueUppercase}"]`);

      packageSelection(target, matchedCtrlInputElem);

      setTimeout(() => ctrlAtcBtn.click(), DOMRENDERDELAY);
    }
  });
};
