import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import addBreadcrumb from './addBreadcrumb';
import addCard from './addCard';
import { onUrlChange } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  pollerLite(['.MuiContainer-root .mui-1cpixy9'], () => {
    setTimeout(() => {
      addBreadcrumb(ID);
      addCard(ID);
    }, 2000);
  });
};

export default () => {
  setup(); //use if needed
  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  !isListenerAdded &&
    document.body.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest(`.${ID}_cta`) && target.closest(`.${ID}_card-container`)) {
        gaTracking('CTA CTO | Card');
      } else if (
        target.closest('a[data-operator="Mr Vegas Casino"]') &&
        target.closest('#sticky-cta-container')
      ) {
        gaTracking('CTA CTO | Card');
      }
    });

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'Control') {
    return;
  }
  console.log(ID);

  init();
  onUrlChange(() => {
    init();
  });
};
