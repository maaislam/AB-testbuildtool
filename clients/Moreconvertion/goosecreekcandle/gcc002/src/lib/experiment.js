import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('.product-page--submit-action');
  const imageUrl = VARIATION === '1' ? 'https://more-conversions.s3.amazonaws.com/Frame+37.png' : 'https://more-conversions.s3.amazonaws.com/Frame+37-mob.png';

  const htmlStr = `<div class='${ID}__container'>
    <img src='${imageUrl}'/>
  </div>`;

  if (!document.querySelector(`.${ID}__container`)) {
    anchorPoint.insertAdjacentHTML('afterend', htmlStr);
  }
};
