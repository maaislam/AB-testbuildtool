import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const desktopReviewSection = document.querySelector('.section.full.no-mobile:not(.sticky_show_after)');
  const mobileReviewSection = document.querySelector('section.section.full.no-desktop.no-tablet');
  const reviewSection = window.innerWidth > 479 ? desktopReviewSection : mobileReviewSection;

  const anchorPoint = document.querySelector('section.section.full .section_row.no-mobile').parentElement;

  if (VARIATION === '1') {
    anchorPoint.insertAdjacentElement('beforebegin', reviewSection);
  } else {
    anchorPoint.insertAdjacentElement('afterend', reviewSection);
  }
};

export default () => {
  setup();

  init();
};
