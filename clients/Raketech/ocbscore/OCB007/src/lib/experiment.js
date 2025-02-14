import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, parseHTML, pollerLite } from './helpers/utils';
import bettingWrapper from './components/bettingWrapper';

const { ID, VARIATION } = shared;
const clickHandler = (e) => {
  const { target } = e;
  if (target.closest(`.${ID}__bettingButton a`)) {
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match } = wrapper.dataset;
    gaTracking(`${match} | Read Full Prediction`);
  } else if (target.closest(`.${ID}__bettingContentTitle`)) {
    const clickedItem = target.closest(`.${ID}__bettingContentTitle`);
    const tipName = clickedItem.innerText.trim();
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match } = wrapper.dataset;
    gaTracking(`${match} | ${tipName} Click to Tip`);
  } else if (target.closest(`.${ID}__image`)) {
    const clickedItem = target.closest(`.${ID}__image`);
    const ratingWrapper = clickedItem.closest(`.${ID}__ratingWrapper`);
    const { operator } = ratingWrapper.dataset;
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match } = wrapper.dataset;
    gaTracking(`${match} | ${operator} CTO | Logo`);
  } else if (target.closest(`.${ID}__number`)) {
    const clickedItem = target.closest(`.${ID}__number`);
    const ratingWrapper = clickedItem.closest(`.${ID}__ratingWrapper`);
    const { operator } = ratingWrapper.dataset;
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match } = wrapper.dataset;
    gaTracking(`${match} | ${operator} CTO | Button`);
  } else if (target.closest(`.${ID}__tipsterWrapper a`)) {
    const clickedItem = target.closest(`.${ID}__tipsterWrapper a`);
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const name = clickedItem.innerText.trim();
    const { match } = wrapper.dataset;
    gaTracking(`${match} | ${name} Click to Tipster`);
  } else if (target.closest(`.${ID}__bettingCategory a`)) {
    const clickedItem = target.closest(`.${ID}__bettingCategory a`);
    const competitionName = clickedItem.innerText;
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match } = wrapper.dataset;
    gaTracking(`${match} | ${competitionName} Click to Competition`);
  } else if (target.closest('.MuiGrid-container.mui-isbt42 .MuiGrid-item a')) {
    const clickedItem = target.closest('.MuiGrid-container.mui-isbt42 .MuiGrid-item a');
    const wrapper = clickedItem.closest('.MuiGrid-container.mui-isbt42 .MuiGrid-item');
    const matchnameElement = wrapper.querySelector('p');
    const matchname = matchnameElement.innerText.split('Prediction')[0];
    gaTracking(`${matchname} | Button`);
  }
};

const init = () => {
  //...
  const bettingElements = document.querySelectorAll(`.${ID}__bettingWrapper`);
  if (bettingElements && bettingElements.length > 0) {
    document.querySelectorAll(`.${ID}__bettingWrapper`).forEach((item) => item.remove());
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

      console.log(eventName, 'eventName');
      console.log(eventTimeElement, 'eventTimeElement');
      console.log(eventTime, 'eventTime1');
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

        console.log(data, 'data');

        items.forEach((item) => {
          const url = item.querySelector('a').href;
          const targetPoint = item.querySelector('.MuiCardActions-spacing');
          const readfullPredictionButton = targetPoint.querySelector('a');
          readfullPredictionButton.innerText = 'Read Full Prediction';
          targetPoint.classList.add(`${ID}__mainWrapper`);
          const isExistingPrediction = data.find((item) => item.url === url);
          if (isExistingPrediction && !item.querySelector(`.${ID}__bettingWrapper`)) {
            console.log(isExistingPrediction, 'isExistingPrediction');
            console.log(item.querySelector('.MuiCardActions-spacing'));
            item
              .querySelector('.MuiCardActions-spacing')
              .insertAdjacentHTML('afterbegin', bettingWrapper(ID, isExistingPrediction));
          }
        });

        document.body.style.visibility = 'visible';
        ////remove loader
        //const loaderElem = document.querySelector(`.${ID}__loaderWrapper`);
        //loaderElem && loaderElem.remove();
      })
      .catch((error) => {
        //remove loader
        const loaderElem = document.querySelector(`.${ID}__loaderWrapper`);
        loaderElem && loaderElem.remove();
        document.documentElement.classList.remove(ID);
        document.documentElement.classList.remove(`${ID}-${VARIATION}`);
        const bettingWrapperElem = document.querySelector(`.${ID}__bettingWrapper`);
        bettingWrapperElem && bettingWrapperElem.remove();
      });
  }, 1000);
};

export default () => {
  setup();

  //add loader
  //const attachPoint = document.querySelector('#today.wp-block-heading');
  //attachPoint.insertAdjacentHTML(
  //'afterend',
  //`<div class="${ID}__loaderWrapper"><div class="${ID}__loader"></div></div>`
  //);

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'control') return;

  init();

  onUrlChange(() => {
    pollerLite(
      [
        () =>
          document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item') &&
          document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item').length > 0
      ],
      () => {
        init(); //
      }
    );
  });
};
