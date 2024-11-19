import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import bettingWrapper from './components/bettingWrapper';
import { iconV1, iconV2 } from './assets/icons';

const { ID, VARIATION } = shared;

const init = () => {
  const mainWrapper = document.querySelector('#match-container');
  const allTopEvents = mainWrapper.querySelectorAll('div[data-analytics-placement="topevent"]');
  allTopEvents.forEach((item) => {
    const targetElement = item.querySelector('.match-info');
    const matchDetails = item.querySelector('.match-detail');
    const postExcerpt = item.querySelector('.post-excerpt');
    if (targetElement && !item.querySelector(`.${ID}__bettingWrapper`)) {
      VARIATION === '1' &&
        targetElement.insertAdjacentHTML('beforeend', bettingWrapper(ID, iconV1));
      VARIATION === '2' &&
        targetElement.insertAdjacentHTML('beforeend', bettingWrapper(ID, iconV2));
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
      const matchname = wrapper.dataset.analyticsMatch;
      gaTracking(`${matchname} Tip Icon`);
      document.body.classList.add(`${ID}__bettingsClicked`);
      setTimeout(() => {
        wrapper.querySelector('a[data-analytics-placement="topevent"]').click();
      }, 1000);
    } else if (target.closest('li[data-analytics-placement="topevent"] > .tvchannel-button')) {
      const clickedItem = target.closest(
        'li[data-analytics-placement="topevent"] > .tvchannel-button'
      );
      const wrapper = clickedItem.closest('li');
      const channelName = wrapper.dataset.analyticsOperator;
      gaTracking(`CTO ${channelName} Logo`);
    } else if (
      target.closest('.post-excerpt a.read-more') &&
      target.closest('div[data-analytics-placement="topevent"]')
    ) {
      const wrapper = target.closest('div[data-analytics-placement="topevent"]');
      const matchname = wrapper.dataset.analyticsMatch;
      console.log('read-more', matchname);
      gaTracking(`${matchname} Read More`);
    } else if (target.closest('a.odds[data-analytics-placement="topevent"]')) {
      const clickedItem = target.closest('a.odds[data-analytics-placement="topevent"]');
      const operatorName = clickedItem.dataset.analyticsOperator;
      gaTracking(`CTO ${operatorName} Odds Hyperlink`);
    }
  });

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;
    if (
      target.closest(
        'a[data-analytics-placement="topevent"][data-analytics-match]:not(.tvchannel-button)'
      ) &&
      !target.closest('a.odds[data-analytics-placement="topevent"]') &&
      !target.closest(`.${ID}__bettingWrapper`) &&
      !document.body.classList.contains(`${ID}__bettingsClicked`)
    ) {
      const wrapper = target.closest(
        'a[data-analytics-placement="topevent"][data-analytics-match]'
      );

      const matchname = wrapper.dataset.analyticsMatch;
      gaTracking(`${matchname} Card`);
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
