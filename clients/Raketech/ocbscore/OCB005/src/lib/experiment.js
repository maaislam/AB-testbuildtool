import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import { pointElement, rightArrow } from './assets/icons';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const init = () => {
  //...

  const mainCard = document.querySelectorAll('[aria-labelledby*="match-event-tab"]');
  const chancesOfWiningElement = document.querySelector(
    '[aria-labelledby*="match-event-tab"] .MuiCard-root.mui-193qfb9'
  );

  if (chancesOfWiningElement) {
    const chancesOfWiningArray = [];
    const allItems = chancesOfWiningElement.querySelectorAll(
      'h4.MuiTypography-h4 + .MuiBox-root > .MuiBox-root'
    );

    allItems.forEach((item) => {
      const percentangeElement = item.querySelector('.MuiTypography-body2');
      const percentageValue = percentangeElement ? percentangeElement.textContent : '';
      const nameElement = item.querySelector('.MuiBox-root:last-child').querySelector('p');
      const nameValue = nameElement ? nameElement.textContent : '';

      chancesOfWiningArray.push({
        name: nameValue,
        percentage: percentageValue
      });
    });

    if (!document.querySelector(`.${ID}__wrapper`)) {
      chancesOfWiningElement.insertAdjacentHTML('beforebegin', wrapper(ID, chancesOfWiningArray));
    }
  }

  mainCard.forEach((card) => {
    const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
    const text = mainCardTitleElement ? mainCardTitleElement.textContent : '';
    const onlyText = text?.split(',')[0];
    const rating = text?.split(',')[1];
    const mainButton = card.querySelector('[data-type="button"]');
    if (mainCardTitleElement) mainCardTitleElement.textContent = onlyText;
    if (mainButton && !mainButton.classList.contains(`${ID}__cardButton`)) {
      mainButton.innerHTML = `${mainButton.innerHTML}&nbsp;${rating} <span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__cardButton`);
    }

    const allSvgIcons = card.querySelectorAll('svg.MuiSvgIcon-root');

    allSvgIcons.forEach((icon) => {
      if (!icon.previousElementSibling?.classList.contains(`${ID}__icon`)) {
        icon.insertAdjacentHTML('beforebegin', pointElement);
        icon.previousElementSibling.classList.add(`${ID}__icon`);
      }
    });
  });
  const bettingsTipsItems = document.querySelectorAll(
    '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
  );
  bettingsTipsItems.forEach((item) => {
    item.classList.add(`${ID}__bettingItem`);
    const logoElement = item.querySelector('a[data-type="logo"]');
    const mainButton = item.querySelector('a[data-type="button"]');
    const ratingElement = item.querySelector('.MuiTypography-root.mui-1egalym');
    const rating = ratingElement ? ratingElement.textContent : '';
    if (ratingElement) ratingElement.classList.add(`${ID}__hidden`);
    if (logoElement && !logoElement.classList.contains(`${ID}__logo`)) {
      mainButton.insertAdjacentElement('beforebegin', logoElement);
      logoElement.classList.add(`${ID}__logo`);
    }

    if (mainButton && !mainButton.classList.contains(`${ID}__button`)) {
      mainButton.innerHTML = `${mainButton.innerHTML}&nbsp;${rating} <span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__button`);
    }
  });
};

const clickHandler = (e) => {
  const { target } = e;
  const matchNameElement = document.querySelector('.MuiTypography-subtitle2');
  const matchName = matchNameElement.textContent || '';
  if (
    target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]') ||
    target.closest(`.${ID}__bettingItem [data-type="button"]`)
  ) {
    const button =
      target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]') ||
      target.closest(`.${ID}__bettingItem [data-type="button"]`);
    const { operator } = button.dataset;
    gaTracking(`${matchName} | ${operator} | Button`);
  } else if (target.closest(`.${ID}__bettingItem [data-type="logo"]`)) {
    const button = target.closest(`.${ID}__bettingItem [data-type="logo"]`);
    const { operator } = button.dataset;
    gaTracking(`${matchName} | ${operator} | Logo`);
  } else if (target.closest('button#match-event-tab-0')) {
    pollerLite(['#match-event-tabpanel-0'], () => {
      init(); //
    });
  }
};

export default () => {
  setup();

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  const bettingsTipsItems = document.querySelectorAll(
    '.MuiGrid-container.mui-isbt42 .MuiGrid-item'
  );
  bettingsTipsItems.forEach((item) => {
    item.classList.add(`${ID}__bettingItem`);
  });

  if (VARIATION === 'control') return;

  init();

  onUrlChange(() => {
    pollerLite(['#match-event-tabpanel-0'], () => {
      init(); //
    });
  });
};
