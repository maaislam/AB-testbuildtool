export const product = (ID, item) => {
  const { imgURL, title, type, info, des, shopCTAText, shopCTALink } = item;
  const html = `
        <div class="${ID}__productItem">
            <div class="${ID}__productItem-img">
                <img src="${imgURL}" alt="${title}" />
            </div>
            <div class="${ID}__productItem-info">
                <h1 class="${ID}__productItem-title">${title || ''}</h1>
                <p class="${ID}__productItem-type">${type}</p>
                <p class="${ID}__productItem-save">${info || ''}</p>
                <p class="${ID}__productItem-des">${des || ''}</p>
                <a class="${ID}__productItemCTA" target="_blank" href="${shopCTALink}">${shopCTAText}</a>
            </div>
        </div>
    `;

  return html.trim();
};
