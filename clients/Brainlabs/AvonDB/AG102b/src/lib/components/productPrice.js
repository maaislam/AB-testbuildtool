const prodPrice = (id, priceData) => {
  const { isOnSale, listPrice, salePrice } = priceData;
  const salePriceStr = parseInt(salePrice).toFixed(2);
  const listPriceStr = parseInt(listPrice).toFixed(2);
  const htmlStr = `
    <div class="${id}__productprice">
        <span class="newprice">R${salePrice ? salePriceStr : listPriceStr}</span>
        ${isOnSale ? `<span class="oldprice">R${listPriceStr}</span>` : ''}
    </div>
    `;
  return htmlStr;
};

export default prodPrice;
