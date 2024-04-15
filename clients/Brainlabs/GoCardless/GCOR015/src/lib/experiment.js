/**
 * ID - Description
 *
 * @fileoverview The main experiment logic goes here. Everything should be written inside the
 * activate function which is called if the conditions in triggers.js have passed evaluation
 * @author User Conversion
 */
import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import shared from './shared/shared';
import reviews from './components/reviews';
import { initExternalLib } from './helpers/addExternalLib';
import initSwiper from './helpers/initSwiper';
import { swiperConfig } from './helpers/swiperConfigs';
import { reviewData } from './reviewData';

const { ID, VARIATION } = shared;
console.log(ID);
const init = () => {
  //Experiment Code...
  setup('Experimentation', `GoCardless - ${ID}`, shared);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //const isPDP = () => !!document.querySelector('[data-test-id="pdp-wrapper"]');
  //const isMobile = !!document.querySelector('[class^="MobileMenustyled__Wrapper-sc"]');

  if (VARIATION === 'control') {
    return;
  }
  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //renderBanner

  if (window.location.pathname.includes('/guides')) {
    fireEvent('Conditions Met', shared);
    const reviewAnchor = document.getElementById('we-can-help');

    const reviewWrapper = document.querySelector(`.${ID}__reviews-wrapper`);
    !reviewWrapper && reviewAnchor.insertAdjacentHTML('beforebegin', reviews(ID, reviewData));

    //init swiper

    const swiperJs = 'https://m7cdn.io/common/js/swiper.js';
    const swiperCss = 'https://dev.m7cdn.io//common/css/swiper.css';
    const sliderContainer = `.${ID}__swiper-container`;

    //const intersectionCallback = (entry) => {
    //if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
    //entry.target.classList.add(`${ID}__seen`);
    //fireEvent('User sees Trustpilot reviews', shared);
    //}
    //};
    const intersectionAnchor = document.querySelector(`.${ID}__reviews-wrapper`);
    intersectionAnchor.closest('.css-1k2l5m6').classList.add(`${ID}__controlled-width`);

    //isPDP() && intersectionAnchor.classList.add(`${ID}__pdp-adjustments`);

    initExternalLib(swiperJs, swiperCss);

    initSwiper(sliderContainer, swiperConfig(true), fireEvent);

    //obsIntersection(intersectionAnchor, 0.5, intersectionCallback);

    //styling fix

    //intersectionAnchor?.closest('section').classList.add(`${ID}__color-adjust`);
  }
};

export default () => {
  setTimeout(() => {
    init();
  }, 2000);

  //Poll and re-run init
  pollerLite(['#app-container'], () => {
    const appContainer = document.querySelector('#app-container');

    //------------------------------------
    //Added Poller:
    //Checks for page changes and checks to see if the URL has changed
    //------------------------------------
    let oldHref = window.location.href;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        if (oldHref !== window.location.href) {
          oldHref = window.location.href;

          document.body.classList.remove(`${shared.ID}`);

          document.querySelectorAll(`.${ID}__review-banner`).forEach((item) => {
            item?.remove();
          });
          document.querySelectorAll(`.${ID}__reviews-wrapper`).forEach((item) => {
            item?.remove();
          });

          setTimeout(() => {
            init();
          }, 2000);
        }
      });
    });

    const config = {
      childList: true,
      subtree: true
    };

    observer.observe(appContainer, config);
  });
};
