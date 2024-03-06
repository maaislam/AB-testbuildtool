//eslint-disable-next-line import/named
import { colorSwatches } from '../data/data';

const colorItem = (ID, item) => {
  const ischecked = item.querySelector('input').checked;
  const color = item.querySelector('input').value;

  const html = `
        <div class="${ID}__color-item" data-value="${color}"
            style="${ischecked ? `border: solid 2px ${colorSwatches[color]};` : ''}">
            <span style="background:${colorSwatches[color]};"></span>
        </div>
    `;

  return html.trim();
};

export default colorItem;
