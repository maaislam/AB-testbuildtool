import { colorData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const updateFrameColor = (data, colorValue) => {
  const htmlStr = `${data.src ? `<img class='${ID}__colorSwatch' src="${data.src}" alt="${data.name}" />` : `<div class='${ID}__colorSwatch' style="background-color: ${data.color};"></div>`} 
  ${colorValue}`;
  return htmlStr;
};

const removeProductTypeImages = () => {
  document.querySelector('[data-handle="type-of-product"]').classList.remove(`${ID}__productTypeWrapper`);
  const imageContainers = document.querySelectorAll(`.${ID}__productTypeImgContainer`);
  if (imageContainers.length > 0) {
    imageContainers.forEach((container) => {
      container.remove();
    });
  }
};

const init = () => {
  //add images to the product-type
  const productTypeElems = document.querySelectorAll('[data-handle="type-of-product"] input[type="radio"]');
  const { variants } = window.current_product;
  productTypeElems.forEach((productTypeElem) => {
    const productTypeValue = productTypeElem.value.toLowerCase();
    const label = productTypeElem.nextElementSibling;

    //eslint-disable-next-line no-restricted-syntax
    for (const variant of variants) {
      const { featured_image, option1, name } = variant;

      if (featured_image === null) {
        removeProductTypeImages();
        break;
      }

      document.querySelector('[data-handle="type-of-product"]').classList.add(`${ID}__productTypeWrapper`);

      if (option1.toLowerCase() === productTypeValue) {
        const parentElem = productTypeElem.closest('.variant-input');
        parentElem.classList.add(`${ID}__productType`);
        label.innerHTML = `<div class='${ID}__productTypeImgContainer'><img class='${ID}__productTypeImg' src="${featured_image.src}" alt="${name}" /></div> ${productTypeElem.value}`;
      }
    }
  });

  //add color swatches to color variants
  const colorElems = document.querySelectorAll('[data-handle="frame-color"] input[type="radio"]');
  colorElems.forEach((colorElem) => {
    const colorValue = colorElem.value.toLowerCase();
    const label = colorElem.nextElementSibling;
    colorData.forEach((data) => {
      if (data.name.toLowerCase() === colorValue) {
        const parentElem = colorElem.closest('.variant-input');
        parentElem.classList.add(`${ID}__colorVariant`);
        label.innerHTML = updateFrameColor(data, colorElem.value);
      }
    });
  });
};

export default () => {
  setup();

  init();
};
