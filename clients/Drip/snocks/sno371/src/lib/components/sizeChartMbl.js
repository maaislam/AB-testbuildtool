import { closeIcon, spinLoader } from './assets';

const sizeChartMbl = (id) => {
    const htmlStr = `<div class="${id}__add-to-cart-mbl-container">
    <div class="${id}__close-button">${closeIcon}</div>
    <div class="${id}__add-to-cart-mbl-title">Größe wählen</div>
    <span class="${id}__Image__Loader">${spinLoader}</span>
</div>`;
return htmlStr;
};

export default sizeChartMbl;
