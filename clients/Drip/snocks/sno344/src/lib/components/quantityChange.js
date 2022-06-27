const newVariantTitle = (id, variantOptions, currentQuantity) => {

    const packSize = parseInt(variantOptions[variantOptions.length - 1].replace(/[^0-9]/g, '').match(/(\d+)/)[0]) * currentQuantity;
    const packText = variantOptions[variantOptions.length - 1].split(' ')[1];
    const finalPackText = packSize + ' ' + packText;
    const newVarTitle = variantOptions[0] + ' / ' + variantOptions[1] + ' / ' + finalPackText;

    const htmlText = `<p class="${id}__CartItem__Variant">${newVarTitle}</p>`;
    return htmlText;
}
export default newVariantTitle;