const categoryCard = (id, category) => {
    const htmlStr = `
        <a href='${category?.url}' class='${id}__categoryCard'>
            <img src='${category?.image}' alt='${category?.title}' class='${id}__image' />
            <p class='${id}__title'>${category?.title}</p>
        </a>
        `;

    return htmlStr;
};
export default categoryCard;
