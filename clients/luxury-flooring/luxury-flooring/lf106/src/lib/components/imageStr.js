import { affordableFloors, luxuryService } from '../assets/icons';

export const imageStr = (id) => {
  const html = `
        <div class="${id}__images">
            <div class="${id}__images-item">${affordableFloors}</div>
            <div class="${id}__images-item">${luxuryService}</div>
        </div>
    `;
  return html;
};
