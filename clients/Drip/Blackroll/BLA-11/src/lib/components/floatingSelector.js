import { downArrow, upArrow } from '../assets';
import formatPrice from '../helpers/formatPrice';

const renderFloatingSelector = (id, data, laguageInfo, preSelectedIndx = 0) => {
  //clear DOM on page change

  document.querySelector(`.${id}__variantselector`)?.remove();

  const { addToCart, dpTitle, currencyCode, noStockMsg } = laguageInfo;

  const { availableForSale, title, variants, _optionSwatches } = data;

  const dropdownTitle = _optionSwatches ? dpTitle.color : dpTitle.size;

  const preSelectedVar = variants.edges[preSelectedIndx];
  const oldPrice = preSelectedVar.node.compareAtPriceV2?.amount;
  const newPrice = preSelectedVar.node.priceV2.amount;
  const swatches = _optionSwatches && JSON.parse(_optionSwatches.value);
  const firstVarimage = preSelectedVar.node.image.src;
  const isSizeVariant = document.querySelector('[data-test-id="textOptions"]') || !swatches;
  const bucketedInTest8 = !!document.body.classList.contains('BLA-8');
  const renderVariant = (info) => {
    return info
      .map(({ node }, i) => {
        const { available, compareAtPriceV2, image, priceV2, sku, title } = node;
        const varOldPrice = compareAtPriceV2?.amount;
        const varPrice = priceV2?.amount;
        return `
         <div class="${id}__variant--item ${i === preSelectedIndx ? `${id}__selected` : ''} ${
          isSizeVariant ? `${id}__size-variant` : ''
        }"
            data-avilability="${available}"
            data-price="${formatPrice(varPrice, currencyCode)}"
            data-oldprice="${formatPrice(varOldPrice, currencyCode)}"
            data-sku="${sku}"
            data-title="${title}"
            data-index="${i}"
            data-productimage="${image.src}">
            <div class="image-container ">
               ${isSizeVariant ? title : `<img src="${swatches[sku]}" alt="${title}" />`} 
            </div>
        </div>`;
      })
      .join('\n');
  };

  const htmlStr = `
    <div class="${id}__variantselector ${id}__hide">
        <div class="left-column">
            <div class="title">${title}</div>
            <div class="new-price ${bucketedInTest8 ? `${id}__order-3` : ''}">${formatPrice(newPrice, currencyCode)}</div>
            <div class="old-price ${bucketedInTest8 ? `${id}__order-2` : ''} ${!oldPrice ? `${id}__hide` : 'test'}">${formatPrice(
    oldPrice,
    currencyCode
  )}</div>
        </div>
        <div class="right-column">
            <div class="actions-block">
            <div class="new-price ${bucketedInTest8 ? `${id}__order-3` : ''}">${formatPrice(newPrice, currencyCode)}</div>
                <div class="old-price ${bucketedInTest8 ? `${id}__order-2` : ''}  ${
    !oldPrice ? `${id}__hide` : ''
  }">${formatPrice(oldPrice, currencyCode)}</div>
                <div class="variant-dp" ${variants.edges.length <= 1 ? 'data-nodropdown="true"' : ''}>
                    <div class="variant-dp__title">
                        <span>${dropdownTitle}</span><span>${upArrow}</span><span class="${id}__hide">${downArrow}</span><span class="selected-image"><img src="${firstVarimage}" alt="title" /></span>
                    </div>
                    <div class="variant-dp__items ${!swatches ? `${id}__sizevariant-gap` : ''} ${id}__hide ">
                        ${variants.edges.length > 1 && renderVariant(variants.edges)}
                    </div>
                </div>
                ${
                  availableForSale
                    ? `<div class="addtocart-btn btn-pill-green inline-block">${addToCart}</div>`
                    : `<div class="noStock-btn btn-pill-gray inline-blockpointer-events-none">${noStockMsg}</div>`
                }
                
                
            </div>
        </div>
    </div>`;

  document.getElementById('PageHeader').insertAdjacentHTML('afterend', htmlStr);
};

export default renderFloatingSelector;
