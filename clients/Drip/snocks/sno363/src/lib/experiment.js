import collectionGridDesktop from './components/collectionGridDesktop';
import collectionGridMobile from './components/collectionGridMobile';
import titleCollection from './components/titleCollection';
import { menDesktop, menMobile, unisexDesktop, unisexMobile, womenDesktop, womenMobile } from './helpers/imageObj';
import { deviceType, menPLP, unisexPLP, womenPLP } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  if (deviceType() === 'desktop') {
    if (menPLP) {
      document.body.classList.add(`${ID}_sale-variation-desktop`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridDesktop(ID, 'men', menDesktop));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
    } else if (womenPLP) {
      document.body.classList.add(`${ID}_sale-variation-desktop`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridDesktop(ID, 'women', womenDesktop));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
    } else if (unisexPLP) {
      document.body.classList.add(`${ID}_sale-variation-desktop`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridDesktop(ID, 'unisex', unisexDesktop));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
      document.querySelectorAll('.collection-image-title').forEach((item, key) => {
        if (item.textContent === '') {
          item.closest(`.${ID}__collection-img`).classList.add(`${ID}__hide`);
        }
      });
    }
  }
  if (deviceType() === 'mobile') {
    if (menPLP) {
      document.body.classList.add(`${ID}_sale-variation-mobile`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridMobile(ID, 'men', menMobile));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
    } else if (womenPLP) {
      document.body.classList.add(`${ID}_sale-variation-mobile`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridMobile(ID, 'women', womenMobile));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
    } else if (unisexPLP) {
      document.body.classList.add(`${ID}_sale-variation-mobile`);
      document.querySelector('.CollectionMain').insertAdjacentHTML('beforebegin', collectionGridMobile(ID, 'unisex', unisexMobile));
      document.querySelector('.CollectionInner__Products').insertAdjacentHTML('beforebegin', titleCollection(ID));
      document.querySelectorAll('.collection-image-title').forEach((item, key) => {
        if (item.textContent === '') {
          item.closest(`.${ID}__collection-img`).classList.add(`${ID}__hide`);
        }
      });
    }
  }
};

export default () => {
  init();
};
