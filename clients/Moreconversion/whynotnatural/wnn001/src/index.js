document.addEventListener('DOMContentLoaded', () => {
    const compareAtPriceElement = document.querySelector('.price__sale .price-item--regular');
    const priceElement = document.querySelector('.price__sale .price-item--sale');
    const priceBadgeSaleElement = document.querySelector('.price__badge-sale');

    if (compareAtPriceElement && priceElement && priceBadgeSaleElement) {
        const compareAtPrice = parseFloat(compareAtPriceElement.textContent.replace(/[^0-9.-]+/g, ''));
        const price = parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ''));

        if (compareAtPrice > price) {
            const savingAmount = compareAtPrice - price;

            const formattedSavingAmount = savingAmount.toLocaleString('en-US', {
 style: 'currency', currency: 'USD'
});

            //Update the content of the price__badge-sale element
            priceBadgeSaleElement.textContent = `Save ${formattedSavingAmount}`;
        }
    }

    //Add the discount buttons - block ---------------------
    const button = (text, classes, qty) => {
        const htmlStr = `<button data-quantity=${qty} type="button" name="add" class="${classes} product-discount-button button button--full-width button--secondary" listener="true">
        <span>${text}</span>
        <div class="loading-overlay__spinner hidden">
            <svg aria-hidden="true" focusable="false" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                <circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle>
            </svg>
        </div>
    </button>`;

        return htmlStr;
    };

    const buy2Btn = button('Buy 2 Save 10%', 'buy2Btn', 2);
    const buy3Btn = button('Buy 3 Save 15%', 'buy3Btn', 3);

    const insertButton = (target) => {
        target.insertAdjacentHTML('afterend', buy3Btn);
        target.insertAdjacentHTML('afterend', buy2Btn);
    };

    const btnAttachPoint = document.querySelector('.product-form__submit');
    insertButton(btnAttachPoint);

    //click event for the discount buttons
    document.body.addEventListener('click', async (e) => {
        const { target } = e;
        const quantityElem = document.querySelector('.quantity__input');
        const submitBtnElem = document.querySelector('.product-form__submit');

        if (target.closest('.buy2Btn')) {
            const btnQuantity = target.getAttribute('data-quantity');
            quantityElem.value = Number(btnQuantity);
            submitBtnElem.click();
        } else if (target.closest('.buy3Btn')) {
            const btnQuantity = target.getAttribute('data-quantity');
            quantityElem.value = Number(btnQuantity);
            submitBtnElem.click();
        }
    });

    const pollerLite = (conditions, callback, maxTime = 10000) => {
        const POLLING_INTERVAL = 25;
        const startTime = Date.now();
        const interval = setInterval(() => {
            const allConditionsMet = conditions.every((condition) => {
                if (typeof condition === 'function') {
                    return condition();
                }
                return !!document.querySelector(condition);
            });
            if (allConditionsMet) {
                clearInterval(interval);
                callback();
            } else if (Date.now() - startTime >= maxTime) {
                clearInterval(interval);
                console.error('Polling exceeded maximum time limit');
            }
        }, POLLING_INTERVAL);
    };

    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 4);

    const options = {
 month: 'long', day: 'numeric'
};
    const formattedDate = deliveryDate.toLocaleDateString('en-US', options);

    const deliveryMessage = `<div id="delivery-message-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.32213 2.65933C0.736223 2.75088 0.269318 3.14536 0.0736051 3.71423C0.0130001 3.89035 0.0106201 4.06383 0.0106201 8.30805V12.7189H0.770435H1.53021L1.55405 12.943C1.80259 15.281 4.98822 15.8054 5.98735 13.6728C6.10053 13.4312 6.14435 13.2624 6.20708 12.8268L6.22263 12.7189H8.51062H10.7986L10.8142 12.8268C10.8769 13.2624 10.9207 13.4312 11.0339 13.6728C12.033 15.8054 15.2186 15.281 15.4672 12.943L15.491 12.7189H16.2508H17.0106V10.7598V8.80058L15.8568 7.25826L14.703 5.71593L13.5492 5.71449L12.3954 5.71304V4.16906V2.62512L6.94178 2.62929C3.9423 2.63154 1.41346 2.6451 1.32213 2.65933ZM15.0076 7.82759C15.4062 8.33317 15.7442 8.76646 15.7589 8.79047C15.7807 8.8263 15.4819 8.83412 14.0904 8.83412H12.3954V7.87124V6.90836H13.3392H14.283L15.0076 7.82759ZM4.33912 11.6667C5.13404 12.0306 5.23532 13.1517 4.516 13.6254C3.74148 14.1355 2.74992 13.6172 2.74992 12.7023C2.74992 11.8733 3.59197 11.3246 4.33912 11.6667ZM13.6372 11.6855C14.3543 12.0385 14.4984 12.955 13.9247 13.5139C13.2206 14.1997 12.0188 13.688 12.0185 12.7023C12.0183 11.8571 12.8828 11.3141 13.6372 11.6855Z" fill="#101D42"/>
        </svg>
        Estimated Delivery For Your Order Is <span> ${formattedDate}</span>;
    </div>`;

    const deliveryElement = document.createElement('div');
    deliveryElement.innerHTML = deliveryMessage;

    pollerLite(['#appstle_subscription_widget0'], () => {
        const targetElement = document.getElementById('appstle_subscription_widget0');
        if (targetElement) {
            targetElement.insertAdjacentElement('afterend', deliveryElement);
        }
    });
});
