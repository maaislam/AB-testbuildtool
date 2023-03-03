/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

import clickHandler from './handlers/clickhandler';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  //set query params for control

  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  const newFeatureHeadline = `<div class="${ID}__growthHeadline">Get Building Your Account:</div>`;
  //const newFeatureBullet = `<li class="${ID}__growthBullet">Customizable website</li>`;
  const secFeatureBullets = `<li class="${ID}__growthBullet">Marketing tools & automations</li>`;
  const thirdFeatureBullets = `<li class="${ID}__growthBullet">Business & customer analytics</li>`;
  //...
  if (window.location.pathname === '/bullet/upgrade') {
    const growthPlan = document.querySelector('[data-test="growth-plan"]');
    const plusPan = document.querySelector('[data-intercom="plusDemoRequest"]');
    const secondList = growthPlan.querySelectorAll('.list-disc')[1];
    growthPlan.querySelector('ds-button').setAttribute('style', '--primary: var(--gray-900);');
    plusPan.removeAttribute('style');
    if (!document.querySelector(`.${ID}__growthHeadline`)) {
      growthPlan.lastElementChild.classList.add(`${ID}__featurecontainer`);
      growthPlan
        .querySelector('div:first-child')
        .insertAdjacentHTML('afterend', newFeatureHeadline);
    }
    if (!document.querySelector(`.${ID}__growthBullet`)) {
      secondList.insertAdjacentHTML('beforeend', thirdFeatureBullets);
      secondList.insertAdjacentHTML('beforeend', secFeatureBullets);
    }
  }
};

export default () => {
  setup(); //use if needed
  //console.log('running uc006');
  document.body.addEventListener('click', clickHandler);

  init();
  if (window.location.pathname.includes('/bullet/upgrade')) {
    const mutationCallback = (urlChanged) => {
      if (urlChanged) {
        init();
      }
    };
    observeDOM('body', mutationCallback);
  }
};
