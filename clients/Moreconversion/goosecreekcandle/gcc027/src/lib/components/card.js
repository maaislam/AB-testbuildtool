const card = (id, data) => {
    const { title, desktopImage, mobileImage, url } = data;

    const htmlStr = `
        <a href='${url}' class='${id}__card'>
            <div class='${id}__title'>${title}</div>
            <div class='${id}__image'>
                <img class='desktopImage' src='${desktopImage}' alt='${title}' />
                <img class='mobileImage' src='${mobileImage}' alt='${title}' />
            </div>
        </a>
    `;
    return htmlStr;
};
export default card;
