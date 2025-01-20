import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import { pointElement, rightArrow } from './assets/icons';
import staticButton from './components/staticButton';

const { ID, VARIATION } = shared;

const init = () => {
  //...

  const mainCard = document.querySelectorAll('[aria-labelledby*="match-event-tab"]');
  mainCard.forEach((card) => {
    const mainCardTitleElement = card.querySelector('.MuiTypography-body1');
    const text = mainCardTitleElement ? mainCardTitleElement.textContent : '';
    //const onlyText = text?.split(',')[0];
    const rating = text?.split(',')[1];
    const mainButton = card.querySelector('[data-type="button"]');
    //if (mainCardTitleElement) mainCardTitleElement.textContent = onlyText;
    if (mainButton && !mainButton.classList.contains(`${ID}__cardButton`)) {
      mainButton.innerHTML = `${mainButton.innerHTML}${rating}<span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__cardButton`);
    }

    if (mainButton && !card.querySelector(`.${ID}__staticButtonWrapper`)) {
      mainButton.insertAdjacentHTML('beforebegin', staticButton(ID, mainButton.href));
      document
        .querySelector(`.${ID}__staticButtonWrapper`)
        .insertAdjacentElement('beforeend', mainButton);
      mainButton.childNodes[0].textContent = 'BET ON 1XBET FOR TEAM TO WIN';
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
      mainButton.innerHTML = `${mainButton.innerHTML
        .toLowerCase()
        .replace(
          'visit',
          'BET ON'
        )}&nbsp;${rating} <span class="${ID}__arrow">${rightArrow}</span>`;
      mainButton.classList.add(`${ID}__button`);
    }
  });
};

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
    gaTracking(
      `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Button`
    );
  } else if (target.closest(`.${ID}__bettingItem [data-type="button"]`)) {
    const button = target.closest(`.${ID}__bettingItem [data-type="button"]`);
    const { operator } = button.dataset;
    gaTracking(
      `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Button`
    );
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
      init(); //
    });
  } else if (target.closest('[aria-labelledby*="match-event-tab"] .mui-veyekx')) {
    const clickedItem = target.closest('[aria-labelledby*="match-event-tab"] .mui-veyekx');
    const linkElement = clickedItem.querySelector('a[data-type="button"]');
    const link = linkElement.href;
    const { operator } = linkElement.dataset;
    gaTracking(
      `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Prediction Container`
    );
    window.open(link, '_blank');
  } else if (target.closest(`.${ID}__bettingItem`)) {
    const clickedItem = target.closest(`.${ID}__bettingItem`);
    const linkElement = clickedItem.querySelector(`.${ID}__bettingItem [data-type="button"]`);
    const link = linkElement.href;
    const { operator } = linkElement.dataset;
    gaTracking(
      `${firstTeamName} vs ${secondTeamName} ${matchTypeName} | ${operator} | Betting Tips Container`
    );
    window.open(link, '_blank');
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
