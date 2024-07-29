import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.homepage-banner .promo_list');

  if (!document.querySelector(`.${ID}__banner`) || !document.querySelector(`.${ID}__bannerV2`)) {
    attachPoint.insertAdjacentHTML('beforebegin', banner(ID, VARIATION));

    //add fade in-out effect to the slider images for V1
    if (VARIATION === '1') {
      const beforeSlides = document.querySelectorAll('.before-slide');
      const afterSlides = document.querySelectorAll('.after-slide');

      let currentSlideBefore = 0;
      let currentSlideAfter = 0;
      const slideInterval = 5000; //5 seconds

      const showNextSlide = () => {
        beforeSlides[currentSlideBefore].classList.remove('active');
        afterSlides[currentSlideAfter].classList.remove('active');

        currentSlideBefore = (currentSlideBefore + 1) % beforeSlides.length;
        currentSlideAfter = (currentSlideAfter + 1) % afterSlides.length;

        beforeSlides[currentSlideBefore].classList.add('active');
        afterSlides[currentSlideAfter].classList.add('active');
      };

      setInterval(showNextSlide, slideInterval);

      return;
    }

    const container = document.querySelector(`.${ID}__banner-container`);
    const slider = document.querySelector(`.${ID}__slider`);

    slider.addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
  }
};

export default () => {
  setup();
  init();
};
