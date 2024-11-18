import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import bettingWrapper from './components/bettingWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const mainWrapper = document.querySelector('#match-container');
  const allTopEvents = mainWrapper.querySelectorAll('div[data-analytics-placement="topevent"]');
  allTopEvents.forEach((item) => {
    const targetElement = item.querySelector('.match-info');
    const matchDetails = item.querySelector('.match-detail');
    const postExcerpt = item.querySelector('.post-excerpt');
    if (targetElement && !item.querySelector(`.${ID}__bettingWrapper`)) {
      targetElement.insertAdjacentHTML('beforeend', bettingWrapper(ID));
    }
    matchDetails && matchDetails.insertAdjacentElement('beforeend', postExcerpt);
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__bettingWrapper`)) {
      const clickedItem = target.closest(`.${ID}__bettingWrapper`);
      const wrapper = clickedItem.closest('[data-analytics-placement="topevent"]');
      wrapper.querySelector('a[data-analytics-placement="topevent"]').click();
      gaTracking('Bet Button Clicked');
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
