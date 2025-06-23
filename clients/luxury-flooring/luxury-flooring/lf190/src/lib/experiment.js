import setup from './services/setup';
import shared from './shared/shared';
import {
  enrichMergedArray,
  extractAttributes,
  extractPdfIcons,
  mergeAttributesWithIcons
} from './helpers/utils';
import mainObj, { mainData } from './data/data';
import productOverview from './components/productOverview';

const { ID } = shared;

const handleResize = () => {
  const productMediaElement = document.querySelector('.product.media');
  const mobileOverviewElement = document.querySelector(`.${ID}__productOverview.${ID}__mobile`);
  const productAccordion = document.querySelector(`.${ID}__productAccordion`);
  if (window.innerWidth < 991) {
    //Do something
    console.log('Below 991px');
    mobileOverviewElement?.insertAdjacentElement('afterend', productAccordion);
  } else {
    console.log('991px or wider');
    productMediaElement?.insertAdjacentElement('beforeend', productAccordion);
  }
};

const init = () => {
  const productMediaElement = document.querySelector('.product.media');
  const flooringTypeElement = document.querySelector('#attr_flooringtype span');
  const flooringType = flooringTypeElement ? flooringTypeElement.textContent.trim() : '';

  const detailsSection = document.querySelector('.product-section.details');

  console.log(flooringType, 'flooringType');

  const isFindFlooring = mainData.find(
    (item) => item.keyWord.toLowerCase().trim() === flooringType.toLowerCase().trim()
  );

  console.log(isFindFlooring, 'isFindFlooring');
  if (isFindFlooring) {
    const targetPoint = document.querySelector('.product.media');
    const mobileTargetPoint = document.querySelector('.product-section.details');

    if (!document.querySelector(`.${ID}__productOverview.${ID}__desktop`)) {
      targetPoint.insertAdjacentHTML('beforeend', productOverview(ID, isFindFlooring, 'desktop'));
    }

    if (!document.querySelector(`.${ID}__productOverview.${ID}__mobile`)) {
      mobileTargetPoint.insertAdjacentHTML(
        'beforebegin',
        productOverview(ID, isFindFlooring, 'mobile')
      );
    }
  }

  const productAccordionElem = document.querySelector('.product-section.accfeat');
  if (productAccordionElem && !document.querySelector(`.${ID}__productAccordion`)) {
    productMediaElement.insertAdjacentElement('beforeend', productAccordionElem);
    productAccordionElem.classList.add(`${ID}__productAccordion`);
  }

  if (detailsSection && !document.querySelector(`.${ID}__detailsSection`)) {
    document
      .querySelector('.product-accordion-pane.description .description')
      .insertAdjacentElement('beforeend', detailsSection);
    detailsSection.classList.add(`${ID}__detailsSection`);
    detailsSection.querySelector('label[for="details-toggle"] span.more')?.click();
  }
};

export default () => {
  setup();
  init();

  //Initial check
  handleResize();
  //Listen for resize
  window.addEventListener('resize', handleResize);
};
