import { rightArrow } from '../data/icon';

export const slider = (id, item, index) => {
  const html = `
    <a class="${id}__casinoSlider-item" href="${item.casinoLink}" data-index="${
    index + 1
  }" target="_blank">
        <div class="${id}__casinoSlider-item-image">
            <img src="${item.imageURL}"/>       
        </div>   
        <div class="${id}__casinoSlider-item-icon">
          ${rightArrow}
        </div>
    </a>
  `;
  return html.trim();
};
