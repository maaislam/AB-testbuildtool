const handleCheckboxChanges = (id) => {
    const wrapper = document.querySelector(`.${id}__wrapper-products`);
    const button = document.querySelector(`.${id}__button`);

    const getCheckedProductIds = () => {
        const checkboxes = wrapper.querySelectorAll(`.${id}__checkbox`);
        return Array.from(checkboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.getAttribute('data-product-id'));
    };

    const updateButtonDataAttr = () => {
        const checkedProductIds = getCheckedProductIds();
        const productIdsString = checkedProductIds.join(','); //Join product IDs into a comma-separated string
        button.setAttribute('data-added-product-ids', productIdsString);
        console.log('Updated button data:', productIdsString);
    };

    //Initial setup
    updateButtonDataAttr();

    wrapper.addEventListener('change', (event) => {
        if (event.target.classList.contains(`${id}__checkbox`)) {
            updateButtonDataAttr(); //Update the button when checkboxes change
        }
    });
};

export default handleCheckboxChanges;
