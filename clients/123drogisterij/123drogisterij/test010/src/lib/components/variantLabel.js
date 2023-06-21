import { formatPrice } from '../helpers/utils';

const variantlabel = (id, variant, highestSaver) => {
  const { qty, price, saving } = variant;
  const isDefault = saving === 0;

  const htmlStr = `
    <label class="${id}__variant custom-child-upsel-one custom-child-upsel-checkbox 
        ${isDefault ? 'active' : ''}" data-quantity="${qty}" data-price="${price}">
        <input 
            type="radio" id="${id}__upsellnewprod" name="${id}__upsellnewprod" class="${id}__upsellnewprod" value="${qty}">
        ${
          isDefault
            ? '<div class="inner-custm-add-prod-upsell"><p class="product name product-item-name">Kies standaard verpakking</p></div>'
            : ` <div class="inner-custm-add-prod-upsell">
                    <p class="product name product-item-name ${id}__bulkmessage" data-item="${price}">
                    <strong>Bestel ${qty} verpakkingen</strong> 
                        met GRATIS verzending en bespaar ${formatPrice(saving)} euro</p>
                </div>`
        }
        
        ${saving === highestSaver ? '<div class="highest_badge">voordeligste keuze</div>' : ''}
        
    </label>`;

  return htmlStr;
};

export default variantlabel;
