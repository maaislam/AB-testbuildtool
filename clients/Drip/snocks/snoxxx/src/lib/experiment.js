//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { observeDOM } from '../../../../../../globalUtil/util';
import cartLineTootip from './components/cartLineTooltip';

import renderPulseButton from './components/pulseButton';
import { tooltipPosConfig, wordingBubble } from './configs';

import getCart from './helpers/getCart';
import { isCartPage } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = async (mutation) => {
  const isSideCartOpen = mutation && (mutation.oldValue === 'true' || mutation.oldValue === null);

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

  items.forEach((item) => {
    const { key, quantity } = item;
    const lineQuantity = quantity;

    //each line in cart page has multiple quantity selector for responsive design
    const thisQuantitySelectors = document.querySelectorAll(`a[data-line-id="${key}"]`);
    const prodTitle = thisQuantitySelectors[0]
      .closest('.CartItem')
      .querySelector('.CartItem__Title').innerText;
    const copyInfo = wordingBubble[prodTitle];
    console.log(copyInfo);
    thisQuantitySelectors.forEach((item) => {
      const thisQuantitySelector = item.closest('.QuantitySelector');
      if (!thisQuantitySelector) return;

      thisQuantitySelector.querySelector(`.${ID}__pulse--container`)?.remove();
      thisQuantitySelector.closest('.CartItem')?.querySelector(`.${ID}__tooltip`)?.remove();
      thisQuantitySelector.classList.remove(`${ID}__quantity--selector`);

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
