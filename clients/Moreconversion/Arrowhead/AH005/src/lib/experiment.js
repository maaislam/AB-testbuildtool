import setup from './services/setup';
import shared from './shared/shared';
import { heroLink } from './component/heroLink';

const { ID, VARIATION } = shared;
const desktopImageAdd = (targetImage) => {
  //DESKTOP
  if (document.querySelector(`.${ID}__hero-bg-desktop`)) {
    document.querySelector(`.${ID}__hero-bg-desktop`).remove();
  }
  targetImage &&
    targetImage.insertAdjacentHTML(
      'beforebegin',
      `<img class="hero__image ${ID}__hero__image ${ID}__hero-bg-desktop" src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/v2-bg-image.png?v=1714476252"/>`
    );
};
const mobileImageAdd = (targetImage) => {
  if (document.querySelector(`.${ID}__hero-bg-mobile`)) {
    document.querySelector(`.${ID}__hero-bg-mobile`).remove();
  }
  targetImage &&
    targetImage.insertAdjacentHTML(
      'beforebegin',
      `<img class="hero__image ${ID}__hero__image ${ID}__hero-bg-mobile" src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/v2-bg-image-mobile.png?v=1714476467"/>`
    );
};
const init = () => {
  if (VARIATION === '2') {
    const targetImage = document.querySelector('.hero__image-wrapper .hero__image');
    desktopImageAdd(targetImage);
    mobileImageAdd(targetImage);
  }
  const targetElement = document.querySelector('.hero__text-wrap');
  const mainTextElement = targetElement.querySelector('.hero__title');
  const subTextElement = targetElement.querySelector('.hero__subtitle');

  mainTextElement.innerText = 'Athletic Apparel For Concealed Carry';
  subTextElement.innerText = 'The safest and most comfortable clothing for your EDC';

  if (document.querySelector(`.${ID}__hero-link`)) {
    document.querySelector(`.${ID}__hero-link`).remove();
  }
  targetElement &&
    targetElement
      .querySelector('.hero__link')
      .insertAdjacentHTML('beforebegin', heroLink(ID, VARIATION));
};
export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'Control') {
    return;
  }
  init();
};
