/*eslint-disable no-param-reassign */
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  const thumbsWrapper = document.querySelector('.Product__SlideshowMobileNav');
  const mobImgThumbs = document.querySelectorAll(
    '.Product__SlideshowMobileNav button:not(.Product__SlideshowNavArrow)'
  );

  thumbsWrapper.classList.add(`${ID}__thumbs-wrapper`);
  thumbsWrapper.classList.remove('hidden-lap-and-up');
  mobImgThumbs.forEach((thumb, i) => {
    thumb.classList.add(`${ID}__thumb`);
    const images = document.querySelectorAll('.Product__Slideshow img');
    const img = images[i];
    console.log('🚀 ~ file: experiment.js:21 ~ mobImgThumbs.forEach ~ img:', img);
    const src = img.getAttribute('data-original-src') || img.getAttribute('src');
    //if (!img) {
    //const videos = document.querySelectorAll('.Product__Slideshow video');
    //const video = videos[i];
    //src = video.getAttribute('data-original-src');
    //}
    console.log('🚀 ~ file: experiment.js:22 ~ mobImgThumbs.forEach ~ src:', src);
    thumb.style.backgroundImage = `url(${src})`;
  });
};
