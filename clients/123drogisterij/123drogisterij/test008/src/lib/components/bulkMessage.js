import { formatPrice } from '../helpers/utils';

//eslint-disable-next-line default-param-last
export const bulkMessage = (data, element, ID, Highest_Number) => {
  let bulkMessageStr;
  document
    .querySelector(
      `.${ID}_bulk_message[data-item="${data.length && data[0].quantity ? data[0].quantity : 1}"]`
    )
    ?.remove();
  if (data.length) {
    bulkMessageStr = `<p class="product name product-item-name ${ID}_bulk_message" data-item="${
      data[0].quantity
    }">
      <strong>Bestel ${data[0].quantity} verpakkingen </strong>
      met GRATIS verzending en bespaar ${formatPrice(data[0].showPrice)} euro
    </p>
    ${
      Highest_Number === data[0].quantity
        ? '<div class="hightest_badge">voordeligste keuze</div>'
        : ''
    }
    `;
  } else {
    bulkMessageStr = `<p class="product name product-item-name ${ID}_bulk_message" data-item="1">
      <strong>Bestel 1 verpakkingen </strong>
      met GRATIS verzending en bespaar 4.95 euro
    </p>`;
  }

  element.querySelector('p.product').insertAdjacentHTML('beforebegin', bulkMessageStr);
};
