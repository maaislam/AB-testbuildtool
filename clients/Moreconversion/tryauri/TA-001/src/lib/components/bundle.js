export const existingBundle = (id, data) => {
  const { title, imageSrc, sellPrice, comparePrice, id: prodId } = data;
  const html = `
      <div class="${id}__bundleWrapper-content" id="${prodId}">
                <div class="${id}__bundleWrapper-content-image">
                    <img src="${imageSrc}"
                        alt="Super Mushroom Elixir Full Bundle"
                        class="product-image">
                </div>
                <div class="${id}__bundleWrapper-content-text">
                    <h2>${title}</h2>
                    <div class="priceWrapper">
                        <span class="price"> ${sellPrice}</span>
                        ${comparePrice ? `<span class="original-price">${comparePrice}</span>` : ''}
                    </div>
                    <input type="checkbox" checked class='${id}__checkbox' data-product-id="${prodId}" data-price="${sellPrice}" data-compare-price="${comparePrice}">
                </div>
            </div>
  `;
  return html.trim();
};

export const Bundle = (id, data) => {
  const { title } = data;
  const imageSrc = data.images[0].src;
  const { price, compare_at_price, id: productId } = data.variants[0];

  const html = `
  <div class="${id}__bundleWrapper-content" id="${productId}">
    <label class="checkbox">
      <div class="${id}__bundleWrapper-content-image">
          <img src="${imageSrc}"
          alt="Super Mushroom Elixir Full Bundle"
          class="product-image">
      </div>
      <div class="${id}__bundleWrapper-content-text">
          <h2>${title}</h2>
          <div class="priceWrapper">
          <span class="price">$${price}</span>
          ${compare_at_price ? `<span class="original-price">$${compare_at_price}</span>` : ''}
          </div>
      </div>
      <div class="checkboxes__item">
          <input type="checkbox" class='${id}__checkbox' data-product-id="${productId}" data-price="${price}" data-compare-price="${compare_at_price}">
          <div class="checkbox__checkmark"></div>
      </div>
    </label>
  </div>
  `;
  return html.trim();
};
