import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { productSkuData } from './helpers/data/data';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  const { variants } = window.meta.product;
  const productReviewsDesktop = document.querySelector(
    '#product-detail #product-title-desktop .product-title.main-product-title'
  );
  const productReviewsMobile = document.querySelector(
    '#product-title-mobile .product-title.main-product-title'
  );
  const startClickable = document.querySelector('#product-detail .star-clickable');
  const productSwatchDesktopLists = document.querySelectorAll(
    '#product-detail .product-colour-swatch ul li'
  );
  const swatchDropdownLists = document.querySelectorAll('#product-detail .product-swatch-item');

  const topRatedBadge = `<div class="${ID}__topRatedBadgeWrapper">
    <div class="${ID}__topRatedBadge">
      <span class="${ID}__starSvg">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M4.7712 0.448943L3.36582 3.24838L0.681202 3.69368C0.483089 3.7265 0.304117 3.83106 0.178638 3.9873L0.129874 4.05472C-0.094249 4.40033 -0.0236493 4.86576 0.305736 5.12838L2.50566 6.88246L1.6224 9.96511C1.55675 10.1941 1.59532 10.4403 1.7279 10.6384L1.77761 10.7051C2.04023 11.0227 2.50678 11.0967 2.85779 10.8636L5.49995 9.10801L8.14211 10.8636C8.34098 10.9957 8.58804 11.0341 8.81786 10.9687L8.89228 10.9436C9.27872 10.7927 9.49383 10.3709 9.37751 9.96511L8.49367 6.88246L10.6942 5.12838C10.851 5.00336 10.9559 4.82503 10.9888 4.62764L10.998 4.5499C11.0268 4.13735 10.7365 3.76288 10.3187 3.69368L7.6335 3.24838L6.22871 0.448943C6.14987 0.291833 6.02201 0.164439 5.86433 0.0858843C5.46185 -0.114627 4.97244 0.0479195 4.7712 0.448943Z" fill="#181818"/>
        </svg>
      </span>
      <span>Top Rated</span>
    </div>
  </div>
  `;

  const topRatedBadgeAddition = () => {
    window.DY.deviceInfo.type === 'desktop'
      ? productReviewsDesktop?.insertAdjacentHTML('afterend', topRatedBadge)
      : productReviewsMobile?.insertAdjacentHTML('afterend', topRatedBadge);
    pollerLite([`.${ID}__topRatedBadge`], () => {
      document.querySelector(`.${ID}__topRatedBadge`).addEventListener('click', () => {
        startClickable.click();
      });
    });
  };

  const checkMutations = (list) => {
    list.addEventListener('click', () => {
      document.querySelector(`.${ID}__topRatedBadgeWrapper`) &&
        document.querySelector(`.${ID}__topRatedBadgeWrapper`).remove();
      if (
        list.classList.contains('selected') &&
        productSkuData.includes(list.getAttribute('data-variant-sku')) &&
        !document.querySelector(`.${ID}__topRatedBadgeWrapper`)
      ) {
        topRatedBadgeAddition();
      }
    });
  };

  if (
    variants.length === 1 &&
    productSkuData.includes(variants[0].sku) &&
    !document.querySelector(`.${ID}__topRatedBadgeWrapper`)
  ) {
    topRatedBadgeAddition();
  } else {
    productSwatchDesktopLists.forEach((swatchList) => {
      if (
        swatchList.classList.contains('selected') &&
        productSkuData.includes(swatchList.getAttribute('data-variant-sku')) &&
        !document.querySelector(`.${ID}__topRatedBadgeWrapper`)
      ) {
        topRatedBadgeAddition();
      }
    });
  }

  //dropdown eventlistener
  swatchDropdownLists.forEach((swatchDropdownList) => {
    checkMutations(swatchDropdownList);
  });
  //color swatch eventlistener
  productSwatchDesktopLists.forEach((productSwatchDesktopList) => {
    checkMutations(productSwatchDesktopList);
  });
};
