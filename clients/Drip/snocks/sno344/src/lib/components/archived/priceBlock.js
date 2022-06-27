import { formatPrice } from '../../../../../../../../globalUtil/util';
import { saleIcon } from '../asset';

const priceBlock = (id, data) => {
  const { discounted_price, discounts, final_price, original_price } = data;

  const formattedPrice = [discounted_price, final_price, original_price].map((price) =>
    formatPrice(price / 100, 'de-DE', 'EUR')
  );

  const discountDetails = discounts
    .map(({ amount, title }) => {
      const formattedDisc = formatPrice(amount / 100, 'de-DE', 'EUR');
      return `<li class="CartItem__Discount">${saleIcon}${title}: -${formattedDisc}</li>`;
    })
    .join('\n');

  const htmlStr = `
    <div class="${id}__price-wrapper">
        <div class="price__list">
            <span class="current-price">${formattedPrice[0]}</span>
            <span class="previous-price">${formattedPrice[2]}</span>
        </div>
        <ul class="discount__list">
            ${discountDetails}
        </ul>
    </div>`;

  return htmlStr;
};

export default priceBlock;
