import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';
import { pollerLite, observeDOM, setCookie, deleteCookie } from './helpers/utils';
import progressBar from './components/progressBar';
import data from './data/data';
import getTotalPrice from './helpers/getTotalPrice';

const { ID } = shared;

const removeElementFromDOM = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  }
};

const updateProgressBar = (amount) => {
  const firstBar = document.getElementById('firstBar');
  const secondBar = document.getElementById('secondBar');
  const thirdBar = document.getElementById('thirdBar');

  //Threshold variables
  const firstThreshold = 200;
  const secondThreshold = 250;
  const thirdThreshold = 300;

  //Max widths for each bar
  const firstMaxWidth = 18;
  const secondMaxWidth = 32;
  const thirdMaxWidth = 50;

  //Calculate widths using ternary operators
  const firstBarWidth =
    amount <= firstThreshold ? (amount / firstThreshold) * firstMaxWidth : firstMaxWidth;

  const secondBarWidth =
    amount > firstThreshold && amount <= secondThreshold
      ? ((amount - firstThreshold) / (secondThreshold - firstThreshold)) * secondMaxWidth
      : amount > secondThreshold
        ? secondMaxWidth
        : 0;

  const thirdBarWidth =
    amount > secondThreshold && amount <= thirdThreshold
      ? ((amount - secondThreshold) / (thirdThreshold - secondThreshold)) * thirdMaxWidth
      : amount > thirdThreshold
        ? thirdMaxWidth
        : 0;

  //Set the widths for each progress bar
  firstBar.style.width = `${firstBarWidth}%`;
  secondBar.style.width = `${secondBarWidth}%`;
  thirdBar.style.width = `${thirdBarWidth}%`;
};

const init = () => {
  const thresholdPrice = 300;
  const freeShippingThreshold = 200;
  const getFivePercentThreshold = 250;

  // const basketTotalPriceCtrl = () => document.querySelector('.slidecart-subtotal');

  (async () => {
    const totalPrice = await getTotalPrice();
    console.log(`Total Price: ${totalPrice}`);
    pollerLite([() => totalPrice], () => {
      const basketTotalPrice = totalPrice || 0;

      const status =
        basketTotalPrice < freeShippingThreshold
          ? 'Get Free Shipping'
          : basketTotalPrice >= freeShippingThreshold && basketTotalPrice < getFivePercentThreshold
            ? 'Get 5% OFF'
            : basketTotalPrice >= getFivePercentThreshold && basketTotalPrice < thresholdPrice
              ? 'Get 10% OFF'
              : 'full';

      const extraPrice =
        basketTotalPrice < freeShippingThreshold
          ? (freeShippingThreshold - basketTotalPrice).toFixed(2)
          : basketTotalPrice < getFivePercentThreshold
            ? (getFivePercentThreshold - basketTotalPrice).toFixed(2)
            : basketTotalPrice < thresholdPrice
              ? (thresholdPrice - basketTotalPrice).toFixed(2)
              : 0;

      const shippingInfoHtml = `
      <div class='${ID}__shippingInfo'>
      <div class="${ID}__discountProgressCard">
      ${progressBar(ID, status, extraPrice, data)}
      </div>
      </div>
      `;

      const discountInputElem = document.querySelector('[name="discount_code"]');
      const discountSubmitBtnElem = document.querySelector('.discount-box button[type="submit"]');

      const anchorPoint = document.querySelector('#slidecarthq .items');
      removeElementFromDOM(`.${ID}__shippingInfo`);
      anchorPoint?.insertAdjacentHTML('beforebegin', shippingInfoHtml);
      updateProgressBar(basketTotalPrice);

      if (sessionStorage.getItem('SLIDECART_CHECKOUT_DATA')) {
        console.log('Removing checkout data from session storage');
        sessionStorage.removeItem('SLIDECART_CHECKOUT_DATA');
      }

      if (basketTotalPrice >= getFivePercentThreshold && basketTotalPrice < thresholdPrice) {
        deleteCookie('discount_code');
        setCookie('discount_code', 'GET5OFF');

        console.log('add GET5OFF');
        if (discountInputElem) discountInputElem.value = 'GET5OFF';
        if (discountSubmitBtnElem) discountSubmitBtnElem.click();
      } else if (basketTotalPrice >= thresholdPrice) {
        deleteCookie('discount_code');
        setCookie('discount_code', 'GET10OFF');

        console.log('add GET10OFF');
        if (discountInputElem) discountInputElem.value = 'GET10OFF';
        if (discountSubmitBtnElem) discountSubmitBtnElem.click();
      } else {
        deleteCookie('discount_code');
      }
    });
  })();
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('a[aria-controls="CartDrawer"]')) {
      const cartElement = document.querySelector('#slidecarthq .slidecarthq');
      const isCartItems = cartElement.querySelector('.items')?.childElementCount;
      pollerLite([() => cartElement.classList.contains('open') && isCartItems], () => {
        init();
      });
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  observeDOM('#slidecarthq header .cart-count', () => {
    const cartElement = document.querySelector('#slidecarthq .slidecarthq');
    const isCartItems = cartElement?.querySelector('.items')?.childElementCount;
    console.log('🚀 ~ observeDOM ~ isCartItems:', isCartItems);
    if (isCartItems) {
      init();
    } else {
      removeElementFromDOM(`.${ID}__shippingInfo`);
    }
  });
};
