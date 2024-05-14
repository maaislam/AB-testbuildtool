import { formatPrice } from '../helpers/utils';

const stickyATC = (id, productData, priceData) => {
    const { compareAtPrice, salePrice } = priceData;
    const {
        productImg,
        productTitle
    } = productData;

    const htmlStr = `<div class="${id}__hide ${id}__stickyATCContainer">
        <div class="${id}__productInfo">
            <div class="${id}__productImgWrapper">
                <img class="${id}__productImg" src="${productImg}" alt="${productTitle}">
            </div>
            <div class="${id}__productInfoWrapper">
                <div class="${id}__productTitle">${productTitle}</div>
                <div class="${id}__productPriceWrapper">
                    <span class="${id}__productSalePrice">${formatPrice(salePrice)}</span>
                    <span class="${id}__productOriginalPrice">${formatPrice(compareAtPrice)}</span>
                </div>
            </div>
        </div>
        <div class="${id}__atcWrapper">
            

            <div class="quantity-controls">
                <button type="button" class="${id}__quantity-subtract qty-minus alt-focus" aria-label="Reduce item quantity by one">-</button>
                <input id="${id}__quantity-input" class="quantity-selector" value="1" min="1" type="text" name="quantity">
                <button type="button" class="${id}__quantity-add qty-plus alt-focus" aria-label="Increase item quantity by one">+</button>
            </div>


            <div class='${id}__atcBtn'>
                <button type="submit" name="add" id="purchase" class="btn" data-cart-action="drawer">Add to cart</button>
            </div>
        </div>
    </div>`;
    return htmlStr;
};
export default stickyATC;
