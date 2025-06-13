import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import {
  enrichMergedArray,
  extractAttributes,
  extractPdfIcons,
  mergeAttributesWithIcons,
  pollerLite
} from './helpers/utils';
import mainObj from './data/data';
import productOverview from './components/productOverview';

const { ID, VARIATION } = shared;
const isMobile = window.matchMedia('(max-width: 992px)').matches;

const init = () => {
  const attributes = extractAttributes();
  const featuresElem = document.querySelectorAll('.product-features-grid .product-feature');

  const merged =
    featuresElem.length > 0 ? mergeAttributesWithIcons(attributes, extractPdfIcons()) : attributes;

  console.log(merged, 'merged attributes');

  const finalArray = enrichMergedArray(merged, mainObj);
  console.log(finalArray, 'finalArray');

  const uniqueFinalArray = finalArray.filter(
    (item, index, self) => index === self.findIndex((other) => other.icon === item.icon)
  );

  const targetPoint = document.querySelector('.product.media');
  const mobileTargetPoint = document.querySelector('.product-section.details');

  if (document.querySelector(`.${ID}__productOverview`)) {
    document.querySelector(`.${ID}__productOverview`).remove();
  }

  if (uniqueFinalArray.length > 0 && !isMobile) {
    targetPoint.insertAdjacentHTML('beforeend', productOverview(ID, uniqueFinalArray));
  } else {
    mobileTargetPoint.insertAdjacentHTML('beforebegin', productOverview(ID, uniqueFinalArray));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
