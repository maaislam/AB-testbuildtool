/*eslint-disable no-param-reassign */

import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import sampleUpSell from './components/sampleUpSell';
import { intersectionHandler } from './handlers/intersectionHandler';
import clickHandler from './handlers/clickHandler';
import { realtimeRulesV1, realtimeRulesV2 } from './helpers/duApiRules';
import getDySampleData from './helpers/getDySampleData';
import getShopifyData from './helpers/getShopifyData';
import { observeDOM, obsIntersection } from './helpers/utils';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = async () => {
  setup('Experimentation', `Avon - ${ID}`, shared);

  const intersectionAnchor = document.querySelector('#basket-main');
  obsIntersection(intersectionAnchor, 0.1, intersectionHandler);
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

  const strategyId = VARIATION === '2' ? 158295 : 150752;
  const apiRules = VARIATION === '2' ? realtimeRulesV2 : realtimeRulesV1;

  const anchorElem = document.querySelector('.basket-refresh');
  const sampleUpsellContainer = document.createElement('div');
  document.getElementById(`${ID}__sampleUpsellContainer`)?.remove();
  sampleUpsellContainer.id = `${ID}__sampleUpsellContainer`;
  sampleUpsellContainer.innerHTML = sampleUpSell(ID);
  anchorElem.insertAdjacentElement('beforeend', sampleUpsellContainer);
  try {
    const renderItemUrls = await getDySampleData(ID, strategyId, apiRules);
    const renderData = await getShopifyData(renderItemUrls);

    //console.log('final render data', renderData);

    document.querySelectorAll(`.${ID}__sampleupsell`).forEach((elm) => {
      elm?.remove();
    });

    sampleUpsellContainer.innerHTML = sampleUpSell(ID, renderData);
    const numberOfSample = renderData.length;

    if (numberOfSample < 3 && numberOfSample > 0) {
      fireEvent('User views a samples list with less than 3 samples available ', shared);
    }

    sampleUpsellContainer.addEventListener('click', ({ target }) => {
      clickHandler(ID, target, fireEvent, shared);
    });
  } catch (error) {
    console.log(error);
    sampleUpsellContainer.remove();
  }
};

export default () => {
  init();
  document.body.addEventListener('rerender', init);
  const callback = ({ addedNodes }, itemRemoved) => {
    if (addedNodes.length > 0) {
      init();
    }
    if (itemRemoved) {
      fireEvent('User removes a product from their basket', shared);
    }
  };
  const mutationConfig = {
    childList: true
  };
  observeDOM('.cart-count', callback, mutationConfig);
};
