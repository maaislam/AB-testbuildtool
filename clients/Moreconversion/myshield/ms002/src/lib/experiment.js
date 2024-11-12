import setup from './services/setup';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

const init = () => {
  const beforeAfterSlider = document.querySelector('.multicolumn .slider-mobile-gutter');
  const beforeAfterSection = beforeAfterSlider.closest('.shopify-section');
  const beforeAfterHeading = beforeAfterSection.previousSibling;

  const benifitsDesktop = document.querySelector('.benefits-homepage-desktop');
  const benifitsSection = benifitsDesktop.closest('.shopify-section');

  benifitsSection.insertAdjacentElement('beforebegin', beforeAfterHeading);
  benifitsSection.insertAdjacentElement('beforebegin', beforeAfterSection);
};

export default () => {
  setup();

  init();
};
