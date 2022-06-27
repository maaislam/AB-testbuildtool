//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
//import { observeDOM, pollerLite } from '../../../../../../globalUtil/util';
import cartLineTootip from './components/cartLineTooltip';

import renderPulseButton from './components/pulseButton';
import newVariantTitle from './components/quantityChange';
import { tooltipPosConfig, wordingBubble } from './configs';

import getCart from './helpers/getCart';
import { observeDOM } from './helpers/observeDOM';
import { isCartPage } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = async (mutation) => {
  console.log(mutation);

  const isSideCartOpen = mutation && (mutation.oldValue === 'true' || mutation.oldValue === null);

  // document.querySelector(`.CartItem__Remove`)?.addEventListener('click', function(){
  //   console.log('remove clicked')

  // })

  if (!isCartPage && !isSideCartOpen) return;
  // -----------------------------
  // If control, bail out from here
  // -----------------------------

  if (VARIATION == 'control') {
    return;
  }

  const cartData = await getCart();
  const { items } = cartData;

  const cartLineCount = items.length;
  if (cartLineCount >= 2) {
    window.oldCartCount = 'morethan2';
  }

  if (window.oldCartCount === 'morethan2' && cartLineCount == 1) {
    window.oldCartCount = '';
    return;
  }

  items.forEach((item) => {
    const { key, quantity, variant_options, variant_title } = item;
    const lineQuantity = quantity;
    const cartItemTitle = item.variant_title.split(' / ');
    const optionTitle = cartItemTitle[2].split(' ')[0];
    //console.log(joinValues(ID, qtyCalculated(lineQuantity, optionTitle), cartItemTitle, optionTitle));
    // item.querySelector('.CartItem__Meta.Heading').insertAdjacentHTML("afterbegin",joinValues(ID, qtyCalculated(lineQuantity, optionTitle), cartItemTitle, optionTitle) )

    //each line in cart page has multiple quantity selector for responsive design
    const thisQuantitySelectors = document.querySelectorAll(`a[data-line-id="${key}"]`);
    const prodTitle = thisQuantitySelectors[0]
      .closest('.CartItem')
      .querySelector('.CartItem__Title').innerText;
    const copyInfo = wordingBubble[prodTitle];
    thisQuantitySelectors.forEach((item) => {
      const thisQuantitySelector = item.closest('.QuantitySelector');
      if (!thisQuantitySelector) return;

      thisQuantitySelector.querySelector(`.${ID}__pulse--container`)?.remove();
      document.querySelectorAll(`.${ID}__tooltip`).forEach((item) => {
        item.remove();
      });
      thisQuantitySelector.classList.remove(`${ID}__quantity--selector`);
      const currentVariantTitle = thisQuantitySelector
        .closest('.CartItem')
        .querySelector('.CartItem__Variant');
      console.log(variant_title);

      // document.querySelectorAll(`.${ID}__CartItem__Variant`).forEach((item) => {
      //   item.remove();
      // });
      currentVariantTitle.classList.add(`${ID}__hide`);
      if (!thisQuantitySelector.closest('.CartItem').querySelector(`.${ID}__CartItem__Variant`)) {
        currentVariantTitle.insertAdjacentHTML(
          'afterend',
          newVariantTitle(ID, variant_options, lineQuantity)
        );
      }

      if (lineQuantity >= 3 || cartLineCount !== 1) return;

      /********<render pulse animation container>************/

      thisQuantitySelector.classList.add(`${ID}__quantity--selector`);
      thisQuantitySelector.insertAdjacentHTML('beforeend', renderPulseButton(ID));

      /********<render pulse animation container/>************/

      /********<render tooltip>************/

      const tooltipAnchorPoint = isCartPage
        ? tooltipPosConfig.cartPage.closestSelector
        : tooltipPosConfig.generic.closestSelector;

      const tooltipAnchorPos = isCartPage
        ? tooltipPosConfig.cartPage.position
        : tooltipPosConfig.generic.position;

      const tooltipArrowClass = isCartPage
        ? tooltipPosConfig.cartPage.arrowPositionClass
        : tooltipPosConfig.generic.arrowPositionClass;

      isCartPage &&
        thisQuantitySelector.closest('.CartItem__Actions').classList.add(`${ID}__row-padding`);

      thisQuantitySelector
        .closest(tooltipAnchorPoint)
        .insertAdjacentHTML(
          tooltipAnchorPos,
          cartLineTootip(ID, lineQuantity, tooltipArrowClass, copyInfo)
        );

      //mobile
      if (!isCartPage) {
        const itemRemoveBtn = thisQuantitySelector
          .closest('.CartItem')
          .querySelector('.CartItem__Actions');
        itemRemoveBtn.classList.add(`${ID}__adjusted--margin`);
        itemRemoveBtn.insertAdjacentHTML(
          'afterend',
          cartLineTootip(ID, lineQuantity, 'uparrow', copyInfo, 'mobile-drawer')
        );
      }
      if (isCartPage) {
        const qtySection = thisQuantitySelector
          .closest('.CartItem')
          .querySelector('.QuantitySelector');
        const qtyTabSection = thisQuantitySelector
          .closest('.CartItem')
          .querySelector('.CartItem__Info + .CartItem__Actions .CartItem__QuantitySelector');
        qtySection.insertAdjacentHTML(
          'afterend',
          cartLineTootip(ID, lineQuantity, 'leftarrow', copyInfo, 'mobile-page')
        );
        qtyTabSection.insertAdjacentHTML(
          'beforeend',
          cartLineTootip(ID, lineQuantity, 'uparrow', copyInfo, 'tab')
        );
      }

      /********<render tooltip/>************/

      //delegate click to pluse button from pulse container
      thisQuantitySelector
        .querySelector(`.${ID}__pulse--container`)
        .addEventListener('click', (e) => {
          thisQuantitySelector.querySelector('a:last-of-type').click();
        });
    });
  });
};

export default () => {
  init();
  const mutObsConfig = {
    childList: true,
    attributes: true,
    attributeFilter: ['aria-hidden'],
    attributeOldValue: true,
  };

  observeDOM(`[data-section-type="cart"] ${isCartPage ? '.PageContent' : ''}`, init, mutObsConfig);
};
