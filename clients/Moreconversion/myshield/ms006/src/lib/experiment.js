/*eslint-disable no-param-reassign */
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const newImages = {
  1: [
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-1.png?v=1734380139&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-2.png?v=1734380138&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-3.png?v=1734380140&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-4.png?v=1734380142&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-5.png?v=1734380144&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-6.png?v=1734380141&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-7.png?v=1734380143&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-8.png?v=1734380145&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-9.png?v=1734380142&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-10.png?v=1734380145&width=1000'
  ],
  2: [
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-1.png?v=1734380139&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-6.png?v=1734380141&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-5.png?v=1734380144&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-7.png?v=1734380143&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-8.png?v=1734380145&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-9.png?v=1734380142&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-10.png?v=1734380145&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-2.png?v=1734380138&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-3.png?v=1734380140&width=1000',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/v1-4.png?v=1734380142&width=1000'
  ]
};

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

const getActiveItemImage = () => {
  const activeImage = document.querySelector('modal-opener img');
  return activeImage.src;
};
const setActiveItemImage = () => {
  const firstImages = document.querySelectorAll('[first-image]');
  firstImages.forEach((img) => {
    img.src = getActiveItemImage();
  });
};

const init = () => {
  const images = newImages[VARIATION];

  const imageSliderHtml = `
  <div class="${ID}__image-gallery">
    <div class="swiper ${ID}__swiper2">
      <div class="swiper-wrapper">
        ${images
          .map(
            (img, i) =>
              `<div class="swiper-slide"><img ${
                i === 0 ? 'first-image' : ''
              } src="${img}" alt=""></div>`
          )
          .join('')}
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div thumbsSlider="" class="swiper ${ID}__swiper1">
      <div class="swiper-wrapper">
        ${images
          .map(
            (img, i) =>
              `<div class="swiper-slide"><img ${
                i === 0 ? 'first-image' : ''
              } src="${img}" alt=""></div>`
          )
          .join('')}
      </div>
    </div>
  </div>
`;

  const anchorPoint = document.querySelector('modal-opener');

  if (document.querySelector(`.${ID}__image-gallery`)) {
    document.querySelector(`.${ID}__image-gallery`).remove();
  }

  anchorPoint.insertAdjacentHTML('beforebegin', imageSliderHtml);

  const mySwiper1 = new window.Swiper(`.${ID}__swiper1`, {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true
  });
  const mySwiper2 = new window.Swiper(`.${ID}__swiper2`, {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: mySwiper1
    }
  });

  setTimeout(() => {
    setActiveItemImage();
  }, 500);
};

export default () => {
  setup();

  //add swiper
  addCssToPage(swiperCss, 'swiper-css');
  addJsToPage(swiperJs, 'swiper-js');

  pollerLite([() => window.Swiper !== undefined], () => {
    document.addEventListener('click', (e) => {
      if (e.target.closest('product-info')) {
        setTimeout(() => {
          init();
        }, 500);
      }
    });

    init();
  });
};
