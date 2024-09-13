import setup from './services/setup';
import shared from './shared/shared';
import { initSwiper, pollerLite } from './helpers/utils';
import recentlyViewed from './components/recentlyViewed';

const { ID } = shared;

const init = () => {
  const { pathname } = window.location;

  if (pathname.includes('/products')) {
    const recommendationElem = document.querySelector('[id*="__product-recommendations"]');
    pollerLite([() => recommendationElem, () => typeof window.Swiper === 'function'], () => {
      recommendationElem.insertAdjacentHTML('beforebegin', recentlyViewed(ID, 'pdp'));

      initSwiper('.swiper');
    });
  } else if (pathname.includes('/cart')) {
    const featuredCollectionElem = document.querySelector('[id*="__featured-collection"]');
    pollerLite([() => featuredCollectionElem, () => typeof window.Swiper === 'function'], () => {
      featuredCollectionElem.insertAdjacentHTML('beforebegin', recentlyViewed(ID, 'cart'));

      initSwiper('.swiper');
    });
  }
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.next-slide-btn')) {
      const swiperNextBtn = document.querySelector('.swiper-button-next');
      swiperNextBtn.click();
    } else if (target.closest('.prev-slide-btn')) {
      const swiperPrevBtn = document.querySelector('.swiper-button-prev');
      swiperPrevBtn.click();
    }
  });
};
