export const cartUpsell = (ID, arr) => {
  const html = `
    <div class="horizontal-product-list separate ${ID}__cartUpsell">
    <div class="horizontal-product rounded-xs snap-start bg-custom" style="--background: 242 242 242">
      <img
        src="//cdn.shopify.com/s/files/1/0619/1559/4985/files/E59B8787-7A68-4367-9EB3-0AC9BA7355EB_1_201_a.jpg?v=1691128900&amp;width=3018"
        alt="#color_pink"
        srcset="
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/E59B8787-7A68-4367-9EB3-0AC9BA7355EB_1_201_a.jpg?v=1691128900&amp;width=80   80w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/E59B8787-7A68-4367-9EB3-0AC9BA7355EB_1_201_a.jpg?v=1691128900&amp;width=96   96w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/E59B8787-7A68-4367-9EB3-0AC9BA7355EB_1_201_a.jpg?v=1691128900&amp;width=160 160w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/E59B8787-7A68-4367-9EB3-0AC9BA7355EB_1_201_a.jpg?v=1691128900&amp;width=192 192w
        "
        width="2500"
        height="2500"
        loading="lazy"
        sizes="(max-width: 740px) 64px, 80px"
        class="horizontal-product__image rounded-xs"
      />
      <div class="horizontal-product__info ${ID}__prodInfo">
        <div class="v-stack gap-0.5">
          <a href="/products/hashstash-2-5-aluminum-grinder" data-instant="" class="text-sm bold">
            <span class="reversed-link hover:show">The OG Stash Box</span>
            <span class="reversed-link hover:show">- Pink</span>
            <span class="reversed-link hover:show">${arr[0].title}</span>
          </a>
          <div class="price-container">
            <p class="text-sm text-subdued">$79.00</p>
            <p class="text-sm text-subdued compare-at-price">$99.00</p>
          </div>
        </div>
        <div class="horizontal-product__cta">
          <form
            method="post"
            action="/cart/add"
            id="complementary-product-sections--16815942172905__cart-drawer--7721556476137"
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
            <input type="hidden" name="id" value="44521930326249" />
            <button type="submit" class="button button--sm button--subdued" is="custom-button">
              <div>+ Add</div>
              <span class="button__loader">
                <span></span>
                <span></span>
                <span></span>
              </span></button
            ><input type="hidden" name="product-id" value="7721556476137" />
          </form>
        </div>
      </div>
    </div>
  
    <div class="horizontal-product rounded-xs snap-start bg-custom" style="--background: 242 242 242">
      <img
        src="//hashstash.co/cdn/shop/products/Hashstashrendergrindertopofffinal.png?v=1679638557&amp;width=2500"
        alt='HashStash 2.5" Aluminum Grinder'
        srcset="
          //hashstash.co/cdn/shop/products/Hashstashrendergrindertopofffinal.png?v=1679638557&amp;width=64   64w,
          //hashstash.co/cdn/shop/products/Hashstashrendergrindertopofffinal.png?v=1679638557&amp;width=128 128w,
          //hashstash.co/cdn/shop/products/Hashstashrendergrindertopofffinal.png?v=1679638557&amp;width=80   80w,
          //hashstash.co/cdn/shop/products/Hashstashrendergrindertopofffinal.png?v=1679638557&amp;width=160 160w
        "
        width="2500"
        height="2500"
        loading="lazy"
        sizes="(max-width: 740px) 64px, 80px"
        class="horizontal-product__image rounded-xs"
      />
      <div class="horizontal-product__info">
        <div class="v-stack gap-0.5">
          <a href="/products/hashstash-2-5-aluminum-grinder" data-instant="" class="text-sm bold">
            <span class="reversed-link hover:show">HashStash 2.5" Aluminum Grinder</span>
          </a>
          <p class="text-sm text-subdued">$20.00</p>
        </div>
        <div class="horizontal-product__cta">
          <form
            method="post"
            action="/cart/add"
            id="complementary-product-sections--16815942172905__cart-drawer--7664964763881"
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
            <input type="hidden" name="id" value="42938852606185" />
            <button type="submit" class="button button--sm button--subdued" is="custom-button">
              <div>+ Add</div>
              <span class="button__loader">
                <span></span>
                <span></span>
                <span></span>
              </span></button
            ><input type="hidden" name="product-id" value="7664964763881" />
          </form>
        </div>
      </div>
    </div>
  
    <div class="horizontal-product rounded-xs snap-start bg-custom" style="--background: 242 242 242">
      <img
        src="//cdn.shopify.com/s/files/1/0619/1559/4985/files/6C22887D-37D1-4D39-9E6C-D4B828572E5B_1_201_a.jpg?v=1698196095&amp;width=4072"
        alt="#color_black"
        srcset="
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/6C22887D-37D1-4D39-9E6C-D4B828572E5B_1_201_a.jpg?v=1698196095&amp;width=80   80w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/6C22887D-37D1-4D39-9E6C-D4B828572E5B_1_201_a.jpg?v=1698196095&amp;width=96   96w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/6C22887D-37D1-4D39-9E6C-D4B828572E5B_1_201_a.jpg?v=1698196095&amp;width=160 160w,
          //cdn.shopify.com/s/files/1/0619/1559/4985/files/6C22887D-37D1-4D39-9E6C-D4B828572E5B_1_201_a.jpg?v=1698196095&amp;width=192 192w
        "
        width="2500"
        height="2500"
        loading="lazy"
        sizes="(max-width: 740px) 64px, 80px"
        class="horizontal-product__image rounded-xs"
      />
      <div class="horizontal-product__info ${ID}__prodInfo">
        <div class="v-stack gap-0.5">
          <a href="/products/hashstash-2-5-aluminum-grinder" data-instant="" class="text-sm bold">
            <span class="reversed-link hover:show">The OG Stash Box</span>
            <span class="reversed-link hover:show">- Black</span>
            <span class="reversed-link hover:show">${arr[1].title}</span>
          </a>
          <div class="price-container">
            <p class="text-sm text-subdued">$79.00</p>
            <p class="text-sm text-subdued compare-at-price">$99.00</p>
          </div>
        </div>
        <div class="horizontal-product__cta">
          <form
            method="post"
            action="/cart/add"
            id="complementary-product-sections--16815942172905__cart-drawer--7721556476137"
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
            <input type="hidden" name="id" value="43864246288617" />
            <button type="submit" class="button button--sm button--subdued" is="custom-button">
              <div>+ Add</div>
              <span class="button__loader">
                <span></span>
                <span></span>
                <span></span>
              </span></button
            ><input type="hidden" name="product-id" value="7721556476137" />
          </form>
        </div>
      </div>
    </div>
  </div>  
    `;

  return html.trim();
};
