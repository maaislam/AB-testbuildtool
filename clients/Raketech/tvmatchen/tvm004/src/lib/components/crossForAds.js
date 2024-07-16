import { hideAdsIcon } from '../assets/icons';

export const crossForAds = (id) => {
  const html = `
        <div id="cbb" class="cbb ${id}__crossAds" tabindex="0" role="button">
            <div class="${id}__title">Hide</div>
            <div class="${id}__icon">
                ${hideAdsIcon}
            </div>
        </div>
    `;
  return html;
};
