import setup from './services/setup';
import shared from './shared/shared';
import { roomVisualiser } from './components/roomVisualiser';
import { images } from './components/images';
import counter from './components/counter';
import { pollerLite } from './helpers/utils';

const { ID } = shared;
const MIN_IMAGES_OF_PROD = 5;

const isertRoomVisualiser = (parentElem) => {
  if (document.querySelector(`.${ID}__room-visualiser`)) {
    document.querySelector(`.${ID}__room-visualiser`).remove();
  }
  parentElem.insertAdjacentHTML('beforeend', roomVisualiser(ID));
};

const isertCounter = (parentElem, index, size) => {
  if (document.querySelector(`.${ID}__counter`)) {
    document.querySelector(`.${ID}__counter`).remove();
  }
  parentElem.insertAdjacentHTML('beforeend', counter(ID, index, size));
};

const fullSizeScreen = (keyValue, fotoramaData) => {
  fotoramaData.show(parseInt(keyValue));
  fotoramaData.requestFullScreen();
};

export default () => {
  setup();

  const fotoramaData = window.jQuery('.fotorama').data('fotorama');
  const gallery = document.querySelector('.gallery-placeholder');
  const parentElement = document.querySelector('.fotorama__stage');

  //room visualiser add
  if (fotoramaData.activeIndex === 0) {
    isertRoomVisualiser(parentElement);
    isertCounter(parentElement, fotoramaData.activeIndex, fotoramaData.size);
  }

  //insert other images
  if (fotoramaData.data.length) {
    const data = fotoramaData.data.slice(1);
    if (document.querySelector(`.${ID}__images-wrapper.desktop`)) {
      document.querySelector(`.${ID}__images-wrapper.desktop`).remove();
    }

    if (document.querySelector(`.${ID}__images-wrapper.mobile`)) {
      document.querySelector(`.${ID}__images-wrapper.mobile`).remove();
    }
    data.length &&
      gallery.insertAdjacentHTML('afterend', images(ID, data, MIN_IMAGES_OF_PROD, 'desktop'));
    //mobile
    data.length &&
      gallery.insertAdjacentHTML('afterend', images(ID, data, MIN_IMAGES_OF_PROD, 'mobile'));
  }

  document.body.addEventListener('pointerup', (e) => {
    console.log('target', e.target);

    if (
      e.target.closest(`.${ID}__room-visualiser-box-text`) ||
      e.target.closest(`.${ID}__room-visualiser-box-icon`)
    ) {
      e.preventDefault();
      e.stopPropagation();

      document.querySelector('div[data-role="roomvo"] .roomvo-stimr').click();
      setTimeout(() => {
        fotoramaData.cancelFullScreen();
      }, 0);
    } else if (e.target.closest(`.${ID}__button-wrapper.more`)) {
      document.querySelector(`.${ID}__images-wrapper.desktop`).classList.add('open');
      document
        .querySelectorAll(`.${ID}__hide`)
        .forEach((item) => item && item.classList.remove(`${ID}__hide`));
    } else if (e.target.closest(`.${ID}__button-wrapper.less`)) {
      document.querySelector(`.${ID}__images-wrapper.desktop`).classList.remove('open');
      const imageItems = [
        ...document.querySelectorAll(`.${ID}__images-wrapper.desktop .${ID}__image-item`)
      ];
      imageItems
        .slice(MIN_IMAGES_OF_PROD - 1)
        .forEach((item) => item && item.classList.add(`${ID}__hide`));

      gallery.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    } else if (
      e.target.closest(`.${ID}__image-item `) &&
      e.target.closest(`.${ID}__images-wrapper.desktop`)
    ) {
      const keyValue = e.target.closest(`.${ID}__image-item `).dataset.key;
      fullSizeScreen(keyValue, fotoramaData);
    } else if (
      e.target.closest(`.${ID}__image-item `) &&
      e.target.closest(`.${ID}__images-wrapper.mobile`)
    ) {
      const keyValue = e.target.closest(`.${ID}__image-item `).dataset.key;
      fullSizeScreen(keyValue, fotoramaData);
    }

    setTimeout(() => {
      if (fotoramaData.activeIndex !== 0) {
        if (document.querySelector(`.${ID}__room-visualiser`)) {
          document.querySelector(`.${ID}__room-visualiser`).remove();
        }
        isertCounter(parentElement, fotoramaData.activeIndex, fotoramaData.size);
      } else if (fotoramaData.activeIndex === 0) {
        isertRoomVisualiser(parentElement);
        isertCounter(parentElement, fotoramaData.activeIndex, fotoramaData.size);
      }
    }, 0);
  });

  //height measurements

  pollerLite([() => document.readyState === 'complete'], () => {
    const galleryHeight = document
      .querySelector('#maincontent .product.media')
      .getBoundingClientRect().height;
    const prodInfoHeight = document
      .querySelector('#maincontent .product-info-main')
      .getBoundingClientRect().height;

    console.log(galleryHeight, prodInfoHeight);
    if (fotoramaData.data.length > MIN_IMAGES_OF_PROD) {
      console.log('scroll add');
      document.querySelector('#maincontent .product.media').style.height = `${
        galleryHeight + 20
      }px`;

      document.querySelector('#maincontent .product.media').classList.add(`${ID}__overflow`);
    }
  });
};
