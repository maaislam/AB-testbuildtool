import { plusIcon } from './assets';

export const sizeBtns = (id) => {
    const htmlStr = `<div class="${id}__sizes-button"></div>`;
    return htmlStr;
};

export const sizeBtnsMbl = (id) => {
    const htmlStr = `<div class="${id}__sizes-button-container">
    <div class="${id}__sizes-button"></div>
    <div class="${id}__atc-button-container">
    <div class="${id}__atc-button"></div>
    <div class="${id}__atc-icon">${plusIcon}</div>
    </div>
    </div>`;
    return htmlStr;
};

export const sizeContainerMbl = (id) => {
    const htmlStr = `<div class="${id}__all-sizes-mbl"></div>`;
    return htmlStr;
};
