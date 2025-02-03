const product = (id, data) => {
  const { url } = data;
  const html = `
    <div class="${id}__productWrapper">
        <div class="${id}__productContainer">
            <div class="${id}__productInfo">
                <div class="${id}__image">
                    <img src="https://primalqueen.com/cdn/shop/files/1.png?v=1696349447&width=300"/>
                </div>
                <div class="${id}__info">
                    <div class="${id}__infoTitle">Upgrade to 1 Month Subscribe</div>
                    <div class="${id}__extraInfo">
                        <span class="${id}__discount">Save 63%</span>
                        <span class="${id}__discountText">With 4 Included Bonuses</span>
                    </div>
                </div>
                <a href="${url}" class="${id}__button">UPGRADE AND SAVE $20</a>
            </div>
            <div class="${id}__freeProductsWrapper">
                <div class="${id}__freeProductsContainer">
                    <div class="${id}__freeProduct">
                        <div class="${id}__imageWrapper">
                            <img src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/s2-bottle-338x338-1_67a11b7c3760f.png"/>
                        </div>
                        <div class="${id}__texts">
                            <span class="${id}__highlight">+FREE</span>
                            <span class="${id}__subtext">bamboo lid glass jar</span>
                        </div>
                    </div>
                    <div class="${id}__divider"></div>
                    <div class="${id}__freeProduct">
                        <div class="${id}__imageWrapper">
                            <img src="https://cdn-3.convertexperiments.com/uf/10042057/10049555/dscf3306-1_67a11b8f96318.png"/>
                        </div>
                        <div class="${id}__texts">
                            <span class="${id}__highlight">+FREE</span>
                            <span class="${id}__subtext">on-the-go pill case</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default product;
