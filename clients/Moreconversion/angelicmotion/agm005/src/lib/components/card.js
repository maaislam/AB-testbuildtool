import shared from '../shared/shared';

const { VARIATION } = shared;

const cardDetails = (id, product, index, page) => {
    const activeSwatch = product.swatches.find((swatch) => swatch.isActive);
    const { swatchName, sizes: swatchWiseSizes } = activeSwatch;
    const { image, name, badges, swatches } = product;

    const htmlStr = `<div class='${id}__productCard' data-index='${index}' data-pagename='${page}'>
        <div class='${id}__select'>Select ${index + 1}:</div>
        <div class='${id}__cardContent'>
            <img src='${image}' alt='${name}' class='${id}__productCardImage'>
            <div class='${id}__swatchesDetails'>
                <div class='${id}__badges'>
                    ${badges.map((badge) => `<div class='${id}__badge ${id}__${badge.badgeName} ${badge.isActive ? 'active' : ''}'>${badge.badgeName}</div>`).join('')}
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

    return htmlStr;
};

const cardDetails2 = (id, product, index, page) => {
    const activeSwatch = product.swatches.find((swatch) => swatch.isActive);
    const { swatchName, sizes: swatchWiseSizes } = activeSwatch;
    const { image, name, badges, swatches } = product;

    const htmlStr = `<div class='${id}__productCard'  data-index='${index}' data-pagename='${page}'>
        <div class='${id}__select'>Select ${index + 1}:</div>
        <div class='${id}__cardContent'>
            <div class='${id}__badges'>
                ${badges.map((badge) => `<div class='${id}__badge ${id}__${badge.badgeName} ${badge.isActive ? 'active' : ''}'>${badge.badgeName}</div>`).join('')}
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

    return htmlStr;
};

const card = (id, product, index, page) => {
    const htmlStr = `<div class='${id}__productCardWrapper' data-index='${index}'>
        ${cardDetails(id, product, index, page)}
    </div>`;

    const htmlStr2 = `<div class='${id}__productCardWrapper' data-index='${index}'>
        ${cardDetails2(id, product, index, page)}
    </div>`;

    return VARIATION === '1' ? htmlStr : htmlStr2;
};

export default {
    card, cardDetails, cardDetails2
};
