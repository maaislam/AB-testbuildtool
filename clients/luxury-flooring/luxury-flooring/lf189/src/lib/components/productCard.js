import { minusIcon, plusIcon } from '../assets/icons';
import { isMobile } from '../helpers/utils';

const productCard = (id, data, index) => {
    const activeItemPerPage = isMobile() ? 1 : 3;

    const htmlStr = `<div class="${id}__productCard product-card ${index < activeItemPerPage ? 'active' : ''}" data-formKey="${data.formKey}" data-sku="${data.sku}" data-url="${data.url}">
        <img class="${id}__productImage" src="${data.imgSrc}" alt="Roll Image" />
        <div class="${id}__productContent">
            <div class="product-title">${data.productTitleText}</div>
            <div class="product-price" data-price="${data.price}">${data.price}</div>
            <div class="${id}__actionWrapper">
                <div class="quantity-add">
                    <button class="${id}__plusBtn">${minusIcon}</button>
                    <input class="${id}__qtyInput" type="number" id="qty" value="1" min="1"/>
                    <button class="${id}__minusBtn">${plusIcon}</button>
                </div>
                <button class="${id}__atcBtn" id="${id}__productAtcBtn">+ Add to basket</button>
            </div>
            <div class="${id}__addingToBasket ${id}__hide">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#000000"></stop><stop offset=".3" stop-color="#000000" stop-opacity=".9"></stop><stop offset=".6" stop-color="#000000" stop-opacity=".6"></stop><stop offset=".8" stop-color="#000000" stop-opacity=".3"></stop><stop offset="1" stop-color="#000000" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="8" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="1.6" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#000000" stroke-width="8" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
                Adding
            </div>
            <div class="${id}__addedToBasket ${id}__hide">Added to basket</div>
        </div>
    </div>`;

    return htmlStr;
};
export default productCard;
