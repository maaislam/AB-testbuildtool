import { arrow } from '../assets/icons';

export const miniCard = (id, data) => {
  const {
    casinoName,
    bgImageV1,
    bgColor,
    casinoLogo,
    mainTitle,
    subtitle,
    casinoLink,
    footerText,
    borderColorV1,
    borderColorV2
  } = data;
  const html = `
    <div class="add-card">
        <div class="ad-image" style="--bgImage: url(${bgImageV1}); --bgColor: ${bgColor};">
            <a href="${casinoLink}" target="_blank" class="ad-image-wrapper" rel="nofollow noreferrer" data-type="logo" data-operator="${casinoName}" data-element="top-banner" data-type="logo" data-toplist-pos="1">
                <img src="${casinoLogo}" alt="${casinoName} banner" />
            </a>
        </div>
        <div class="add-content" style="--borderColorV1: ${borderColorV1}; --borderColorV2: ${borderColorV2};">
            <a href="${casinoLink}" class="offer-title" target="_blank" rel="nofollow noreferrer" data-operator="${casinoName}" aria-label="Visit casino page" data-element="top-banner" data-type="content" data-toplist-pos="1">
                <span>
                    <strong>${mainTitle}</strong>
                    <span class="external-link">${arrow}</span>
                </span>
                <p class="offer-subtext">${subtitle}</p>
            </a>
            <div class="${id}__add-content__footer">
              <div class="add-footer">
                  ${footerText}
              </div>
            </div>
        </div>
    </div>

  `;
  return html.trim();
};
