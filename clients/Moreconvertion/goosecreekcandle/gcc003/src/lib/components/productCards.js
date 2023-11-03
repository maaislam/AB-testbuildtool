import productCard from './productCard';

const productCards = (id, data) => {
    const htmlStr = `
    <ul class='${id}__productCards swiper-wrapper'>
        ${Array.from(data)?.map((product) => productCard(id, product)).join('')}
    </ul>`;
    return htmlStr;
};

export default productCards;
