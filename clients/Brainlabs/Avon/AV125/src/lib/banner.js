const banner = (id) => {
  const { title, subTitle, bundleSku, bannerStyles, bannerProducts } = window.bannerData;

  const productHtml = bannerProducts
    .map((data) => {
      return `
        <li>
            <span class="${id}__productImg">
                <img src="${data.productImage}" alt="${data.productTitle}">
            </span>
            <span class="${id}__productTitle">
                ${data.productTitle}
            </span>
        </li>
    `;
    })
    .join('\n');

  const htmlStr = `
    <div class="${id}__banner" style="background-color:${bannerStyles.backColor}">
        <div class="${id}__banner--col1">
            <div class="title" style="background-color:${bannerStyles.titleBackcolor}">
                ${title}
            </div>
            <div class="subtitle">${subTitle}</div>
        </div>
        <div class="${id}__banner--col2">
            <ul>
                ${productHtml}
            </ul>
        </div>
        <div class="${id}__banner--col3">
            <div class="${id}__productprice">
                +£1.00
            </div>
            <div class="${id}__pricedetail">
                (3 x 0.15ml Samples)<br>
                (£0.35 per ml)
            </div>
            <div class="${id}__addtobag" data-sku="${bundleSku}">
                Add To Bag
            </div>
        </div>
    </div>`;

  return htmlStr;
};

export default banner;
