import { formatPrice } from '../helpers/utils';

const totalPriceStr = (id, price) => {
  const html = `
    <div class="${id}__totalPrice">
      Total room price: ${formatPrice(price)}
    </div>
  
  `;
  return html;
};

export default totalPriceStr;
