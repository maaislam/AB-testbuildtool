import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();

  const actionWrapper = document.querySelector('.product-page--pricing + div');
  actionWrapper.classList.add(`${ID}__action-wrapper`);
};
