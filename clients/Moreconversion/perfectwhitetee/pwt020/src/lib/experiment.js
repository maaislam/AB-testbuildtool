import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { addToCart, parseHTML, pollerLite } from './helpers/utils';
import { bagIcon } from './assets/icons';
import modal from './components/modal';
import image from './components/image';
import button from './components/button';
import { sizeWrapper } from './components/sizeWrapper';

const { ID, variantION } = shared;

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

const toggleVariantLabels = () => {
  //Allow passing either a selector string or a DOM element
  const root = document.querySelector(`.${ID}__modal [data-handle="color"]`);
  if (!root) return;

  //Get the labels within the container
  const seasonalLabel = root.querySelector('.seasonal-label');
  const essentialsLabel = root.querySelector('.essentials-label');
  if (!seasonalLabel || !essentialsLabel) return;

  //Check if any seasonal or essentials variant input is selected
  const seasonalSelected = root.querySelector('.variant-input-seasonal.selected');
  const essentialsSelected = root.querySelector('.variant-input-essentials.selected');

  if (seasonalSelected) {
    seasonalLabel.classList.add(`${ID}__show`);
    seasonalLabel.classList.remove(`${ID}__hide`);
    essentialsLabel.classList.add(`${ID}__hide`);
    essentialsLabel.classList.remove(`${ID}__show`);
  } else if (essentialsSelected) {
    essentialsLabel.classList.add(`${ID}__show`);
    essentialsLabel.classList.remove(`${ID}__hide`);
    seasonalLabel.classList.add(`${ID}__hide`);
    seasonalLabel.classList.remove(`${ID}__show`);
  } else {
    //If neither is selected, remove both toggle classes (or you can decide a default)
    seasonalLabel.classList.remove(`${ID}__show`, `${ID}__hide`);
    essentialsLabel.classList.remove(`${ID}__show`, `${ID}__hide`);
  }
};

const updateLabelVisibility = () => {
  //Allow passing either a DOM element or a selector string.
  const root = document.querySelector(`.${ID}__modal [data-handle="color"]`);
  if (!root) return;

  //Helper function: for a given label and selector for its associated inputs,
  //check if all such inputs (found among its following siblings) have the "hidden" class.
  const updateLabelForGroup = (label, inputSelector) => {
    const allColorItems = root.querySelectorAll(inputSelector);
    const isHiddenClassExist = Array.from(allColorItems).every((item) =>
      item.classList.contains('hidden')
    );

    if (isHiddenClassExist) {
      label.classList.add(`${ID}__hiddenLabel`);
    } else {
      label.classList.remove(`${ID}__hiddenLabel`);
    }
  };

  //Process seasonal-label group
  const seasonalLabel = root.querySelector('.seasonal-label');
  if (seasonalLabel) {
    updateLabelForGroup(seasonalLabel, '.variant-input-seasonal');
  }

  //Process essentials-label group
  const essentialsLabel = root.querySelector('.essentials-label');
  if (essentialsLabel) {
    updateLabelForGroup(essentialsLabel, '.variant-input-essentials');
  }
};

const init = () => {
  const wrapper = document.querySelector('.product-single__meta');
  const targetedProducts = wrapper.querySelectorAll('.product-single__meta .grid-product');
  targetedProducts[0].parentElement.classList.add(`${ID}__productsWrapper`);

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
    colorSwatchesElem.querySelector('.color-swatch').classList.add('active-variant');
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
        return;
      }

      window[`${ID}__data`] = data;
    })
    .catch((error) => {
      console.error('error', error);
      document.documentElement.classList.remove(ID);
      document.documentElement.classList.remove(`${ID}-${variantION}`);
    });

  if (!document.querySelector(`.${ID}__model`)) {
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup(); //use if needed
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
    } else if (target.closest(`.${ID}__iconBag`) && window.innerWidth > 590) {
      //desktop
      e.preventDefault();
      const clickedItem = target.closest(`.${ID}__iconBag`);
      const productWrapper = clickedItem.closest('.grid-product');
      const activeVariantElem = productWrapper.querySelector('.active-variant');
      const imageWrapper = productWrapper.querySelector('.image-wrap img');

      const productImageSrc = imageWrapper.srcset;
      const { productId, value } = productWrapper.dataset;
      const productInfo = JSON.parse(value);
      const variantId = Number(activeVariantElem.href.split('variant=')[1].trim());

      const getProductData = window[`${ID}__data`].filter((item) => item.id === productId);

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

      updateLabelVisibility();

      const result = getSizeAndColorById(productInfo.variants, variantId);

      modalElem
        .querySelector(`[data-handle="color"] .variant-input[data-value="${result.color}"] label`)
        .click();
    } else if (
      target.closest(`.${ID}__modal-overlay`) ||
      target.closest(`.${ID}__closeWrapper svg`)
    ) {
      const modalElem = document.querySelector(`.${ID}__modal`);
      modalElem.classList.remove(`${ID}__open`);
    } else if (target.closest(`.${ID}__modal [data-handle="color"] .variant-input label`)) {
      const clickedItem = target.closest(`.${ID}__modal [data-handle="color"] .variant-input`);
      const modalElem = document.querySelector(`.${ID}__modal`);
      const modalImageElem = modalElem.querySelector(`.${ID}__imageWrapper img`);

      if (!modalElem.querySelector(`.${ID}__atb`)) {
        modalElem.querySelector('form').insertAdjacentHTML('beforebegin', button(ID));
      }
      const atbButton = modalElem.querySelector(`.${ID}__atb`);

      const { prodId } = modalElem.dataset;
      const productInfoElem = document.querySelector(`.grid-product[data-product-id="${prodId}"]`);
      const { value } = productInfoElem.dataset;
      const productInfo = JSON.parse(value);
      const colorName = clickedItem.dataset.value;
      //need that id while add to basket
      const { variantId } = clickedItem.querySelector('input').dataset;

      const isExistingVariant = productInfo.variants.filter(
        (item) => item.id === Number(variantId)
      );

      modalImageElem.src = isExistingVariant[0].featured_image.src;
      const [actualSize, color] = isExistingVariant[0].title.split('/').map((part) => part.trim());
      //eslint-disable-next-line no-unused-expressions
      if (modalElem.querySelector('[data-handle="color"] .variant-input.selected')) {
        modalElem
          .querySelector('[data-handle="color"] .variant-input.selected')
          .classList.remove('selected');
      }

      const selectedColorItem = modalElem.querySelector(
        `[data-handle="color"] [data-value="${color}"]`
      );
      selectedColorItem.classList.add('selected');

      toggleVariantLabels();
      const selectedLabelElem = modalElem.querySelector(
        `[data-handle="color"] .variant__label.${ID}__show`
      );
      const selectedColorElem = selectedLabelElem.querySelector('.selectedcolor');
      selectedColorElem.innerText = `— ${color}`;

      const result = getSizesByColor(productInfo.variants, colorName);
      let sizeValue;

      if (result.length) {
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
            sizeValue = item.size;
          } else if (item.isStock && item.size !== actualSize && sizeVariant) {
            sizeVariant.classList.add('available');
          } else if (!item.isStock && item.size === actualSize && sizeVariant) {
            sizeVariant.classList.add('selected');
            sizeVariant.classList.add('notAvailable');
            sizeValue = item.size;
          } else if (!item.isStock && item.size !== actualSize && sizeVariant) {
            sizeVariant.classList.add('notAvailable');
          }
        });
      }

      console.log(`${sizeValue} / ${colorName}`, 'check', productInfo.variants);
      const selectedVariant = productInfo.variants.filter(
        (item) => item.title.toLowerCase() === `${sizeValue} / ${colorName}`.toLowerCase()
      );
      console.log('selected varianatId: :', selectedVariant);
      if (selectedVariant && selectedVariant[0].available) {
        atbButton.setAttribute('data-available', true);
        atbButton.setAttribute('data-variant-id', isExistingVariant[0].id);
      } else if (selectedVariant && !selectedVariant[0].available) {
        atbButton.setAttribute('data-available', false);
        atbButton.setAttribute('data-variant-id', isExistingVariant[0].id);
      }

      console.log('selected varianatId: :', selectedVariant[0].id);
      updateLabelVisibility();
    } else if (target.closest(`.${ID}__modal [data-handle="size"] .variant-input label`)) {
      const clickedItem = target.closest(`.${ID}__modal [data-handle="size"] .variant-input`);
      const modalElem = document.querySelector(`.${ID}__modal`);

      if (!modalElem.querySelector(`.${ID}__atb`)) {
        modalElem.querySelector('form').insertAdjacentHTML('beforebegin', button(ID));
      }
      const atbButton = modalElem.querySelector(`.${ID}__atb`);

      const { prodId } = modalElem.dataset;
      const productInfoElem = document.querySelector(`.grid-product[data-product-id="${prodId}"]`);
      const { value } = productInfoElem.dataset;
      const productInfo = JSON.parse(value);
      const sizeName = clickedItem.dataset.value;

      const result = getColorsBySize(productInfo.variants, sizeName);
      let colorValue;

      if (modalElem.querySelector('[data-handle="size"] .variant-input.selected')) {
        modalElem
          .querySelector('[data-handle="size"] .variant-input.selected')
          .classList.remove('selected');
      }
      clickedItem.classList.add('selected');

      if (result.length) {
        //eslint-disable-next-line no-unused-expressions
        result.forEach((item) => {
          const colorVariant = modalElem.querySelector(
            `[data-handle="color"] [data-value="${item.color}"]`
          );
          colorVariant.classList.remove('available');
          colorVariant.classList.remove('notAvailable');
          if (item.isStock && colorVariant && colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('selected');
            colorVariant.classList.add('available');
            colorValue = colorVariant.dataset.value;
          } else if (item.isStock && colorVariant && !colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('available');
          } else if (!item.isStock && colorVariant && colorVariant.classList.contains('selected')) {
            colorVariant.classList.add('selected');
            colorVariant.classList.add('notAvailable');
            colorValue = colorVariant.dataset.value;
          } else if (
            !item.isStock &&
            colorVariant &&
            !colorVariant.classList.contains('selected')
          ) {
            colorVariant.classList.add('notAvailable');
          }
        });
      }

      console.log(`${sizeName} / ${colorValue}`, 'check', productInfo.variants);
      const selectedVariant = productInfo.variants.filter(
        (item) => item.title.toLowerCase() === `${sizeName} / ${colorValue}`.toLowerCase()
      );

      console.log(selectedVariant, 'selectedVariant');

      if (selectedVariant && selectedVariant[0].available) {
        atbButton.setAttribute('data-available', true);
        atbButton.setAttribute('data-variant-id', selectedVariant[0].id);
      } else if (selectedVariant && !selectedVariant[0].available) {
        atbButton.setAttribute('data-available', false);
        atbButton.setAttribute('data-variant-id', selectedVariant[0].id);
      }

      console.log('selected varianatId: :', selectedVariant[0].id);
      updateLabelVisibility();
    } else if (target.closest(`.${ID}__atb`)) {
      const clickedItem = target.closest(`.${ID}__atb`);
      const { variantId } = clickedItem.dataset;
      addToCart(variantId, 1);
    } else if (target.closest(`.${ID}__iconBag`) && window.innerWidth <= 590) {
      //mobie
      e.preventDefault();
      console.log('not selected');
      const clickedItem = target.closest(`.${ID}__iconBag`);
      const productWrapper = clickedItem.closest('.grid-product');
      const activeVariantElem = productWrapper.querySelector('.active-variant');
      const imageWrapper = productWrapper.querySelector('.image-wrap img');

      const productImageSrc = imageWrapper.srcset;
      const { productId, value } = productWrapper.dataset;
      const productInfo = JSON.parse(value);
      const variantId = Number(activeVariantElem.href.split('variant=')[1].trim());

      const getProductData = window[`${ID}__data`].filter((item) => item.id === productId);

      const modalElem = document.querySelector(`.${ID}__modal`);
      modalElem.dataset.prodId = productId;
      const modalContent = modalElem.querySelector(`.${ID}__modal-content`);
      modalContent.innerHTML = '';
      modalContent.innerHTML = sizeWrapper(ID);
      modalElem.classList.add(`${ID}__open`);
    }
  });

  init(); //
};
