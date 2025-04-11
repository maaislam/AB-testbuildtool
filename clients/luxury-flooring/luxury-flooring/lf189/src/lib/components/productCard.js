import { minusIcon, plusIcon } from '../assets/icons';

const productCard = (id, data, index) => {
    console.log('data: ', data);
    const htmlStr = `<div class="${id}__productCard product-card ${index < 3 ? 'active' : ''}" data-formKey="${data.formKey}" data-sku="${data.sku}" data-url="${data.url}">
        <img class="${id}__productImage" src="${data.imgSrc}" alt="Roll Image" />
        <div class="${id}__productContent">
            <div class="product-title">${data.productTitleText}</div>
            <div class="product-price">${data.price}</div>
            <div class="${id}__actionWrapper">
                <div class="quantity-add">
                    <button class="${id}__plusBtn">${minusIcon}</button>
                    <input class="${id}__qtyInput" type="number" id="qty" value="1" min="1"/>
                    <button class="${id}__minusBtn">${plusIcon}</button>
                </div>
                <button class="${id}__atcBtn" id="${id}__productAtcBtn">+ Add to basket</button>
            </div>
            <div class="${id}__addedToBasket ${id}__hide">Added to basket</div>
        </div>
    </div>`;

    return htmlStr;
};
export default productCard;
