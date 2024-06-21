import { color } from './color';
import { plusIcon } from '../assets/icons';

export const colorSwatches = (id, data, colorMsg, THRESHOLD_IMAGE_NUMBER) => {
  const { colorArray, perSelectedColor } = data;
  const moreImages = colorArray.length > THRESHOLD_IMAGE_NUMBER + 1;

  const moreImagesContent = moreImages
    ? `<span class="${id}__icon" data-attr="more">${plusIcon}</span>`
    : '';

  const html = `
        <div class="${id}__colorSwatches">
            <div class="${id}__colorname"><span class="${id}__title" style="display:none;">${colorMsg} :</span><span class="${id}__color">${perSelectedColor}</span></div>
            <div class="${id}__colorBox">
                ${colorArray
                  .map((item, index) => color(id, item, index, perSelectedColor))
                  .join('\n')}
                 ${moreImagesContent}
            </div>
           
        </div>
    `;
  return html;
};
