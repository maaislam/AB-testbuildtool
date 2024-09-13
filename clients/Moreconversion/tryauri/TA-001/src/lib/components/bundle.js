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
    <div class="${id}__bundleWrapper-content-image">
        <img src="${imageSrc}"
        alt="Super Mushroom Elixir Full Bundle"
        class="product-image">
    </div>
    <div class="${id}__bundleWrapper-content-text">
         <h2>${title}</h2>
        <div class="priceWrapper">
        <span class="price"> ${price}</span>
        ${compare_at_price ? `<span class="original-price">${compare_at_price}</span>` : ''}
        </div>
    </div>
    <div class="checkboxes__item">
      <label class="checkbox">
        <input type="checkbox">
        <div class="checkbox__checkmark"></div>
      </label>
    </div>
  </div>
  `;
  return html.trim();
};
