import { angleIcon, cartIcon } from '../assets';

const newCartBtn = (id, cartCount) => {
  const htmlStr = `
        <div class="${id}__cartbtn ${cartCount <= 0 ? `${id}__hide` : ''}">
            <div class="${id}__cartbtn--row1">
                <span class="cart-icon">${cartIcon} </span>
                <span class="cart-count">${cartCount}</span>
            </div>
            <div class="${id}__cartbtn--row2">
                <span class="cart-text">Basket </span>
                <span class="cart-count">${angleIcon}</span>
            </div>
        </div>`;

  return htmlStr;
};

export default newCartBtn;
