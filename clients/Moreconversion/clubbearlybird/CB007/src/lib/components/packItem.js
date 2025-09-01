import { pricingData } from '../data/data';
import { formatPrice, getSavingsPercent } from '../helpers/utils';

const packItem = (item, price_max) => {
  const isFindItem = pricingData.find((data) =>
    data.unit.toLowerCase().trim().includes(item.label.toLowerCase().trim())
  );

  const html = `
    <div class="pack-option ${isFindItem.isActive ? 'pack-active' : ''}" data-key="${item.label}">
        <span>${item.label || isFindItem.unit}</span>
        <span>${formatPrice(item.price)}/pack</span>
        ${
          getSavingsPercent(price_max, item.price)
            ? `<span class="discount">Save ${getSavingsPercent(price_max, item.price)}%</span>`
            : ''
        }
    </div>
  `;
  return html.trim();
};

export default packItem;
