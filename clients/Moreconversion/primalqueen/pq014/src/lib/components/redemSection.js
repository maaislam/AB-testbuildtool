const redemSection = (id) => {
  const html = `
    <div class="${id}__redem-section">
        <div class="redem-section__text">
        <a href="javascript:bookmarkscroll.scrollTo('join_pkg')" class="${id}__text-wrapper">
            <span class="redem-section___text-holiday-message">
            Black Friday SPECIAL OFFER
            </span>
            <span class="redem-section___text-gift-message">GET 4 FREE GIFTS</span>
        </a>
        </div>
        <a class="redeem--btn" href="javascript:bookmarkscroll.scrollTo('join_pkg')">Redeem</a>
    </div>
  `;
  return html.trim();
};

export default redemSection;
