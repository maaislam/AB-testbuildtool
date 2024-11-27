const stickyBanner = (id, vpnName, logo, href) => {
    const htmlStr = `<div class="${id}__stickyBanner ${id}__hide">
    <div class="${id}__stickyBanner-header">
        <div class="${id}__logo">
            <img src="${logo}">
        </div>
        <a class="${id}__getDealBtn" href="${href}" target="_blank">GET DEAL > </a>
    </div>
    <div class="${id}__offer">
        <p class="${id}__offer-text">74% off 2 year plans + 3 EXTRA months + 74% off 2 year plans</p>
    </div>
    </div>`;
    return htmlStr;
};
export default stickyBanner;
