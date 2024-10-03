const redem = (id) => {
  const html = `
    <div class="${id}__redemWrapper">
        <div class="${id}__redemContainer">
            <div class="${id}__text">
                <a href="javascript:bookmarkscroll.scrollTo('join_pkg')">
                    <span class="${id}__title">Labor Day SPECIAL OFFER</span>
                    <span class="${id}__offer">30% OFF + 4 FREE GIFTS</span>
                </a>
            </div>
            <button class="${id}__button">Redeem</button>
        </div>
    </div>
  `;
  return html.trim();
};

export default redem;
