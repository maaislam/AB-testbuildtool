import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed

  const buttonTextConfig = {
    control: 'BOOK FLIGHT',
    1: 'SEARCH FLIGHTS',
    2: 'BOOK FLIGHTS',
    3: 'FIND FLIGHTS'
  };
  const primaryCta = document.getElementById('btn-2503-cta');
  const buttonText = buttonTextConfig[VARIATION];
  primaryCta.innerHTML = buttonText;
  primaryCta.setAttribute('title', buttonText);
};
