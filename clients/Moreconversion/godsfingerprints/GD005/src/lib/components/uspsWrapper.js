import { freeplacementIcon, guaranteeIcon, preminumIcon } from '../assets/icons';

const uspsWrapper = (id) => {
  const html = `
    <div class="${id}__usps-wrapper">
      <div class="${id}__usps-container">
            <div class="${id}__usps-item">
                <div class="${id}__icon">${guaranteeIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">100% Satisfaction Guarantee</p>
                  <p class="${id}__text">Free replacements and refunds</p>
                </div>
            </div>
            <div class="${id}__usps-item">
                <div class="${id}__icon">${freeplacementIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">Premium museum quality art prints</p>
                  <p class="${id}__text">All prints and frames are made in the USA</p>
                </div>
            </div>
            <div class="${id}__usps-item">
                <div class="${id}__icon">${preminumIcon}</div>
                <div class="${id}__textWrapper">
                  <p class="${id}__highlight">Every purchase supports vulnerable children</p>
                  <p class="${id}__text">Every order helps fund Alongsiders International</p>
                </div>
            </div>
      </div>
      
    </div>
  `;
  return html.trim();
};

export default uspsWrapper;
