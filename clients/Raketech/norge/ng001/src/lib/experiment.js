import disclaimerModal from './components/disclaimerModal';
import { getCookie, setCookie } from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;
let modalOpenTime = null;
const init = () => {
  setCookie('first-time-visitor', 'true');
  console.log('First time visitor');
  //render modal
  document.body.insertAdjacentHTML('afterbegin', disclaimerModal(ID));
  modalOpenTime = new Date();
};

export default () => {
  const firstTimeVisitor = getCookie('first-time-visitor') === undefined;

  if (!firstTimeVisitor) return;
  setup();
  const closeModal = () => {
    const modalCloseTime = new Date();
    const timeSpent = modalCloseTime - modalOpenTime;
    const timeSpentSeconds = Math.round(timeSpent / 1000);

    console.log(`User spent ${timeSpentSeconds} seconds on the modal.`);
    gaTracking(`${timeSpentSeconds} seconds | Time On Page Before Closing Popup`);
    document.querySelector(`.${ID}__modal`).remove();
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__disclaimer-close`)) {
      closeModal();
      gaTracking('Close | Clicks on Disclaimer Popup | outside modal');
    } else if (target.closest(`.${ID}__modal`) && !target.closest(`.${ID}__disclaimer`)) {
      closeModal();
      gaTracking('Close | Clicks on Disclaimer Popup | close icon');
    } else if (target.closest(`.${ID}__disclaimer--cta`)) {
      closeModal();
      gaTracking('Yes Confirm | Clicks on Disclaimer Popup');
    }
  });

  init();
};
