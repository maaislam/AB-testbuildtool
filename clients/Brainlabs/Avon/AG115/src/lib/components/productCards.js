import productCard from './productCard';

const productCards = (id, data) => {
    const htmlStr = `
    <div class='${id}__productCards swiper-wrapper'>
        ${data?.map((product) => productCard(id, product)).join('')}
    </div>`;
    return htmlStr;
};

export default productCards;
