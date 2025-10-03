import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, pollerLite } from './helpers/utils';
import prodsData from './data/data';
import prodDescriptionInfo from './components/prodDescriptionInfo';
import uspWrapper from './components/uspWrapper';
import comparisonStr from './components/comparisonStr';
import twoColumns from './components/twoColumns';
import twoColumnsWithImage from './components/twoColumnsWithImage';
import packageStr from './components/packageStr';
import compareProducts from './components/compareProducts';
import initStickyBar from './helpers/initStickyBar';
import mainGallery from './components/mainGallery';

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

    const thumbElement = document.querySelector('.product-images-swiper-container-wrapper');
    const thumbSwiper = thumbElement.querySelector('.swiper');
    thumbSwiper.classList.add(`${ID}__mySwiper`);
    if (thumbSwiper) {
      thumbSwiper.swiper.destroy();
    }

    if (!document.querySelector(`.${ID}__mySwiper2`)) {
      thumbElement.insertAdjacentHTML('beforebegin', mainGallery(ID, data.imagesList));
      const swiper = new window.Swiper(`.${ID}__mySwiper`, {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          //Mobile view: 1 slide per view
          320: {
            slidesPerView: 4
          },
          1200: {
            slidesPerView: 5
          }
        }
      });
      const swiper2 = new window.Swiper(`.${ID}__mySwiper2`, {
        loop: true,
        spaceBetween: 10,
        thumbs: {
          swiper
        }
      });
    }

    if (!document.querySelector(`.${ID}__prodDescriptionWrapper`)) {
      productTitleElem.insertAdjacentHTML('afterend', prodDescriptionInfo(ID, data));
    }

    const productDescriptionWrapper = document.querySelector(`.${ID}__prodDescriptionWrapper`);
    if (productDescriptionWrapper && atcWrapper) {
      productDescriptionWrapper.insertAdjacentElement('afterend', atcWrapper);
    }

    if (!document.querySelector(`.${ID}__uspWrapper`)) {
      productDetailsElem.insertAdjacentHTML('beforeend', uspWrapper(ID, data.uspList));
    }

    const productInfoWrapper = document.querySelector('.product.type-product');

    if (productInfoWrapper) {
      mainNewWrapper.insertAdjacentElement('beforeend', productInfoWrapper);
    }

    //compare prodducts container
    if (!document.querySelector(`.${ID}__compareProducts`) && data.productComparison) {
      mainNewWrapper.insertAdjacentHTML('beforeend', compareProducts(ID, data.productComparison));
      const swiper = new window.Swiper(
        `.${ID}__compareProducts .${ID}__productsWrapper:not(.${ID}__sticky)`,
        {
          loop: false,
          slidesPerView: 2, //Adjust based on design needs
          spaceBetween: 30, //Adjust spacing between slides
          breakpoints: {
            //Mobile view: 1 slide per view
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }
        }
      );
    }

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
    if (!document.querySelector(`.${ID}__packageContainer`) && data.packages) {
      mainNewWrapper.insertAdjacentHTML('beforeend', packageStr(ID, data.packages));
      const swiper = new window.Swiper(
        `.${ID}__packageContainer .${ID}__productsWrapper:not(.${ID}__sticky)`,
        {
          loop: false,
          slidesPerView: window.location.pathname === '/product/rove4-system/' ? 5 : 3, //Adjust based on design needs
          spaceBetween: 30, //Adjust spacing between slides
          breakpoints: {
            //Mobile view: 1 slide per view
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 15
            },
            768: {
              slidesPerView: 3
            },
            //Desktop view: More slides if needed
            1024: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: window.location.pathname === '/product/rove4-system/' ? 5 : 3
            }
          }
        }
      );
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

    //faq
    const faqSection = document.querySelector('.technical_specs_container');
    if (faqSection) {
      mainNewWrapper.insertAdjacentElement('beforeend', faqSection);
    }

    //Example usage
    initStickyBar('.single_add_to_cart_button-wrapper');

    const syncVariationSelects = (mainWrapper, stickyWrapper) => {
      const mainSelects = document.querySelectorAll(`${mainWrapper} select`);
      const stickySelects = document.querySelectorAll(`${stickyWrapper} select`);

      if (!mainSelects.length || !stickySelects.length) {
        console.error('Select elements not found in wrappers');
        return;
      }

      mainSelects.forEach((sel, i) => {
        if (stickySelects[i]) {
          stickySelects[i].selectedIndex = sel.selectedIndex;
        }
      });

      mainSelects.forEach((sel, i) => {
        sel.addEventListener('change', () => {
          if (stickySelects[i]) {
            stickySelects[i].selectedIndex = sel.selectedIndex;
          }
        });
      });

      stickySelects.forEach((sel, i) => {
        sel.addEventListener('change', () => {
          if (mainSelects[i]) {
            mainSelects[i].selectedIndex = sel.selectedIndex;

            //Trigger WooCommerce variation logic
            const ev = new Event('change', {
              bubbles: true
            });
            mainSelects[i].dispatchEvent(ev);
          }
        });
      });
    };

    //Example usage
    syncVariationSelects('.variations:not(.sticky-bar-left)', '.variations.sticky-bar-left');
    observeDOM('.single_add_to_cart_button-wrapper .subtotal-price', (mutation) => {
      console.log('mutation', mutation);
      const { addedNodes } = mutation;
      if (addedNodes.length === 0) {
        document.querySelector('.sticky-price-container').style.opacity = '0';
        document.querySelector('.sticky-bar-btn').style.opacity = '0';
      } else {
        document.querySelector('.sticky-price-container').style.opacity = '1';
        document.querySelector('.sticky-bar-btn').style.opacity = '1';
      }
    });
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.sticky-bar-btn')) {
      const clickedItem = target.closest('.sticky-bar-btn');
      const controlBtn = document.querySelector('.single_add_to_cart_button');
      clickedItem.innerHTML = '<i class="fa fa-spinner fa-pulse"></i>';
      if (controlBtn) controlBtn.click();
    } else if (target.closest('.package-btn')) {
      const clickedItem = target.closest('.package-btn');
      const { id } = clickedItem;
      const controlBtn = document.querySelector(`.freedom_packages_container a[data-id="${id}"]`);
      if (controlBtn) {
        clickedItem.innerHTML = '<i class="fa fa-spinner fa-pulse"></i>';
        controlBtn.click();
      }
    }
  });
  init();
};
