import { playButton } from '../assets/icons';

export const videoPlayer = (id, data, className) => {
  const { desktopPosterURL, mobilePosterURL, videoSource } = data;
  const selectedPoster = className === 'desktop' ? desktopPosterURL : mobilePosterURL;

  const html = `
      <div class="${id}__videoContainer ${id}__${className} s6_product_model">
          <video id="video1" class="${id}__video" preload="auto" width="420" height="550" onclick="this.play()" poster="${selectedPoster}">
              <source src="${videoSource}" type="video/mp4">
          </video>

          <div class="${id}__playButton">
            ${playButton}
          </div>
      </div>
  `;
  return html;
};
