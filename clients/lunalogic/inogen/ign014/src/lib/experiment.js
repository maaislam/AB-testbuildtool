import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import prodsData from './data/data';
import prodDescriptionInfo from './components/prodDescriptionInfo';
import uspWrapper from './components/uspWrapper';
import comparisonStr from './components/comparisonStr';
import twoColumns from './components/twoColumns';
import twoColumnsWithImage from './components/twoColumnsWithImage';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  if (prodsData[pathname]) {
    const data = prodsData[pathname];

    //Add experiment class to body
    document.querySelector('body').classList.add(`${data.id}`);
    const productHeaderElem = document.querySelector('.product_header');
    const productDetailsElem = document.querySelector('.product_details');
    const productTitleElem = productHeaderElem.querySelector('.post__title');
    const atcWrapper = productHeaderElem.querySelector('.product_add_to_cart');
    console.log('Experiment running');

    const targetPoint = document.querySelector('.page');
    if (!document.querySelector(`.${ID}__mainWrapper`)) {
      targetPoint.insertAdjacentHTML('beforebegin', `<div class="${ID}__mainWrapper"></div>`);
    }

    if (!document.querySelector(`.${ID}__comparisonWrapper`) && data.feature_1) {
      document
        .querySelector(`.${ID}__mainWrapper`)
        .insertAdjacentHTML('beforeend', comparisonStr(ID, data.feature_1));
    }

    if (!document.querySelector(`.${ID}__twoColumnsWrapper`) && data.feature_2) {
      document
        .querySelector(`.${ID}__mainWrapper`)
        .insertAdjacentHTML('beforeend', twoColumns(ID, data.feature_2));
    }

    if (!document.querySelector(`.${ID}__twoColumnsImageWrapper`) && data.feature_3) {
      document
        .querySelector(`.${ID}__mainWrapper`)
        .insertAdjacentHTML('beforeend', twoColumnsWithImage(ID, data.feature_3));
    }

    if (!document.querySelector(`.${ID}__videoElement`) && data.videoElemSelector) {
      const controlVideoElem = document.querySelector(data.videoElemSelector);
      document
        .querySelector(`.${ID}__mainWrapper`)
        .insertAdjacentHTML('beforeend', `<div class="${ID}__videoElement"></div>`);

      if (controlVideoElem) {
        document.querySelector(`.${ID}__videoElement`).appendChild(controlVideoElem);
      }
    }

    //if (!document.querySelector(`.${ID}__prodDescriptionWrapper`)) {
    //productTitleElem.insertAdjacentHTML('afterend', prodDescriptionInfo(ID, data));
    //}

    //const productDescriptionWrapper = document.querySelector(`.${ID}__prodDescriptionWrapper`);
    //if (productDescriptionWrapper && atcWrapper) {
    //productDescriptionWrapper.insertAdjacentElement('afterend', atcWrapper);
    //}

    //if (!document.querySelector(`.${ID}__uspWrapper`)) {
    //productDetailsElem.insertAdjacentHTML('beforeend', uspWrapper(ID, data.uspList));
    //}
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
