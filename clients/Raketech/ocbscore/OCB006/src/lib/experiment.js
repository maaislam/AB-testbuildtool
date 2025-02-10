import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import { pointElement, rightArrow } from './assets/icons';
import staticButton from './components/staticButton';

const { ID, VARIATION } = shared;

const init = () => {
  const mainCard = document.querySelectorAll('[aria-labelledby*="match-event-tab"]');
  mainCard.forEach((card) => {
    const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
    const text = mainCardTitleElement ? mainCardTitleElement.textContent : '';
    const onlyText = text?.split(',')[0];
    const rating = text?.split(',')[1];
    const mainButton = card.querySelector('[data-type="button"]');
    if (mainCardTitleElement) mainCardTitleElement.textContent = onlyText;
    if (mainButton && !mainButton.classList.contains(`${ID}__cardButton`)) {
      mainButton.innerHTML = `${mainButton.innerHTML}${rating}<span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__cardButton`);
    }
    if (mainButton && !card.querySelector(`.${ID}__staticButtonWrapper`)) {
      mainButton.insertAdjacentHTML('beforebegin', staticButton(ID, mainButton.href));
      document
        .querySelector(`.${ID}__staticButtonWrapper`)
        .insertAdjacentElement('beforeend', mainButton);
      mainButton.childNodes[0].textContent = '';
    }
    const allSvgIcons = card.querySelectorAll('svg.MuiSvgIcon-root');
    allSvgIcons.forEach((icon) => {
      if (!icon.previousElementSibling?.classList.contains(`${ID}__icon`)) {
        icon.insertAdjacentHTML('beforebegin', pointElement);
        icon.previousElementSibling.classList.add(`${ID}__icon`);
      }
    });

    //NEW TEST AMENDS
    //const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
    card.classList.add(`${ID}__show`);
    const description = mainCardTitleElement ? mainCardTitleElement.nextElementSibling : '';
    if (description && description.classList.contains('MuiStack-root')) {
      description.classList.add(`${ID}__description`);

      if (!card.querySelector(`.${ID}__text`)) {
        description.insertAdjacentHTML(
          'afterend',
          `<span class="${ID}__text">Hide all Prediction</span>`
        );
      }
    }
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
      mainButton.innerHTML = `${rating} <span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__button`);
      mainButton.closest('.MuiCardActions-root').classList.add(`${ID}__buttonWrappers`);
    }

    //NEW TEST AMENDS
    const description = item.querySelector('.MuiCardContent-root > p.MuiTypography-body2');
    if (description && !item.querySelector(`.${ID}__text`)) {
      description.classList.add(`${ID}__description`);
      description.insertAdjacentHTML(
        'afterend',
        `<span class="${ID}__text">Read all BETTING TIP</span>`
      );
    }
  });
};

export default () => {
  setup(); //use if needed

  const clickHandler = (e) => {
    const { target } = e;
    const firstTeam = document.querySelector('.MuiBox-root.mui-1f0m54x > p');
    const secondTeam = document.querySelector(
      '.MuiBox-root.mui-1f0m54x ~ .MuiBox-root.mui-1f0m54x > p'
    );
    const matchType = document.querySelector('.MuiTypography-caption.mui-l7ou8j');
    const firstTeamName = firstTeam ? firstTeam.textContent : '';
    const secondTeamName = secondTeam ? secondTeam.textContent : '';
    const matchTypeName = matchType ? matchType.textContent : '';
    if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]')) {
      const button =
        target.closest('[aria-labelledby*="match-event-tab"] [data-type="button"]') ||
        target.closest(`.${ID}__bettingItem [data-type="button"]`);
      const { operator } = button.dataset;
      const jsClick = button.classList.contains('js-click');
      if (!jsClick) {
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Button`
        );
      }
    } else if (target.closest(`.${ID}__bettingItem [data-type="button"]`)) {
      const button = target.closest(`.${ID}__bettingItem [data-type="button"]`);
      const { operator } = button.dataset;
      const jsClick = button.classList.contains('js-click');
      if (!jsClick) {
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Button`
        );
      }
    } else if (target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]')) {
      const button = target.closest('[aria-labelledby*="match-event-tab"] [data-type="logo"]');
      const { operator } = button.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Logo`
      );
    } else if (target.closest(`.${ID}__bettingItem [data-type="logo"]`)) {
      const button = target.closest(`.${ID}__bettingItem [data-type="logo"]`);
      const { operator } = button.dataset;
      gaTracking(
        `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Logo`
      );
    } else if (target.closest('button#match-event-tab-0')) {
      pollerLite(['#match-event-tabpanel-0'], () => {
        init();
      });
    } else if (
      (target.closest(`.${ID}__text`) && target.closest(`.${ID}__bettingItem:not(.${ID}__show)`)) ||
      (target.closest(`.${ID}__text`) &&
        target.closest(`[aria-labelledby*="match-event-tab"]:not(.${ID}__show)`))
    ) {
      const clickedItem = target.closest(`.${ID}__text`);
      const bettingItem =
        target.closest(`.${ID}__bettingItem`) ||
        target.closest('[aria-labelledby*="match-event-tab"]');
      const button = bettingItem.querySelector('[data-type="button"]');
      const { operator } = button.dataset;

      bettingItem.classList.add(`${ID}__show`);
      if (clickedItem.closest(`.${ID}__bettingItem`)) {
        clickedItem.textContent = 'Hide all BETTING TIP';
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Open Betting Tips`
        );
      } else {
        clickedItem.textContent = 'Hide all Prediction';
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Open Prediction`
        );
      }
    } else if (
      (target.closest(`.${ID}__text`) && target.closest(`.${ID}__bettingItem.${ID}__show`)) ||
      (target.closest(`.${ID}__text`) &&
        target.closest(`[aria-labelledby*="match-event-tab"].${ID}__show`))
    ) {
      const clickedItem = target.closest(`.${ID}__text`);
      const bettingItem =
        target.closest(`.${ID}__bettingItem`) ||
        target.closest('[aria-labelledby*="match-event-tab"]');
      const button = bettingItem.querySelector('[data-type="button"]');
      const { operator } = button.dataset;

      bettingItem.classList.remove(`${ID}__show`);
      if (clickedItem.closest(`.${ID}__bettingItem`)) {
        clickedItem.textContent = 'Read all BETTING TIP';
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Close Betting Tips`
        );
      } else {
        clickedItem.textContent = 'Read all Prediction';
        gaTracking(
          `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Close Prediction`
        );
      }
    }
  };

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();

  onUrlChange(() => {
    pollerLite(['#match-event-tabpanel-0'], () => {
      init(); //
    });
  });
};
