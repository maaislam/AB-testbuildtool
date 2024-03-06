import colorItem from './colorItem';
const colorStr = (ID, data) => {
  const html = `
        <div class="${ID}__color-section">
            ${data.map((item) => colorItem(ID, item)).join('\n')}
        </div>
    `;

  return html.trim();
};

export default colorStr;
