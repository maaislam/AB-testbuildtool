const discountPriceCal = () => {
    const oldPrice = document.querySelector('.product__price.product__price--compare');
    const currentPrice = document.querySelector('.product__price.sale-price');

    const oldPriceText = oldPrice.textContent.trim().replace('$', '');
    const currentPriceText = currentPrice.textContent.trim().replace('$', '');
    const discountedPrice = +oldPriceText - +currentPriceText;

    return discountedPrice.toFixed(2);
};
export default discountPriceCal;
