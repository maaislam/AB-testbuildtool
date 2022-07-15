import cartLineTootip from './components/cartLineTooltip';

import renderPulseButton from './components/pulseButton';
import newVariantTitle from './components/quantityChange';
import { tooltipPosConfig, wordingBubble } from './configs';

import getCart from './helpers/getCart';
import { observeDOM } from './helpers/observeDOM';
import { isCartPage } from './helpers/pageTypes';
import { pollForGA } from './helpers/pollGA';
import shared from './shared/shared';

const { ID, VARIATION } = shared;
const init = async(mutation) => {
    const isSideCartOpen = mutation && (mutation.oldValue === 'true' || mutation.oldValue === null);

    if (!isCartPage && !isSideCartOpen) return;

    if (sessionStorage.getItem('SNO344') === 'true') {
        document.querySelector('body').classList.add(`${ID}__remove-clicked`);
    } else {
        document.querySelector('body').classList.remove(`${ID}__remove-clicked`);
    }

    // -----------------------------
    // If control, bail out from here
    // -----------------------------

    if (VARIATION == 'control') {
        return;
    }
    setTimeout(() => {
        let goalFired = false;

        document.querySelector('.Cart ').submit(function(e) {
            //alert("Submitted");
            if (goalFired == false) {
                e.preventDefault();
                setTimeout(() => {
                    goalFired = true;
                    window.location.href = '/checkout';
                    // $(".Cart").submit();
                }, 3000);
            }
        });
    }, 2000);

    if (isCartPage) {
        let productArray = [];
        document
            .querySelectorAll('.CartItem__Info  + .CartItem__Actions .QuantitySelector')
            .forEach(function(item, key) {
                productArray.push(item.querySelector('input').getAttribute('value'));
                item.querySelector('input').addEventListener('change', function() {
                    if (parseInt(item.querySelector('input').value) > parseInt(productArray[key])) {
                        const prodHeading = item
                            .closest('.CartItem')
                            .querySelector('.CartItem__Title.Heading').innerText;
                        const prodQty = parseInt(item.querySelector('.QuantitySelector input').value);
                        pollForGA(prodHeading, prodQty);
                    }
                });

                // document.querySelector('.Cart').addEventListener('submit', function () {

                //   if (parseInt(item.querySelector('input').value) > parseInt(productArray[key])) {
                //     const prodHeading = item
                //       .closest('.CartItem')
                //       .querySelector('.CartItem__Title.Heading').innerText;
                //     const prodQty = parseInt(item.querySelector('.QuantitySelector input').value);
                //     pollForGA(prodHeading, prodQty);
                //   }
                // });
            });
    }

    let productArray = [];
    document.querySelectorAll('.CartItem__Info .QuantitySelector').forEach(function(item, key) {
        productArray.push(item.querySelector('input').getAttribute('value'));
        item.querySelector('input').addEventListener('change', function() {
            if (parseInt(item.querySelector('input').value) > parseInt(productArray[key])) {
                const prodHeading = item
                    .closest('.CartItem')
                    .querySelector('.CartItem__Title.Heading').innerText;
                const prodQty = parseInt(item.querySelector('.QuantitySelector input').value);
                pollForGA(prodHeading, prodQty);
            }
        });

        // $(".Cart ").submit(function(e){
        //   //alert("Submitted");
        //     e.preventDefault();
        //     if (parseInt(item.querySelector('input').value) > parseInt(productArray[key])) {
        //       const prodHeading = item
        //         .closest('.CartItem')
        //         .querySelector('.CartItem__Title.Heading').innerText;
        //       const prodQty = parseInt(item.querySelector('.QuantitySelector input').value);
        //       pollForGA(prodHeading, prodQty);
        //     }

        // });

        // document.querySelector('.Cart').addEventListener('submit', function (e) {
        //   // e.preventDefault();
        //   if (parseInt(item.querySelector('input').value) > parseInt(productArray[key])) {
        //     const prodHeading = item
        //       .closest('.CartItem')
        //       .querySelector('.CartItem__Title.Heading').innerText;
        //     const prodQty = parseInt(item.querySelector('.QuantitySelector input').value);
        //     pollForGA(prodHeading, prodQty);
        //   }
        //   // alert();
        //   return false;
        // });
    });

    const cartData = await getCart();
    const { items } = cartData;
    const cartLineCount = items.length;

    if (isCartPage) {
        if (document.querySelector('.EmptyState')) {
            sessionStorage.setItem('SNO344', false);
        }
    }

    if (!isCartPage) {
        if (cartLineCount == 0) {
            sessionStorage.setItem('SNO344', false);
            // document.querySelector('body').classList.remove(`${ID}__remove-clicked`);
        }
    }

    if (document.querySelector('body').classList.contains(`${ID}_plus-clicked`)) {
        let ind = document.querySelector('body').getAttribute('id');
        let productHeading = items[ind].product_title.split('|')[0];
        let prodQty = items[ind].quantity;
        pollForGA(productHeading, prodQty);
        document.querySelector('body').classList.remove(`${ID}_plus-clicked`);
    }

    if (isCartPage) {
        const increaseQtyBtn = document.querySelectorAll(
            '.CartItem__Info  + .CartItem__Actions .QuantitySelector'
        );

        increaseQtyBtn.forEach(function(item, key) {
            item.querySelectorAll('a')[1].addEventListener('click', function() {
                document.querySelector('body').classList.add(`${ID}_plus-clicked`);
                document.querySelector('body').setAttribute('id', key);
            });
        });
    }

    const increaseQtyBtn = document.querySelectorAll('.CartItem__Info .QuantitySelector');

    increaseQtyBtn.forEach(function(item, key) {
        item.querySelectorAll('a')[1].addEventListener('click', function() {
            document.querySelector('body').classList.add(`${ID}_plus-clicked`);
            document.querySelector('body').setAttribute('id', key);
        });
    });

    items.forEach((item) => {
        const { key, quantity, variant_options } = item;
        const lineQuantity = quantity;
        // const cartItemTitle = item.variant_title.split(' / ');

        //each line in cart page has multiple quantity selector for responsive design
        const thisQuantitySelectors = document.querySelectorAll(`a[data-line-id="${key}"]`);
        const prodTitle = thisQuantitySelectors[0]
            .closest('.CartItem')
            .querySelector('.CartItem__Title').innerText;
        const copyInfo = wordingBubble[prodTitle];
        thisQuantitySelectors.forEach((item) => {
            const thisQuantitySelector = item.closest('.QuantitySelector');
            if (!thisQuantitySelector) return;

            thisQuantitySelector.querySelector(`.${ID}__pulse--container`) ? .remove();
            document.querySelectorAll(`.${ID}__tooltip`).forEach((item) => {
                item.remove();
            });
            thisQuantitySelector.classList.remove(`${ID}__quantity--selector`);
            const currentVariantTitle = thisQuantitySelector
                .closest('.CartItem')
                .querySelector('.CartItem__Variant');

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
            // currentVariantTitle.insertAdjacentHTML('afterend', newVariantTitle(ID, variant_options, lineQuantity))

            // document.querySelector('body')?.classList.remove('remove-clicked');
            if (cartLineCount > 1) {
                sessionStorage.setItem('SNO344', true);
            }
            if (lineQuantity >= 3 || cartLineCount !== 1) {
                return;
            }

            // document.body.classList.add(`user__seen`);

            /********<render pulse animation container>************/

            thisQuantitySelector.classList.add(`${ID}__quantity--selector`);
            thisQuantitySelector.insertAdjacentHTML('beforeend', renderPulseButton(ID));

            /********<render pulse animation container/>************/

            /********<render tooltip>************/

            const tooltipAnchorPoint = isCartPage ?
                tooltipPosConfig.cartPage.closestSelector :
                tooltipPosConfig.generic.closestSelector;

            const tooltipAnchorPos = isCartPage ?
                tooltipPosConfig.cartPage.position :
                tooltipPosConfig.generic.position;

            const tooltipArrowClass = isCartPage ?
                tooltipPosConfig.cartPage.arrowPositionClass :
                tooltipPosConfig.generic.arrowPositionClass;

            isCartPage &&
                thisQuantitySelector.closest('.CartItem__Actions').classList.add(`${ID}__row-padding`);

            thisQuantitySelector
                .closest(tooltipAnchorPoint)
                .insertAdjacentHTML(
                    tooltipAnchorPos,
                    cartLineTootip(ID, lineQuantity, tooltipArrowClass, copyInfo, 'desktop')
                );

            //mobile
            if (!isCartPage) {
                const itemRemoveBtn = thisQuantitySelector
                    .closest('.CartItem')
                    .querySelector('.CartItem__QuantitySelector');
                itemRemoveBtn.classList.add(`${ID}__adjusted--margin`);
                itemRemoveBtn.insertAdjacentHTML(
                    'beforeend',
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
                .addEventListener('click', () => {
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
    if (isCartPage) {
        observeDOM(`[data-section-type="cart"]`, init, mutObsConfig);
    }
};