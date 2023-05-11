const bookmakerCard = (id, data, orientation = 'column') => {
  const { alt, link, imgSrc, backColor, gaLabel, btnText } = data;

  const htmlStr = `
        <div 
        class="${id}__bookmakercard ${id}__bonus-intent swiper-slide 
        ${orientation === 'column' ? '' : 'vertical'}">
            <a href="${link}" 
            data-ga-label="${gaLabel}"
            data-operator="${gaLabel}" 
            target="_blank" class="${id}__bookmakercard-imgrow" 
            style="background:${backColor}">
                <img src="${imgSrc}" alt="${alt}">        
            </a>
            <div class="${id}__bookmakercard-btnrow">
                ${
                  orientation === 'column'
                    ? ''
                    : `<a href="${link}" target="_blank" data-ga-label="${gaLabel}" class="row-bookmakercard desktop-show">${gaLabel}</a>`
                }
                <a href="${link}" 
                target="_blank" 
                data-ga-label="${gaLabel}" 
                class="${id}__bluebtn">${btnText}</a>
            </div>
        </div>`;

  return htmlStr.trim();
};

export default bookmakerCard;
