import plpCard from './plpCard';

const plpCards = (id, data) => {
    const htmlStr = `<div class='${id}__cards'>
        ${data.items.map((product) => plpCard(id, product)).join('')}
    </div>`;
    return htmlStr;
};
export default plpCards;
