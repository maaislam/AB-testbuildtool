import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const beforeAfterSlider = document.querySelector('.multicolumn .slider-mobile-gutter');
  const beforeAfterSection = beforeAfterSlider.closest('.shopify-section');
  const beforeAfterHeading = beforeAfterSection.previousSibling;
  const beforeAfterCta = beforeAfterSection.nextElementSibling;

  const benifitsDesktop = document.querySelector('[src*="clear_skin_guaranteed_benefits"]');
  const benifitsSection = benifitsDesktop.closest('.shopify-section');

  const livesChangeCountHtml = `<div class="${ID}__livesChangeCountWrapper">
    <div class="${ID}__livesChangeCount">10,017 lives changed!</div>
  </div>`;

  beforeAfterSection.classList.add(`${ID}__beforeAfterSection`);
  beforeAfterCta.classList.add(`${ID}__beforeAfterCta`);
  if (!document.querySelector(`.${ID}__livesChangeCountWrapper`)) {
    benifitsSection.insertAdjacentElement('beforebegin', beforeAfterHeading);
    benifitsSection.insertAdjacentHTML('beforebegin', livesChangeCountHtml);
    benifitsSection.insertAdjacentElement('beforebegin', beforeAfterSection);
    benifitsSection.insertAdjacentElement('beforebegin', beforeAfterCta);
  }
};

export default () => {
  setup();

  init();
};
