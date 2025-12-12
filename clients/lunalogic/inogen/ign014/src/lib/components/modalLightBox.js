import { playButton } from '../assets/icons';

const modalLightBox = (id, data) => {
  const html = `
        <div class="lightbox ${id}__modalLightBox" id="lightbox" aria-hidden="true">
  <div class="lightbox__backdrop"></div>
  <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="Media viewer">
    <button class="lightbox__close" aria-label="Close">
        <span></span>
    </button>

    <div class="swiper lightbox-swiper">
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

      <div class="swiper-button-prev" aria-label="Prev">
          <span></span>
      </div>
      <div class="swiper-button-next" aria-label="Next">
          <span></span>                      
      </div>
    </div>
  </div>
</div>
    
    `;
  return html.trim();
};

export default modalLightBox;
