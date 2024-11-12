import { tooltipIcon } from '../assets/icons';

const contact = (id, data) => {
  const html = `
    <div class="${id}__contactWrapper">
        <div class="${id}__contactContainer">
          ${
            data['Risk if you contract']
              ? `
              <div class="${id}__title">
                <div class="${id}__icon">${tooltipIcon}</div>
                <div class="${id}__text">Risk if you contract</div>
              </div>
              <div class="${id}__subtitle">${data['Risk if you contract']}</div>   
            `
              : ''
          }

          ${
            data['Additional precautions'] !== 'N/A'
              ? `
               <div class="${id}__footer">
                <div class="${id}__footer-text">Additional precautions</div>
                <div class="${id}__footer-subtext">${data['Additional precautions']}</div>
            </div>
            `
              : ''
          }     
        </div>
    </div>
  `;
  return html.trim();
};

export default contact;
