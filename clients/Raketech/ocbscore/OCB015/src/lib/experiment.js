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
  }

  const items = document.querySelectorAll('.MuiCardContent-root.mui-ne8hhn');
  const collectUrls = [];

  items.forEach((item) => {
    const url = item.lastElementChild.querySelector('a').href;
    collectUrls.push({
      url
    });
  });

  console.log(collectUrls, 'collectUrls');

  parseHTML(collectUrls)
    .then((data) => {
      if (data.length === 0) {
        return;
      }

      const attachPoint = document.querySelector(
        '.MuiCardContent-root.mui-ne8hhn'
      ).lastElementChild;
      if (!document.querySelector(`.${ID}__bettingWrapper`)) {
        attachPoint.insertAdjacentHTML('beforebegin', bettingWrapper(ID, data));
      }
      document.body.style.visibility = 'visible';
    })
    .catch((error) => {
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
      const bettingWrapperElem = document.querySelector(`.${ID}__bettingWrapper`);
      bettingWrapperElem && bettingWrapperElem.remove();
    });
};

export default () => {
  setup();

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
          document.querySelectorAll('.MuiCardContent-root.mui-ne8hhn') &&
          document.querySelectorAll('.MuiCardContent-root.mui-ne8hhn').length > 0
      ],
      () => {
        init();
      }
    );
  });
};
