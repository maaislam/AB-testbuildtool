import priceBlock from './priceBlock';
import quantitySelector from './quantitySelector';

const cartItem = (testId, data) => {
  console.log(data);

  const { image, key, product_id, product_title, sku, url, variant_id, variant_title } = data;

  const title = product_title.split('|')[0];

  const htmlStr = `
            <div class="${testId}__cartItem" data-key=${key} data-sku=${sku} data-prdid="${product_id}" data-varid="${variant_id}">
                <div class="${testId}__cartItem--imgWrapper">
                    <img src="${image}"
                        alt="${title}">
                </div>
                <div class="${testId}__cartItem--info">
                    <a href="${url}" class="title">${title}</a>
                    <div class="subtitle">${variant_title}</div>
                    ${priceBlock(testId, data)}
                    <div class="quantity-wrapper">
                        ${quantitySelector(testId, data)}
                    </div>
                    <div class="${testId}__cartItem--remove"></div>
                </div>
            </div>`;

  return htmlStr;
};

export default cartItem;
