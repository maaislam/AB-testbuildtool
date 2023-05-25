const bonusCard = (id, data) => {
  const { imageSrc, title, bodyText, logoSrc, opName, btnText, btnLink, tc } = data;

  const htmlStr = `
    <div data-href="${btnLink}" target="_blank" class="${id}__bonuscard swiper-slide " data-operator="${opName}" style="background-image:url(${imageSrc})">
        <div class="${id}__bonuscard-content">
            ${logoSrc ? `<div class="logo"><img src="${logoSrc}" alt="${opName}" /></div>` : ''}
            <div class="operator-block">
                <div class="op-name">${title}</div>
                <div class="op-conetnt" >${bodyText}</div>
                <div class="${id}__bluebtn">${btnText}</div>
                ${
                  tc
                    ? `<div class="tc-wrapper" >
                        <div class="tc-content">${tc}</div>
                        <span><i class="fa fa-caret-up"></i></span>
                      </div>`
                    : ''
                }
                
            </div>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default bonusCard;
