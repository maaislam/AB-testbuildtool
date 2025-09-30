import { tooltipIcon } from '../assets/icons';

const prodDescriptionInfo = (id, data) => {
  const { descriptionIcon, descriptionText, subtext, features } = data;
  const html = `
    <div class="${id}__prodDescriptionWrapper">
      <p class="${id}__prodDescriptionWrapper-title">${subtext}</p>
      <div class="${id}__prodDescriptionWrapper-features">
        <div class="${id}__prodDescriptionWrapper-features-list">
            ${features
              .map((feature) => {
                return `
                <div class="${id}__prodDescriptionWrapper-features-list-item">
                  <span class="${id}__icon">${feature.icon}</span>
                  <span class="${id}__title">${feature.title}</span>
                  ${
                    feature.isTooltip
                      ? `
                       <span class="${id}__tooltipBox">
                            <span class="${id}__tooltipBox-icon">${tooltipIcon}</span>
                            <span class="${id}__tooltipBox-text">${feature.tooltipText}</span>
                        </span>
                    `
                      : ''
                  }      
                </div>
                `;
              })
              .join('')}
        </div>
      </div>
      <p class="${id}__prodDescriptionWrapper-description">
        <span class="${id}__icon">${descriptionIcon}</span>
        <span class="${id}__text">${descriptionText}</span>
      </p>
    </div>
  `;
  return html.trim();
};

export default prodDescriptionInfo;
