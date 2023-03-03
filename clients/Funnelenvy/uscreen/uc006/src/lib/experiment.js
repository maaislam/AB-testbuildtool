/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

import clickHandler from './handlers/clickhandler';
import { getNextSibling } from './helpers/utils';

const { ID, VARIATION } = shared;

const modifyCtas = () => {
  const trialCtas = document.querySelectorAll('[href*="https://www.uscreen.io/admin"]');

  trialCtas.forEach((cta) => {
    const ctaUrl = new URL(cta.href);
    console.log(VARIATION);
    ctaUrl.searchParams.set('uio_test06_variation', VARIATION);
    //console.log(ctaUrl.href);
    cta.href = ctaUrl.href;
  });
};

const init = () => {
  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  //set query params for control
  modifyCtas();
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  const newFeatureHeadline = `<div class="${ID}__growthHeadline">Get Building Your Account:</div>`;
  const newFeatureBullet = `<li class="${ID}__growthBullet">Customizable website</li>`;
  const secFeatureBullets = `<li class="${ID}__growthBullet">Marketing tools & automations</li>`;
  const thirdFeatureBullets = `<li class="${ID}__growthBullet">Business & customer analytics</li>`;
  //console.log('test');
  //...
  if (window.location.pathname === '/pricing/') {
    const growthColumn = document.querySelector('.pricing-columns>div:nth-child(2)');
    const firstFeatureList = growthColumn.querySelectorAll('.pricing-list')[0];
    const secondFeatureList = growthColumn.querySelectorAll('.pricing-list')[1];
    if (!document.querySelector(`.${ID}__growthHeadline`)) {
      growthColumn.lastElementChild.classList.add(`${ID}__featurecontainer`);
      growthColumn
        .querySelector('div:first-child')
        .insertAdjacentHTML('afterend', newFeatureHeadline);
    }
    if (!document.querySelector(`.${ID}__growthBullet`)) {
      firstFeatureList.insertAdjacentHTML('afterbegin', newFeatureBullet);
      secondFeatureList.insertAdjacentHTML('beforeend', thirdFeatureBullets);
      secondFeatureList.insertAdjacentHTML('beforeend', secFeatureBullets);
    }
    const secondFeatureHeadline = getNextSibling(firstFeatureList, 'p');
    secondFeatureHeadline.classList.add(`${ID}__hide`);
  }
};

export default () => {
  setup(); //use if needed
  //console.log('running uc006');
  document.body.addEventListener('click', clickHandler);

  init();
};
