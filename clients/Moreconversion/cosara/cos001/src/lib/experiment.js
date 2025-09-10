import setup from './services/setup';
import shared from './shared/shared';
import reviewWrapper from './components/reviewWrapper';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';

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
const customiseUpsell = () => {
  const targetPoint = document.querySelector('[data-essential-upsell-element="products"]');
  if (document.querySelector('.swiper')) {
    document.querySelector('.swiper').remove();
  }
  if (!document.querySelector('.swiper')) {
    targetPoint.insertAdjacentHTML(
      'beforebegin',
      `
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      `
    );
  }
  const upsellProducts = document.querySelectorAll('[data-essential-upsell-element="product"]');

  Array.from(upsellProducts)
    .slice(0, 3)
    .forEach((product) => {
      product.classList.add('swiper-slide');
      //const priceElement = product.querySelector('[data-essential-upsell-element="price"]');
      //const clonePriceElement = priceElement ? priceElement.cloneNode(true) : null;
      //console.log(clonePriceElement, 'clonePriceElement');
      //const buttonElem = product.querySelector(
      //'[data-essential-upsell-element="button-container"]'
      //);

      //const firstTargetPoint = product.querySelector('[data-essential-upsell-element="content"]');
      //console.log(firstTargetPoint, 'firstTargetPoint');
      //if (buttonElem && !product.querySelector('.add-to-cart')) {
      //firstTargetPoint.insertAdjacentHTML(
      //'beforeend',
      //'<span class="add-to-cart">Add to Cart</span>'
      //);
      //}

      //if (clonePriceElement && !document.querySelector('.price-content')) {
      //firstTargetPoint.insertAdjacentElement('afterend', clonePriceElement);
      //clonePriceElement.classList.add('price-content');
      //}

      document.querySelector('.swiper-wrapper').appendChild(product);
    });

  //const sliders = document.querySelectorAll('.swiper-slide');

  pollerLite([() => window.Swiper !== undefined], () => {
    const swiper = new window.Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      keyboard: true
    });
  });

  pollerLite([() => document.querySelectorAll('.swiper-slide').length > 0], () => {
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((product) => {
      const priceElement = product.querySelector('[data-essential-upsell-element="price"]');
      const clonePriceElement = priceElement ? priceElement.cloneNode(true) : null;
      console.log(clonePriceElement, 'clonePriceElement');
      const buttonElem = product.querySelector(
        '[data-essential-upsell-element="button-container"]'
      );
      const firstTargetPoint = product.querySelector('[data-essential-upsell-element="content"]');
      console.log(firstTargetPoint, 'firstTargetPoint');
      if (!product.querySelector('.add-to-cart')) {
        firstTargetPoint.insertAdjacentHTML(
          'beforeend',
          '<span class="add-to-cart">Add to Cart</span>'
        );
      }
      if (clonePriceElement && !document.querySelector('.price-content')) {
        firstTargetPoint.insertAdjacentElement('afterend', clonePriceElement);
        clonePriceElement.classList.add('price-content');
      }
    });
  });
};

const startExperiment = () => {
  const targetPoint = document.querySelector('.drawer__header');
  console.log(targetPoint, 'targetPoint');
  if (document.querySelector(`.${ID}__reviewWrapper`)) {
    document.querySelectorAll(`.${ID}__reviewWrapper`).forEach((el) => el.remove());
  }
  if (!document.querySelector(`.${ID}__reviewWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', reviewWrapper(ID, data[VARIATION]));
  }
  setTimeout(() => {
    customiseUpsell();
  }, 2000);
};

const init = () => {
  window.addEventListener('AVADA:add', (e) => {
    console.log('Avada cart added test');
    setTimeout(() => {
      if (!document.querySelector('.drawer__inner-empty')) {
        startExperiment();
      }
    }, 2000);
  });

  window.addEventListener('AVADA:change', (e) => {
    console.log('Avada cart changed test');
    setTimeout(() => {
      if (!document.querySelector('.drawer__inner-empty')) {
        startExperiment();
      }
    }, 2000);
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.header__icon--cart')) {
      setTimeout(() => {
        if (!document.querySelector('.drawer__inner-empty')) {
          startExperiment();
        }
      }, 100);
    }
  });
  init();
};
