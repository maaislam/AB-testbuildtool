import setup from './services/setup';
import shared from './shared/shared';
import { autoClickOnInactivity, setAttributeInDom } from './helpers/utils';
import cardWrapper from './components/cardWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const mainWrapper = document.querySelector('main > div > section');
  if (mainWrapper) mainWrapper.classList.add(`${ID}__mainWrapper`);

  const items = Array.from(document.querySelectorAll('div[data-rank]'));

  //Sort the items by data-rank in ascending order
  const sortedItems = items.sort((a, b) => {
    return Number(a.getAttribute('data-rank')) - Number(b.getAttribute('data-rank'));
  });

  if (!document.querySelector(`.${ID}__cardWrapper`) && items.length > 0) {
    mainWrapper.insertAdjacentHTML('beforebegin', cardWrapper(ID, sortedItems));
  }

  const overlay = document.createElement('div');
  overlay.classList.add('custom-modal-overlay');

  if (!document.querySelector('.custom-modal-overlay')) {
    document.body.appendChild(overlay);
  }

  autoClickOnInactivity('#customModalTrigger');
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('#customModalTrigger')) {
      const modal = document.querySelector('.SCC074__modal');
      const overlay = document.querySelector('.custom-modal-overlay');
      modal.classList.add('show');
      overlay.classList.add('show');
      document.body.classList.add('modal-open');
    } else if (target.closest('.custom-modal-overlay')) {
      const modal = document.querySelector('.SCC074__modal');
      const overlay = document.querySelector('.custom-modal-overlay');
      modal.classList.remove('show');
      overlay.classList.remove('show');
      document.body.classList.remove('modal-open');
    } else if (target.closest('button.close') && target.closest(`.${ID}__modal`)) {
      const modal = document.querySelector('.SCC074__modal');
      const overlay = document.querySelector('.custom-modal-overlay');
      modal.classList.remove('show');
      overlay.classList.remove('show');
      document.body.classList.remove('modal-open');
    } else if (target.closest('.accept-btn')) {
      const rankUpdate = target.getAttribute('data-rank-update');
      const controlButton = document.querySelector(`div[data-rank="${rankUpdate}"] button`);
      if (controlButton) {
        controlButton.click();
      }
    }
  });

  setAttributeInDom();

  if (VARIATION === 'control') return;

  init();
};
