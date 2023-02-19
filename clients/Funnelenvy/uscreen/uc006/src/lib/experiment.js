import setup from './services/setup';
import shared from './shared/shared';

import clickHandler from './handlers/clickhandler';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed
  console.log('running uc006');
  document.body.addEventListener('click', clickHandler);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (window.location.pathname === '/bullet/upgrade') {
    const growthPlan = document.querySelector('[data-test="growth-plan"]');
    const plusPan = document.querySelector('[data-intercom="plusDemoRequest"]');
    growthPlan.querySelector('ds-button').setAttribute('style', '--primary: var(--gray-900);');
    plusPan.removeAttribute('style');
  }
};
