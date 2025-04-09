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
            <a href="${casinoLink}" target="_blank" class="ad-image-wrapper" rel="nofollow noreferrer" data-type="logo" data-operator="${casinoName}">
                <img src="${casinoLogo}" alt="${casinoName} banner" />
            </a>
        </div>
        <div class="add-content" style="--borderColorV1: ${borderColorV1}; --borderColorV2: ${borderColorV2};">
            <div class="offer-title">
                <strong>${mainTitle}</strong>
                <a href="${casinoLink}" class="external-link" target="_blank" rel="nofollow noreferrer" data-operator="${casinoName}" data-type="button" aria-label="Visit casino page">${arrow}</a>
            </div>
            <p class="offer-subtext">${subtitle}</p>
            <div class="add-footer">
                ${footerText}
            </div>
        </div>
    </div>

  `;
  return html.trim();
};
