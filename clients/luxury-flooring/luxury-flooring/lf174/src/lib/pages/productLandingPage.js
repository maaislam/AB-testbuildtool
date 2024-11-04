/*eslint-disable no-param-reassign */
//import banner from '../components/banner';
import blackFridayBanner from '../components/blackFridayBanner';
import startTimer from '../helpers/startTimer';
import { observeDOM, pollerLite } from '../helpers/utils';

const setTradePriceText = () => {
  const onlyPriceElem = document.querySelectorAll('.only-price');
  onlyPriceElem.forEach((item) => {
    if (!item.textContent.includes('Trade Price')) {
      item.textContent = 'Trade Price:';
    }
  });
};

const productLandingPage = (ID, endDate) => {
  document.body.classList.add(`${ID}__plp`);

  pollerLite(['.nav-sections', '.only-price'], () => {
    const attachPoint = document.querySelector('.nav-sections');

    if (!document.querySelector(`.${ID}__banner`)) {
      const banners = `${blackFridayBanner(ID)}`;
      attachPoint.insertAdjacentHTML('afterend', banners);
      startTimer(ID, endDate);
    }

    setTradePriceText();

    observeDOM('.products.products-grid', () => {
      setTradePriceText();
    });
  });
};
export default productLandingPage;
