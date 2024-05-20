import card from './card';

const cards = (id, products) => {
    const htmlStr = `<div class='${id}__productCards'>
        ${products.map((product, index) => card(id, product, index)).join('')}
        <div class='${id}__cardFooter'>
            <button class='${id}__addToCart'>Add to Cart</button>
        </div>
    </div>`;

    return htmlStr;
};
export default cards;
