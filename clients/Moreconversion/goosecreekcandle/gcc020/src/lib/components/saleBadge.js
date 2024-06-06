import { saleIcon } from '../assets/icons';

export const saleBadge = (id) => {
  const html = `
    <div class="${id}__saleBadge">
      <div class="${id}__icon">${saleIcon}</div>
      <span>SALE</span>
    </div>
  `;
  return html;
};
