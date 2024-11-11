import setup from './services/setup';
import shared from './shared/shared';
import { onUrlChange } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  if (!window.location.pathname.includes('godsfingerprint-letterpress')) return;

  const title = document.querySelector('.product div[data-product-block="title"] strong');
  title.textContent = title.textContent.replace('Letterpress', 'Classic');
  const editionBlock = document.querySelector('div[data-product-block="product_sibling"]');
  editionBlock.querySelectorAll('label').forEach((item) => {
    if (item.querySelector('span').textContent.toLowerCase().includes('letterpress')) {
      item.querySelector('span').textContent = 'Classic';
      item.classList.add(`${ID}__hasVariant`);
    } else if (item.querySelector('span').textContent.toLowerCase().includes('gold on black')) {
      item.querySelector('span').textContent = 'Gold Foil';
      item.classList.add(`${ID}__hasVariant`);
    }
  });
};

export default () => {
  setup();

  init();

  onUrlChange(() => {
    setTimeout(init, 500);
  });
};
