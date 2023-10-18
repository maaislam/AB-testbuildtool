const productDetails = (id, data) => {
    const { productTitle1, featured } = data;

    const htmlStr = `
    <div class='${id}__productDetails'>
        <div class='${id}__productDetails-title'>${productTitle1}</div>
        <ul class='${id}__productDetails-featuredList'>
            ${featured?.map((detail) => `<li class='${id}__productDetails-featuredItem'>${detail}</li>`).join('')}
        </ul>
    </div>`;
    return htmlStr;
};

export default productDetails;
