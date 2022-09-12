const productVariant = (id, variantsData) => {
  const data = JSON.stringify(variantsData).trim();
  const firstAvailableItem = variantsData.variants.find(
    (variant) => variant.availability === 1 && variant.canAddToCart
  );
  const isSingleVariant = variantsData.variants.length === 1;

  const htmlStr = `
        <div class="${id}__productvariant ${isSingleVariant ? `${id}__singlevariant` : ''}">
            <div class="${id}__productvariant-selected" 
                 data-variants='${data}'>
                <div class="selected-img ${id}__shade-circle" 
                     style="background-image:url('${firstAvailableItem.imageUrl}')"
                        data-sku = "${firstAvailableItem.sku}">
                    <img width="0" src="${firstAvailableItem.imageUrl}"
                        alt="${variantsData.prodName}">
                </div>
                <div class="select-arrows">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="8"
                        viewBox="0 0 15 8"
                        fill="none">
                        <path d="M7.17723 7.87468L7.86659 7.27455L14.3545 1.56519L12.9758 0L7.17723 5.1011L1.37868 0L0 1.56519L6.48791 7.27455L7.17723 7.87468Z"
                            fill="#717677" />
                    </svg>
                </div>
            </div>
        </div>`;

  return htmlStr.trim();
};

export default productVariant;
