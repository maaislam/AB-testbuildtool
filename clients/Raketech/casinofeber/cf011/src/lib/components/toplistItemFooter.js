const toplistItemFooter = (id, itemHref, casinoName) => {
    const htmlStr = `<div class="toplist-cta ${id}__cta">
        <a href="/spela/${casinoName}" target="_blank" rel="nofollow noreferrer noopener" class="visit">
            <span>Till casinot</span> <span>Vidare till Mr Vegas Casino</span>
        </a> 
        <a href="${itemHref}" class="review">Mr Vegas Casino Recension</a>
    </div>`;
    return htmlStr;
};
export default toplistItemFooter;
