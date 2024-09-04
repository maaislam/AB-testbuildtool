const recentlyViewed = (id) => {
    const storedData = JSON.parse(localStorage.getItem('__kla_viewed')) || [];
    const recentlyViewedPrds = storedData.length > 0 ? storedData.map((item) => item[0]) : [];

    const productHtml = recentlyViewedPrds.map(({ Title, ItemId, ImageUrl, Url, Metadata }) => `
        <div class="swiper-slide ${id}__slider-item aos-init aos-animate"
            data-aos="">
            <div class="grid-product__content">
                <a href="${Url}" class="grid-product__link" data-product-id="${ItemId}">
                    <div id="ProductGridSlider-${ItemId}"
                        class="slideshow-wrapper product-slider" >
                        <div class="product-slide">
                            <div class="image-wrap">
                                <div class="grid__image-ratio grid__image-ratio--square lazyload"
                                    style="background-image: url('${ImageUrl}'); background-size: cover;">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid-product__meta">
                        <div class="grid-product__title">
                            <span class="productTitle">${Title.split(' - ')[0]}</span><br>
                            ${Title.split(' - ')[1] ? `<span class="productSubTitle">${Title.split(' - ')[1]}</span>` : ''}
                        </div>
                        <div class="grid-product__price">
                            <span>${Metadata.Price}</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>`).join('');

    const htmlStr = `
        <div id="shopify-section-template--18153288433923__product-recommendations" class="shopify-section">
            <div data-subsection=""  data-enable="true">
                <div>
                    <div class="page-width">
                        <header class="section-header aos-init aos-animate" data-aos="">
                            <h2 class="section-header__title appear-delay">
                                Recently Viewed
                            </h2>
                        </header>
                    </div>

                    <div class="overflow-scroll-wrap" data-ajax-loader="">
                        <button type="button"
                            class="prev-slide-btn btn btn--tertiary overflow-scroller__arrow overflow-scroller__arrow--left small--hide"
                            aria-hidden="true" aria-label="Previous" data-arrow="">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-left"
                                viewBox="0 0 284.49 498.98">
                                <path
                                    d="M249.49 0a35 35 0 0 1 24.75 59.75L84.49 249.49l189.75 189.74a35.002 35.002 0 1 1-49.5 49.5L10.25 274.24a35 35 0 0 1 0-49.5L224.74 10.25A34.89 34.89 0 0 1 249.49 0z">
                                </path>
                            </svg>
                        </button>
                        <button type="button"
                            class="next-slide-btn btn btn--tertiary overflow-scroller__arrow overflow-scroller__arrow--right small--hide"
                            aria-hidden="true" aria-label="Next" data-arrow="">
                            <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-chevron-right"
                                viewBox="0 0 284.49 498.98">
                                <path
                                    d="M35 498.98a35 35 0 0 1-24.75-59.75l189.74-189.74L10.25 59.75a35.002 35.002 0 0 1 49.5-49.5l214.49 214.49a35 35 0 0 1 0 49.5L59.75 488.73A34.89 34.89 0 0 1 35 498.98z">
                                </path>
                            </svg>
                        </button>
                        <div class="overflow-scroller" data-pagination-wrapper="">
                            <div class="product-recommendations-placeholder">
                                <div class="swiper">
                                    <div class="swiper-wrapper  aos-init aos-animate" data-aos="overflow__animation">
                                        ${productHtml}
                                        <div class="swiper-button-prev"></div>
                                        <div class="swiper-button-next"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    return htmlStr;
};

export default recentlyViewed;
