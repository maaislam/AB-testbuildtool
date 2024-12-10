import setup from './services/setup';
import shared from './shared/shared';
import { loadSwiperCDN, trackGA4Event } from './helpers/utils';
import gallery from './components/gallery';

const { ID, VARIATION } = shared;

//Example usage
const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';

const isProductUrl = (url) => {
  const regex =
    /^https:\/\/www\.davidaustinroses\.co\.uk\/products\/(flexi-tie-roll|david-austin-roses-e-gift-card|david-austin-roses-gift-card|english-rose-straight-jug|briers-everyday-glove|david-austin-watering-can|the-breathing-earth-by-david-austin|afternoon-tea-gift-card)$/;
  return regex.test(url);
};

const init = () => {
  //Your experiment code goes here
  const imageArray = [];
  const controlSliderItems = document.querySelectorAll(
    'vanilla-slider [data-slider] > li[data-slide]'
  );
  controlSliderItems.forEach((item) => {
    const image = item.querySelector('img');
    if (image) imageArray.push(image.src);
  });

  loadSwiperCDN(swiperJs, swiperCss, () => {
    if (!document.querySelector(`.${ID}__gallery`)) {
      document
        .querySelector('[data-slider]')
        .insertAdjacentHTML('beforebegin', gallery(ID, imageArray));
    }
    const galleryElement = document.querySelector(`.${ID}__gallery`);
    const enableNavigation = imageArray.length > 5;

    const swiper = new Swiper(`.${ID}__thumbSliderWrapper`, {
      loop: false,
      spaceBetween: 10,
      slidesPerView: 5,
      watchSlidesProgress: true
    });

    const swiper2 = new Swiper(`.${ID}__sliderWraper`, {
      loop: false,
      slidesPerView: 1.1,
      spaceBetween: 8,
      centeredSlides: true,
      speed: 600,
      navigation: enableNavigation
        ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        : false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      thumbs: {
        swiper
      }
    });

    if (!enableNavigation) {
      galleryElement.classList.add(`${ID}__noNeedNavigation`);
    }
  });
};

export default () => {
  if (isProductUrl(window.location.href)) {
    return;
  }

  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__thumbSliderWrapper`) && target.closest('.swiper-slide')) {
      const action = 'Image view';
      const eventCategory = 'DAR 062';
      trackGA4Event(eventCategory, action, '');
    }
  });

  if (VARIATION === 'control') {
    const VanillaSlider = customElements.get('vanilla-slider');

    const originalUpdateIndex = VanillaSlider.prototype.updateIndex;

    VanillaSlider.prototype.updateIndex = function () {
      const previousIndex = this.index;

      originalUpdateIndex.call(this);

      if (previousIndex !== this.index) {
        const event = new CustomEvent('slideChange', {
          detail: {
            index: this.index
          }
        });
        this.dispatchEvent(event);
      }
    };

    const slider = document.querySelector('[id$="__product"] vanilla-slider');
    slider &&
      slider.addEventListener('slideChange', () => {
        const action = 'Image view';
        const eventCategory = 'DAR 062';
        trackGA4Event(eventCategory, action, '');
      });

    return;
  }

  init();
};
