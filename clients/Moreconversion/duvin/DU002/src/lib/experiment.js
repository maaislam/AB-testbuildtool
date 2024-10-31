import setup from './services/setup';
import shared from './shared/shared';
import buttonWrapper from './components/buttonWrapper';
import collectionData from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const mainContainer = document.querySelector('.bullet-slideshow .swiper-initialized');
  mainContainer.querySelectorAll('.swiper-slide').forEach((item, index) => {
    if (item.querySelector('.meta') && !item.querySelector(`.${ID}__buttonWrapper`)) {
      item
        .querySelector('.meta')
        .insertAdjacentHTML('beforebegin', buttonWrapper(ID, collectionData[index], index));
    }
  });
};

export default () => {
  setup();

  init();
};
