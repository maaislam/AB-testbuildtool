const modalInner = (id) => {
  const htmlStr = `
  <div id="shopify-section-template--16015025406128__4d4831d7-6e33-410a-ba5e-d1e5f0012c2f" class="shopify-section ${id}__modal-inner">

  <div class="${id}__close">
    <svg role="img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L14 14M6 14L14 6L6 14Z" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer;"></path>
    </svg>
  </div>

  <div class="page-width discount__banner">
      <div class="discount__banner-inner">
          <div class="discount__banner-image--left discount__product-image--inner">
              
                  <img src="//cdn.shopify.com/s/files/1/0528/8591/3776/files/2.jpg?v=1670318452" alt="">
              
              <div class="discount__product--badge">
                  <span>Worth</span>
                  <span>${window.location.href.includes('us') ? '$49' : '40£'}</span>
              </div>
          </div>
          <div class="discount__banner-content">
              
                  <div class="discount__banner-subtitle">
                      LIMITED TIME ONLY!
                  </div>
              
              
                  <div class="discount__banner-title">
                      Free Pouch
                  </div>
                  <div class="discount__banner-list">
                      <ul>
                          <li><p>1. Add carrier to cart</p></li>
                          
                              <li><p>2. Add pouch to cart</p></li>
                          
                          
                              <li><p>3. Use code at checkout: </p><p><strong>HAPPY2023</strong></p></li>
                          
                      </ul>
                  </div>
                         
                  <div class="discount__banner-link">
                      <span class="button button--primary ${id}__primarycta" href="">SHOP NOW</span>
                  </div>
              
          </div>
          
              <div class="discount__banner-image--right discount__image--desktop">
                  <img src="//cdn.shopify.com/s/files/1/0528/8591/3776/files/1.jpg?v=1670318475" alt="discount banner">
              </div>
          
          
              <div class="discount__banner-image--right discount__image--mobile">
                  <img src="//cdn.shopify.com/s/files/1/0528/8591/3776/files/POUCH_MOBILE_1000_x_1000_px_600_x_1000_px.png?v=1670847615" alt="discount banner">
              </div>
      </div>
  </div>
</div>
    `;

  return htmlStr.trim();
};

export default modalInner;
