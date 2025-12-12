import setup from './services/setup';
import shared from './shared/shared';
import reviewWrapper from './components/reviewWrapper';
import { addCssToPage, addJsToPage, observeDOM, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;
const data = {
  1: {
    title:
      "\"Wow!!!!! Is all I can say!!!!! I'm not a toy person, (or so I thought), but this thing right here is crazy good!! My husband travels a lot and I'm home alone quite a bit...this is my new husband when he's not home!!! Bravo!\"",
    author: 'Beverly'
  },
  2: {
    title:
      '"I was a little nervous to receive and try this toy but I have to say...I LOVE it! Totally beginner friendly! Defs recommend!"',
    author: 'Lori'
  },
  3: {
    title:
      '"I\'ve never left a review for toys before but had to on this one... It is my favorite toy of all time (I have tried quite a variety). If you are on the fence about it trust me and just buy it. Your body will thank you for it."',
    author: 'Melissa'
  }
};
const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const renderDomIntoSwiper = () => {
  pollerLite([() => document.querySelectorAll('.swiper-slide').length > 0], () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((product) => {
      const firstTargetPoint = product.querySelector('[data-essential-upsell-element="content"]');
      console.log(firstTargetPoint, 'firstTargetPoint');
      if (!product.querySelector('.add-to-cart')) {
        firstTargetPoint.insertAdjacentHTML(
          'beforeend',
          '<span class="add-to-cart">Add to Cart</span>'
        );
      }
    });
  });
};

const swiperInit = () => {
  pollerLite([() => window.Swiper !== undefined], () => {
    const swiper = new window.Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      keyboard: true,

      on: {
        slideChange(s) {
          console.log('slide changed');
          renderDomIntoSwiper();
        }
      }
    });
  });
};

const customiseUpsell = () => {
  pollerLite(
    [
      '[data-essential-upsell-element="container"]',
      '[data-essential-upsell-element="products"]',
      '[data-essential-upsell-element="product"]:not(.swiper-slide)',
      '[data-essential-upsell-element="header"] [data-essential-upsell-element="title"]',
      () => document.querySelectorAll('[data-essential-upsell-element="price"]').length >= 3
    ],
    () => {
      //console.log(document.querySelectorAll('[data-essential-upsell-element="price"]'));
      const mainControlProducts = document.querySelector(
        '[data-essential-upsell-element="container"] > [data-essential-upsell-element="products"]'
      );
      mainControlProducts.classList.add('main-products-control');
      const targetPoint = document.querySelector('[data-essential-upsell-element="products"]');
      if (document.querySelector(`.${ID}__upsell-wrapper`)) {
        document.querySelector(`.${ID}__upsell-wrapper`).remove();
      }
      if (!document.querySelector(`.${ID}__upsell-wrapper`)) {
        targetPoint.insertAdjacentHTML(
          'beforebegin',
          `
          <div class="${ID}__upsell-wrapper">
            <div class="upsell-title">Don’t miss out on these items!</div>
            <div class="swiper mySwiper">
              <div class="swiper-wrapper">
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
      `
        );
      }
      const upsellProducts = document.querySelectorAll('[data-essential-upsell-element="product"]');
      Array.from(upsellProducts)
        .slice(0, 3)
        .forEach((product) => {
          product.classList.add('swiper-slide');
          document.querySelector('.swiper-wrapper').appendChild(product);
        });

      swiperInit();
      renderDomIntoSwiper();
    }
  );
};

const startExperiment = () => {
  const targetPoint = document.querySelector('.drawer__header');
  //console.log(targetPoint, 'targetPoint');
  if (document.querySelector(`.${ID}__reviewWrapper`)) {
    document.querySelectorAll(`.${ID}__reviewWrapper`).forEach((el) => el.remove());
  }
  if (!document.querySelector(`.${ID}__reviewWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', reviewWrapper(ID, data[VARIATION]));
  }
  setTimeout(() => {
    customiseUpsell();
  }, 500);
};

const init = () => {
  window.addEventListener('AVADA:add', (e) => {
    //console.log('Avada cart added test');
    setTimeout(() => {
      if (!document.querySelector('.drawer__inner-empty')) {
        startExperiment();
      }
    }, 2000);
  });

  window.addEventListener('AVADA:change', (e) => {
    //console.log('Avada cart changed test');
    setTimeout(() => {
      if (!document.querySelector('.drawer__inner-empty')) {
        startExperiment();
      }
    }, 2000);
  });
};

export default () => {
  setup(); //use if needed
  //console.log(ID);
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.header__icon--cart')) {
      setTimeout(() => {
        if (!document.querySelector('.drawer__inner-empty')) {
          startExperiment();
        }
      }, 100);
    } else if (target.closest('.add-to-cart')) {
      const clickedItem = target.closest('.add-to-cart');
      clickedItem.classList.add('clicked');
      const wrapper = clickedItem.closest('[data-essential-upsell-element="product"]');
      const atcBtn = wrapper.querySelector('[data-essential-upsell-element="add-to-cart-button"]');
      if (atcBtn) {
        atcBtn.click();
        clickedItem.classList.remove('clicked');
      }
    }
  });
  init();
};
