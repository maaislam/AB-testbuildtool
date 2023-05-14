import setup from './services/setup';

import shared from './shared/shared';
import trustBadges from './trustBadges';

const { ID } = shared;

export default () => {
  setup();
  if (document.querySelector(`.${ID}__trustbadges`)) return;

  //hide cross sell
  const crossSellBlock = document.querySelector('.product-single__additional-actions');

  crossSellBlock.style.display = 'none';

  //show new content

  crossSellBlock.insertAdjacentHTML('beforebegin', trustBadges(ID));
};
