import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import {
  fetchCasinoData,
  getCroStorage,
  observeDOM,
  onUrlChange,
  setCroStorage,
  pollerLite
} from './helpers/utils';
import bonusElement from './components/bonusElement';
import depositeElement from './components/depositElement';
import image from './components/image';
import { tagData } from './data/tagData';
import ribbon from './components/ribbon';
import sortingCasinoArray from './data/sortingCasino';

const { ID, VARIATION } = shared;

const visitedCasinoFn = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(
      `a[data-click-target="Toplist General"][data-operator="${casino}"]`
    );
    casinoLinks.forEach((casinoLink) => {
      //console.log('🚀 ~ file: experiment.js:17 ~ casinoData.forEach ~ casinoLinks:', casinoLinks);
      const casinoCardElem = casinoLink?.closest('.mui-t5yac0');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__highlighted`);
    });
  });
};

const setCasinoLocalStorage = (operatorName) => {
  if (VARIATION === '1') {
    const data = getCroStorage(`${ID}__visitedCasinos`);
    if (!data) {
      const casinoNameArr = [operatorName];
      setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
      visitedCasinoFn();
      return;
    }
    const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
    if (visitedCasinos.includes(operatorName)) return;
    visitedCasinos.push(operatorName);
    setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
    visitedCasinoFn();
  }
};

const renderElements = (selector, casinoData) => {
  if (window.location.pathname !== '/fi') return;

  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const container = element.querySelector('.mui-1k04mn');
    const spinContainer = element.querySelector('.mui-jcipg8');
    const spinElement = spinContainer.querySelector('.mui-1orysjz');
    const cloneSpinElement = spinElement.cloneNode(true);
    const ribbonElement = element.querySelector('img[alt="ribbon"]');
    const numberElement = element.querySelector('.mui-uzk0s');

    const casinoImage = element.querySelector('[data-click-target="Toplist General"] > img');
    const buttonWrapper = element.querySelector('.outButton[data-click-target="Toplist General"]');

    const buttonLink = buttonWrapper.href;

    const isCasino = casinoData.filter((item) => buttonLink.includes(item.out_link_slug));

    if (isCasino[0]) {
      const { min_deposit, sportsbook } = isCasino[0];
      if (!container.querySelector(`.${ID}__depositeWrapper`)) {
        container.insertAdjacentHTML(
          'beforeend',
          depositeElement(ID, cloneSpinElement, min_deposit, sportsbook)
        );
      }
      if (!spinContainer.querySelector(`.${ID}__bonusElement`)) {
        spinElement.insertAdjacentHTML('beforebegin', bonusElement(ID, sportsbook));
      }

      if (!buttonWrapper.querySelector(`.${ID}__imageWrapper`)) {
        buttonWrapper.insertAdjacentHTML('beforeend', image(ID, casinoImage?.src));
      }
    }

    const isRibbon =
      ribbonElement && tagData.filter((item) => ribbonElement.src.includes(item.srcName));
    if (isRibbon && !element.querySelector(`.${ID}__ribbonWrapper`)) {
      ribbonElement.insertAdjacentHTML('beforebegin', ribbon(ID, isRibbon));
      element
        .querySelector(`.${ID}__ribbonWrapper span`)
        .insertAdjacentElement('beforebegin', numberElement);

      element.setAttribute('data-colored', true);

      element.style.setProperty('--set-bgColor', isRibbon[0].colorCode);
    }
  });

  window.isLoaded = false;
  visitedCasinoFn();
};

const casinoDomHandler = () => {
  window.isLoaded = true;
};

const init = () => {
  if (window.location.pathname !== '/fi') return;
  const mainElement = document.querySelector('.mui-19udz37');
  mainElement.classList.add(`${ID}__casinoWrapper`);

  const sortCasinoSection = document.querySelector('.mui-1lmnmy5');
  sortCasinoSection.querySelectorAll('button').forEach((casinoType) => {
    const isCasinoSortingType = sortingCasinoArray.filter(
      (item) => casinoType.textContent.trim() === item.name
    );

    if (isCasinoSortingType) {
      casinoType.setAttribute('data-value', isCasinoSortingType[0].title);
    }
  });

  const isMutationAdded = mainElement.dataset[`${ID}__mutationAdded`];
  if (!isMutationAdded) {
    //eslint-disable-next-line no-return-assign
    observeDOM('.mui-19udz37', casinoDomHandler);
  }
  mainElement.dataset[`${ID}__mutationAdded`] = true;

  //collect default casino data
  console.log('start');
  fetchCasinoData()
    .then((res) => res.json())
    .then(({ data }) => {
      renderElements('.mui-t5yac0', data.casinos);
    });

  visitedCasinoFn();
};

export default () => {
  setup();

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (
        target.closest('a[data-click-target="Toplist General"]') &&
        target.closest('.mui-srwksp')
      ) {
        const clickedItem = target.closest('a[data-click-target="Toplist General"]');
        const parentElement = clickedItem.closest('.mui-t5yac0');
        const operatorName = clickedItem.dataset.operator;
        gaTracking(
          `${operatorName} CTO | Logo ${
            parentElement.classList.contains(`${ID}__highlighted`) ? '| Highlighted' : ''
          }`
        );
        setCasinoLocalStorage(operatorName);
      } else if (target.closest('a.outButton[data-click-target="Toplist General"]')) {
        const clickedItem = target.closest('a.outButton[data-click-target="Toplist General"]');
        const parentElement = clickedItem.closest('.mui-t5yac0');
        const operatorName = clickedItem.dataset.operator;
        gaTracking(
          `${operatorName} CTO | Button ${
            parentElement.classList.contains(`${ID}__highlighted`) ? '| Highlighted' : ''
          }`
        );
        setCasinoLocalStorage(operatorName);
      } else if (target.closest('a.mui-1wi8pyb') && target.closest('.mui-t5yac0')) {
        const clickedItem = target.closest('a.mui-1wi8pyb');
        const parentElement = clickedItem.closest('.mui-t5yac0');
        const operatorName = clickedItem.textContent.trim().split('arvostelu')[0].trim();

        gaTracking(
          `${operatorName} CTR ${
            parentElement.classList.contains(`${ID}__highlighted`) ? '| Highlighted' : ''
          }`
        );

        setCasinoLocalStorage(operatorName);
      } else if (target.closest('button') && target.closest('.mui-1lmnmy5')) {
        const clickedItem = target.closest('button');
        const { value } = clickedItem.dataset;

        fetchCasinoData(value, 0, 10)
          .then((res) => res.json())
          .then(({ data }) => {
            pollerLite([() => window.isLoaded && data.casinos.length], () => {
              window.isLoaded = false;
              renderElements('.mui-t5yac0', data.casinos);
            });
          });
      } else if (target.closest('.MuiButtonBase-root.MuiButton-bootstrap')) {
        const casinoType = document.querySelector('.mui-1lmnmy5 > button.mui-yp3eyx');
        //eslint-disable-next-line no-unsafe-optional-chaining
        const { value } = casinoType?.dataset;
        const totalCasinos = document.querySelectorAll('.mui-19udz37 > .mui-t5yac0');
        const casinoLength = totalCasinos.length;

        fetchCasinoData(value, casinoLength, 10)
          .then((res) => res.json())
          .then(({ data }) => {
            pollerLite([() => window.isLoaded && data.casinos.length], () => {
              window.isLoaded = false;
              renderElements('.mui-t5yac0', data.casinos);
            });
          });
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
