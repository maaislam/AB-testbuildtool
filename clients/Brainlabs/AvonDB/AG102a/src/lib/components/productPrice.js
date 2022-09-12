import formatPrice from '../helpers/formatPrice';

const prodPrice = (id, priceData) => {
  const { isOnSale, listPrice, salePrice } = priceData;
  const salePriceStr = formatPrice(salePrice);
  const listPriceStr = formatPrice(listPrice);
  const htmlStr = `
    <div class="${id}__productprice">
        <span class="newprice">${salePrice ? salePriceStr : listPriceStr}</span>
        ${isOnSale ? `<span class="oldprice">${listPriceStr}</span>` : ''}
    </div>
    `;
  return htmlStr;
};

export default prodPrice;
