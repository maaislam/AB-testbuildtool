import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const firstSlide = document.querySelector('.product-main-slide[data-index="0"] .image-wrap');
  const firstThumb = document.querySelector('.product__thumb[data-index="0"] img');

  if (firstThumb) {
    firstThumb.src = 'https://perfectwhitetee.com/cdn/shop/files/YAP_sock2_100x.jpg?v=1731510939';
    firstThumb.srcset = 'https://perfectwhitetee.com/cdn/shop/files/YAP_sock2_100x.jpg?v=1731510939';
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

    //Programmatically set autoplay and muted attributes
    video.autoplay = true; //This ensures autoplay
    video.muted = true; //Ensure video is muted for autoplay to work
    video.controls = false; //Remove controls if not needed
    video.playsinline = true; //This is for iOS devices to play inline
    video.loop = true; //This ensures the video will loop
    video.preload = 'auto'; //This ensures the video will preload

    const source = document.createElement('source');
    source.src = 'https://videos.pexels.com/video-files/3205919/3205919-hd_1080_1920_25fps.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    firstSlide.appendChild(video);
  }
};

export default () => {
  setup();

  init();
};
