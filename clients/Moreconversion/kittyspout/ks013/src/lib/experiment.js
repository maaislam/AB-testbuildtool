/*eslint-disable no-useless-return */
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const gallaryImage = document.querySelector('.product-single__sticky');
  //eslint-disable-next-line no-undef

  if (window.location.pathname === '/products/metalbundles') {
    gallaryImage.classList.add(`${ID}__product-single__sticky`);
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return;

  init(); //
};
