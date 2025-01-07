import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import announcementBar from './components/announcementBar';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.shopify-section-group-header-group');
  const targetPointAnother =
    document.querySelector('.banner_left .banner_text1') ||
    document.querySelector('.banner_right .banner_text1');
  if (!document.querySelector(`.${ID}__announcementBar`)) {
    VARIATION === '1' && targetPoint.insertAdjacentHTML('beforebegin', announcementBar(ID));
    VARIATION === '2' && targetPointAnother.insertAdjacentHTML('beforebegin', announcementBar(ID));
  }

  pollerLite(['.join_package_box .package.package1'], () => {
    const wrapper = document.querySelector('.join_package_box .package.package1');
    const priceElement = wrapper.querySelector('.price_text2');
    const comparePriceElement = priceElement.querySelector('span');
    const comparePrice = parseFloat(comparePriceElement.textContent.replace('$', ''));
    const sellPriceElement = priceElement.querySelector('span').nextSibling;
    const sellPrice = parseFloat(sellPriceElement.textContent.replace('$', ''));

    if (sellPrice && comparePrice) {
      const percentageOff = Math.round(((comparePrice - sellPrice) / comparePrice) * 100);
      document.querySelector(
        `.${ID}__announcementBar span`
      ).textContent = `- Up to ${percentageOff}% OFF`;
      const bannerButton =
        document.querySelector('.banner_right .common_btn') ||
        document.querySelector('.banner_left .common_btn');
      if (bannerButton) {
        bannerButton.childNodes[0].textContent = `JOIN PRIMAL QUEEN - Up to ${percentageOff}% Off`;
      }
    }
  });
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
