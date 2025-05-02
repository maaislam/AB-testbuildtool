import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';
import promoBanner from './components/promoBanner';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector('.section_1');

  if (VARIATION === '1' || VARIATION === '2') {
    const targetPoint2 = document.querySelectorAll('.s6_product_model:not(.hideMob)');
    if (document.querySelectorAll(`.${ID}__promoBanner`).length > 0) {
      document.querySelectorAll(`.${ID}__promoBanner`).forEach((item) => item.remove());
    }

    targetPoint2.forEach((item) => item.insertAdjacentHTML('beforeend', promoBanner(ID)));
  }

  if (VARIATION !== '1') {
    if (!document.querySelector(`.${ID}__wrapper`)) {
      targetPoint.insertAdjacentHTML('afterend', wrapper(ID));
    }
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  init();
};
