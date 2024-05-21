const swatchHandler = (id, target, data) => {
    const swatchesParent = target.closest(`.${id}__swatches`);
    const swatches = swatchesParent.querySelectorAll(`.${id}__swatch`);
    const swatch = target.closest(`.${id}__swatch`);
    const productImage = target.closest(`.${id}__cardContent`).querySelector(`.${id}__productCardImage`);
    const image = swatch.getAttribute('data-image');
    const activeColor = swatch.getAttribute('data-color');
    const cardIndex = swatch.dataset.index;
    const swatchColor = swatch.dataset.color;

    const productCard = document.querySelector(`.${id}__productCard[data-index='${cardIndex}']`);
    const product = data[cardIndex];

    //remove all active swatches
    swatches.forEach((s) => s.classList.remove('active'));
    //add active class to the clicked swatch
    swatch.classList.add('active');
    //update the product image
    productImage.src = image;
    swatchesParent.setAttribute('data-color', activeColor);
    //Update the color text
    productCard.querySelector(`.${id}__colorText`).textContent = `Color: ${swatchColor}`;

    //Update the sizes based on the selected swatch with the active class and set Variant ID
    const selectedSwatch = product.swatches.find((s) => s.swatchName === swatchColor);
    const sizesWrapper = productCard.querySelector(`.${id}__sizesWrapper .${id}__sizes`);
    sizesWrapper.innerHTML = selectedSwatch.sizes.map((swatchWiseSize) => `
        <div class='${id}__size ${swatchWiseSize.isActive ? 'active' : ''}' data-variantid='${swatchWiseSize.id}'>${swatchWiseSize.size}</div>
    `).join('');
};
export default swatchHandler;
