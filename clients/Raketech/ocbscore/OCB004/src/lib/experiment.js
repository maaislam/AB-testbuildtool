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
  } else if (!target.closest('a') && target.closest(`.${ID}__bettingItem`)) {
    const wrapper = target.closest(`.${ID}__bettingItem`);
    const { match, link } = wrapper.dataset;
    gaTracking(`${match} | Container Full Prediction`);
    window.location.href = link;
  }
};

const init = () => {
  //...

  if (document.querySelector(`.${ID}__bettingWrapper`)) {
    document.querySelector(`.${ID}__bettingWrapper`).remove();
    document.documentElement.classList.remove(ID);
    document.documentElement.classList.remove(`${ID}-${VARIATION}`);
  }

  const items = document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item');
  const collectUrls = [];
  items.forEach((item) => {
    const url = item.querySelector('a').href;
    collectUrls.push(url);
  });

  parseHTML(collectUrls).then((data) => {
    if (data.length === 0) {
      return;
    }

    //console.log(data);

    setup();
    const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
    if (!isListenerAdded) {
      document.body.addEventListener('click', (e) => clickHandler(e));
    }
    document.body.dataset[`${ID}__isListenerAdded`] = true;

    if (VARIATION === 'control') return;
    const attachPoint = document.querySelector('#today.wp-block-heading');
    const attachPointWrapper = attachPoint.closest('.MuiBox-root');
    if (!document.querySelector(`.${ID}__bettingWrapper`)) {
      attachPointWrapper.insertAdjacentHTML('beforeend', bettingWrapper(ID, data));
    }
  });
};

export default () => {
  //use if needed

  //-----------------------------

  init(); //

  //Poll and re-run init
  onUrlChange(() => {
    pollerLite(
      [
        'body',
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
