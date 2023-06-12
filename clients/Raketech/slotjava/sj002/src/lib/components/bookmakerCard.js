const bookmakerCard = (id, data) => {
  const { imgSrc, backColor, slotText, slotName } = data;

  const htmlStr = `
      <a href="" class="${id}__bookmakercard ${id}__bonus-intent swiper-slide" style="background-color: ${backColor}">
          <div class="${id}__academy">
            <div class="${id}__academy-col1">
              <div class="slot-text">${slotText}</div>
              <div class="slot-name">${slotName}</div>
              
            </div>
            <div class="${id}__academy-col2">
              <img src="${imgSrc}" alt="${slotName}">
            </div>
          </div>
      </a>`;

  return htmlStr.trim();
};

export default bookmakerCard;
