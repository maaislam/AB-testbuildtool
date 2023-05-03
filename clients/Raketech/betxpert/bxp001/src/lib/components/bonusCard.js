const bonusCard = (id, data) => {
  const { imageSrc, logoSrc, opName, btnText, btnLink } = data;

  const htmlStr = `
    <div class="${id}__bonuscard swiper-slide ${id}__bonus-intent" data-operator="${opName}" style="background-image:url(${imageSrc})">
        <div class="${id}__bonuscard-content">
            <div class="logo"><img src="${logoSrc}" alt="${opName}" /></div>
            <div class="operator-block">
                <div class="op-name">${opName}</div>
                <a href="${btnLink}" class="${id}__bluebtn">${btnText}</a>
            </div>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default bonusCard;
