import setup from './services/setup';
import shared from './shared/shared';
import { uspsData } from './data/data';
import { uspsWrapper } from './components/uspsWrapper';
import { pollerLite } from './helpers/utils';
import { trustpilot } from './components/trustpilot';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector('#maincontent > .columns');
  if (!document.querySelector(`.${ID}__uspsWrapperContainer`)) {
    targetPoint.insertAdjacentHTML('beforebegin', uspsWrapper(ID, uspsData));
  }

  pollerLite(
    [
      () =>
        window.Trustpilot !== 'undefined' &&
        typeof window.Trustpilot?.loadFromElement === 'function'
    ],
    () => {
      if (document.querySelector(`.${ID}__trustpilotSection`)) {
        document.querySelector(`.${ID}__trustpilotSection`).remove();
      }
      document.querySelector('.breadcrumbs').insertAdjacentHTML('beforeend', trustpilot(ID));
      const trustbox = document.querySelector(`.${ID}__trustpilotSection .trustpilot-widget`);
      window.Trustpilot.loadFromElement(trustbox);
    }
  );
};
export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'Control') return;

  init(); //
};
