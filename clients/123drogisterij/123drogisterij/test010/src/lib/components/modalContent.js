import { formatPrice } from '../helpers/utils';
import variantLabels from './variantLabels';

const modalContent = (id, data, sku) => {
  const { title, img, variants } = data;
  const htmlStr = `
    
    <div class="${id}__modalcontent">
        <div class="prodact-image">
            <img src="${img}" alt="${title}">
        </div>
        <div class="product-details">
            <div class="title">${title}</div>
            <div class="price">
                ${formatPrice(variants.find((item) => item.saving === 0).price)}
            </div>
            ${variantLabels(id, variants, sku)}
            <div class="ppatc__popup-footer">
                <button type="button" class="ppatc__popup-btn ${id}__atc">In winkelmand</button>
            </div>
        </div>
    </div>
  `;
  return htmlStr;
};
export default modalContent;
