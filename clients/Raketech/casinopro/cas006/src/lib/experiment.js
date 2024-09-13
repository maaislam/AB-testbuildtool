import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, initSwiper, getCroStorage, setCroStorage } from './helpers/utils';
import slider from './components/slider';

const { ID, VARIATION } = shared;

const visitedCasinoFn = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(
      `a[data-element="mini-toplist"][data-type="button"][data-operator="${casino}"]`
    );
    casinoLinks.forEach((casinoLink) => {
      //console.log('🚀 ~ file: experiment.js:17 ~ casinoData.forEach ~ casinoLinks:', casinoLinks);
      const casinoCardElem = casinoLink?.closest('.swiper-slide');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__grayscale`);
    });
  });
};

const init = () => {
  const mainElement = document.querySelector('.MuiBox-root.mui-gpcgoa');
  const sliderHeaderText = mainElement.querySelector('p').textContent.trim();
  const sliderElements = mainElement.querySelectorAll('.mui-1l35hgs, .mui-sfrc0q');
  const modifiedSilderElements = Array.from(sliderElements).map((item) => {
    const element = item.cloneNode(true);
    element.classList.add('swiper-slide');
    return element;
  });

  if (document.querySelector(`.${ID}__operatorSliderSection`)) {
    document.querySelector(`.${ID}__operatorSliderSection`).remove();
  }

  mainElement.insertAdjacentHTML(
    'beforebegin',
    slider(ID, sliderHeaderText, modifiedSilderElements)
  );

  initSwiper(ID);
  visitedCasinoFn();
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('a[data-element="mini-toplist"][data-type="button"]')) {
        const operatorName = target.closest('a[data-element="mini-toplist"]').dataset.operator;
        gaTracking(`${operatorName} CTO | Toplist`);
        if (VARIATION === '1') {
          const data = getCroStorage(`${ID}__visitedCasinos`);
          if (!data) {
            const casinoNameArr = [operatorName];
            setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
            init();
            return;
          }
          const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
          if (visitedCasinos.includes(operatorName)) return;
          visitedCasinos.push(operatorName);
          setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
          visitedCasinoFn();
        }
      } else if (target.closest('a[data-element="toplist"][data-type="logo"]')) {
        const operatorName = target.closest('a[data-element="toplist"][data-type="logo"]').dataset
          .operator;
        gaTracking(`${operatorName} CTO | Logo | List`);
      } else if (target.closest('a[data-element="toplist"][data-type="review-button"]')) {
        const operatorName = target.closest('a[data-element="toplist"][data-type="review-button"]')
          .dataset.operator;
        gaTracking(`${operatorName} CTR | Text | List`);
      } else if (target.closest('a[data-element="toplist"][data-type="button"]')) {
        const operatorName = target.closest('a[data-element="toplist"][data-type="button"]').dataset
          .operator;
        gaTracking(`${operatorName} CTO | Button | List`);
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  setTimeout(init, 1500);

  onUrlChange(() => {
    setTimeout(init, 1500);
  });
};
