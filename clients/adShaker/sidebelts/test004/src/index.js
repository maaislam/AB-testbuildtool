import { pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';
import shared from './lib/shared/shared';
import trustBadges from './lib/trustBadges';

const { ID, VARIATION } = shared;

const isPdp = window.location.pathname.includes('/products');
const isPlp =
  window.location.pathname.includes('/collections') &&
  !window.location.pathname.includes('/products');

const pdpInit = () => {
  pollerLite(['.product-single__additional-actions'], () => {
    if (document.querySelector(`.${ID}__trustbadges`)) return;

    //hide cross sell
    const crossSellBlock = document.querySelector('.product-single__additional-actions');

    crossSellBlock.style.display = 'none';

    //show new content

    crossSellBlock.insertAdjacentHTML('beforebegin', trustBadges(ID));
  });
};

const plpInit = () => {
  pollerLite(['[data-sorts="price:desc"]', '.sort__wrap', '.sort'], () => {
    const priceHlFilter = document.querySelector('[data-sorts="price:desc"]');
    const sortContainer = document.querySelector('.sort');
    const sortWrap = document.querySelector('.sort__wrap');
    priceHlFilter.click();
    sortContainer.classList.remove('active');
    sortWrap.classList.remove('overflowVisible');
  });
};

const init = () => {
  setup();

  if (VARIATION === '1') {
    return;
  }
  if (VARIATION === '2' && isPdp) {
    pdpInit();
  } else if (VARIATION === '3' && isPlp) {
    plpInit();
  } else if (VARIATION === '4') {
    plpInit();
    pdpInit();
  }
};

pollerLite(['body'], init);
