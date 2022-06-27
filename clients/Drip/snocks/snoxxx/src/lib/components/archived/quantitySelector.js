/* eslint-disable no-useless-escape */
import { minusIcon, plusIcon } from '../asset';

const quantitySelector = (id, lineData) => {
  const { quantity } = lineData;
  const htmlStr = `
    <div class="${id}__quantityselector">
        <div class="${id}__quantity--plus">
            ${plusIcon}
        </div>
        <input name="quantity"
                type="number"
                min="1"
                max="999"
                value="${quantity}"
                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                class="${id}__input-quantity">
        <div class="${id}__quantity--minus">
            ${minusIcon}
        </div>
    </div>
  `;

  return htmlStr;
};

export default quantitySelector;
