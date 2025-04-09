import { getImgSrc } from '../helpers/utils';

const tableRow = ({ id, index, name, link, description, trialLink, trialText }) => {
  const imgSrc = getImgSrc(name);

  return `
    <div class="${id}__card ${index === 1 ? 'highlighted' : ''}">
      <div class="image-wrapper">
        <div class="number">${index}</div>
        ${link && imgSrc ? `<a href='${link}' class="logo">
            ${imgSrc ? `<img src="${imgSrc}" alt="${name}" class="${id}__logo">` : ''}
        </a>` : ''}
      </div>
      <div class="content-wrapper">
        <div class="title-box">
          ${link ? `<a href="${link}" class="${id}__cardTitle title-text-link">${name}</a>` : `<div class="title-text">${name}</div>`}
          ${index === 1 ? `<span class="${id}__badge editor-badge">EDITOR'S CHOICE</span>` : ''}
        </div>
        <div class="content">
          <div class="content-details">
            <span>${description}</span>
            ${link && imgSrc ? `<a href='${link}' class="logo-mobile">
              ${imgSrc ? `<img src="${imgSrc}" alt="${name}" class="${id}__logo">` : ''}
            </a>` : ''}
          </div>

          ${link ? `
            <div class="action-wrapper">
              <div class="free-trial-wrapper">
                ${trialLink ? `<a href="${trialLink}" class="free-trial-text ${id}__freeTrailLink">${trialText}</a>` : ''}
              </div>
              <div class="action-btn">
                <a href="${link}" class="website-btn ${id}__cta">WEBSITE</a>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>`;
};

export default tableRow;
