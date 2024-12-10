import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const headerElem = document.querySelector('.announcement');
  const footerElem = document.querySelector('footer.site-footer');

  headerElem.classList.add(`${ID}__darkGreen`);
  footerElem.classList.add(`${ID}__darkGreen`);
};

export default () => {
  setup();

  init();
};
