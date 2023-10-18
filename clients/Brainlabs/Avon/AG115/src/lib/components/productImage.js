import priceBox from './priceBox';

const productImage = (id, data) => {
    const { imageUrl, currentPrice, wasPrice } = data;

    const htmlStr = `
    <div class='${id}__productImageWrapper'>
        ${priceBox(currentPrice, wasPrice)}
        <img src='${imageUrl}' class='${id}__productImage' alt='product-image' />
    </div>`;
    return htmlStr;
};

export default productImage;
