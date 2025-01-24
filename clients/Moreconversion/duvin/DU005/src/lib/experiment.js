import setup from './services/setup';
import shared from './shared/shared';
import productsWrapper from './components/productsWrapper';
import categoryData from './data/data';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.querySelector('.shopify-section.slidershow');
  if (!document.querySelector(`.${ID}__productsWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', productsWrapper(ID, categoryData));
  }
};
export default () => {
  setup(); //use if needed

  init();
};
