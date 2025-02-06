import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { parseHTML, pollerLite } from './helpers/utils';
import { bagIcon } from './assets/icons';
import modal from './components/modal';
import image from './components/image';

const { ID, VARIATION } = shared;

const getSizeAndColorById = (items, targetId) => {
  //Find the product with a matching id (using string conversion to compare safely)
  const product = items.find((item) => String(item.id) === String(targetId));
  if (!product) return null;

  //Split the title by '/' and trim the parts
  const [size, color] = product.title.split('/').map((part) => part.trim());
  if (!size || !color) return null; //Handle unexpected title format

  return {
    size,
    color
  };
};

const getSizesByColor = (items, color) =>
  items
    .filter((item) => {
      const parts = item.title.split('/').map((part) => part.trim());
      //Check if the color part matches the target color (ignoring case)
      return parts[1] && parts[1].toLowerCase() === color.toLowerCase();
    })
    .map((item) => {
      const [size] = item.title.split('/').map((part) => part.trim());
      return {
        size,
        isStock: item.available
      };
    });

const getColorsBySize = (items, targetSize) =>
  items
    .filter((item) => {
      //Split the title by "/" and trim any extra whitespace
      const parts = item.title.split('/').map((part) => part.trim());
      //Check if the size (the first part) matches the targetSize (case-insensitive)
      return parts[0].toLowerCase() === targetSize.toLowerCase();
    })
    .map((item) => {
      const parts = item.title.split('/').map((part) => part.trim());
      return {
        color: parts[1],
        size: parts[0],
        isStock: item.available
      };
    });
const init = () => {
  const wrapper = document.querySelector('.product-single__meta');
  const targetedProducts = wrapper.querySelectorAll('.product-single__meta .grid-product');
  targetedProducts[0].parentElement.classList.add(`${ID}__productsWrapper`);
  //color swatch placement

  const collectUrls = [];
  targetedProducts.forEach((product) => {
    const colorSwatchesElem = product.querySelector('.grid-product__colors');
    const productInfoElem = product.querySelector('.grid-product__meta');
    const productLinkElem = product.querySelector('.grid-product__link');
    const productImageWrapper = product.querySelector('.grid-product__image-mask');
    const productLink = productLinkElem.href;
    const { productId } = product.dataset;
    collectUrls.push({
      id: productId,
      link: productLink
    });

    if (productInfoElem) productInfoElem.insertAdjacentElement('beforebegin', colorSwatchesElem);
    if (!productImageWrapper.querySelector(`.${ID}__iconBag`)) {
      productImageWrapper.insertAdjacentHTML(
        'beforeend',
        `<span class="${ID}__iconBag">${bagIcon}</span>`
      );
    }

    fetch(`${productLink}.js`)
      .then((res) => res.json())
      .then((data) => product.setAttribute('data-value', JSON.stringify(data)));
  });

  parseHTML(collectUrls)
    .then((data) => {
      if (data.length === 0) {
      }

      window[`${ID}__data`] = data;
    })
    .catch((error) => {
      console.error('error', error);
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${VARIATION}`);
    });

  if (!document.querySelector(`.${ID}__model`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.color-swatch') && target.closest(`.${ID}__productsWrapper`)) {
      e.preventDefault();
      if (document.querySelector('.color-swatch.active-variant')) {
        document.querySelector('.color-swatch.active-variant').classList.remove('active-variant');
      }
      const clickedItem = target.closest('.color-swatch');
      clickedItem.classList.add('active-variant');
      const variantId = Number(clickedItem.href.split('variant=')[1].trim());
      const productWrapper = clickedItem.closest('.grid-product');
      const { value } = productWrapper.dataset;
      const productValue = JSON.parse(value);
      const isExistingVariant = productValue.variants.filter((item) => item.id === variantId);
      if (isExistingVariant.length) {
        const variantImage = isExistingVariant[0].featured_image.src;
        if (variantImage) {
          productWrapper.querySelector('.image-wrap img').srcset = variantImage;
          productWrapper.querySelector('.image-wrap img').dataset.srcset = variantImage;
        }
      }
    } else if (target.closest(`.${ID}__iconBag`)) {
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__iconBag`);
      const productWrapper = clickedItem.closest('.grid-product');
      const activeVariantElem = productWrapper.querySelector('.active-variant');
      const imageWrapper = productWrapper.querySelector('.image-wrap img');

      const productImageSrc = imageWrapper.srcset;
      const { productId, value } = productWrapper.dataset;
      const productInfo = JSON.parse(value);
      const variantId = Number(activeVariantElem.href.split('variant=')[1].trim());
      //console.log(productId, 'productId', variantId);
      const getProductData = window[`${ID}__data`].filter((item) => item.id === productId);
      console.log('getproductDta', getProductData, productInfo);
      const modalElem = document.querySelector(`.${ID}__modal`);
      modalElem.dataset.prodId = productId;
      const modalContent = modalElem.querySelector(`.${ID}__modal-content`);
      modalContent.innerHTML = '';
      modalContent.innerHTML = getProductData[0].element.outerHTML;
      if (!modalContent.querySelector(`.${ID}__imageWrapper`)) {
        modalContent
          .querySelector('.product-single__meta')
          .insertAdjacentHTML('beforebegin', image(ID, productImageSrc));
      }
      modalElem.classList.add(`${ID}__open`);

      const result = getSizeAndColorById(productInfo.variants, variantId);

      console.log(
        modalElem.querySelector(`[data-handle="size"] .variant-input[data-value="${result.size}"]`),
        'okk'
      );

      //modalElem
      //.querySelector(`[data-handle="size"] .variant-input[data-value="${result.size}"] label`)
      //.click();

      modalElem
        .querySelector(`[data-handle="color"] .variant-input[data-value="${result.color}"] label`)
        .click();
    } else if (target.closest(`.${ID}__modal-overlay`)) {
      const modalElem = document.querySelector(`.${ID}__modal`);
      modalElem.classList.remove(`${ID}__open`);
    } else if (target.closest(`.${ID}__modal [data-handle="color"] .variant-input`)) {
      const clickedItem = target.closest(`.${ID}__modal [data-handle="color"] .variant-input`);
      const modalElem = document.querySelector(`.${ID}__modal`);

      const { prodId } = modalElem.dataset;
      const productInfoElem = document.querySelector(`.grid-product[data-product-id="${prodId}"]`);
      const { value } = productInfoElem.dataset;
      const productInfo = JSON.parse(value);
      const colorName = clickedItem.dataset.value;
      //need that id while add to basket
      const { variantId } = clickedItem.querySelector('input').dataset;
      console.log(colorName, variantId);

      const isExistingVariant = productInfo.variants.filter(
        (item) => item.id === Number(variantId)
      );

      const result = getSizesByColor(productInfo.variants, colorName);
      console.log(result, 'result');
      if (isExistingVariant) {
        console.log(isExistingVariant, 'isExistingVariant');
        const [actualSize, color] = isExistingVariant[0].title
          .split('/')
          .map((part) => part.trim());
        //eslint-disable-next-line no-unused-expressions
        if (modalElem.querySelector('[data-handle="color"] .variant-input.selected')) {
          modalElem
            .querySelector('[data-handle="color"] .variant-input.selected')
            .classList.remove('selected');

          //modalElem
          //.querySelector('[data-handle="color"] .variant-input.selected')
          //.classList.remove('selected');
        }

        const selectedColorItem = modalElem.querySelector(
          `[data-handle="color"] [data-value="${color}"]`
        );
        selectedColorItem.classList.add('selected');
        result.forEach((item) => {
          const sizeVariant = modalElem.querySelector(
            `[data-handle="size"] [data-value="${item.size}"]`
          );
          sizeVariant.classList.remove('selected');
          sizeVariant.classList.remove('available');
          sizeVariant.classList.remove('notAvailable');
          if (item.isStock && item.size === actualSize && sizeVariant) {
            sizeVariant.classList.add('selected');
            sizeVariant.classList.add('available');
          } else if (item.isStock && item.size !== actualSize && sizeVariant) {
            sizeVariant.classList.add('available');
          } else if (!item.isStock && item.size === actualSize && sizeVariant) {
            sizeVariant.classList.add('selected');
            sizeVariant.classList.add('notAvailable');
          } else if (!item.isStock && item.size !== actualSize && sizeVariant) {
            sizeVariant.classList.add('notAvailable');
          }
        });
      }
    } else if (target.closest(`.${ID}__modal [data-handle="size"] .variant-input`)) {
      const clickedItem = target.closest(`.${ID}__modal [data-handle="size"] .variant-input`);
      const modalElem = document.querySelector(`.${ID}__modal`);

      const { prodId } = modalElem.dataset;
      const productInfoElem = document.querySelector(`.grid-product[data-product-id="${prodId}"]`);
      const { value } = productInfoElem.dataset;
      const productInfo = JSON.parse(value);
      const sizeName = clickedItem.dataset.value;

      const result = getColorsBySize(productInfo.variants, sizeName);

      console.log(result, 'result');
      if (result.length) {
        //eslint-disable-next-line no-unused-expressions
        if (modalElem.querySelector('[data-handle="size"] .variant-input.selected')) {
          modalElem
            .querySelector('[data-handle="size"] .variant-input.selected')
            .classList.remove('selected');
        }

        clickedItem.classList.add('selected');
        console.log('result', result);
        result.forEach((item) => {
          const colorVariant = modalElem.querySelector(
            `[data-handle="color"] [data-value="${item.color}"]`
          );
          //colorVariant.classList.remove('selected');
          colorVariant.classList.remove('available');
          colorVariant.classList.remove('notAvailable');
          if (item.isStock && colorVariant && colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('selected');
            colorVariant.classList.add('available');
          } else if (item.isStock && colorVariant && !colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('available');
          } else if (!item.isStock && colorVariant && colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('selected');
            colorVariant.classList.add('notAvailable');
          } else if (
            !item.isStock &&
            colorVariant &&
            !colorVariant.classList.contains('selected')
          ) {
            colorVariant.classList.add('notAvailable');
          }
        });
      }
    }
  });

  init(); //
};
