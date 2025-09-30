import { tickIcon } from '../assets/icons';

const uspWrapper = (id, data) => {
  const html = `
        <div class="${id}__uspWrapper">
            <div class="${id}__uspWrapper-list">
                ${data
                  .map((usp) => {
                    return `<div class="${id}__uspWrapper-list-item">
                        <span class="${id}__icon">${tickIcon}</span>
                        <span class="${id}__text">${usp}</span>
                    </div>`;
                  })
                  .join('\n')}
            </div>
        </div>
    `;
  return html.trim();
};

export default uspWrapper;
