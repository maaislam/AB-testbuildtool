import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import techConnect from './components/techConnect';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //tech connect component add
  if (!document.querySelector(`.${ID}__staticPageContainer`)) {
    document.querySelector('.sales-form-title').insertAdjacentHTML('afterbegin', techConnect(ID));
  }

  //logo section
  pollerLite(['.logo-section'], () => {
    const feLogo = document.querySelector('.logo-section');
    feLogo.classList.add(`${ID}__logoSection`);
  });

  //we know tech section
  pollerLite(['.bm_we_know_section'], () => {
    const feFooter = document.querySelector('.bm_we_know_section');
    feFooter.classList.add(`${ID}__weKnowSection`);
  });

  //contact us
  pollerLite(['.fotter_section'], () => {
    const feFooter = document.querySelector('.fotter_section');
    feFooter.classList.add(`${ID}__footerSection`);
  });
};
