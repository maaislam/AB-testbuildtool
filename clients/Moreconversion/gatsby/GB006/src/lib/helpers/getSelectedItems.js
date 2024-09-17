const getSelectedItems = (id) => {
    const widthItemElem = document.querySelector('[name="width"] > input:checked');
    const colorItemElem = document.querySelector('[name="color"] > input:checked');
    const sizeItemElem = document.querySelector('[name="mens-shoe-size-us"] > input:checked');
    const stripeItemElem = document.querySelector(`.${id}__stripeButtons > button.active`);

    const widthValue = widthItemElem ? widthItemElem.value : '';
    const colorValue = colorItemElem ? colorItemElem.value : '';
    const sizeValue = sizeItemElem ? sizeItemElem.value : '';
    const stripeValue = stripeItemElem ? stripeItemElem.dataset.name : '';

    return {
        width: widthValue,
        color: colorValue,
        size: sizeValue,
        selectedStripe: stripeValue
    };
};
export default getSelectedItems;
