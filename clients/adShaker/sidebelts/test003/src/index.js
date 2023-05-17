import { pollerLite } from './lib/helpers/utils';
import setup from './lib/services/setup';

if (
  window.location.pathname.includes('/collections') &&
  !window.location.pathname.includes('/products')
) {
  pollerLite(['[data-sorts="price:desc"]', '.sort__wrap', '.sort'], () => {
    setup();
    const priceHlFilter = document.querySelector('[data-sorts="price:desc"]');
    const sortContainer = document.querySelector('.sort');
    const sortWrap = document.querySelector('.sort__wrap');
    priceHlFilter.click();
    sortContainer.classList.remove('active');
    sortWrap.classList.remove('overflowVisible');
  });
}
