import { fireIcon } from '../assets/icons';

export const card = (id, data) => {
  const {
    tag,
    casinoName,
    bgImageDesktop,
    bgImageMobile,
    casinoLogo,
    mainTitle,
    titleItems,
    ctaText,
    ctaLink,
    footerText
  } = data;
  const html = `
        <div class="card" style="--bgImageDesktop:url(${bgImageDesktop}); --bgImageMobile:url(${bgImageMobile})">
            <div class="card-first-conatiner">
                <div class="label">${tag}</div>
                <div class="casino-logo">
                    <img src="${casinoLogo}" alt="${casinoName} logo" loading="lazy" />
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
                    <a href="${ctaLink}" class="cta-button">${ctaText}</a>
                    <div class="footer-links">
                        <small>
                            ${footerText}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};
