const quoteHtml = (id, data) => {
    const { quote, person, title, imgUrl } = data;

    const htmlStr = `
    <div class="${id}__quoteContainer">
        <p class="quote-text">
            “${quote}”
        </p>
        <div class="author-info">
            <img
            src="${imgUrl}"
            alt="Author Avatar"
            class="author-avatar"
            />
            <div class="author-details">
                <p class="author-name">${person}</p>
                <p class="author-role">${title}</p>
            </div>
        </div>
    </div>
    <div class="col-span-12 border-t border-border pt-lg mt-lg"></div>`;

    return htmlStr;
};
export default quoteHtml;
