const highlightCard = (id, data) => {
  const { reviewUrl, reviewSlug, operatorUrl, title, subTitle } = data;
  const imagePathPrefix =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/';

  const htmlStr = `
      <div class="${id}__highlightcard ${id}__bonus-intent swiper-slide"  data-title="${reviewSlug}">
          <div class="${id}__slot">
            <div class="${id}__slot-row1">
              <a target="_blank" href="${reviewUrl}" data-opName="${title}"><img src="https://www.casinoguide.se/wp-content/uploads/2023/05/ninjacasino-7.png.webp" alt="${reviewSlug}"></a>
            </div>
            <div class="${id}__slot-row2">
              <div class="slot-name"><a target="_blank" data-opName="${title}" href="${reviewUrl}">${title}</a></div>   
              <div class="slot-text"><a target="_blank" data-opName="${title}" href="${reviewUrl}">${subTitle}</a></div>
              <div class="operator-btn"><a target="_blank" data-opName="${title}" href="${operatorUrl}">GET A BONUS</a></div>
            </div>
          </div>
      </div>`;

  return htmlStr.trim();
};

export default highlightCard;
