import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import videoArray from './data/data';
import { playButton } from './assets/icons';

const { ID, VARIATION } = shared;

const activateVideo = () => {
  const mainContent = document.querySelector('#MainContent .section_5');
  videoArray.forEach((item, index) => {
    //Get the video element
    const videoElement = mainContent.querySelector(
      `.s5_box_row${index + 1} .s5_row_img_box .${ID}__video`
    );
    const playButtonElement = mainContent.querySelector(
      `.s5_box_row${index + 1} .s5_row_img_box .play-button`
    );

    if (!videoElement || !playButtonElement) return; //Skip if video or play button is missing

    //Initial state
    let isPlaying = false;

    //Function to toggle play and pause
    const togglePlay = () => {
      if (videoElement.paused || videoElement.ended) {
        videoElement.play();
        isPlaying = true;
        playButtonElement.style.display = 'none';
      }
    };

    const togglePause = () => {
      if (!videoElement.paused || !videoElement.ended) {
        videoElement.pause();
        isPlaying = false;
        playButtonElement.removeAttribute('style');
      }
    };

    //Add event listener to the play button
    playButtonElement.addEventListener('click', togglePlay);
    videoElement.addEventListener('click', togglePause);

    //Update play button on video play
    videoElement.addEventListener('play', () => {
      isPlaying = true;
    });

    //Update play button on video pause
    videoElement.addEventListener('pause', () => {
      isPlaying = false;
    });

    //Reset to play button on video end
    videoElement.addEventListener('ended', () => {
      isPlaying = false;
    });
  });
};

const init = () => {
  //Initialize your experiment code here
  const mainContent = document.querySelector('#MainContent .section_5');

  videoArray.forEach((item, index) => {
    //Create a video element
    const videoElement = document.createElement('video');
    videoElement.setAttribute('id', `video-${index}`);
    videoElement.setAttribute('class', `${ID}__video`);
    videoElement.setAttribute('loop', '');
    videoElement.setAttribute('playsinline', '');
    videoElement.setAttribute('poster', item.image);
    videoElement.setAttribute('width', '301'); //Set video width
    videoElement.setAttribute('height', '269'); //Set video height
    videoElement.setAttribute('muted', true);

    videoElement.muted = true;

    //Add the source to the video element
    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', item.videoUrl);
    sourceElement.setAttribute('type', 'video/mp4');

    //Append source to video
    videoElement.appendChild(sourceElement);

    //Append the video to the container
    if (!mainContent.querySelector(`.s5_box_row${index + 1} .s5_row_img_box .${ID}__video`)) {
      mainContent
        .querySelector(`.s5_box_row${index + 1} .s5_row_img_box`)
        .insertAdjacentElement('afterbegin', videoElement);
    }
    if (!mainContent.querySelector(`.s5_box_row${index + 1} .s5_row_img_box .play-button`)) {
      mainContent
        .querySelector(`.s5_box_row${index + 1} .s5_row_img_box`)
        .insertAdjacentHTML('afterbegin', `<span class="play-button">${playButton}</span>`);
    }
  });
};

export default () => {
  setup();

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //

  activateVideo(); //
};
