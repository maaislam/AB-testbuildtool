import shared from './shared/shared';
import { bathRoomImages } from './helpers/data/data';
import { observeDOM } from './helpers/utils';
import addImage from './components/addImage';

const { ID } = shared;

const init = () => {
  const productsElem = document.querySelectorAll(
    'ol.products .flooring-product .product-item-info'
  );

  productsElem.forEach((product, index) => {
    const sku = product.querySelector('form').getAttribute('data-product-sku');
    const image = product.querySelector('a.product-item-photo > picture.default')
      ? product.querySelector('a.product-item-photo > picture.default')
      : product.querySelector('a.product-item-photo > img.default');
    const matchingObj = bathRoomImages[sku];

    if (matchingObj && bathRoomImages[sku]?.image) {
      image && image.classList.add(`${ID}__oldImage`);
      const newImg = addImage(ID, bathRoomImages[sku].image);
      if (!product.querySelector(`.${ID}__newImage`)) {
        image && image.insertAdjacentHTML('beforebegin', newImg);
        console.log('[IMAGE ADDED] -- ', bathRoomImages[sku]?.image, ' --- [INDEX]-- ', index);
      }
    }
  });
};

export default () => {
  init();
  const config = {
    attributes: true,
    childList: true,
    characterData: false,
    subtree: false
  };
  observeDOM('body', init, config);
};
