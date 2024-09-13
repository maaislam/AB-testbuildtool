import card from './card';

const cards = (id, data) => {
    const htmlStr = `<div class='${id}__rebuyRecomendations shopify-section container product-recommendations-wrapper'>
        <div class="title-bar custom-font">
            <h2>You may also like</h2>
            <div class="clear"></div>
        </div>
        <div class='row'>
            ${data?.map((item) => card(id, item)).join('')}
        </div>
    </div>`;

    return htmlStr;
};

export default cards;
