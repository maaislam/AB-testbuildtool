import setup from './services/setup';
import shared from './shared/shared';
import sizeGuide from './components/sizeGuide';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('body .product-description div[data-mce-fragment="1"]');
  if (!document.querySelector(`.${ID}__sizeGuideContainer`)) {
    anchorPoint.insertAdjacentHTML('beforebegin', sizeGuide(ID));
  }
};

export default () => {
  setup();

  init();
};
