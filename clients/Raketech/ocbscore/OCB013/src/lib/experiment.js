import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import staticButton from './components/staticButton';
import { pointElement, rightArrow } from './assets/icons';

const { ID, VARIATION } = shared;
const shouldRunTest = (url) => /^https:\/\/ocbscores\.com\/predictions-and-tips\/.+$/.test(url);

const init = () => {
  const tipsContainer = document.querySelector('#tips');
  const targetPoint = tipsContainer.parentElement;
  targetPoint.classList.add(`${ID}__tipsWrapper`);

  if (VARIATION === '1') {
    const controlButtonElement = document.querySelector(
      '[aria-labelledby="match-event-tab-0"] [data-type="button"]'
    );

    if (!controlButtonElement) {
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
      return;
    }
    const cloneControlButtonElement = controlButtonElement.cloneNode(true);
    cloneControlButtonElement.classList.add(`${ID}__newButton`);
    const buttonTextElement = targetPoint.querySelector('p:last-of-type');
    const buttonText = buttonTextElement ? buttonTextElement.textContent : '';
    cloneControlButtonElement.textContent = buttonText;

    if (document.querySelector(`.${ID}__newButton`)) {
      document.querySelector(`.${ID}__newButton`).remove();
    }
    targetPoint.insertAdjacentElement('beforeend', cloneControlButtonElement);
  }

  if (VARIATION === '2') {
    const mainCard = document.querySelector('[aria-labelledby*="match-event-tab"] .mui-veyekx');
    if (!mainCard) {
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
      return;
    }
    const cloneCard = mainCard.cloneNode(true);
    cloneCard.classList.add(`${ID}__cardWrapper`);

    if (document.querySelector(`.${ID}__cardWrapper`)) {
      document.querySelector(`.${ID}__cardWrapper`).remove();
    }
    targetPoint.insertAdjacentElement('beforeend', cloneCard);

    Array.from(document.querySelectorAll(`.${ID}__cardWrapper`)).forEach((card) => {
      const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
      console.log(mainCardTitleElement, 'mainCardTitleElement');
      const text = mainCardTitleElement ? mainCardTitleElement.textContent : '';
      const rating = text?.split(',')[1];
      const mainButton = card.querySelector('[data-type="button"]');
      mainCardTitleElement.textContent = text?.split(',')[0];
      if (mainButton && !mainButton.classList.contains(`${ID}__cardButton`)) {
        mainButton.innerHTML = '';
        mainButton.classList.add(`${ID}__cardButton`);
      }

      if (mainButton && !card.querySelector(`.${ID}__staticButtonWrapper`)) {
        mainButton.insertAdjacentHTML('beforebegin', staticButton(ID, mainButton.href));
        document
          .querySelector(`.${ID}__staticButtonWrapper [data-type="logo"]`)
          .insertAdjacentElement('afterend', mainButton);
        mainButton.innerHTML = '';
        mainButton.innerHTML = `place bet ► odds ${rating}<span class="${ID}__arrow">${rightArrow}</span>`;

        pollerLite(['.OCB005__staticButtonWrapper'], () => {
          document
            .querySelector(`.${ID}__staticButtonWrapper [data-type="logo"]`)
            .insertAdjacentElement('afterend', mainButton);
          mainButton.innerHTML = '';
          mainButton.innerHTML = `place bet ► odds ${rating}<span class="${ID}__arrow">${rightArrow}</span>`;
        });
      }

      const allSvgIcons = card.querySelectorAll('svg.MuiSvgIcon-root');

      allSvgIcons.forEach((icon) => {
        if (!icon.previousElementSibling?.classList.contains(`${ID}__icon`)) {
          icon.insertAdjacentHTML('beforebegin', pointElement);
          icon.previousElementSibling.classList.add(`${ID}__icon`);
        }
      });
    });

    pollerLite([`.OCB009__staticButtonWrapper .${ID}__staticButtonWrapper`], () => {
      const wrapper = document.querySelector(
        `.OCB009__staticButtonWrapper .${ID}__staticButtonWrapper`
      );
      const buttonWrapper = wrapper.parentElement;
      buttonWrapper.insertAdjacentElement('beforebegin', wrapper);
    });
  }

  const bettingsTipsItems = document.querySelectorAll(
    '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
  );
  bettingsTipsItems.forEach((item) => {
    item.classList.add(`${ID}__bettingItem`);
  });
};

const clickHandler = (e) => {
  const { target } = e;
  if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]')) {
    const button =
      target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]') ||
      target.closest(`.${ID}__bettingItem [data-type="button"]`);
    const { operator } = button.dataset;
    const jsClick = button.classList.contains('js-click');
    if (!jsClick) {
      gaTracking(`${operator} | Prediction Button`);
    }
  } else if (target.closest(`.${ID}__bettingItem [data-type="button"]`)) {
    const button = target.closest(`.${ID}__bettingItem [data-type="button"]`);
    const { operator } = button.dataset;
    const jsClick = button.classList.contains('js-click');
    if (!jsClick) {
      gaTracking(`${operator} | Betting Tips Button`);
    }
  } else if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]')) {
    const button = target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]');
    const { operator } = button.dataset;
    gaTracking(`${operator} | Prediction Logo`);
  } else if (target.closest(`.${ID}__bettingItem [data-type="logo"]`)) {
    const button = target.closest(`.${ID}__bettingItem [data-type="logo"]`);
    const { operator } = button.dataset;
    gaTracking(`${operator} | Betting Tips Logo`);
  } else if (target.closest('button#match-event-tab-0')) {
    pollerLite(
      ['#tips', () => shouldRunTest(window.location.href), () => window.location.pathname !== '/'],
      () => {
        setTimeout(init, 1000);
      }
    );
  } else if (target.closest(`.${ID}__newButton[data-type="button"]`)) {
    const clickedItem = target.closest(`.${ID}__newButton[data-type="button"]`);
    const { operator } = clickedItem.dataset;
    gaTracking(`${operator} | Bottom CTA Button`);
  } else if (target.closest(`.${ID}__cardWrapper`) && target.closest('[data-type="button"]')) {
    const clickedItem = target.closest('[data-type="button"]');
    const { operator } = clickedItem.dataset;
    gaTracking(`${operator} | Bottom CTA Button`);
  } else if (target.closest(`.${ID}__cardWrapper`) && target.closest('[data-type="logo"]')) {
    const clickedItem = target.closest('[data-type="logo"]');
    const { operator } = clickedItem.dataset;
    gaTracking(`${operator} | Bottom CTA Logo`);
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  setTimeout(init, 1000);

  onUrlChange(() => {
    pollerLite(
      ['#tips', () => shouldRunTest(window.location.href), () => window.location.pathname !== '/'],
      () => {
        setTimeout(init, 1000);
      }
    );
  });
};
