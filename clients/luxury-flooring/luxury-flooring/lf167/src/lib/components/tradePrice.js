import { tradePriceIcon } from '../assets/icons';

export const tradePrice = (id) => {
  const html = `
        <div class="${id}__tradePrice">
            <div class="${id}__tradePrice-icon">${tradePriceIcon}</div>
            <a class="${id}__tradePrice-link">Get trade price</a>
        </div>
    `;
  return html;
};
