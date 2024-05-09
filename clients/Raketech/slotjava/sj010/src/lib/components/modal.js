export const modal = (id, data) => {
  const {
    type,
    casinoImageURL,
    casinoTitle,
    casinoText,
    closeModalText,
    casinoButtonText,
    casinoButtonURL
  } = data;

  const html = `
    <div class="${id}__modal">
        <div class="${id}__modal-content">
            <div class="${id}-container">
                <div class="${id}__modalType">${type}</div>
                <div class="${id}__casinoContent">
                  <div class="${id}__casinoImage">
                    <img src="${casinoImageURL}"/>
                  </div>
                  <div class="${id}__casinoTitle">${casinoTitle}</div>
                </div>
                <h4 class="${id}__casinoHeading">${casinoText}</h4>
                <div class="${id}__buttons">
                  <button class="${id}__close">${closeModalText}</button>
                  <a class="${id}__casinoButton" href="${casinoButtonURL}" target="_blank">${casinoButtonText}</a>
                </div>
            </div>
        </div>
    </div>
    `;
  return html;
};
