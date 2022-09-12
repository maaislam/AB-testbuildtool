import { mblCartIcon } from './assets';

export const cartIconMobile = (id) => {
    const htmlStr = `<div class="${id}__cart-icon-mbl">${mblCartIcon}</div>`;
    return htmlStr;
};
