import shared from '../shared/shared';

const { VARIATION } = shared;

const card = (id, product, index) => {
    const activeSwatch = product.swatches.find((swatch) => swatch.isActive);
    const { swatchName, sizes: swatchWiseSizes } = activeSwatch;
    const { image, name, badges, swatches } = product;

    const htmlStr = `<div class='${id}__productCard'  data-index='${index}'>
        <div class='${id}__select'>Select ${index + 1}:</div>
        <div class='${id}__cardContent'>
            <img src='${image}' alt='${name}' class='${id}__productCardImage'>
            <div class='${id}__swatchesDetails'>
                <div class='${id}__badges'>
                    ${badges.map((badge) => `<div class='${id}__badge ${badge.isActive ? 'active' : ''}'>${badge.badgeName}</div>`).join('')}
                </div>
                <div class='${id}__colorText'>Color: ${swatchName}</div>
                <div class='${id}__swatches'>
                    ${swatches.map((swatch) => `
                        <div class='${id}__swatch ${swatch.isActive ? 'active' : ''}' style='background-color: ${swatch.color}' data-image='${swatch.swatchImage}' data-color='${swatch.swatchName}' data-index='${index}'></div>
                    `).join('')}
                </div>
            </div>
            <div class='${id}__sizesWrapper'>
                <div class='${id}__sizeText'>Size:</div>
                <div class='${id}__sizes' data-size='s'>
                    ${swatchWiseSizes.map((swatchWiseSize) => `
                        <div class='${id}__size ${swatchWiseSize.isActive ? 'active' : ''}' data-variantid='${swatchWiseSize.id}'>${swatchWiseSize.size}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>`;

    const htmlStr2 = `<div class='${id}__productCard'  data-index='${index}'>
        <div class='${id}__select'>Select ${index + 1}:</div>
        <div class='${id}__cardContent'>
            <div class='${id}__badges'>
                ${badges.map((badge) => `<div class='${id}__badge ${badge.isActive ? 'active' : ''}'>${badge.badgeName}</div>`).join('')}
            </div>
            <img src='${image}' alt='${name}' class='${id}__productCardImage'>
            <div class='${id}__swatchesDetails'>
                <div class='${id}__colorText'>Color: ${swatchName}</div>
                <div class='${id}__swatches'>
                    ${swatches.map((swatch) => `
                        <div class='${id}__swatch ${swatch.isActive ? 'active' : ''}' style='background-color: ${swatch.color}' data-image='${swatch.swatchImage}' data-color='${swatch.swatchName}' data-index='${index}'></div>
                    `).join('')}
                </div>
            </div>
            <div class='${id}__sizesWrapper'>
                <div class='${id}__sizeText'>Size:</div>
                <div class='${id}__sizes' data-size='s'>
                    ${swatchWiseSizes.map((swatchWiseSize) => `
                        <div class='${id}__size ${swatchWiseSize.isActive ? 'active' : ''}' data-variantid='${swatchWiseSize.id}'>${swatchWiseSize.size}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>`;

    return VARIATION === '1' ? htmlStr : htmlStr2;
};
export default card;
