const prodCard = (product) => {
  const dataProduct = {
    handle: product.handle,
    variantId: product.variants[0]?.id || '',
    splitProduct: '',
    priceMin: product.price_min_usd,
    priceMax: product.price_max_usd,
    compareAtPriceMin: product.compare_at_price_min_usd,
    compareAtPriceMax: product.compare_at_price_max_usd,
    images: product.images_info.map((image, index) => ({
      src: image.src,
      width: image.width,
      alt: image.alt,
      id: image.id || index,
      position: image.position,
      height: image.height
    })),
    options_with_values: product.options_with_values.map((option) => ({
      original_name: option.original_name,
      values: option.values.map((value) => ({
        image: value.image,
        title: value.title
      })),
      name: option.name,
      label: option.label,
      position: option.position
    })),
    selectedVariantImageByFilterOption: ''
  };
  return `
        <div class="boost-sd__product-item boost-sd__product-item--noBorder boost-sd__product-item-grid-view-layout" id="${
          product.id
        }" data-product-id="${product.id}" data-product='${JSON.stringify(dataProduct)}'>
            <div class="boost-sd__product-item-grid-view-layout-image">
                <a class="boost-sd__product-link boost-sd__product-link-image" href="/products/${
                  product.handle
                }">
                    <div style="position: relative">
                        <div class="boost-sd__product-image-wrapper boost-sd__product-image-wrapper--has-second-image boost-sd__product-image-wrapper--natural" style="aspect-ratio:2500/2500">
                            <div class="boost-sd__product-image">
                                <img id="product-image-${
                                  product.id
                                }" class="boost-sd__product-image-img boost-sd__product-image-img--main" decoding="async" alt="${
    product.title
  }" src="${product.images_info[0].src}" srcset="
                                ${product.images_info[0].src}?width=200 200w,
                                ${product.images_info[0].src}?width=300 300w,
                                ${product.images_info[0].src}?width=400 400w,
                                ${product.images_info[0].src}?width=500 500w,
                                ${product.images_info[0].src}?width=700 700w">
                                <img width="auto" height="auto" class="boost-sd__product-image-img boost-sd__product-image-img--second" alt="${
                                  product.title
                                }" src="${product.images_info[1]?.src}" srcset="
                                ${product.images_info[1]?.src}?width=200 200w,
                                ${product.images_info[1]?.src}?width=300 300w,
                                ${product.images_info[1]?.src}?width=400 400w,
                                ${product.images_info[1]?.src}?width=500 500w,
                                ${product.images_info[1]?.src}?width=700 700w">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <a class="boost-sd__product-link" href="/products/${product.handle}">
                <div class="boost-sd__product-info boost-sd__product-info--center">
                    <div class="boost-sd__product-title">
                        ${product.title}
                    </div>
                    <div class="boost-sd__product-rating">
                        <div class="okendo-StarRatingSnippet" style="">
                            <div data-oke-reviews-version="0.69.0" data-oke-container="" class="okeReviews oke-sr">
                                <div class="">
                                    <div class="oke-sr-rating">${product.review_ratings}</div>
                                    <div class="oke-sr-stars">
                                        <div class="oke-stars">
                                            <div class="oke-stars-background">
                                                <svg height="18" viewBox="0 0 79.22222222222221 14" aria-hidden="true">
                                                    <use x="0" href="#oke-star-empty"></use>
                                                    <use x="16.155555555555555" href="#oke-star-empty"></use>
                                                    <use x="32.31111111111111" href="#oke-star-empty"></use>
                                                    <use x="48.46666666666667" href="#oke-star-empty"></use>
                                                    <use x="64.62222222222222" href="#oke-star-empty"></use>
                                                </svg>
                                            </div>
                                            <div class="oke-stars-foreground" style="width: ${
                                              (product.review_ratings / 5) * 100
                                            }%;">
                                                <svg height="18" viewBox="0 0 79.22222222222221 14" aria-hidden="true">
                                                    <use x="0" href="#oke-star-filled"></use>
                                                    <use x="16.155555555555555" href="#oke-star-filled"></use>
                                                    <use x="32.31111111111111" href="#oke-star-filled"></use>
                                                    <use x="48.46666666666667" href="#oke-star-filled"></use>
                                                    <use x="64.62222222222222" href="#oke-star-filled"></use>
                                                </svg>
                                            </div>
                                            <span class="oke-a11yText">Rated ${
                                              product.review_ratings
                                            } out of 5 stars</span>
                                        </div>
                                    </div>
                                    <div class="oke-sr-count">
                                        <span class="oke-sr-count-number">${
                                          product.review_count
                                        }</span><span class="oke-sr-label-text"> Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="boost-sd__product-price">
                        <div class="boost-sd__product-price-wrapper">
                            <span class="boost-sd__product-price-content boost-sd__product-price-content--row-reverse  boost-sd__product-price-content--text-align-center">
                                <span class="boost-sd__product-price--sale">
                                    <span class="boost-sd__format-currency">$${
                                      product.price_min_usd
                                    }</span>
                                </span>
                                <span class="boost-sd__format-currency boost-sd__format-currency--price-compare boost-sd__product-price--compare">$${
                                  product.compare_at_price_max_usd
                                }</span>
                            </span>
                            <span class="boost-sd__product-price--saving"><span class="boost-sd__format-currency"></span></span>
                        </div>
                    </div>
                    <button class="boost-sd__button boost-sd__button--select-option boost-sd__button--border  boost-sd__button--round boost-sd__button--left boost-sd__button--full-width" type="button" aria-label="Add to cart" data-metadata='{"action":{"addToCart":{"productId":"${
                      product.variants[0].id
                    }"}}}'>
                        <span class="boost-sd__button-text boost-sd__cta-button-text">Add to cart</span>
                    </button>
                </div>
            </a>
        </div>
    `;
};

export default prodCard;
