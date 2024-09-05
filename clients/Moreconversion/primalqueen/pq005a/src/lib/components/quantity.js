import { minusIcon, plusIcon } from '../assets/svg';

const quantity = (id) => {
    const htmlStr = `
        <div class="${id}__quantity">
            <button class="${id}__minus">${minusIcon}</button>
            <input type="number" id="${id}__input" value="1" />
            <button class="${id}__plus">${plusIcon}</button>
        </div>`;
    return htmlStr;
};
export default quantity;
