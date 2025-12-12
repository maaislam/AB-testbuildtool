import { playButton } from '../assets/icons';

const productGallery = (id, data) => {
  const html = `
        <div class="${id}__productGallery">
            <div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper2">
                <div class="swiper-wrapper">
                    ${data.mainSliderImage
                      .map((item) => {
                        return `
                            ${
                              item.srcType === 'image'
                                ? `
                                    <div class="swiper-slide">
                                        <img src="${item.link}" />
                                    </div>  
                                `
                                : `
                                    <div class="swiper-slide ${
                                      item.srcType === 'video' ? 'video-slide-item' : ''
                                    }" data-type="html5">
                                        <div class="video-card is-html5">
                                            ${
                                              item.srcType === 'video'
                                                ? `
                                                    ${playButton}
                                                    `
                                                : ''
                                            }

                                            <video
                                                class="player"
                                                preload="none"
                                                playsinline
                                                poster="${item.imgLink}"
                                                
                                            >
                                            <!-- Use multiple sources for better browser coverage -->
                                            <source src="${item.link}" type="video/mp4" />
                                            <!-- Optional captions -->
                                            <!-- <track kind="captions" src="video1.vtt" srclang="en" label="English"> -->
                                            Sorry, your browser doesn’t support embedded videos.
                                            </video>
                                        </div>
                                    </div>
                                `
                            } 
                        `;
                      })
                      .join('\n')}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div thumbsSlider="" class="swiper mySwiper">
                <div class="swiper-wrapper">
                     ${data.thumbnailImage
                       .map((item) => {
                         return `
                                <div class="swiper-slide ${
                                  item.srcType === 'video' ? 'video-thumb-slide' : ''
                                }">
                                    <img src="${item.link}" />
                                    ${
                                      item.srcType === 'video'
                                        ? `
                                        ${playButton}
                                        `
                                        : ''
                                    }
                                </div>
                            `;
                       })
                       .join('\n')}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    `;
  return html.trim();
};

export default productGallery;
