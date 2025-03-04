const stickyProduct = (id) => {
  const html = `
        <div class="sticky-product-warpper">
            <div class="static-product-container">
                <a href="https://luxuryflooring.co.uk/painswick-amber-oak-150-x-600-x-14-3mm.html" class="product-item-photo rollover" style="overflow:hidden;opacity:0;" tabindex="0">
                    <img class="placeholder entered loaded" src="https://luxuryflooring.co.uk/static/version1741070764/frontend/Ayko/lff/en_GB/Magento_Catalog/images/placeholder-lazyload.jpg" data-amsrc="https://luxuryflooring.co.uk/static/version1741070764/frontend/Ayko/lff/en_GB/Magento_Catalog/images/placeholder-lazyload.jpg" style="visibility: hidden" width="600" height="390" data-ll-status="loaded">
                    <img class="default entered loaded" width="600" height="390" src="https://luxuryflooring.co.uk/media/amasty/webp/catalog/product/cache/28bf787e1d2d7360e99af1026e653801/h/e/he2020re-edited_-_copy_2__1_jpg.webp" data-amsrc="https://luxuryflooring.co.uk/media/amasty/webp/catalog/product/cache/28bf787e1d2d7360e99af1026e653801/h/e/he2020re-edited_-_copy_2__1_jpg.webp" alt="Painswick Amber Engineered Oak Click" data-ll-status="loaded">
                    <img class="rollover" loading="lazy" width="600" height="390" rollover-src="https://luxuryflooring.co.uk/media/amasty/webp/catalog/product/cache/28bf787e1d2d7360e99af1026e653801/h/e/he2020-cat_page_re_sized_3000px_max_-_copy_jpg.webp" alt="Big open hallway with white under stairs storage drawers and golden oak herringbone flooring" src="https://luxuryflooring.co.uk/media/amasty/webp/catalog/product/cache/28bf787e1d2d7360e99af1026e653801/h/e/he2020-cat_page_re_sized_3000px_max_-_copy_jpg.webp">
                </a>
                <div class="product-reviews-summary short" style="opacity:0;">
                    <div class="rating-summary">
                        <span class="label"><span>Rating:</span></span>
                        <div class="rating-result" title="96%">
                            <span style="width:96%"><span>96%</span></span>
                        </div>
                    </div>
                    <div class="reviews-actions">
                        <span class="action view"><span>Customer Reviews</span>&nbsp;(37)</span>
                    </div>
                </div>
                <a class="product-item-link" href="https://luxuryflooring.co.uk/painswick-amber-oak-150-x-600-x-14-3mm.html" tabindex="0" style="opacity:0;">
                    Painswick Amber Engineered Oak Click                            
                </a>
                <div class="${id}__tableContent">
                    <p>Price</p>
                    <p>Product Type</p>
                    <p>Plank Thickness</p>
                    <p>Plank Width</p>
                    <p>Finish</p>
                    <p>Surface</p>
                </div>    
                <div class="add-to-basket">Add to basket</div>
            </div>
        </div>
    `;
  return html.trim();
};

export default stickyProduct;
