import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import data from './data/data';
import uspsWrapper from './components/uspsWrapper';
import description from './components/description';

const { ID, VARIATION } = shared;

const init = () => {
  const collectData = data[VARIATION];
  const productTitle = document.querySelector('.product__title');
  console.log(collectData, 'collectData');
  if (!document.querySelector(`.${ID}__uspsWrapper`)) {
    productTitle.insertAdjacentHTML('afterend', uspsWrapper(ID, collectData.usps));
  }

  if (!document.querySelector(`.${ID}__description`)) {
    productTitle.insertAdjacentHTML('afterend', description(ID, collectData, VARIATION));
  }
};

export default () => {
  setup(); //use if needed

  init();
};
