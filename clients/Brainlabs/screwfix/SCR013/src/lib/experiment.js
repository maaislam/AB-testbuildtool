import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData } from './data';
import shared from './shared/shared';
import dropdownStr from './components/structure';
import clickHandler from './components/handler';
import obsIntersection from './observeIntersection';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `Screwfix - ${ID}`, shared);
  document.body.addEventListener('click', ({ target }) => {
    clickHandler(shared, target, fireEvent);
  });

  console.log(ID);

  const compareBtnAnchor = document.querySelector('.pr__prices');
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      fireEvent('Conditions Met', shared);
    }
  };

  obsIntersection(compareBtnAnchor, 0.3, intersectionCallback);
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

  const preSelectFn = (size) => {
    const isElem = document.querySelector(`li a[data-size="${size.toUpperCase()}"]`);
    if (isElem) {
      isElem.parentElement.classList.add('selected');
    }
  };

  const pageData = sizeData[window.location.pathname.split('-size')[0]];
  const src = window.location.pathname.split('-size')[0];
  const selectedSize = window.location.pathname.split(
    window.location.pathname.match(/(size).\d*\//gi)
  )[1];

  const availableProduct = () => {
    console.log('promise exerise', pageData);
    const modifiedData = [];
    for (const key in pageData) {
      modifiedData.push({ [key]: pageData[key] });
    }
    console.log(modifiedData);
  };
  availableProduct();

  document
    .querySelector('.pr__prices > div')
    .insertAdjacentHTML('afterend', dropdownStr(ID, src, pageData));

  if (selectedSize) {
    preSelectFn(selectedSize);
  }
};
