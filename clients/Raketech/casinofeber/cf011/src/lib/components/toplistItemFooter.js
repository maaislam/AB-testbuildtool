const toplistItemFooter = (id, itemHref, casinoName, displayName) => {
    const htmlStr = `<div class="toplist-cta ${id}__cta">
        <a href="/spela/${casinoName}" target="_blank" rel="nofollow noreferrer noopener" class="visit">
            <span>Till casinot</span> <span>Vidare till ${displayName}</span>
        </a> 
        <a href="${itemHref}" class="review">${displayName} Recension</a>
    </div>`;
    return htmlStr;
};
export default toplistItemFooter;
