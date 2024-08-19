import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM, onUrlChange } from './helpers/utils';
import bonusElement from './components/bonusElement';
import depositeElement from './components/depositElement';
import image from './components/image';

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
const renderElements = (selector) => {
  if (window.location.pathname !== '/fi') return;
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const container = element.querySelector('.mui-1k04mn');
    const spinContainer = element.querySelector('.mui-jcipg8');
    const spinElement = spinContainer.querySelector('.mui-1orysjz');
    const cloneSpinElement = spinElement.cloneNode(true);

    const casinoImage = element.querySelector('[data-click-target="Toplist General"] > img');
    const buttonWrapper = element.querySelector('.outButton[data-click-target="Toplist General"]');

    if (!container.querySelector(`.${ID}__depositeWrapper`)) {
      container.insertAdjacentHTML('beforeend', depositeElement(ID, cloneSpinElement));
    }
    if (!spinContainer.querySelector(`.${ID}__bonusElement`)) {
      spinElement.insertAdjacentHTML('beforebegin', bonusElement(ID));
    }

    if (!buttonWrapper.querySelector(`.${ID}__imageWrapper`)) {
      buttonWrapper.insertAdjacentHTML('beforeend', image(ID, casinoImage?.src));
    }
  });
};

const casinoDomHandler = () => {
  const remainingCasinos = document.querySelectorAll(`.mui-t5yac0:not(.${ID}__loadedCasino)`);
  remainingCasinos.forEach((casino) => {
    casino.classList.add(`${ID}__loadedCasino`);
  });
  renderElements(`.${ID}__loadedCasino`);
};

const init = () => {
  if (window.location.pathname !== '/fi') return;
  const mainElement = document.querySelector('.mui-19udz37');
  mainElement.classList.add(`${ID}__casinoWrapper`);

  const allCasinos = mainElement.querySelectorAll('.mui-t5yac0');
  allCasinos.forEach((casino) => {
    casino.classList.add(`${ID}__loadedCasino`);
  });

  renderElements(`.${ID}__loadedCasino`);

  const isMutationAdded = mainElement.dataset[`${ID}__mutationAdded`];
  if (!isMutationAdded) {
    observeDOM('.mui-19udz37', casinoDomHandler);
  }
  mainElement.dataset[`${ID}__mutationAdded`] = true;
};

export default () => {
  setup();

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

  if (VARIATION === 'Control') return;

  init();

  onUrlChange(() => {
    setTimeout(init, 2000);
  });
};
