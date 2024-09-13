/*eslint-disable prefer-destructuring */
import setup from './services/setup';
import shared from './shared/shared';
import { getCartCallback, getLocalThreshold, pollerLite } from './helpers/utils';
import progressBar from './components/progressBar';

const { ID } = shared;

const init = () => {
  const DOLLAR_THRESHOLD = 125;
  //eslint-disable-next-line no-unused-vars
  let dollar;
  const { formattedAmount, roundedAmount, formattedAmount1 } = getLocalThreshold(DOLLAR_THRESHOLD);

  if (formattedAmount1.includes('USD')) {
    //eslint-disable-next-line no-const-assign
    dollar = formattedAmount1.split('USD</span>')[0].split('class=money>')[1].trim();
  }

  const stickyFirstMsg = document.querySelector(
    'div[data-section-type="header"] .acc-top-bar__left .acc-top-bar__text'
  );

  const productPolicy = document.querySelector(
    '.product-price-copy-coupon-code .product__policies'
  );

  const imageSource = document.querySelector(
    '.product-single__meta .product-block .image-wrap img'
  );
  imageSource.src =
    'https://cdn.shopify.com/s/files/1/0541/4132/1390/files/new_delivery_usp.png?v=1720468883';

  imageSource.srcset =
    'https://cdn.shopify.com/s/files/1/0541/4132/1390/files/new_delivery_usp.png?v=1720468883';

  if (dollar) {
    stickyFirstMsg.innerHTML = `FREE SHIPPING OVER ${dollar}+`;
    productPolicy.innerHTML = `Free shipping on orders over ${dollar}`;
  } else {
    stickyFirstMsg.innerHTML = `FREE SHIPPING OVER ${formattedAmount1}+`;
    productPolicy.innerHTML = `Free shipping on orders over ${formattedAmount1}`;
  }

  getCartCallback((cartData) => {
    const subTotal = cartData.total_price / 100;

    //console.log('basketTotalPrice: ', basketTotalPrice);
    const isThresholdMet = subTotal < roundedAmount;

    const progressWidth = (subTotal / roundedAmount) * 100;
    const deductedPrice = isThresholdMet && roundedAmount - subTotal;

    const shippingInfoHtml = `
      <div class='${ID}__shippingInfo'>
        <div class="${ID}__discountProgressCard">
          ${progressBar(
            ID,
            progressWidth.toFixed(2),
            deductedPrice,
            isThresholdMet,
            formattedAmount
          )}
        </div>
      </div>
    `;

    const anchorPoint =
      document.querySelector('.rebuy-cart__flyout-content.has-items') ||
      document.querySelector('#CartDrawer.drawer--is-open .drawer__inner') ||
      document.querySelector('.drawer__inner');

    if (document.querySelector(`.${ID}__shippingInfo`)) {
      document.querySelectorAll(`.${ID}__shippingInfo`).forEach((el) => el.remove());
    }

    anchorPoint?.insertAdjacentHTML('afterbegin', shippingInfoHtml);
  });
};

export default () => {
  setup();

  const { pathname } = window.location;
  const isMetalBundles =
    pathname.includes('/products/metalbundles') && !pathname.includes('/products/metalbundles6');
  const isKittyspoutKit =
    pathname.includes('/products/the-kittyspout-kit') &&
    !pathname.includes('/products/the-kittyspout-kit6');
  if (isMetalBundles) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles6';
  } else if (isKittyspoutKit) {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/the-kittyspout-kit6';
  }

  init();

  document.addEventListener('rebuy:cart.change', () => {
    init();
    pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
      init();
    });
    if (document.querySelector('#CartDrawer.drawer--is-open.is-empty')) {
      document.querySelector(`#CartDrawer .${ID}__shippingInfo`)?.remove();
    }
    if (document.querySelector('.rebuy-cart__flyout-content.no-items')) {
      document.querySelector(`.rebuy-cart__flyout-content .${ID}__shippingInfo`)?.remove();
    }
  });
};
