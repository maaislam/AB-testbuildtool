import variantsDropdown from '../components/variantsDropdown';

export const dropdownToggle = (id, target) => {
  const selectedVariantElem = target.closest(`.${id}__productvariant-selected`);
  //if already open close/remove
  const isOpen = selectedVariantElem.classList.contains('is-open');
  if (isOpen) {
    selectedVariantElem.classList.remove('is-open');
    selectedVariantElem.classList.add('is-close');
    setTimeout(() => {
      document.querySelectorAll(`.${id}__productvariant--options`).forEach((item) => {
        item?.remove();
      });
    }, 300);
    return;
  }

  //render card specific variants
  const variantData = JSON.parse(selectedVariantElem.dataset.variants);
  const parentElemPos = document.querySelector(`.${id}__productsbanner`).getBoundingClientRect();
  const targetElemPos = selectedVariantElem.getBoundingClientRect();
  const dropdownPos = {
    xPos: targetElemPos.left - parentElemPos.left,
    yPos: targetElemPos.top - parentElemPos.top
  };
  const selectedSku = selectedVariantElem.querySelector('.selected-img').dataset.sku;

  target
    .closest(`.${id}__productsbanner`)
    .insertAdjacentHTML('afterbegin', variantsDropdown(id, variantData, dropdownPos, selectedSku));
  //const dropdown = target.closest(`.${id}__productvariant--options`);
  selectedVariantElem.classList.add('is-open');
  selectedVariantElem.classList.remove('is-close');
};

export const variantSelection = (id, target) => {
  const thisVariantOptions = target.closest(`.${id}__productvariant--options`);
  const thisOption = target.closest(`.${id}__variantoption`);
  const selectionData = thisOption.dataset;

  //update selected item
  const closestVariantSelectElem = target
    .closest(`.${id}__productsbanner`)
    .querySelector(`.swiper-slide-active .${id}__productvariant-selected`);

  const selectedImgBlock = closestVariantSelectElem.querySelector('.selected-img');
  thisVariantOptions.querySelectorAll(`.${id}__variantoption`).forEach((item) => {
    item.classList.remove(`${id}__selected`);
  });
  thisOption.classList.add(`${id}__selected`);
  selectedImgBlock.setAttribute('style', `background-image:url('${selectionData.img}')`);
  selectedImgBlock.setAttribute('data-sku', selectionData.sku);
  selectedImgBlock.querySelector('img').setAttribute('src', selectionData.img);
  closestVariantSelectElem.click();
};

export const updateMiniCart = ({ itemsCount }) => {
  document.querySelector('[data-item-id="wishlistButton_subObject_2"] p').innerText = itemsCount;
};
