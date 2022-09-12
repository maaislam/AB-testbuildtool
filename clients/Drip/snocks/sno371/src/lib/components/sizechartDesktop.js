import { cartIcon, spinLoader } from './assets';

const sizeChartDesktop = (id) => {
    const htmlStr = `<div class="${id}__add-to-cart-container ${id}__hide">
                        <div class="${id}__add-to-cart-title-container">
                            <div class="${id}__add-to-cart-icon">${cartIcon}</div>
                            <div class="${id}__add-to-cart-title">In den Warenkorb</div>
                        </div>
                        <div class="${id}__add-to-cart-sizes">         
                        </div>
                        <span class="${id}__Image__Loader">${spinLoader}</span>
                        </div>`;

    return htmlStr;
};

export default sizeChartDesktop;
