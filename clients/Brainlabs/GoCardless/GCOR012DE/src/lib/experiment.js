import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import howitworks from './components/howItWorks';
import reelBtn from './components/reelButton';
import reelItems from './components/reelItems';
import { reelDatas } from './data';
import firstHeadingElm from './helpers/getFirstHeading';
import initSwiper from './helpers/initSwiper';
import obsIntersection from './helpers/observeIntersection';
import { addCssToPage, addJsToPage } from './helpers/utils';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const ANIMATION_START_DELAY = 4000;
const DOM_RENDER_DELAY = 2000;
const MODULE1_INTERSECT_RATIO = 0.3;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
const controlClassPrefix = `${ID}__howitworks--`;

const startReelBtnData = {
  text: 'Siehe ein Beispiel',
  link: '',
  classSuffix: 'pill-reelstart'
};

const initMutationconfig = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['style']
};

const init = () => {
  setup('Experimentation', `GoCardless - ${ID}`, shared);

  if (document.querySelector(`.${ID}__howitworks--heroImage`)) {
    return;
  }

  //add swiper js

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  //hot fix for other geos

  firstHeadingElm().insertAdjacentHTML('beforebegin', howitworks(ID));
  //hot fix for other geos

  //replace GCO008 video + prepare control for variation
  const gcor008Video = document.querySelector(`.${controlClassPrefix}heroImage>.image-wrapper`);

  gcor008Video.classList.add(`${ID}__controlImageWrapper`);
  //gcor008Video.querySelector('div:first-child').classList.add(`${ID}__hide`);

  //render stories reel
  const controlGetStartedBtn = document.querySelector(`.${controlClassPrefix}steps`);
  const overlay = document.createElement('div');

  overlay.classList.add(`${ID}__overlay`, `${ID}__hide`);
  //controlGetStartedBtn.classList.add(`${ID}__hide`);

  pollerLite([() => typeof window.Swiper === 'function'], () => {
    if (document.querySelector(`.${ID}__overlay`)) return;

    document.body.classList.add(`${ID}__body`);
    document.body.insertAdjacentElement('afterbegin', overlay);

    controlGetStartedBtn.insertAdjacentHTML('afterend', reelBtn(ID, startReelBtnData));
    overlay.insertAdjacentHTML('afterbegin', reelItems(ID, reelDatas));

    const intersectionCallback = ({ isIntersecting }) => {
      let timer;
      if (!isIntersecting) {
        clearTimeout(timer);
        return;
      }
      fireEvent('Conditions Met', shared);
      timer = setTimeout(() => {
        gcor008Video.classList.add(`${ID}__animate`);
      }, ANIMATION_START_DELAY);
    };
    const howitworksModule = document.querySelector(`.${controlClassPrefix}heroImage`);

    obsIntersection(howitworksModule, MODULE1_INTERSECT_RATIO, intersectionCallback);
  });
};

export default () => {
  //Poll and re-run init

  pollerLite(['#___gatsby'], () => {
    const appContainer = document.querySelector('#___gatsby');
    setup('Experimentation', `GoCardless - ${ID}`, shared);

    document.body.addEventListener('click', ({ target }) => {
      const targetMatched = (desiredStr) =>
        target.matches(desiredStr) || target.closest(desiredStr);

      const overlay = document.querySelector(`.${ID}__overlay`);
      const swiperPagination = document.querySelector('.swiper-pagination');

      const initiateReel = () => {
        overlay?.classList.remove(`${ID}__hide`);
        initSwiper('.swiper', fireEvent, shared);
        document.body.classList.add(`${ID}__blockscroll`);
        window.slider.startTime = Date.now();
        swiperPagination.classList.remove(`${ID}__opacity-0`);
      };

      const ejectReel = () => {
        overlay?.classList.add(`${ID}__hide`);
        window.slider.destroy();
        document.body.classList.remove(`${ID}__blockscroll`);
      };
      console.log(target);

      if (target.matches(`.${ID}__howitworks--cta`)) {
        const ctaPosition = target.getAttribute('data-position');
        fireEvent(
          `clicks signup CTA from value prop component ${ctaPosition.split('e')[1]}`,
          shared
        );
      } else if (targetMatched(`.${ID}__controlImageWrapper`)) {
        initiateReel();
        fireEvent('User plays the story via the play button', shared);
      } else if (
        targetMatched(`.${ID}__close-btn`) ||
        (targetMatched(`.${ID}__overlay`) && !targetMatched(`.${ID}__swiper-container`))
      ) {
        ejectReel();
        fireEvent(
          `users exits the reel by clicking ${
            targetMatched(`.${ID}__close-btn`) ? 'cross icon' : 'overlay'
          }`,
          shared
        );
      } else if (targetMatched(`.${ID}__btn-link-slidelast`)) {
        ejectReel();
        fireEvent('user closes reel by clicking "Continue read .." button', shared);
      } else if (targetMatched(`.${ID}__btn-pill-reelstart`)) {
        initiateReel();
        fireEvent('User plays the story via the cta', shared);
      } else if (targetMatched(`.${controlClassPrefix}cta`)) {
        fireEvent('User signs up via the cta in the “Taking payments...” element', shared);
      } else if (targetMatched(`.${controlClassPrefix}learnCta`)) {
        fireEvent(
          'User interacts with the learn more cta in the “Taking payments...” element',
          shared
        );
      } else if (targetMatched(`.${ID}__btn-pill-slidelast`)) {
        fireEvent('user clicks "Get started for free" button in the last slide', shared);
      } else if (targetMatched('a.css-1ks30qh')) {
        fireEvent('user clicks signup from header', shared);
      } else if (targetMatched('a.css-1bwxyks')) {
        fireEvent('user clicks signup from hamburger menu', shared);
      } else if (targetMatched('.GCOR003GRb_buttons>a:last-child')) {
        fireEvent('user clicks signup from sticky nav', shared);
      }
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        setTimeout(() => {
          init();
        }, DOM_RENDER_DELAY);
      });
    });

    if (VARIATION === 'control') {
      //set up wistia video trackings

      pollerLite([() => !!firstHeadingElm()], () => {
        //const howitworksModule = document.querySelector(`.${controlClassPrefix}module1`);

        const intersectionCallback = ({ isIntersecting, target }) => {
          if (isIntersecting && !document.querySelector(`.${ID}__seen`)) {
            target.classList.add(`${ID}__seen`);
            fireEvent('Conditions Met', shared);
            //wistiaTrackings(fireEvent, shared);
          }
        };

        obsIntersection(firstHeadingElm(), MODULE1_INTERSECT_RATIO, intersectionCallback);
      });
      return;
    }

    observer.observe(appContainer, initMutationconfig);
  });
};
