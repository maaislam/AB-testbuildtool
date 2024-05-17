import { sampleIcon } from '../assets/icons';

export const floorStr = (id) => {
  const html = `
    <div class="${id}__floorStr">
        <div class="${id}__floorStr-icon">${sampleIcon}</div>
        <div class="${id}__floorStr-text">Our floors look even better in person</div>
    </div>
  `;
  return html;
};
