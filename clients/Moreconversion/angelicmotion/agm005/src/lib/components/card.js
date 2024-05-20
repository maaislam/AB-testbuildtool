const card = (id, product, index) => {
    const htmlStr = `<div class='${id}__productCard'>
        <div class='${id}__select'>Select ${index + 1}:</div>
        <div class='${id}__cardContent'>
            <img src='${product.image}' alt='${product.name}' class='${id}__productCardImage'>
            <div class='${id}__swatchesDetails'>
                <div class='${id}__badges'>
                    ${product.badges.map((badge) => `<div class='${id}__badge'>${badge}</div>`).join('')}
                </div>
                <div>Color: Black</div>
                <div class='${id}__swatches'>
                    ${product.swatches.map((swatch) => `
                        <div class='${id}__swatch ${swatch.isActive ? 'active' : ''}' style='background-color: ${swatch.color}' data-image='${swatch.swatchImage}'></div>
                    `).join('')}
                </div>
            </div>
            <div class='${id}__sizesWrapper'>
                Size:
                <div class='${id}__sizes'>
                    ${product.sizes.map((size) => `
                        <div class='${id}__size'>${size}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>`;

    return htmlStr;
};
export default card;
