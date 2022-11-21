import { siteRatingStar, trustPilotLogo, trustpilotLogo1 } from '../reviewData';
import review from './review';

const reviews = (id, reviewsData) => {
  const htmlStr = `
    <div class="${id}__reviews-wrapper ">
        <div class="title">Why choose Travis Perkins</div>
        <div class="${id}__trustpilot-reviews">
            <div class="logo"><span>${trustpilotLogo1}</span><span>${siteRatingStar}</span></div>  
            <div class="${id}__swiper-container swiper">
                <div class="individual-reviews swiper-wrapper">${reviewsData.map((data) => review(id, data)).join('\n')}</div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>  
        </div>
    </div>`;
  return htmlStr;
};

export default reviews;
