import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const customConfig = {
    childList: true,
    subtree: false,
    attributes: false,
    characterData: false,
    characterDataOldValue: false
  };
  observeDOM('body', () => {
    setTimeout(() => {
      const form = document.querySelector('[aria-label="POPUP Form"]');
      if (form) {
        form.parentElement.classList.add(`${ID}__hide`);
      }
      console.log('mutation', form);
    }, 250);
  }, customConfig);
};

export default () => {
  setup();
  init();
};
