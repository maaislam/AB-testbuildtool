const stickyProduct = (id, data) => {
  const html = `
        <div class="sticky-product-warpper">
            <div class="${id}__currentProductTag" style="opacity:0;">Current Product</div>
            <div class="static-product-container">
                <a class="${id}__imageWrapper" style="opacity:0;visibility:hidden;padding: 0 0 0 0;"><img src="https://luxuryflooring.co.uk/media/catalog/product/cache/3bff5d0ea8cf498b05dec932ffc11855/p/a/painswick_burnt_oak_plp1.jpg"></a>
                <div class="${id}__productContent">
                <div style="opacity:0;visibility:hidden;" class="product-reviews-summary" itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">
                    <div class="rating-summary">
                            <span class="label"><span>Rating:</span></span>
                            <a class="rating-result" href="https://luxuryflooring.co.uk/painswick-spiced-oak-80-x-300-x-10-3mm.html#reviews" id="rating-result_75095" title="97%">
                            <span>
                                <span>
                                    <span itemprop="ratingValue">97                         </span>% of <span itemprop="bestRating">100</span>
                                </span>
                            </span>
                            </a>
                        </div>
                                        <div class="reviews-actions">
                        <a class="action view" href="https://luxuryflooring.co.uk/painswick-spiced-oak-80-x-300-x-10-3mm.html#reviews">
                            <span itemprop="reviewCount">14</span>&nbsp;
                            <span>Reviews                </span>
                        </a>
                        <a class="action add" href="https://luxuryflooring.co.uk/painswick-spiced-oak-80-x-300-x-10-3mm.html#review-form">
                            Add Your Review            </a>
                    </div>
                </div>
                <a>
                    <div class="page-title-wrapper product" style="opacity:0;visibility:hidden;">
                        <h1 class="page-title">
                            <span class="base" data-ui-id="page-title-wrapper">Painswick Spiced Engineered Oak</span>    </h1>
                    </div>
                </a>
                <div class="${id}__tableContent">
                    <div class="${id}__row">Price</div>
                    <div class="${id}__row">Floor Type</div>
                    <div class="${id}__row">Plank Thickness</div>
                    ${
                      data[0]?.details?.flooringtype?.toLowerCase().includes('vinyl') ||
                      data[0]?.details?.flooringtype?.toLowerCase().includes('laminate')
                        ? `
                              <div class="${id}__row">Colour</div>     
                          `
                        : `
                            <div class="${id}__row">Plank Width</div>
                            <div class="${id}__row">Finish</div>
                            <div class="${id}__row">Surface</div>
                          `
                    }
                    
                </div>   
                <div class="${id}__buttonWrapper" style="opacity:0;"> 
                        <div class="${id}__add-to-basket" >Add to basket</div>
                </div>
                 </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default stickyProduct;
