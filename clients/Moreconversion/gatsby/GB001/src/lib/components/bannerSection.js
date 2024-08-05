const bannerSection = (id, data) => {
  const html = `
        <div class="${id}__bannerSection">
            <div class="${id}__banner">
                <div class="${id}__banner-content">
                    <div class="${id}__banner-content-box">
                        <div class="${id}__banner-review">
                            <img src="https://cdn.shopify.com/s/files/1/0464/9346/6777/files/stars_png.png?v=1722861625"/>
                        </div>
                        <div class="${id}__banner-header">Gatsby Shoes - America’s #1 Dress-Casual Shoes</div>
                        <div class="${id}__banner-discount">
                            <div class="${id}__banner-discount-text">Discount</div>
                            <div class="${id}__banner-discount-offer">-50%</div>
                            <div class="${id}__banner-discount-subtext">Last Chance</div>
                        </div>
                        <a class="${id}__banner-button">Buy Now With -50%</a>
                        <div class="${id}__banner-footer">
                            <div class="${id}__banner-footer-text">Our Biggest Sale to Date</div>

                            <div class="${id}__banner-footer-subtext">Now $130.00  $64.99</div>

                            <div class="${id}__banner-footer-subtext">Now <span>$130.00</span>  $64.99</div>

                        </div>
                    </div>
                </div>

                <div class="${id}__banner-usps">
                    <div class="${id}__banner-usps-container">
                        ${data
                          .map((item) => {
                            return `
                                <div class="${id}__uspsitem">
                                    <img src="${item.icon}" alt="${item.title}"/>
                                </div>
                            `;
                          })
                          .join('\n')}
                    </div>
                </div>
            </div>
            
        </div>
    `;
  return html.trim();
};

export default bannerSection;
