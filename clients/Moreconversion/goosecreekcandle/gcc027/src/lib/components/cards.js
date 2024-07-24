import card from './card';

const cards = (id, data) => {
    const htmlStr = `<div class='${id}__recentlyViewed shopify-section container product-recommendations-wrapper'>
        <div class='row'>
            ${data?.map((item) => card(id, item)).join('')}
        </div>
    </div>`;

    return htmlStr;
};
export default cards;
