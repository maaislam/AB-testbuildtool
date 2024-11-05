const modal = (id, data) => {
  const { imgUrl, mainTitle, buttonText, buttonLink, closeText, closeIcon } = data;
  const html = `
        <div class="${id}__modal open">
            <div class="${id}__modal-overlay"></div>
            <div class="${id}__modal-container">
                <div class="${id}__modal-container-content">
                    <div class="${id}__promoBox">
                        <div class="${id}__imageWrapper">
                            <img src="${imgUrl}" alt="product_image"/>
                        </div>
                    </div>
                    <div class="${id}__promoTitle">${mainTitle}</div>
                    <div class="${id}__buttonWrapper">
                        <a class="${id}__productLink" href="${buttonLink}">
                            ${buttonText}
                        </a>
                        <span class="${id}__closeLink">
                            ${closeText}
                        </span>
                    </div>
                   
                    <div class="${id}__closeModal">${closeIcon}</div>
                </div>
            </div>
        </div>
    `;
  return html;
};

export default modal;
