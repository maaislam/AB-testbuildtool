import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, parseHTML, pollerLite } from './helpers/utils';
import bettingWrapper from './components/bettingWrapper';
import bannerData from './data/bannerData';
import secondaryBgImage from './components/secondaryBgImage';

const { ID, VARIATION } = shared;

const initiallyItemsHide = () => {
  const items = document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item');
  items.forEach((item) => {
    item.classList.add(`${ID}__item`);
    item.style.opacity = '0';
  });
};

const renderLoader = () => {
  const loaderElem = document.querySelector(`.${ID}__loaderWrapper`);
  loaderElem && loaderElem.remove();
  //add loader
  const attachPoint = document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item')[0]
    .parentElement;
  attachPoint.insertAdjacentHTML(
    'beforebegin',
    `<div class="${ID}__loaderWrapper"><div class="${ID}__loader"></div></div>`
  );
};
const clickHandler = (e) => {
  const { target } = e;
  if (target.closest(`.${ID}__eventInfo a`)) {
    const clickedItem = target.closest(`.${ID}__eventInfo a`);
    const wrapper = clickedItem.closest(`.${ID}__bettingWrapper`);
    const { match, event } = wrapper.dataset;
    gaTracking(`${match} | ${event} | Prediction Event`);
  } else if (target.closest(`.${ID}__bettingContentTitle`)) {
    const clickedItem = target.closest(`.${ID}__bettingContentTitle`);
    const wrapper = clickedItem.closest(`.${ID}__bettingWrapper`);
    const { match } = wrapper.dataset;
    const { operator } = clickedItem.dataset;
    gaTracking(`${match} | ${operator} | Prediction Text`);
  } else if (target.closest(`.${ID}__number`)) {
    const clickedItem = target.closest(`.${ID}__number`);
    const button = clickedItem.closest(`.${ID}__casinoLink`);
    const wrapper = clickedItem.closest(`.${ID}__bettingWrapper`);
    const { match } = wrapper.dataset;
    const { operator } = button.dataset;

    gaTracking(`${match} | ${operator} | Prediction Button`);
  } else if (target.closest(`.${ID}__image`)) {
    const clickedItem = target.closest(`.${ID}__image`);
    const button = clickedItem.closest(`.${ID}__casinoLink`);
    const wrapper = clickedItem.closest(`.${ID}__bettingWrapper`);
    const { match } = wrapper.dataset;
    const { operator } = button.dataset;

    gaTracking(`${match} | ${operator} | Prediction Logo`);
  } else if (target.closest(`.${ID}__mainWrapper > a`) && VARIATION !== 'control') {
    const clickedItem = target.closest(`.${ID}__mainWrapper > a`);
    const wrapper = clickedItem.closest(`.${ID}__mainWrapper`);
    const bettingElement = wrapper?.querySelector(`.${ID}__bettingWrapper`);
    const { match } = bettingElement.dataset;

    gaTracking(`${match} | Read Full Prediction`);
  } else if (target.closest('.MuiCardActions-spacing > a') && VARIATION === 'control') {
    const clickedItem = target.closest('.MuiCardActions-spacing > a');
    const wrapper = clickedItem.closest('.MuiPaper-root');
    const firstTeamElement = wrapper.querySelector('.MuiBox-root > p.MuiTypography-body1');
    const secondTeamElement = wrapper.querySelector(
      '.MuiBox-root > p.MuiTypography-body1 ~ p.MuiTypography-body1'
    );

    const firstTeam = firstTeamElement ? firstTeamElement.textContent : '';
    const secondTeam = secondTeamElement ? secondTeamElement.textContent : '';

    gaTracking(`${firstTeam} vs ${secondTeam} | Read Full Prediction`);
  } else if (target.closest(`.${ID}__morePredictionButton`)) {
    gaTracking('More Match Predictions');
  } else if (target.closest('.mui-19egsyp > a')) {
    gaTracking('More Match Predictions');
  }
};

const init = () => {
  //...

  const bannerTitleElem = document.querySelector('h1.MuiTypography-h1');
  if (bannerTitleElem) {
    bannerTitleElem.innerText = bannerData.title;
    bannerTitleElem.classList.add(`${ID}__bannerTitle`);
  }

  const bannerSubtitleElem = document.querySelector('p.MuiTypography-body2');
  if (bannerSubtitleElem) {
    bannerSubtitleElem.innerText = bannerData.subtitle;
    bannerSubtitleElem.classList.add(`${ID}__bannerSubtitle`);
  }

  const secondaryBgImageElem = document.querySelector('img[alt="Bat image"]');
  if (secondaryBgImageElem && !document.querySelector(`.${ID}__secondaryBgImage`)) {
    secondaryBgImageElem.insertAdjacentHTML('beforebegin', secondaryBgImage(ID));
  }
  const morePredictionButtonInCarousel = document.querySelector('.mui-19egsyp > a');
  if (morePredictionButtonInCarousel) {
    morePredictionButtonInCarousel.innerText = 'more today’s match predictions';
    morePredictionButtonInCarousel.classList.add(`${ID}__morePredictionButton`);
  }

  const items = document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item');
  const collectUrls = [];

  setTimeout(() => {
    items.forEach((item) => {
      const url = item.querySelector('a').href;
      const eventNameElement = item.querySelector(
        '.MuiCardContent-root > span.MuiTypography-caption'
      );

      const eventName = eventNameElement ? eventNameElement.textContent.split(',')[0] : '';
      const eventTimeElement = item.querySelector('[data-testid="ScheduleIcon"]');
      const eventTime = eventTimeElement?.nextSibling?.textContent.trim() || '';

      const firstTeamElement = item.querySelector('.MuiBox-root > p.MuiTypography-body1');
      const secondTeamElement = item.querySelector(
        '.MuiBox-root > p.MuiTypography-body1 ~ p.MuiTypography-body1'
      );

      const firstTeam = firstTeamElement ? firstTeamElement.textContent : '';
      const secondTeam = secondTeamElement ? secondTeamElement.textContent : '';

      const targetPoint = item.querySelector('.MuiCardActions-spacing');
      const readfullPredictionButton = targetPoint.querySelector('a:not(.event-link)');
      readfullPredictionButton.innerText = 'Read Full Prediction';

      collectUrls.push({
        url,
        eventName,
        eventTime,
        firstTeam,
        secondTeam
      });
    });

    parseHTML(collectUrls)
      .then((data) => {
        if (data.length === 0) {
          return;
        }

        items.forEach((item) => {
          const url = item.querySelector('a').href;
          const targetPoint = item.querySelector('.MuiCardActions-spacing');
          targetPoint.classList.add(`${ID}__mainWrapper`);
          const isExistingPrediction = data.find((item) => item.url === url);
          if (isExistingPrediction && !item.querySelector(`.${ID}__bettingWrapper`)) {
            item
              .querySelector('.MuiCardActions-spacing')
              .insertAdjacentHTML('afterbegin', bettingWrapper(ID, isExistingPrediction));
          }
        });

        const loaderElem = document.querySelector(`.${ID}__loaderWrapper`);
        loaderElem && loaderElem.remove();

        items.forEach((item) => {
          item.style.opacity = '1';
        });
      })
      .catch((error) => {
        //remove loader
        const loaderElem = document.querySelector(`.${ID}__loaderWrapper`);
        loaderElem && loaderElem.remove();
        document.documentElement.classList.remove(ID);
        document.documentElement.classList.remove(`${ID}-${VARIATION}`);
        const bettingWrapperElem = document.querySelector(`.${ID}__bettingWrapper`);
        bettingWrapperElem && bettingWrapperElem.remove();
        items.forEach((item) => {
          item.style.opacity = '1';
        });
      });
  }, 1500);
};

export default () => {
  setup();

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'control') {
    return;
  }

  initiallyItemsHide();
  renderLoader();
  init();

  onUrlChange(() => {
    pollerLite(
      [
        () =>
          document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item') &&
          document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item').length > 0
      ],
      () => {
        if (window.location.pathname === '/') {
          initiallyItemsHide();
          renderLoader();
          init(); //
        }
      }
    );
  });
};
