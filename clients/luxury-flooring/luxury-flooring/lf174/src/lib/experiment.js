import isLogin from './helpers/isLogin';
import productLandingPage from './pages/productLandingPage';
import productPage from './pages/productPage';
import tradeDiscountsPage from './pages/tradeDiscountPage';
import tradeRegistrationPage from './pages/tradeRegistrationPage';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const endDate = '12/03/2024'; //MM/DD/YYYY

const isPdp = () => document.body.classList.contains('catalog-product-view');
const isPlp = () =>
  document.body.classList.contains('catalog-category-view') ||
  document.body.classList.contains('catalogsearch-result-index');

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/trade-discounts')) {
    tradeDiscountsPage(ID, endDate);
  } else if (pathname.includes('/trade-registration')) {
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
