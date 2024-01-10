import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';
import sizeGuide from './components/sizeGuide';

const { ID } = shared;

const init = () => {
  const anchorPointSelector = VARIATION === '1' ? 'product-description div[data-mce-fragment="1"]' : 'product-description h5';
  const anchorPosition = VARIATION === '1' ? 'beforebegin' : 'afterend';
  const anchorPoint = document.querySelector(`.${anchorPointSelector}`);

  if (!document.querySelector(`.${ID}__sizeGuideContainer`)) {
    anchorPoint.insertAdjacentHTML(anchorPosition, sizeGuide(ID));
  }
};

export default () => {
  setup();

  init();
};
