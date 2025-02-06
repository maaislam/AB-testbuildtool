export const colorWrapper = (id) => {
  const html = `
        <div class="${id}__colorWrapper">
            <div class="variant__label variant_color_label seasonal-label">
                exclusive  <span class="selectedcolor"></span>
            </div>

            <div class="variant-input variant-input-seasonal ${id}__newVariant  new-variant " data-index="option2" data-value="fresh mint">
            <label  class="color-swatch color-swatch--fresh-mint ${id}__fresh-mint" style="background-color: mint;  background-image: url(https://perfectwhitetee.com/cdn/shop/files/fresh-mint_50x50.png);">
              COLOR fresh mint
            </label></div>
        </div>
    `;
  return html.trim();
};
