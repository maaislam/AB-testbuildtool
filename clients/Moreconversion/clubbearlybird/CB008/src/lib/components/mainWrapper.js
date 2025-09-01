import { nextArrow, prevArrow } from '../assets/icons';
import variantsWrapper from './variantsWrapper';

const mainWrapper = (id, price_max, flavoursArray, packArray, selling_plan_groups, images) => {
  const html = `
      <div class="${id}__mainWrapper">
          <div class="${id}__content">
                <div class="${id}__left">
                   <div class="swiper mySwiper2 ${id}__desktopSwiper">
                        <div class="swiper-wrapper">
                            ${images
                              .map((image) => {
                                return `
                                    <div class="swiper-slide">
                                        <img src="${image}" />
                                    </div>
                                `;
                              })
                              .join('\n')}
                            
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next">${nextArrow}</div>
                        <div class="swiper-button-prev">${prevArrow}</div>
                    </div>
                    <div thumbsSlider=""
                        class="swiper mySwiper ${id}__mobileSwiper">
                        <div class="swiper-wrapper">
                            ${images
                              .map((image) => {
                                return `
                                    <div class="swiper-slide">
                                        <img src="${image}" />
                                    </div>
                                `;
                              })
                              .join('\n')}
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-next">
                         <svg class="zpa-carousel__action__icon zpa-carousel__action__icon--next"> <title>Go to the next slide</title> <use href="#carouselArrowIcon"></use> </svg>
                        </div>
                        <div class="swiper-button-prev">
                          <svg class="zpa-carousel__action__icon zpa-carousel__action__preview"> <title>Go to the previous slide</title> <use href="#carouselArrowIcon"></use> </svg>
                        </div>
                    </div>
                </div>
                <div class="${id}__right">
                  ${variantsWrapper(id, price_max, flavoursArray, packArray, selling_plan_groups)}
                </div>
          </div>
       </div>
    `;
  return html.trim();
};

export default mainWrapper;
