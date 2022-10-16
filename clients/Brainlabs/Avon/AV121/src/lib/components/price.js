import { formatPrice } from '../helpers/utils';

const prodPrice = (id, price) => {
  const htmlStr = `<span class="${id}__product-price">${formatPrice(price)}</span>`;
  return htmlStr.trim();
};

export default prodPrice;
