import totalPriceStr from '../components/totalPriceStr';
import shared from '../shared/shared';

const { ID } = shared;

const calculateTotalPrice = (packSize, quantity, oneSqmPrice, pricePerPack) => {
  const pricePerPacket = packSize * oneSqmPrice;
  const quantityRequired = Math.ceil(quantity / packSize);
  const totalPrice = (pricePerPack || pricePerPacket) * quantityRequired;

  return totalPrice;
};

const fetchProductData = (productCard) => {
  const inputValue = document.querySelector(`.${ID}__calculateBox input`)?.value;
  if (!inputValue) {
    return;
  }
  const renderDomPriceElement = (element, totalPrice) => {
    const targetPoint = element.querySelector('.product-item-details');
    if (targetPoint.querySelector(`.${ID}__totalPrice`)) {
      targetPoint.querySelector(`.${ID}__totalPrice`).remove();
    }
    targetPoint.insertAdjacentHTML('afterbegin', totalPriceStr(ID, totalPrice));
  };
  const getPackSize = () => parseFloat(productCard.dataset.packsize);
  if (productCard.dataset.packsize) {
    //code for calculating
    const packSize = getPackSize();
    const quantity = parseInt(document.querySelector(`.${ID}__calculateBox input`)?.value);
    const oneSqmPrice = parseFloat(productCard.querySelector('.price').textContent.split('£')[1]);

    const pricePerPack = parseFloat(productCard.dataset.priceperpack);

    const totalPrice = calculateTotalPrice(packSize, quantity, oneSqmPrice, pricePerPack);
    renderDomPriceElement(productCard, totalPrice);
    return;
  }

  const productUrl = productCard.querySelector('a.product-item-photo').href;
  //Example network call
  fetch(productUrl)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const packSize = doc.getElementById('attr_pack_size');
      const pricePerpackElem = doc.querySelector('.flooring-price-pack-price .price-wrapper');

      const pricePerPack = parseFloat(pricePerpackElem.getAttribute('data-price-amount'));
      productCard.setAttribute('data-pricePerPack', pricePerPack);

      if (packSize) {
        const packSizeNumber = parseFloat(packSize.textContent.trim().split('m²')[0]);
        if (packSizeNumber) {
          productCard.setAttribute('data-packSize', packSizeNumber);
          //code for calculation
          const packetSize = getPackSize();
          const quantity = parseInt(document.querySelector(`.${ID}__calculateBox input`).value);
          const oneSqmPrice = parseFloat(
            productCard.querySelector('.price').textContent.split('£')[1]
          );

          const totalPrice = calculateTotalPrice(packetSize, quantity, oneSqmPrice, pricePerPack);
          renderDomPriceElement(productCard, totalPrice);
        }
      }
    })
    .catch((error) => console.error('Error fetching product data:', error));
};

export default fetchProductData;
