const stickyATC = (id, productData) => {
    const {
        productImg,
        productTitle,
        productOriginalPrice,
        productSalePrice,
        productATC
    } = productData;

    const htmlStr = `<div class="${id}__hide ${id}__stickyATCContainer">
        <div class="${id}__productInfo">
            <div class="${id}__productImgWrapper">
                <img class="${id}__productImg" src="${productImg}" alt="${productTitle}">
            </div>
            <div class="${id}__productInfoWrapper">
                <div class="${id}__productTitle">${productTitle}</div>
                <div class="${id}__productPriceWrapper">
                    <span class="${id}__productOriginalPrice">${productOriginalPrice.innerHTML}</span>
                    <span class="${id}__productSalePrice">${productSalePrice.innerHTML}</span>
                </div>
            </div>
        </div>
        <div class="${id}__atcWrapper">
            <div class="quantity-input">
                <button type="button" class="quantity-input__button product__quantity-subtract-item" data-subtract-quantity="" aria-label="Add product quantity">
                    <span class="icon icon-new icon-minus-small ">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10.75H.25v2.5H1.5v-2.5zm21 2.5h1.25v-2.5H22.5v2.5zm-21 0H12v-2.5H1.5v2.5zm10.5 0h10.5v-2.5H12v2.5z" fill="currentColor"></path></svg>
                    </span>
                </button>
                <label class="visually-hidden" for="Quantity-Input-39512573673626">Quantity</label>
                <input type="number" name="updates[]" id="Quantity-Input-39512573673626" value="1" min="1" pattern="[0-9]*" class="quantity-input__input" data-quantity-input="" aria-label="Product quantity">
                <button type="button" class="quantity-input__button product__quantity-add-item" data-add-quantity="" aria-label="Subtract product quantity">
                    <span class="icon icon-new icon-plus-small ">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.25 1.5V.25h-2.5V1.5h2.5zm-2.5 21v1.25h2.5V22.5h-2.5zM1.5 10.75H.25v2.5H1.5v-2.5zm21 2.5h1.25v-2.5H22.5v2.5zm-21 0H12v-2.5H1.5v2.5zm10.5 0h10.5v-2.5H12v2.5zM10.75 1.5V12h2.5V1.5h-2.5zm0 10.5v10.5h2.5V12h-2.5z" fill="currentColor"></path></svg>
                    </span>
                </button>
            </div>
            <button type="button" name="add" aria-label="Add to Bag" class="${id}__atcBtn btn btn--secondary">
                <span data-add-to-cart-text="">Add to Cart</span>
                <div class="btn__loading-wrap">
                    <div class="btn__loading-bar"></div>
                </div>
            </button>
        </div>
    </div>`;
    return htmlStr;
};
export default stickyATC;
