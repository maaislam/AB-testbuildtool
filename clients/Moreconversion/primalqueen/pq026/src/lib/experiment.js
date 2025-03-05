import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const mainSwiperWrapper = document.querySelector('.swiper.mySwiper2 .swiper-wrapper');
  const thumbSwiperWrapper = document.querySelector('.swiper.mySwiper .swiper-wrapper');

  //Get the 3rd slide (index 2)
  const thirdSlide = mainSwiperWrapper.children[2];
  const thirdThumbSlide = thumbSwiperWrapper.children[2];

  if (thirdSlide && thirdThumbSlide) {
    thirdSlide.innerHTML = `
            <video playsinline  preload="auto" autoplay muted preload="auto" class="${ID}__video">
                <source src="https://cdn.shopify.com/videos/c/o/v/94aba949ac2e4f908a4ae74581f73901.mp4" type="video/mp4">
            </video>
        `;

    const imgTag = thirdThumbSlide.querySelector('img');

    if (imgTag) {
      thirdThumbSlide.classList.add(`${ID}__videoThumbnail`);
      imgTag.src =
        'https://cdn.shopify.com/s/files/1/0805/3971/3813/files/subscription-video.png?v=1741118805';
    }

    const mainSwiperInstance = document.querySelector('.swiper.mySwiper2').swiper;
    const thumbSwiperInstance = document.querySelector('.swiper.mySwiper').swiper;

    if (mainSwiperInstance) {
      mainSwiperInstance.on('slideChange', () => {
        const allSlides = document.querySelectorAll('.package1 .swiper-slide');
        console.log('changed slides', mainSwiperInstance.activeIndex);
        if (mainSwiperInstance.activeIndex === 2) {
          allSlides[mainSwiperInstance.activeIndex].classList.add(`${ID}__videoActive`);
          allSlides[mainSwiperInstance.activeIndex].querySelector('video').play();
        } else if (document.querySelector(`.swiper-slide.${ID}__videoActive`)) {
          document
            .querySelector(`.swiper-slide.${ID}__videoActive`)
            .classList.remove(`${ID}__videoActive`);
        }
      });
    }

    if (mainSwiperInstance) mainSwiperInstance.update();
    if (thumbSwiperInstance) thumbSwiperInstance.update();
  }
};

export default () => {
  setup(); //use if needed

  init();
};
