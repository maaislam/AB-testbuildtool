import { imgUrl } from '../data/data';

const tableRow = ({ id, index, name, link, isEditorChoice, description, trialLink, trialText }) => {
  console.log('name', name);
  const imgSrc = imgUrl[name.toLowerCase()];

  return `
    <div class="${id}__card ${isEditorChoice ? 'highlighted' : ''}">
      <div class="image-wrapper">
        <div class="number">${index}</div>
        ${link ? `<div class="logo">
            <img src="${imgSrc}" alt="${name}">
        </div>` : ''}
      </div>
      <div class="content-wrapper">
        <div class="title-box">
          ${link ? `<a href="${link}" class="title-text-link">${name}</a>` : `<div class="title-text">${name}</div>`}
          ${isEditorChoice ? `<span class="${id}__badge editor-badge">EDITOR'S CHOICE</span>` : ''}
        </div>
        <div class="content">
          <p class="content-details">${description}</p>
          <div class="free-trial-wrapper">
            ${trialLink ? `<a href="${trialLink}" class="free-trial-text">${trialText}</a>` : ''}
          </div>
          <div class="action-btn">
          ${link ? `<a href="${link}" class="website-btn">WEBSITE</a>` : ''}
          </div>
        </div>
      </div>
    </div>`;
  };

export default tableRow;
