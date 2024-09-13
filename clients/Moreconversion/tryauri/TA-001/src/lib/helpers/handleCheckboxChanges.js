const handleCheckboxChanges = (id) => {
    const wrapper = document.querySelector(`.${id}__wrapper-products`);
    const button = document.querySelector(`.${id}__button`);

    const getCheckedProductIds = () => {
        const checkboxes = wrapper.querySelectorAll(`.${id}__checkbox`);
        return Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.getAttribute('data-product-id'));
    };

    const updateTotalPrice = () => {
        const priceTotal = document.querySelector(`.${id}__price-total`);
        const comparePriceTotal = document.querySelector(`.${id}__compare-price-total`);

        const checkedProductIds = getCheckedProductIds();
        const totalPrice = checkedProductIds.reduce((acc, productId) => {
            const checkbox = wrapper.querySelector(`.${id}__checkbox[data-product-id="${productId}"]`);
            const price = checkbox.getAttribute('data-price');
            if (!price) {
                return acc;
            }
            const priceWithoutCurrency = price.replace(/[^0-9.-]+/g, '');
            return acc + parseFloat(priceWithoutCurrency);
        }, 0);

        const totalComparePrice = checkedProductIds.reduce((acc, productId) => {
            const checkbox = wrapper.querySelector(`.${id}__checkbox[data-product-id="${productId}"]`);
            const comparePrice = checkbox.getAttribute('data-compare-price');
            if (!comparePrice) {
                return acc;
            }
            const comparePriceWithoutCurrency = comparePrice.replace(/[^0-9.-]+/g, '');
            return acc + parseFloat(comparePriceWithoutCurrency);
        }, 0);

        priceTotal.textContent = `$${totalPrice.toFixed(2)}`;
        comparePriceTotal.textContent = `$${totalComparePrice.toFixed(2)}`;
    };

    const updateButtonDataAttr = () => {
        const checkedProductIds = getCheckedProductIds();
        const productIdsString = checkedProductIds.join(','); //Joining product IDs into a comma-separated string
        button.setAttribute('data-added-product-ids', productIdsString);
    };

    //Initial setup
    updateButtonDataAttr();
    updateTotalPrice();

    wrapper.addEventListener('change', (event) => {
        if (event.target.classList.contains(`${id}__checkbox`)) {
            updateButtonDataAttr(); //Update the button when checkboxes change
            updateTotalPrice(); //Update the total price when checkboxes change
        }
    });
};

export default handleCheckboxChanges;
