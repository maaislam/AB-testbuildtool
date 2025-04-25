import setup from './services/setup';
import shared from './shared/shared';
import {
  addCssToPage,
  addJsToPage,
  moveNonImageChildren,
  observeDOM,
  pollerLite
} from './helpers/utils';
import fetchProductImagesData from './helpers/fetchProductData';
import initSwiper from './helpers/initSwiper';
import { swiperConfig5 } from './helpers/swiperConfigs';
import productImages from './components/productImages';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

//Intersection Observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.01
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const productCard = entry.target;
      fetchProductImagesData(productCard).then((images) => {
        console.log(images, productCard);
        const targetPoint = productCard.querySelector('a.product-item-photo');
        const { productSku } = productCard.querySelector('form').dataset;
        if (images && images.length > 1 && !productCard.querySelector(`.${ID}__productSwiper`)) {
          targetPoint.insertAdjacentHTML('beforebegin', productImages(ID, images, productSku));
          //moveNonImageChildren();
          pollerLite([() => window.Swiper !== undefined], () => {
            initSwiper(`.${ID}__productSwiper_${productSku}`, swiperConfig5);
          });
        }
      });
      observer.unobserve(productCard);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const paginationHandler = () => {
  const productCards = document.querySelectorAll(`.item.product:not(.${ID}__loaded-product)`);

  productCards.forEach((card) => {
    card.classList.add(`${ID}__loaded-product`);
    observer.observe(card);
  });
};

const init = () => {};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
  });

  init();

  observeDOM('.column.main', paginationHandler);
};
