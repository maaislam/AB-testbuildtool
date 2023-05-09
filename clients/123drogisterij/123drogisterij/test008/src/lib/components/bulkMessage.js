import { formatPrice } from '../helpers/utils';

//eslint-disable-next-line default-param-last
export const bulkMessage = (element, ID, Highest_Number, data) => {
  const { quantity: dataQuantity, showPrice: dataShowPrice } = data;

  let bulkMessageStr;
  document.querySelector(`.${ID}_bulk_message[data-item="${dataQuantity}"]`)?.remove();
  if (data) {
    bulkMessageStr = `<p class="product name product-item-name ${ID}_bulk_message" data-item="${dataQuantity}">
      <strong>Bestel ${dataQuantity} verpakkingen </strong>
      met GRATIS verzending en bespaar ${formatPrice(dataShowPrice)} euro
    </p>
    ${Highest_Number === dataQuantity ? '<div class="hightest_badge">voordeligste keuze</div>' : ''}
    `;
  }

  element.querySelector('p.product').insertAdjacentHTML('beforebegin', bulkMessageStr);
};
