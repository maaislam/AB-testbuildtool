const plpCard = (id, product) => {
    const htmlStr = `<a href='${product.url}' class='${id}__card'>
        <img src='${product.imgSrc}' alt='${product.title}' />
        <p class='font-heading ${id}__title'>${product.title}</p>
        <p class='${id}__description'>${product.description}</p>
        <button>SHOP NOW</button>
    </a>`;
    return htmlStr;
};
export default plpCard;
