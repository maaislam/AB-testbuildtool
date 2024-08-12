import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const bannerImages = {
  image1: 'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc1.jpg',
  image2: 'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_2-2.jpg',
  image3: 'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test306/aug_promo_ugc_3-2.jpg'
};

const init = () => {
  const attachPoint = document.querySelector('.lf306__banner-container');

  if (!document.querySelector(`.${ID}__banner`)) {
    attachPoint.insertAdjacentHTML('afterend', banner(ID, bannerImages));
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
