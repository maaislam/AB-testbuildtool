import setup from './services/setup';
import shared from './shared/shared';
import header from './components/header';

const { ID } = shared;

const init = () => {
  const headerElem = document.querySelector('header');
  headerElem.insertAdjacentHTML('afterend', header(ID));
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('#whyProtonBtn')) {
      const popover = document.getElementById('whyProtonPopOver');
      popover.classList.toggle('hidden');
    }
  });
};
