import categoryCard from './categoryCard';

const categoryCards = (id, data) => {
    const htmlStr = `<div class='${id}__categoryCards'>
        ${data?.map((category) => categoryCard(id, category)).join('')}
    </div>`;

    return htmlStr;
};
export default categoryCards;
