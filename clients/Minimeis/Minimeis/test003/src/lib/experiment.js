/* eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  //use if needed
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //top banner copy chnages
  const topBanner = document.getElementById('shopify-section-black-friday-announcement-bar');
  const discountSections = document.querySelectorAll('.discount__banner-inner');
  if (topBanner) {
    topBanner.querySelector('.left-title').innerText = 'FREE SHOES';
    topBanner.querySelector('.center-title').innerText = 'HAPPYSHOES';
  }
  discountSections.forEach((discountSection) => {
    discountSection.querySelector('.discount__banner-title').innerText = 'FREE SHOES';
    discountSection.querySelector('.discount__banner-list li:nth-child(2) p').innerText =
      '2. Add shoes to cart';
    discountSection.querySelector('.discount__banner-list li:nth-child(3) p strong').innerText =
      'HAPPYSHOES';
  });
};
