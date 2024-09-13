import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const attachPoint = document.querySelector('.lf306__banner-container');

  if (!document.querySelector(`.${ID}__banner`)) {
    attachPoint.insertAdjacentHTML('beforebegin', banner(ID));

    //add fade in-out effect to the slider images for V1
    const beforeSlides = document.querySelectorAll('.before-slide');
    const afterSlides = document.querySelectorAll('.after-slide');

    let currentSlideBefore = 0;
    let currentSlideAfter = 0;
    const slideInterval = 3000; //3 seconds

    const showNextSlide = () => {
      beforeSlides[currentSlideBefore].classList.remove('active');
      afterSlides[currentSlideAfter].classList.remove('active');

      currentSlideBefore = (currentSlideBefore + 1) % beforeSlides.length;
      currentSlideAfter = (currentSlideAfter + 1) % afterSlides.length;

      beforeSlides[currentSlideBefore].classList.add('active');
      afterSlides[currentSlideAfter].classList.add('active');
    };

    setInterval(showNextSlide, slideInterval);
  }
};

export default () => {
  setup();

  window._conv_q = window._conv_q || [];

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('[href*="/sale.html"]')) {
      _conv_q.push(['triggerConversion', '100462022']);
    }
  });
};
