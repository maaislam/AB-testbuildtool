import setup from './services/setup';

import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const customConfig = {
    childList: true,
    subtree: false,
    attributes: false,
    characterData: false,
    characterDataOldValue: false
  };
  observeDOM(
    'body',
    () => {
      setTimeout(() => {
        const form = document.querySelector('[aria-label="POPUP Form"]');
        if (form) {
          form.parentElement.classList.add(`${ID}__hide`);
        }
        //console.log('mutation', form);
      }, 250);
    },
    customConfig
  );
  document.body.classList.add(`${ID}__chatWidget-adjust`);
};

export default () => {
  setup();
  init();
};
