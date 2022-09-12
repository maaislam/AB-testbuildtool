import { pollerLite } from '../../../../../../../globalUtil/util';
import { isMobile } from './utils';

const MOBILE_SCROLL_ADJUSTMENT_VAL = 80;

const checkoutAdjust = (ID, fireEvent, shared) => {
  pollerLite(['[data-test-id="slot"]'], () => {
    const branchSlotsWrapper = document.querySelector(
      '[data-test-id="product-details-block-branch"]'
    );
    const selectedDateIndex = parseInt(sessionStorage.getItem(`${ID}__selected-delivery-date`));
    const slots = branchSlotsWrapper.querySelectorAll('[data-test-id="slot"]');
    const rightArrow = branchSlotsWrapper.querySelector('[data-test-id="right-icon"]');
    const leftArrow = branchSlotsWrapper.querySelector('[data-test-id="left-icon"]');
    if (!branchSlotsWrapper) return;

    const deliveryOptions = document.querySelectorAll('[data-test-id^="product-details-block-"]');

    if (deliveryOptions.length > 1) {
      fireEvent('User has multiple delivery type products in their bag', shared);
    }

    if (isMobile()) {
      const itemToClick = slots[selectedDateIndex];
      if (!itemToClick) return;
      itemToClick.click();
      const xDistance = itemToClick.offsetLeft;
      const grandParentElm = itemToClick.parentElement.parentElement;
      grandParentElm.scrollLeft = 0;
      grandParentElm.scrollLeft += xDistance - MOBILE_SCROLL_ADJUSTMENT_VAL;
    } else if (!isMobile() && selectedDateIndex > 4) {
      const clickTimer = setInterval(() => {
        leftArrow?.click();
        if (branchSlotsWrapper.querySelector('[data-test-id="left-icon-disabled"]')) {
          clearInterval(clickTimer);
          const arrowClicksRequired = Math.floor(selectedDateIndex / 5);
          for (let index = 0; index < arrowClicksRequired; index += 1) {
            rightArrow?.click();
            if (index + 1 === arrowClicksRequired) {
              const elemIndx = selectedDateIndex % 5;
              branchSlotsWrapper.querySelectorAll('[data-test-id="slot"]')[elemIndx]?.click();
            }
          }
        }
      }, 25);
    } else if (!isMobile() && selectedDateIndex <= 4) {
      const itemToClick = slots[selectedDateIndex];
      itemToClick.click();
    }
  });
};

export default checkoutAdjust;
