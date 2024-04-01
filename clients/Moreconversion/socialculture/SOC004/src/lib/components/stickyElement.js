export const stickyElement = (ID, img, title, price, reviews) => {
  const html = `
      <div class="${ID}__stickyATCContainer">
          <div class="${ID}__stickyATCContainer-info">
              <div class="${ID}__stickyATCContainer-info-img">
                  <img src="${img}" alt="atc-image"/>
              </div>
              <div class="${ID}__stickyATCContainer-info-headline">
                  <h2>${title}</h2>
                  <p>${price}</p>
              </div>
          </div>
          <div class="${ID}__stickyATCContainer-atc">
              <div class="${ID}__stickyATCContainer-atc-reviews">
              </div>
              <div class="${ID}__stickyATCContainer-atc-button">
                <button type="button" class="product-button w-inline-block">
                    <img src="//socialcultureart.com/cdn/shop/t/46/assets/ic24-shopping-carth.svg?v=83422011416534822151683554870" loading="lazy" alt="" class="product-button-icon">
                    <div>
                        Add to cart    
                    </div> 
                </button>
              </div>
          </div>
      </div>
    `;

  const container = document.createElement('div');
  container.innerHTML = html.trim();

  const reviewsContainer = container.querySelector(`.${ID}__stickyATCContainer-atc-reviews`);
  reviewsContainer.appendChild(reviews);

  return container.innerHTML;
};
