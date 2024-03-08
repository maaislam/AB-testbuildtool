import colorItem from './colorItem';

const colorStr = (ID, data) => {
  const html = `
        <div class="${ID}__color-swatch" >
          <div class="text-xs text-bold text-caps" style="margin-bottom:12px">Color</div>
          <div class="${ID}__color-section">
              ${data.map((item) => colorItem(ID, item)).join('\n')}
          </div>
        </div>
    `;

  return html.trim();
};

export default colorStr;
