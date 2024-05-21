import cardModule from './card';

const { card } = cardModule;

const cards = (id, products, page) => {
    const htmlStr = `<div class='${id}__productCards'>
        ${products.map((product, index) => card(id, product, index, page)).join('')}
    </div>`;

    return htmlStr;
};
export default cards;
