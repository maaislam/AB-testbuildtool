import { colorSwatches } from '../data/data';
import { tickIcon } from '../assets/icons';

export const swatchItem = (ID, item, flag = false) => {
  const value = item.getAttribute('value');
  const colorCode = colorSwatches[value];
  if (!colorCode) return;
  const html = `
            <div class="${ID}__swatchItem ${
    flag ? `${ID}__selected` : ''
  }" value="${value}" style="background-color: ${colorCode};">
              ${tickIcon}
              </div>
            </div>
        `;

  //eslint-disable-next-line consistent-return
  return html;
};
