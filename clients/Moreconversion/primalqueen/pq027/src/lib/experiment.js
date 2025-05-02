import setup from './services/setup';
import shared from './shared/shared';
import researchBanner from './components/researchBanner';

const { ID } = shared;
const init = () => {
  const targetPoint = document.querySelector('.video-section__banner-points');
  if (!document.querySelector(`.${ID}__bannerConatiner`)) {
    targetPoint.insertAdjacentHTML('afterend', researchBanner(ID));
  }
};
export default () => {
  setup(); //use if needed
  document.querySelector('body').addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__researchBtn`)) {
      const controlElement = document.querySelector(`.s10_data_row:not(.${ID}__banner) > a`);
      if (controlElement) controlElement.click();
    }
  });

  init();
};
