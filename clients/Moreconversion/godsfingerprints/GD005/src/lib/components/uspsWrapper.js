import { freeplacementIcon, guaranteeIcon, preminumIcon } from '../assets/icons';

const uspsWrapper = (id) => {
  const html = `
    <div class="${id}__usps-wrapper">
      <div class="${id}__usps-container">
            <div class="${id}__usps-item">
                <div class="${id}__icon">${guaranteeIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">100%</p>
                  <p class="${id}__text">SATISFACTION GUARANTEE</p>
                </div>
            </div>
            <div class="${id}__usps-item">
                <div class="${id}__icon">${freeplacementIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">FREE</p>
                  <p class="${id}__text">REPLACEMENTS &&nbsp;REFUNDS</p>
                </div>
            </div>
            <div class="${id}__usps-item">
                <div class="${id}__icon">${preminumIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">PREMIUM</p>
                  <p class="${id}__text">MUSEUM QUALITY ART PRINTS</p>
                </div>
            </div>
      </div>
      
    </div>
  `;
  return html.trim();
};

export default uspsWrapper;
