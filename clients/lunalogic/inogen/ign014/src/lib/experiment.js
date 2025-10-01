import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import prodsData from './data/data';
import prodDescriptionInfo from './components/prodDescriptionInfo';
import uspWrapper from './components/uspWrapper';
import comparisonStr from './components/comparisonStr';
import twoColumns from './components/twoColumns';
import twoColumnsWithImage from './components/twoColumnsWithImage';
import packageStr from './components/packageStr';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  if (prodsData[pathname]) {
    const data = prodsData[pathname];

    //Add experiment class to body
    document.querySelector('body').classList.add(`${data.id}`);
    const productHeaderElem = document.querySelector('.product_header');
    const productDetailsElem = document.querySelector('.product_details');
    const productTitleElem = productHeaderElem.querySelector('.post__title');
    const atcWrapper = productHeaderElem.querySelector('.product_add_to_cart');
    console.log('Experiment running');

    const targetPoint = document.querySelector('.page');
    if (!document.querySelector(`.${ID}__mainWrapper`)) {
      targetPoint.insertAdjacentHTML('beforebegin', `<div class="${ID}__mainWrapper"></div>`);
    }

    const mainNewWrapper = document.querySelector(`.${ID}__mainWrapper`);

    if (!document.querySelector(`.${ID}__comparisonWrapper`) && data.feature_1) {
      mainNewWrapper.insertAdjacentHTML('beforeend', comparisonStr(ID, data.feature_1));
    }

    if (!document.querySelector(`.${ID}__twoColumnsWrapper`) && data.feature_2) {
      mainNewWrapper.insertAdjacentHTML('beforeend', twoColumns(ID, data.feature_2));
    }

    if (!document.querySelector(`.${ID}__twoColumnsImageWrapper`) && data.feature_3) {
      mainNewWrapper.insertAdjacentHTML('beforeend', twoColumnsWithImage(ID, data.feature_3));
    }

    if (!document.querySelector(`.${ID}__videoElement`) && data.videoElemSelector) {
      const controlVideoElem = document.querySelector(data.videoElemSelector);
      mainNewWrapper.insertAdjacentHTML('beforeend', `<div class="${ID}__videoElement"></div>`);

      if (controlVideoElem) {
        document.querySelector(`.${ID}__videoElement`).appendChild(controlVideoElem);
      }
    }

    //what's in the box container
    const boxContainer = document.querySelector('.whats-in-the-box-container');
    if (!document.querySelector(`.${ID}__boxContainer`)) {
      mainNewWrapper.insertAdjacentElement('beforeend', boxContainer);
      boxContainer.classList.add(`${ID}__boxContainer`);

      const swiperBoxContainer = boxContainer.querySelector('.whats-in-the-box-swiper');
      if (swiperBoxContainer) {
        swiperBoxContainer.swiper.destroy();
      }
    }

    //packgae container

    if (!document.querySelector('.packageContainer')) {
      mainNewWrapper.insertAdjacentHTML('beforeend', packageStr(ID, data.packages));
      const swiper = new window.Swiper(`.${ID}__productsWrapper:not(.${ID}__sticky)`, {
        loop: false,
        slidesPerView: 5, //Adjust based on design needs
        spaceBetween: 30, //Adjust spacing between slides
        breakpoints: {
          //Mobile view: 1 slide per view
          320: {
            slidesPerView: 1.2
          },
          //Desktop view: More slides if needed
          1024: {
            slidesPerView: 5
          }
        }
      });
    }

    //accessories container
    const accessoriesContainer = document.querySelector('.accessories_container');
    if (!document.querySelector(`.${ID}__accessoriesContainer`)) {
      mainNewWrapper.insertAdjacentElement('beforeend', accessoriesContainer);
      accessoriesContainer.classList.add(`${ID}__accessoriesContainer`);

      const swiperAccessoriesContainer = accessoriesContainer.querySelector('.accessories-swiper');
      let accessoriesSwiper = null;
      let resizeTimeout;

      const initAccessoriesSwiper = () => {
        //destroy if already initialized
        if (accessoriesSwiper) {
          accessoriesSwiper.destroy(true, true);
          accessoriesSwiper = null;
        }
        accessoriesSwiper = new window.Swiper(swiperAccessoriesContainer, {
          slidesPerView: 3, //default
          slidesPerGroup: 1,
          spaceBetween: 20,
          breakpoints: {
            0: {
              //from 0px
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            550: {
              //from 450px
              slidesPerView: 2,
              slidesPerGroup: 1
            },
            768: {
              //from 768px
              slidesPerView: 3,
              slidesPerGroup: 1
            }
          },
          pagination: {
            el: '.accessories-swiper-pagination',
            clickable: true //user can click bullets
          },
          navigation: {
            nextEl: '.accessories-swiper-button-next',
            prevEl: '.accessories-swiper-button-prev'
          }
        });
      };

      //initialize on load
      initAccessoriesSwiper();

      //optional: re-init on resize
      //debounce resize
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          initAccessoriesSwiper();
        }, 300);
      });
    }

    //if (!document.querySelector(`.${ID}__prodDescriptionWrapper`)) {
    //productTitleElem.insertAdjacentHTML('afterend', prodDescriptionInfo(ID, data));
    //}

    //const productDescriptionWrapper = document.querySelector(`.${ID}__prodDescriptionWrapper`);
    //if (productDescriptionWrapper && atcWrapper) {
    //productDescriptionWrapper.insertAdjacentElement('afterend', atcWrapper);
    //}

    //if (!document.querySelector(`.${ID}__uspWrapper`)) {
    //productDetailsElem.insertAdjacentHTML('beforeend', uspWrapper(ID, data.uspList));
    //}
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
