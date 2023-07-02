const modalListItem = (id, data) => {
  const { targetUrl, backColor, imgUrl, mainHeading, subHeading1, tncText, buttonText, altTag } =
    data;
  const htmlStr = `
  
    <div class="${id}__topcasinos-listitem" data-casino="${altTag}">
        <div class="content_top">
            <a class="casino-list__logo" style="${backColor}" href="${targetUrl}" target="_blank" data-position="Casino Logo">
                <img src="${imgUrl}" width="30" height="30" loading="lazy" class="casino-list__logo-image" alt="${altTag} logo">
            </a>
            <a href="${targetUrl}" target="_blank" class="casino-list__offer_text" data-position="Casino Name / Bonus">
                <h4>${mainHeading}</h4>
                <div class="sub_heading_div">
                    <span>${subHeading1}</span>
                </div>
            </a>
            <a href="${targetUrl}" class="custom_popUP_btn" target="_blank" rel="nofollow noopener" data-position="Button">${buttonText}</a>
        </div>
        <div class="content_bottom">
            <div class="tnc_text_div">
                <p>${tncText}</p>
            </div>
        </div>
    </div>`;

  return htmlStr;
};
export default modalListItem;
