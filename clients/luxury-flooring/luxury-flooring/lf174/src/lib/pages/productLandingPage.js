/*eslint-disable no-param-reassign */
//import banner from '../components/banner';
import blackFridayBanner from '../components/blackFridayBanner';
import startTimer from '../helpers/startTimer';
import { observeDOM, pollerLite } from '../helpers/utils';

const setTradePriceTextOnAccessories = () => {
  const onlyPriceElem = document.querySelectorAll('.special-price .price');
  onlyPriceElem.forEach((item) => {
    const specialPrice = item.closest('.special-price');
    if (!specialPrice.querySelector('.tradePriceText')) {
      item.insertAdjacentHTML('beforebegin', '<span class="only-price tradePriceText">Trade Price: </span>');
    }
  });
};
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

  if (!document.querySelector(`.${ID}__banner`)) {
    const attachPoint = document.querySelector('.nav-sections');
    const banners = `${blackFridayBanner(ID)}`;
    attachPoint.insertAdjacentHTML('afterend', banners);
    startTimer(ID, endDate);
  }

  pollerLite(['.nav-sections', '.special-price'], () => {
    if (window.location.pathname.includes('/accessories.html')) {
      setTradePriceTextOnAccessories();

      observeDOM('.products.products-grid', () => {
       setTradePriceTextOnAccessories();
      });
    }
  });

  pollerLite(['.nav-sections', '.only-price'], () => {
    setTradePriceText();

    observeDOM('.products.products-grid', () => {
      setTradePriceText();
    });
  });
};
export default productLandingPage;
