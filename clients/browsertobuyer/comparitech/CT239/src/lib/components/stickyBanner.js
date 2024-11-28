const stickyBanner = (id, vpnName, logo, href, promoText) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const currentMonthName = monthNames[new Date().getMonth()];
  const fallbackText = `Best deal for ${currentMonthName}`;
  const htmlStr = `<div class="${id}__stickyBanner ${id}__hide">
    <div class="${id}__stickyBanner-header">
        <div class="${id}__logo">
            <img src="${logo}" alt="${vpnName}">
        </div>
        <a class="${id}__getDealBtn" href="${href}" target="_blank">GET DEAL > </a>
    </div>
    <div class="${id}__offer">
        <p class="${id}__offer-text">${promoText || fallbackText}</p>
    </div>
    </div>`;
  return htmlStr;
};
export default stickyBanner;
