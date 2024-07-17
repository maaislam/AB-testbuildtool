import setup from './services/setup';
import shared from './shared/shared';
import { uspsData } from './data/data';
import { uspsWrapper } from './components/uspsWrapper';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector('#maincontent > .columns');
  if (!document.querySelector(`.${ID}__uspsWrapperContainer`)) {
    targetPoint.insertAdjacentHTML('beforebegin', uspsWrapper(ID, uspsData));
  }
};
export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'Control') return;

  init(); //
};
