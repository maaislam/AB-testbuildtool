import { productOption } from './productOption';

const productOptions = (id, data, prices) => {
  const html = `
    <div class="${id}__productOptions" data-price='${JSON.stringify(prices)}'>
      <div class="${id}__productOptionsConatiner">
        ${data.map((item) => productOption(id, item)).join('\n')}
      </div>
    </div>
  `;
  return html.trim();
};

export default productOptions;
