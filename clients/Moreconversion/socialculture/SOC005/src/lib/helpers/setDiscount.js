const setDiscount = (discountCode) => {
    const discountInput = document.querySelector('.upcart-discount-code-input');
    const discountApply = document.querySelector('.upcart-discount-code-button');

    discountInput.value = discountCode;
    discountInput.dispatchEvent(new Event('change'));
    discountApply.click();
};
export default setDiscount;
