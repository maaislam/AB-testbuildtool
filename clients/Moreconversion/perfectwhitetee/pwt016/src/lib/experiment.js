import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const firstSlide = document.querySelector('.product-main-slide[data-index="0"] .image-wrap');
  const firstThumb = document.querySelector('.product__thumb[data-index="0"] img');

  if (firstThumb) {
    firstThumb.src = 'https://cdn.shopify.com/s/files/1/0414/8677/8528/files/LOREN_LEAH_WHITE_2275.jpg?v=1732201637';
    firstThumb.srcset = 'https://cdn.shopify.com/s/files/1/0414/8677/8528/files/LOREN_LEAH_WHITE_2275.jpg?v=1732201637';
  }

  if (firstSlide) {
    firstSlide.innerHTML = '';

    const video = document.createElement('video');
    video.className = `${ID}__productVideo`;
    video.setAttribute('loop', true);
    video.setAttribute('playsinline', true);
    video.setAttribute('preload', 'auto');
    video.style.width = '100%';
    video.style.height = 'auto';

    video.autoplay = true; //This ensures autoplay
    video.muted = true; //Ensure video is muted for autoplay to work
    video.controls = false; //Remove controls if not needed
    video.playsinline = true; //This is for iOS devices to play inline
    video.loop = true; //This ensures the video will loop
    video.preload = 'auto'; //This ensures the video will preload

    const source = document.createElement('source');
    source.src = 'https://cdn.shopify.com/videos/c/o/v/b737a927567145dfbf27ef334ebbff95.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    firstSlide.appendChild(video);
  }
};

export default () => {
  setup();

  init();
};
