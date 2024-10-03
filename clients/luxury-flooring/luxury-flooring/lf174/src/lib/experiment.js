import productPage from './pages/productPage';
import tradeDiscountsPage from './pages/tradeDiscountPage';
import tradeRegistrationPage from './pages/tradeRegistrationPage';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const isPdp = () => document.body.classList.contains('catalog-product-view');
const isPlp = () =>
  document.body.classList.contains('catalog-category-view') ||
  document.body.classList.contains('catalogsearch-result-index');

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/trade-discounts')) {
    tradeDiscountsPage(ID);
  } else if (pathname.includes('/trade-registration')) {
    tradeRegistrationPage(ID);
  } else if (isPdp()) {
    productPage(ID);
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
