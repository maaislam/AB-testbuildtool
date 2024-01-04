export const productCardMobile = (
  { id, prodId, img, title, price, color, comparePrice, url },
  ID
) => {
  const html = `
    <div class="horizontal-product  rounded-xs snap-start bg-custom" style="--background: 242 242 242">
    <img
      src="${img}"
      alt="${title}"
      width="2500"
      height="2500"
      loading="lazy"
      sizes="(max-width: 740px) 64px, 80px"
      class="horizontal-product__image rounded-xs"
    />
    <div class="horizontal-product__info ${color !== 'Default Title' ? `${ID}__prodInfo` : ''}">
      <div class="v-stack gap-0.5">
        <a href="${url}" data-instant="" class="text-sm bold">
          <span class="reversed-link hover:show">${title}</span>
          ${
            color !== 'Default Title'
              ? `<span class="reversed-link hover:show">-${color}</span>`
              : ''
          }
          
        </a>
        <div class="price-container ">
          <p class="text-sm text-subdued">$${price}</p>
          <p class="text-sm text-subdued compare-at-price">${comparePrice || ''}</p>
        </div>
      </div>
      <div class="horizontal-product__cta">
        <form
          method="post"
          action="/cart/add"
          id="complementary-product-sections--16815942172905__cart-drawer--${prodId}"
          accept-charset="UTF-8"
          class="shopify-product-form"
          enctype="multipart/form-data"
          is="product-form"
        >
          <input type="hidden" name="form_type" value="product" /><input
            type="hidden"
            name="utf8"
            value="✓"
          /><input type="hidden" name="quantity" value="1" />
          <input type="hidden" name="id" value="${id}" />
          <button type="submit" class="button button--sm button--subdued" is="custom-button">
            <div>+ Add</div>
            <span class="button__loader">
              <span></span>
              <span></span>
              <span></span>
            </span></button
          ><input type="hidden" name="product-id" value="${prodId}" />
        </form>
      </div>
    </div>
  </div>
    `;

  return html.trim();
};
