/*eslint-disable implicit-arrow-linebreak */

import { addToCart, emitDYAddToCart } from '../helpers/addToBasket';
import { dropdownToggle, updateMiniCart, variantSelection } from './clickActions';

const clickHandler = (id, attachingElem, trckingHelper) => {
  const { shared, fireEvent } = trckingHelper;
  attachingElem.addEventListener('click', async (e) => {
    const { target } = e;
    const targetMatched = (targetSelector) =>
      target.matches(targetSelector) || target.closest(targetSelector);
    const parentElm = target.closest(`.${id}__banner-block`);
    const inputBox = target.closest(`.${id}__productactions`)?.querySelector('input');
    if (targetMatched(`.${id}__productvariant-selected`)) {
      fireEvent('User interacts with shade drop down', shared);
      dropdownToggle(id, target);
    } else if (targetMatched(`.${id}__variantoption`)) {
      variantSelection(id, target);
    } else if (targetMatched(`.${id}__plus-btn`)) {
      inputBox.value = parseInt(inputBox.value) + 1;
      fireEvent('Interactions with quantity', shared);
    } else if (targetMatched(`.${id}__minus-btn`)) {
      inputBox.value = parseInt(inputBox.value <= 1 ? 2 : inputBox.value) - 1;
      fireEvent('Interactions with quantity', shared);
    } else if (targetMatched(`.${id}__addtocart`)) {
      const quantity = parseInt(inputBox.value);
      const closestVariantSelectElem = target
        .closest(`.${id}__productsbanner`)
        .querySelector(`.swiper-slide-active .${id}__productvariant-selected`);
      const selectedSku = closestVariantSelectElem.querySelector('.selected-img').dataset.sku;
      parentElm.classList.add('addingtocart');
      const addToCartResponse = await addToCart(selectedSku, quantity);
      updateMiniCart(addToCartResponse);
      //console.log(addToCartResponse);
      await emitDYAddToCart(addToCartResponse);
      setTimeout(() => {
        parentElm.classList.remove('addingtocart');
        fireEvent('user adds a product to cart', shared);
      }, 700);
    } else if (targetMatched(`.${id}__showhide`)) {
      const swiperContainer = parentElm.querySelector(`.${id}__swiper`);
      const productsBanner = parentElm.querySelector(`.${id}__productsbanner`);
      const isOpen = swiperContainer.classList.contains('zero-width');

      fireEvent(`user ${isOpen ? 'expands' : 'cpllapses'} the tab `, shared);
      document.querySelectorAll(`.${id}__productvariant--options`).forEach((item) => {
        item?.remove();
      });
      swiperContainer.classList.toggle('zero-width');
      parentElm.classList.toggle('banner-closed');

      isOpen
        ? productsBanner.classList.remove('transparentback')
        : productsBanner.classList.add('transparentback');

      setTimeout(() => {
        swiperContainer.classList.toggle('zero-opacity');
        parentElm.querySelector('.close-icon').classList.toggle('make-plus');
        //get height of the cards
      }, 500);
      setTimeout(() => {
        const cardHeight = document.querySelector(`.${id}__swiper`).getBoundingClientRect().height;
        isOpen && (document.querySelector(`.${id}__showhide`).style = `height:${cardHeight}px`);
      }, 1500);
    }
  });
};

export default clickHandler;
