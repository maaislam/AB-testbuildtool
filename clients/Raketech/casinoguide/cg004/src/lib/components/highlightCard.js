import { truncateText } from '../helpers/utils';

const highlightCard = (id, data) => {
  const { reviewUrl, reviewSlug, operatorUrl, title, subTitle } = data;
  const imagePathPrefix =
    'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/';

  const htmlStr = `
      <div class="${id}__highlightcard ${id}__bonus-intent swiper-slide"  data-title="${reviewSlug}">
          <div class="${id}__slot">
            <div class="${id}__slot-row1">
              <a class="${id}__revlink" href="${reviewUrl}" data-opName="${title}">
                <img 
                  src="${imagePathPrefix}${operatorUrl.split('/').pop()}.png" 
                  alt="${reviewSlug}">
              </a>
            </div>
            <div class="${id}__slot-row2">
              <div class="slot-name"><a class="${id}__revlink" data-opName="${title}" href="${reviewUrl}">${title}</a></div>   
              <div class="slot-text">
                <a 
                  class="${id}__revlink"
                  data-opName="${title}" 
                  href="${reviewUrl}">${truncateText(subTitle)}
                </a>
              </div>
              <div class="operator-btn"><a target="_blank" href="${operatorUrl}">TILL CASINOT</a></div>
            </div>
          </div>
      </div>`;

  return htmlStr.trim();
};

export default highlightCard;
