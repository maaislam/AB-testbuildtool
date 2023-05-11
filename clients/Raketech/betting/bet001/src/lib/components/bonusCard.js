const bonusCard = (id, data) => {
  const { imageSrc, logoSrc, opName, btnText, btnLink } = data;

  const htmlStr = `
    <a href="${btnLink}" target="_blank" class="${id}__bonuscard swiper-slide ${id}__bonus-intent" data-operator="${opName}" style="background-image:url(${imageSrc})">
        <div class="${id}__bonuscard-content">
            <div class="logo"><img src="${logoSrc}" alt="${opName}" /></div>
            <div class="operator-block">
                <div class="op-name">${opName}</div>
                <div class="${id}__bluebtn">${btnText}</div>
            </div>
        </div>
    </a>`;

  return htmlStr.trim();
};

export default bonusCard;
