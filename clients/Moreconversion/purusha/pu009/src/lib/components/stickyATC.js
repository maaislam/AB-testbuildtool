import atcBtn from './atcBtn';

const stickyATC = (id, productData) => {
  const { title, price } = productData;

  const formatPrice = (number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    })
      .format(number / 100)
      .replace('$', '$ ');

  const htmlStr = `<div class="${id}__hide ${id}__stickyATCContainer">
        <div class="${id}__wrapper">
            <div class="${id}__productInfo">
                
                <div class="${id}__productInfoWrapper">
                    <div class="${id}__productTitle">${title}</div>
                    <div class="${id}__productPriceWrapper">
                        <span class="${id}__productOriginalPrice">${formatPrice(price)} USD</span>
                        <span class="${id}__productSalePrice"></span>
                    </div>
                </div>
            </div>
            <div class="${id}__atcWrapper">
                ${atcBtn(id)}
            </div>
        </div>
    </div>`;
  return htmlStr;
};
export default stickyATC;
