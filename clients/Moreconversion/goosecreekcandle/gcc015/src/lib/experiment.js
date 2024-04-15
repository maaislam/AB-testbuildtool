import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  console.log(ID);

  if (VARIATION === '1') {
    //desktop portion
    const desktopProductHeader = document.querySelector(
      '.product-info-wrapper .product-description-header'
    );
    const newWrapper = document.createElement('div');
    newWrapper.className = `${ID}__reviews-pricing-container`;
    const desktopReviews = document.querySelector(
      '.product-info-wrapper div[data-oke-reviews-product-id]'
    );
    const desktopProductPrice = document.querySelector(
      '.product-info-wrapper .product-page--pricing'
    );

    desktopProductPrice && newWrapper.appendChild(desktopProductPrice);
    desktopReviews && newWrapper.appendChild(desktopReviews);

    if (document.querySelector(`.${ID}__reviews-pricing-container`)) {
      document.querySelector(`.${ID}__reviews-pricing-container`).remove();
    }
    desktopProductHeader.insertAdjacentElement('afterend', newWrapper);

    //mobile portion
    const targetWrapperForMobile = document.querySelector('.product-description-main-wrapper');
    const newWrapperForMobile = document.createElement('div');
    newWrapperForMobile.className = `mobile-info-container ${ID}__reviews-pricing-container-mobile`;

    const mobileReviews = document.querySelector(
      '.mobile-info-container div[data-oke-reviews-product-id]'
    );

    const mobilePricing = document.querySelector('.mobile-info-container .product-page--pricing');

    mobileReviews && newWrapperForMobile.appendChild(mobileReviews);
    mobilePricing && newWrapperForMobile.appendChild(mobilePricing);
    if (document.querySelector(`.${ID}__reviews-pricing-container-mobile`)) {
      document.querySelector(`.${ID}__reviews-pricing-container-mobile`).remove();
    }
    targetWrapperForMobile.insertAdjacentElement('beforebegin', newWrapperForMobile);
  }

  if (VARIATION === '2') {
    //desktop portion
    const desktopProductHeader = document.querySelector(
      '.product-info-wrapper .product-description-header'
    );

    const desktopReviews = document.querySelector(
      '.product-info-wrapper div[data-oke-reviews-product-id]'
    );

    desktopProductHeader.insertAdjacentElement('beforebegin', desktopReviews);

    //mobile protion
    const mobileInfoWrapper = document.querySelector('.mobile-info-container');
    const targetWrapperForMobile = document.querySelector('.product-description-main-wrapper');

    targetWrapperForMobile &&
      targetWrapperForMobile.insertAdjacentElement('beforebegin', mobileInfoWrapper);
  }
};
