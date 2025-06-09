import { fireIcon } from '../assets/icons';

export const card = (id, data) => {
  const {
    tag,
    casinoName,
    bgImageDesktop,
    bgImageMobile,
    bgMobileV2,
    casinoLogo,
    mainTitle,
    titleItems,
    ctaText,
    ctaLink,
    footerText
  } = data;
  const html = `
        <div class="card" style="--bgImageDesktop:url(${bgImageDesktop}); --bgImageMobile:url(${bgImageMobile}); --bgMobileV2:url(${bgMobileV2})">
            <div class="card-first-conatiner">
                <div class="label hidden-mobile">${tag}</div>
                <div class="casino-logo">
                    <img src="${casinoLogo}" alt="${casinoName} logo"  />
                </div>
                <div class="hidden-desktop">
                    <div class="label">${tag}</div>
                </div>
            </div>
            <div class="card-content">
                <div class="overlay-text">
                    <h2>${mainTitle}</h2>
                    <ul>
                        ${titleItems
                          .map((item) => {
                            return `<li><span class="icon">${fireIcon}</span><span class="text">${item}</span></li>`;
                          })
                          .join('\n')}
                    </ul>
                </div>
                <div class="card-button">
                    <a href="${ctaLink}" target="_blank" class="cta-button ${id}__cta" rel="nofollow noreferrer" data-operator="${casinoName}" data-type="button">${ctaText}</a>
                    <div class="footer-links ${id}__footer-links">
                        <span>
                            ${footerText}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};
