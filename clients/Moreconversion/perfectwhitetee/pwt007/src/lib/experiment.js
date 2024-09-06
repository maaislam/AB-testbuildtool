import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';
import productsArray from './data/data';

const { ID, VARIATION } = shared;

const renderImage = (productCard) => {
  const { imageUrl } = productCard.dataset;
  pollerLite(
    [
      () =>
        productCard.querySelector('.image-wrap img.lazyautosizes') &&
        productCard.querySelector('.image-wrap img.lazyautosizes')?.dataset.srcset &&
        productCard.querySelector('.grid-product__secondary-image img')
    ],
    () => {
      const firstImage = productCard.querySelector('.image-wrap img');
      const secondaryImage = productCard.querySelector('.grid-product__secondary-image img');
      const firstImageDataSrcset = firstImage.dataset.srcset;
      const firstImageSrcset = firstImage.srcset;

      firstImage.dataset.srcset = imageUrl;
      firstImage.srcset = imageUrl;

      secondaryImage.dataset.srcset = firstImageDataSrcset;
      secondaryImage.srcset = firstImageSrcset;
    }
  );
};

const observerOptions = {
  root: null,
  rootMargin: '-15px 0px 0px 0px',
  threshold: 0
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const productCard = entry.target;
      renderImage(productCard);
      observer.unobserve(productCard);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const init = () => {
  const productsWrapper = document.querySelector('#CollectionAjaxContent > .grid');
  const productsItems = productsWrapper.querySelectorAll('.grid__item');
  productsItems.forEach((item) => {
    const url = item.querySelector('a.grid-product__link').href;
    const isProduct = productsArray.find((product) => url.includes(product.url));
    if (isProduct && isProduct.imageUrl) {
      item.dataset.imageUrl = isProduct.imageUrl;
      observer.observe(item);
    }
  });
};
export default () => {
  setup();

  init();
  observeDOM('#CollectionAjaxContent', () => {
    const productsWrapper = document.querySelector('#CollectionAjaxContent > .grid');
    const productsItems = productsWrapper.querySelectorAll('.grid__item');
    if (productsItems.length && window.location.pathname.includes('/collections/essentials')) {
      //init(); //use
      setTimeout(init, 1000);
    }
  });
};
