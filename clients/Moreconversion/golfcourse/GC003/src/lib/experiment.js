import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.desktop-main');
  const parentElement = targetElement.closest('.shopify-section');
  parentElement.classList.add(`${ID}__mainSection`);
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  init();
};
