import volumeDiscount from '../components/volumeDiscount';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const calculateDiscount = (quantity) => {
  let discount = 0;
  if (quantity >= 2 && quantity <= 5) {
    discount = 20;
  } else if (quantity >= 6 && quantity <= 10) {
    discount = 30;
  } else if (quantity >= 11 && quantity <= 20) {
    discount = 40;
  }
  return discount;
};

const addToBag = () => {
  const quantity = document.getElementById('item-quantity').value;
  const discount = calculateDiscount(quantity);
  const body = [{
    sizeVariantId: '27500685230',
    quantity,
    printessDetails: null,
    personalisation: [],
    isProductRec: false,
    name: 'All Court Trainers'
  }];
  fetch('https://www.sportsdirect.com/cart/add', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'content-type': 'application/json'
    },
    body: JSON.stringify(body),
    method: 'POST'
  }).then((response) => response.json())
    .then((data) => {
      console.log(`You have added ${quantity} items to your basket at a total of ${100 - discount}% saving you ${discount}%`);
    });
};

const init = () => {
  const attachPoint = document.querySelector('#productVariantAndPrice');
  attachPoint.insertAdjacentHTML('beforeend', volumeDiscount(ID));

  document.getElementById('item-quantity').addEventListener('input', (e) => {
    const quantity = e.target.value;
    const discount = calculateDiscount(quantity);
    document.getElementById('discount-percentage').innerText = `${discount}%`;
    document.getElementById('quantity-display').value = quantity;
  });
};

export default () => {
  setup();

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__addToBag`)) {
      addToBag();
    }
  });
};
