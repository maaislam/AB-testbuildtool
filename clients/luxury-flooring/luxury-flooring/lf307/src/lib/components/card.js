const card = (id, data) => {
    const { title, url, imageUrl } = data;

    const htmlStr = `<a class='${id}__card' href='${url}'>
        <img src='${imageUrl}' alt='${title}' />
        <p>${title}</p>
    </a>`;

    return htmlStr;
};
export default card;
