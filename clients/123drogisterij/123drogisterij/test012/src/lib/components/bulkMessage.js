//import { formatPrice } from '../helpers/utils';

//eslint-disable-next-line default-param-last
export const bulkMessage = (element, ID, data, lowestSaver) => {
  const { qty: dataQuantity, price } = data;

  const mainPriceElem = document.querySelector('label[data-lowest]').dataset.price;
  const productAcutalPrice = parseFloat(mainPriceElem);

  if (lowestSaver === dataQuantity) return;

  const percentageSaving = ((productAcutalPrice - price) / productAcutalPrice) * 100;

  let bulkMessageStr;
  document.querySelector(`.${ID}_bulk_message[data-item="${dataQuantity}"]`)?.remove();
  if (data) {
    bulkMessageStr = `<p class="product name product-item-name ${ID}_bulk_message" data-item="${dataQuantity}">
      <strong>Bestel ${dataQuantity} verpakkingen </strong>
      met GRATIS verzending en bespaar ${percentageSaving.toFixed(0)}%
    </p>
    `;
  }

  const productElement = element.querySelector('p.product');
  if (productElement) {
    productElement.innerHTML = bulkMessageStr;
  }
};
