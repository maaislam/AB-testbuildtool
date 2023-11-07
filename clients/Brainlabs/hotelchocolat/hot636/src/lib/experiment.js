import discountOfferMessage from './components/discountOfferMessage';
import progressBar from './components/progressBar';
import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const showInBasket = true;
const couponCode = 'HOHOHO';

const { ID, VARIATION } = shared;

const init = () => {
  const isMobile = () => document.querySelector('nav.stuckMenu');
  const thresholdPrice = 30;
  const location = window.location.href;
  const basketTotalPriceElem = document.querySelector('.mini-cart-subtotals .subtotal');
  const basketTotalPrice = basketTotalPriceElem
    ? +basketTotalPriceElem.textContent.replace('£', '')
    : 0;

  const isThresholdMet = basketTotalPrice < thresholdPrice;

  const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
  const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

  const discountProgressCardHtml = `
    <div class="${ID}__discountProgressCard">
      ${discountOfferMessage(ID, isThresholdMet, deductedPrice)}
      ${progressBar(ID, progressWidth.toFixed(2))}
    </div>
  `;

  if (
    showInBasket &&
    location.includes('/basket') &&
    !document.querySelector(`.${ID}__discountProgressCard`)
  ) {
    const anchorPoint = document.querySelector('#page_heading');
    const appendPosition = isMobile() ? 'beforebegin' : 'afterend';
    anchorPoint.insertAdjacentHTML(appendPosition, discountProgressCardHtml);
    document
      .querySelector(`.${ID}__discountProgressCard`)
      .classList.add(`${ID}__basketProgressCard`);

    if (isThresholdMet) return;

    const couponInput = document.querySelector('.voucher-field input');
    const couponApplyBtn = document.querySelector('#add-coupon');
    const couponError = document.querySelector('.cart-coupon-code .coupon-error');
    const discountApplied = document.querySelector('.order-discount.discount');

    if (couponError.innerText.trim() !== '' || discountApplied) return;
    //not working
    couponInput.value = couponCode;
    couponApplyBtn.click();
    console.log('🚀 ~ file: experiment.js:47 ~ init ~ couponApplyBtn:', couponApplyBtn);
  } else if (
    !location.includes('/checkout') &&
    !document.querySelector(`.${ID}__miniCartProgressCard`) &&
    basketTotalPrice > 0
  ) {
    const anchorPoint = document.querySelector('.mini-cart-header');
    anchorPoint.insertAdjacentHTML('afterend', discountProgressCardHtml);

    const miniCardProgressCard = document.querySelector(
      `.mini-cart-content .${ID}__discountProgressCard`
    );
    miniCardProgressCard.classList.add(`${ID}__miniCartProgressCard`);
  }
};

export default () => {
  setup();
  const isCartEmpty = () => document.querySelector('.mini-cart-content.empty');
  if (!isCartEmpty()) {
    console.log('cart has items');
    //conditions met
  }

  if (VARIATION === 'control') return;
  init();
  const configObj = {
    childList: true,
    subtree: false
  };
  observeDOM('#mini-cart .drop-down-options', init, configObj);
};
