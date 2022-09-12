const variantsDropdown = (id, { variants, prodName }, { xPos, yPos }, selectedSku) => {
  const isMobile = window.DY.deviceInfo.type === 'smartphone';
  const offsetXPos = isMobile ? -20 : 0;

  const variantHtml = ({ availability, canAddToCart, imageUrl, sku, name }) => `
    <div class="${id}__variantoption ${
    availability !== 1 || !canAddToCart ? `${id}__notinstock` : ''
  } ${selectedSku === sku ? `${id}__selected` : ''}" 
        data-sku="${sku}" data-img="${imageUrl}">
        <span class="variant-image ${id}__shade-circle" 
              style="background-image:url('${imageUrl}')">
              <img width="0" src="${imageUrl}"
                alt="${prodName}"></span>
        <span class="variant-name">${name}</span>
    </div>`;

  const htmlStr = `
            <div class="${id}__productvariant--options" 
                style="top: ${yPos + 42}px;left: ${xPos + offsetXPos}px">
                ${variants.map((variant) => variantHtml(variant)).join('\n')}
            </div>`;

  return htmlStr.trim();
};

export default variantsDropdown;
