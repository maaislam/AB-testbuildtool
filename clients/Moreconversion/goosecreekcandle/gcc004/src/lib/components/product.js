export const product = (ID, item) => {
  const html = `
    <li>
        <article class="indiv-product on-sale">
            <a class="grid__image" href="${item.url}" title="${item.title}" tabindex="-1">
                <img src="${item.img.src}" alt="${item.img.alt}">
            </a>
            <div class="hp-title ${ID}__hp-title">
                <a href="${item.url}" class="indiv-product__link">

                    <div>
                        <span class="indiv-product-title-text">${item.title}</span>
                    </div>
                
                    <div data-oke-star-rating="" data-oke-reviews-product-id="shopify-6857699000395" data-oke-rendered=""><div data-oke-reviews-version="0.68.3" data-oke-container="" class="okeReviews oke-sr"><div class=""><div class="oke-sr-rating"> 4.9 </div><div class="oke-sr-stars"><div class="oke-stars"><!----><div class="oke-stars-background"><svg height="14" viewBox="0 0 79.22222222222221 14" aria-hidden="true"><use x="0" href="#oke-star-empty"></use><use x="16.155555555555555" href="#oke-star-empty"></use><use x="32.31111111111111" href="#oke-star-empty"></use><use x="48.46666666666667" href="#oke-star-empty"></use><use x="64.62222222222222" href="#oke-star-empty"></use></svg></div><div class="oke-stars-foreground" style="width: 98.1571%;"><svg height="14" viewBox="0 0 79.22222222222221 14" aria-hidden="true"><use x="0" href="#oke-star-filled"></use><use x="16.155555555555555" href="#oke-star-filled"></use><use x="32.31111111111111" href="#oke-star-filled"></use><use x="48.46666666666667" href="#oke-star-filled"></use><use x="64.62222222222222" href="#oke-star-filled"></use></svg></div><span class="oke-a11yText">Rated 4.9 out of 5 stars</span></div></div><div class="oke-sr-count"><span class="oke-sr-count-number">${item.reviewCount}</span><!----></div><!----></div></div></div>
        
                    <div>
                   
                    <span class="money-styling">
                        <span class="compare-at-price">
                            <span class="money">${item.comparePrice}</span>
                        </span>      
                        <span class="money">${item.salePrice}</span>
                    </span>
                    </div>         
                </a>    
            </div>  
    </article>
    </li> `;

  return html.trim();
};
