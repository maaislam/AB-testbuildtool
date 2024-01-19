import { tradeProductList } from '../data/tradeProductList';
import { product } from './product';

export const tradeContainer = (ID) => {
  const html = `
    <div class="${ID}__tradeContainer">
        <h1 class="${ID}__tradeTitle">MAKE THE MOST OUT OF <span>YOUR</span> TRADE PRICE</h1>
        <div class="${ID}__tradeProdsList">
            ${tradeProductList.map((list) => product(ID, list)).join('\n')}
        </div>
    </div>
  `;
  return html.trim();
};
