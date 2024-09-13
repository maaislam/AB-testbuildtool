import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { initSwiper, onUrlChange } from './helpers/utils';
import slider from './components/slider';
import casinoFooter from './components/casinoFooter';
import { arrowIcon } from './assets/icon';

const { ID, VARIATION } = shared;
const windowWidth = window.innerWidth >= 768;
let sliderElements;
const init = () => {
  const mainElement = document.querySelector('.MuiBox-root.mui-r310n7');
  //const sliderHeaderText = mainElement.querySelector('p').textContent.trim();
  if (windowWidth) {
    sliderElements = mainElement.querySelectorAll('.MuiBox-root.mui-eld2ny');
  } else {
    sliderElements = mainElement.querySelectorAll('.MuiBox-root.mui-1c7567h');
  }

  const modifiedSilderElements = Array.from(sliderElements).map((item) => {
    const linkElement = item.closest('a');
    const element = item.cloneNode(true);
    element.classList.add('swiper-slide');
    if (!windowWidth) {
      const wrapper = document.createElement('div');
      wrapper.classList.add(`${ID}__operator-wrapper`);
      element.setAttribute('data-href', linkElement?.href);
      element.insertAdjacentHTML('beforeend', casinoFooter(ID));
    }

    return element;
  });

  if (document.querySelector(`.${ID}__operatorSliderSection`)) {
    document.querySelector(`.${ID}__operatorSliderSection`).remove();
  }

  mainElement.insertAdjacentHTML('beforebegin', slider(ID, modifiedSilderElements));

  initSwiper(ID);

  if (!windowWidth) {
    const swiper = document.querySelector(`.${ID}__swiper`);
    const swiperElements = swiper.querySelectorAll('.swiper-slide');
    swiperElements.forEach((element) => {
      const button = element.querySelector('.MuiBox-root.mui-17mvp4z');

      if (!button.querySelector('.custom-arrow')) {
        button.insertAdjacentHTML('afterbegin', arrowIcon);
      }
    });
  }
};

export default () => {
  setup(); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('div.mui-17fv5fu') && target.closest(`.${ID}__swiper`)) {
        const clickedItem = target.closest('div.mui-17fv5fu');
        const operatorName = clickedItem.querySelector('img').title.replace('logo', '');
        gaTracking(`${operatorName} CTR | Toplist`);

        if (!clickedItem.closest('a')) {
          const wrapper = clickedItem.closest('.swiper-slide');
          window.location.href = wrapper.dataset.href;
        }
      } else if (target.closest('a[modifier="cta"]') && target.closest(`.${ID}__swiper`)) {
        const clickedItem = target.closest('a[modifier="cta"]');
        const operatorName = clickedItem.title.replace('website', '');
        gaTracking(`${operatorName} CTO | Toplist`);
      } else if (
        target.closest('a[title*="review page"]') &&
        target.closest('.MuiBox-root.mui-r310n7')
      ) {
        const clickedItem = target.closest('a[title*="review page"]');
        const operatorName =
          clickedItem.querySelector('a[modifier="cta"]')?.title.replace('website', '') ||
          clickedItem.querySelector('img')?.title.replace('logo', '');
        gaTracking(`${operatorName} CTR | Toplist`);
      } else if (target.closest('a[modifier="cta"]') && target.closest('.MuiBox-root.mui-r310n7')) {
        const clickedItem = target.closest('a[modifier="cta"]');
        const operatorName = clickedItem.title.replace('website', '');
        gaTracking(`${operatorName} CTO | Toplist`);
      } else if (target.closest('a[data-element="toplist"][data-type="logo"]')) {
        const clickedItem = target.closest('a[data-element="toplist"]');
        const operatorName = clickedItem.dataset.operator;
        gaTracking(`${operatorName} CTO | Logo | List`);
      } else if (target.closest('a[data-element="toplist"][data-type="button"]')) {
        const clickedItem = target.closest('a[data-element="toplist"]');
        const operatorName = clickedItem.dataset.operator;
        gaTracking(`${operatorName} CTO | Button | List`);
      } else if (target.closest('a[data-element="toplist"][data-type="review-button"]')) {
        const clickedItem = target.closest('a[data-element="toplist"]');
        const operatorName = clickedItem.dataset.operator;
        gaTracking(`${operatorName} CTR | List`);
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  setTimeout(init, 500);

  onUrlChange(() => {
    setTimeout(init, 500);
  });
};
