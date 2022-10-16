import productRow from './productRow';

const productRows = (id, data) => {
  const htmlStr = `
    <div class="${id}__samples">
        ${data.map((dataObj) => productRow(id, dataObj)).join('\n')}
    </div>
  `;

  return htmlStr.replace();
};

export default productRows;
