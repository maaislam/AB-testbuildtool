import setup from './services/setup';
import shared from './shared/shared';
import { trustpilot } from './components/trustpilot';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.usps-main');
  if (document.querySelector(`.${ID}__trustpilotSection`)) {
    document.querySelector(`.${ID}__trustpilotSection`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('beforebegin', trustpilot(ID));
  const trustbox = document.querySelector(`.${ID}__trustpilotSection .trustpilot-widget`);
  window.Trustpilot.loadFromElement(trustbox);
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  init();
};
