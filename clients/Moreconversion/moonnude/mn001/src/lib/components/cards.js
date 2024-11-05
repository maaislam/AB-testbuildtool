import card from './card';

const cards = (id, data) => {
    const htmlStr = `<div class='${id}__highlightedCollections shopify-section'>
        <div class='${id}__cards'>
            ${data?.map((item) => card(id, item)).join('')}
        </div>
    </div>`;

    return htmlStr;
};
export default cards;
