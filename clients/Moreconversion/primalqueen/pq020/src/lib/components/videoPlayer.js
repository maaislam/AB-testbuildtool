import { playButton } from '../assets/icon';

export const videoPlayer = (id, data, className) => {
  const { desktopPosterURL, mobilePosterURL, videoSource } = data;
  const selectedPoster = className === 'desktop' ? desktopPosterURL : mobilePosterURL;

  const html = `
      <div class="${id}__videoContainer ${id}__${className} s6_product_model">
          <video muted autoplay playsinline class="${id}__video" preload="auto" width="420" height="550" poster="${selectedPoster}">
              <source src="${videoSource}" type="video/mp4">
          </video>

          <div class="${id}__playButton" style="display:none;">
            ${playButton}
          </div>
      </div>
  `;
  return html;
};
