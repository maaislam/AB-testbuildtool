import { getCountry, translationConfig } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const checkmark = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
  <path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50  l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" fill="#008500"/>
</svg>`;

export default () => {
  setup(); //use if needed

  console.log(ID);

  const outOfStock = !!document.querySelector('#NotifyMeBtn');
  if (outOfStock) return;

  const inStockMsg = translationConfig[getCountry(translationConfig)];

  ['.baby__product-price', '#ProductPrice'].forEach((selector, index) => {
    const el = document.querySelector(selector);
    if (el && !el.querySelector(`.${ID}__instock`)) {
      el.insertAdjacentHTML(
        `${index === 0 ? 'beforeend' : 'afterend'}`,
        `<div class="${ID}__instock instock-msg-${index + 1}">${checkmark} ${inStockMsg}</div>`
      );
    }
  });
};
