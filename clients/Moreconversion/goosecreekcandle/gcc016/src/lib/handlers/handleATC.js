/*eslint-disable radix */
const handleATC = (id) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    document.body.addEventListener('click', (e) => {
        const { target } = e;
        const quantityInputCtrl = document.querySelector('form #quantity');
        const quantityInput = document.querySelector(`#${id}__quantity-input`);
        const atcCtrl = document.querySelector('.product-page--submit-action #purchase');

        if (target.closest(`.${id}__quantity-subtract`) && quantityInput.value > 1) {
            const decrementValue = parseInt(quantityInput.value, 10) - 1;
            quantityInput.value = decrementValue;
            quantityInputCtrl.value = decrementValue;
        } else if (target.closest(`.${id}__quantity-add`)) {
            const incrementValue = parseInt(quantityInput.value, 10) + 1;
            quantityInput.value = incrementValue;
            quantityInputCtrl.value = incrementValue;
        } else if (target.closest(`.${id}__atcBtn`) && !isMobile) {
            const atcBtnElem = target.closest(`.${id}__atcBtn button`);
            const atcTextElem = document.querySelector(`.${id}__atcBtn .atc-text`);
            const loaderElem = document.querySelector(`.${id}__lds-dual-ring`);

            quantityInputCtrl.value = quantityInput.value;
            atcCtrl.click();

            atcBtnElem.disabled = true;
            atcTextElem.classList.add(`${id}__hide`);
            loaderElem.classList.remove(`${id}__hide`);

            setTimeout(() => {
                atcBtnElem.disabled = false;
                loaderElem.classList.add(`${id}__hide`);
                atcTextElem.classList.remove(`${id}__hide`);
            }, 1500);
        } else if (target.closest(`.${id}__atcBtn`) && isMobile) {
            const atcBtnElem = target.closest(`.${id}__atcBtn button`);
            const atcTextElem = document.querySelector(`.${id}__atcBtn .atc-text`);
            const loaderElem = document.querySelector(`.${id}__lds-dual-ring`);

            atcCtrl.click();

            atcBtnElem.disabled = true;
            atcTextElem.classList.add(`${id}__hide`);
            loaderElem.classList.remove(`${id}__hide`);

            setTimeout(() => {
                atcBtnElem.disabled = false;
                loaderElem.classList.add(`${id}__hide`);
                atcTextElem.classList.remove(`${id}__hide`);
            }, 1500);
        }
    });
};

export default handleATC;
