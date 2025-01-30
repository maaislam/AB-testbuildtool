import isLogin from './helpers/isLogin';
import { pollerLite } from './helpers/utils';
import productLandingPage from './pages/productLandingPage';
import productPage from './pages/productPage';
import tradeDiscountsPage from './pages/tradeDiscountPage';
import tradeRegistrationPage from './pages/tradeRegistrationPage';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

let endDate = '02/15/2025'; //MM/DD/YYYY

// const isCurrentDateBetween = (startDateStr, endDateStr) => {
//   //Parse the input dates
//   const [startDay, startMonth, startYear] = startDateStr.split('/').map(Number);
//   const [endDay, endMonth, endYear] = endDateStr.split('/').map(Number);

//   //Create date objects from the input strings
//   const startDate = new Date(startYear, startMonth - 1, startDay);
//   const newEndDate = new Date(endYear, endMonth - 1, endDay);

//   //Get the current date (with time set to 00:00:00 for accurate comparison)
//   const currentDate = new Date();
//   currentDate.setHours(0, 0, 0, 0);

//   //Check if the current date is between the start and end dates
//   if (currentDate >= startDate && currentDate <= newEndDate) {
//     return true;
//   }

//   return false;
// };

// const saleStartDate = '26/12/2024';
// const saleEndDate = '02/02/2025';
// if (isCurrentDateBetween(saleStartDate, saleEndDate)) {
//   endDate = saleEndDate;

//   const tenPercentOffElem = document.querySelector(`.${ID}__couponCodeWrapper .tenPercentOff`);
//   const plusIconElem = document.querySelector(`.${ID}__couponCodeWrapper .plus_icon`);

//   pollerLite([() => tenPercentOffElem, () => plusIconElem], () => {
//     document.body.classList.add('after-christmas-sale');
//   });
// }

const isPdp = () => document.body.classList.contains('catalog-product-view');
const isPlp = () =>
  document.body.classList.contains('catalog-category-view') ||
  document.body.classList.contains('catalogsearch-result-index');

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/trade-discounts')) {
    tradeDiscountsPage(ID, endDate);
  } else if (pathname.includes('/trade-registration') && !pathname.includes('/trade-registration-thanks')) {
    tradeRegistrationPage(ID);
  } else if (isPdp() && isLogin()) {
    productPage(ID);
  } else if (isPlp() && !isLogin()) {
    productLandingPage(ID, endDate);
  }
};

export default () => {
  setup();
  init();

  document.addEventListener('click', (e) => {
    const { target } = e;

    const faqHeader = target.closest(`.${ID}__faqAccordion-header`);

    if (faqHeader) {
      const content = faqHeader.nextElementSibling;
      const icon = faqHeader.querySelector(`.${ID}__faqAccordion-icon i`);

      content.classList.toggle('open');

      if (content.classList.contains('open')) {
        content.style.maxHeight = `${content.scrollHeight}px`; //Set height to content height
      } else {
        content.style.maxHeight = '0'; //Collapse the content
      }

      //Toggle arrow direction
      icon.classList.toggle('down');
    } else if (target.id === `${ID}__registerBtn`) {
      window.location.href = '/trade-registration';
    } else if (target.id === `${ID}__loginBtn`) {
      window.location.href = '/customer/account/';
    }
  });
};
