import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

export default () => {
  setup();

  const attachpoint = document.querySelector('.ProductForm__BuyButtons + .ProductMeta__Text');

  const returnDaysNumber = `FREE US SHIPPING $200+ | Free ${
    VARIATION === '1' ? '45' : '60'
  } Day Returns`;

  attachpoint.innerHTML = returnDaysNumber;
};
