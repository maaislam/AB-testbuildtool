import { backButtonIcon, nextButtonIcon } from '../assets/icons';
import content from './content';
import mainImage from './mainImage';
import thumbnailImage from './thumbnailImage';

const heroSection = (id, sliderData, collectedData) => {
  const html = `
        <div class="${id}__heroSection">
          <div class="${id}__container">
             <div class="${id}__sliderBox">
                <div class="swiper ${id}__swiper2">
                   <div class="swiper-wrapper">
                      ${sliderData.map((slide) => mainImage(id, slide)).join('\n')}
                   </div>
                   <div class="swiper-button-next">${nextButtonIcon}</div>
                   <div class="swiper-button-prev">${backButtonIcon}</div>
                </div>
                <div thumbsSlider="" class="swiper ${id}__swiper">
                    <div class="swiper-wrapper">
                       ${sliderData.map((slide) => thumbnailImage(id, slide)).join('\n')}
                    </div>
                </div>
             </div>
             <div class="${id}__content">
                ${content(id, collectedData)}
             </div>
          </div>
        </div>
    `;
  return html.trim();
};

export default heroSection;
