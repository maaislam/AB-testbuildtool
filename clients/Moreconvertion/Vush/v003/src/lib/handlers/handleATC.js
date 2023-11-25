/*eslint-disable radix */
const handleATC = (id, intersectionAnchor) => {
    document.body.addEventListener('click', (e) => {
        const { target } = e;
        const quantityInputCtrl = document.querySelector('form .product-form__quantity input');
        const quantityInput = document.querySelector(`#${id}__quantity-input`);

        if (target.closest(`.${id}__quantity-subtract`) && quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value, 10) - 1;
        } else if (target.closest(`.${id}__quantity-add`)) {
            quantityInput.value = parseInt(quantityInput.value, 10) + 1;
        } else if (target.closest(`.${id}__atcBtn`)) {
            quantityInputCtrl.value = quantityInput.value;
            intersectionAnchor.click();
        }
    });
};

export default handleATC;
