//import { formatPrice } from '../helpers/utils';

//eslint-disable-next-line default-param-last
export const bulkMessage = (element, ID, Highest_Number, data, mainProdPrice) => {
  const { quantity: dataQuantity, showPrice: dataShowPrice, actualPrice } = data;
  console.log(data, mainProdPrice);

  const percentageSaving = ((mainProdPrice - actualPrice) / mainProdPrice) * 100;

  let bulkMessageStr;
  document.querySelector(`.${ID}_bulk_message[data-item="${dataQuantity}"]`)?.remove();
  if (data) {
    bulkMessageStr = `<p class="product name product-item-name ${ID}_bulk_message" data-item="${dataQuantity}">
      <strong>Bestel ${dataQuantity} verpakkingen </strong>
      met GRATIS verzending en bespaar ${percentageSaving.toFixed(0)}%
    </p>
    ${Highest_Number === dataQuantity ? '<div class="hightest_badge">voordeligste keuze</div>' : ''}
    `;
  }

  element.querySelector('p.product').insertAdjacentHTML('beforebegin', bulkMessageStr);
};
