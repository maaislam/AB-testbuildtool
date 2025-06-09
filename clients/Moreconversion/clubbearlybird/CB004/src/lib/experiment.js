import data from './data/data';
import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';

const { ID } = shared;

const renderDom = () => {};

const init = () => {
  const targetPoint1 = document.querySelector(
    '#zpproductselector1-wrapper .zpa-dynamic-product__inner-row .zpa-flex--column:last-child .zpa-el-text > p'
  );

  targetPoint1.classList.add(`${ID}__socialProofWrapper`);
  targetPoint1.innerHTML = `${data[VARIATION].title}`;

  renderDom();
};

export default () => {
  setup();
  init();
};
