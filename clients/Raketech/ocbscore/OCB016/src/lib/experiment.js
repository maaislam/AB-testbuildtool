import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite, setTextCopy } from './helpers/utils';
import modal from './components/modal';
import openModal from './helpers/openModal';
import closeModal from './helpers/closeModal';
import { casinoData } from './data/data';

const { ID, VARIATION } = shared;
const shouldRunTest = (url) => /^https:\/\/ocbscores\.com\/predictions-and-tips\/.+$/.test(url);

const renderModal = () => {
  if (!document.querySelector(`.${ID}__modal`)) {
    document.querySelector('body').insertAdjacentHTML('beforeend', modal(ID, casinoData));
  }
};

const init = () => {
  renderModal();
};

export default () => {
  setup();
  const clickHandler = (e) => {
    const { target } = e;
    if (
      target.closest('a[data-type="button"]') &&
      VARIATION !== 'control' &&
      target.closest('.MuiBox-root.mui-1u8boio')
    ) {
      e.preventDefault();
      e.stopPropagation();
      const clickedItem = target.closest('a[data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Button | Open Popup`);
      openModal(ID);
    } else if (target.closest(`.${ID}__modal-overlay`) || target.closest(`.${ID}__closeWrapper`)) {
      gaTracking('Close | Popup');
      closeModal(ID);
    } else if (target.closest(`.${ID}__btn`)) {
      const clickedItem = target.closest(`.${ID}__btn`);
      clickedItem.classList.add(`${ID}__copied`);
      const codeName = clickedItem.dataset.code;
      setTextCopy(codeName);
      setTimeout(() => {
        clickedItem.classList.remove(`${ID}__copied`);
      }, 2000);
    } else if (target.closest(`.${ID}__showMoreBtn`)) {
      gaTracking('Show More Bookmark | Popup');
    } else if (target.closest(`.${ID}__casinoBtn`)) {
      const clickedItem = target.closest(`.${ID}__casinoBtn`);
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | CTO | Button | Popup`);
    } else if (target.closest(`.${ID}__casinoLogo`)) {
      const clickedItem = target.closest(`.${ID}__casinoLogo`);
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | CTO | Logo | Popup`);
    } else if (
      target.closest('a[data-type="button"]') &&
      VARIATION === 'control' &&
      target.closest('.MuiBox-root.mui-1u8boio')
    ) {
      const clickedItem = target.closest('a[data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Button | Operator Page`);
    } else if (
      target.closest('a[data-type="button"]') &&
      VARIATION !== 'control' &&
      (target.closest('.MuiBox-root.mui-4kbj') || target.closest('.MuiBox-root.mui-3ufgs1'))
    ) {
      e.preventDefault();
      e.stopPropagation();
      const clickedItem = target.closest('a[data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Button | Open Popup`);
      openModal(ID);
    } else if (
      target.closest('a[data-type="button"]') &&
      VARIATION === 'control' &&
      (target.closest('.MuiBox-root.mui-4kbj') || target.closest('.MuiBox-root.mui-3ufgs1'))
    ) {
      const clickedItem = target.closest('a[data-type="button"]');
      const { operator } = clickedItem.dataset;
      gaTracking(`${operator} | Button | Operator Page`);
    }
  };

  const isListenerAdded = document.body.getAttribute(`${ID}__isListenerAdded`);
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => clickHandler(e));
  }
  document.body.setAttribute(`${ID}__isListenerAdded`, 'true');

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (VARIATION === 'control') return;

  init();

  onUrlChange(() => {
    pollerLite(['.MuiBox-root.mui-1smddtb', () => window.location.pathname === '/odds/'], () => {
      init();
    });

    pollerLite(['body', '.MuiBox-root.mui-4kbj', () => shouldRunTest(window.location.href)], () => {
      init();
    });
  });
};
