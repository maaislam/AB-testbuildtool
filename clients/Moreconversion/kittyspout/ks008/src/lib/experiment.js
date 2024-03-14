import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const moveSocialProofSection = (target) => {
  const socialProofSection = document.querySelector('[src*="//www.kittyspout.com/cdn/shop/files/fbcomments"]').closest('.shopify-section');
  socialProofSection.classList.add(`${ID}__social-proof-section`);
  target.insertAdjacentElement('afterend', socialProofSection);
}

export default () => {
  setup(); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  
  if(VARIATION === '1') {
    pollerLite(
      ['.testImgMobile'],
      () => {
        const vetReviewSection = document.querySelector('.testImgMobile').closest('.shopify-section');
        moveSocialProofSection(vetReviewSection);
      },  
    );
  } else if (VARIATION === '2') {
    pollerLite(
      ['[data-section-type="product"]'],
      () => {
        const productDescription = document.querySelector('[data-section-type="product"]');
        moveSocialProofSection(productDescription);
      },  
    );
  }
};
