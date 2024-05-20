import card from './card';

const cards = (id, products) => {
    const htmlStr = `<div class='${id}__productCards'>
        ${products.map((product, index) => card(id, product, index)).join('')}
    </div>`;

    return htmlStr;
};
export default cards;
