import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import calculateBox from './components/calculateBox';
import totalPriceStr from './components/totalPriceStr';

const { ID, VARIATION } = shared;

const renderDomPriceElement = (element, totalPrice) => {
  const targetPoint = element.querySelector('.product-item-details');
  if (targetPoint.querySelector(`.${ID}__totalPrice`)) {
    targetPoint.querySelector(`.${ID}__totalPrice`).remove();
  }
  targetPoint.insertAdjacentHTML('afterbegin', totalPriceStr(ID, totalPrice));
};

const removePriceElement = () => {
  const priceElements = document.querySelectorAll(`.${ID}__totalPrice`);
  priceElements.forEach((element) => {
    element.remove();
  });
};

const calculateTotalPrice = (packSize, quantity, oneSqmPrice) => {
  const priePerPack = packSize * oneSqmPrice;
  const quantityRequired = Math.ceil(quantity / packSize);
  const totalPrice = priePerPack * quantityRequired;

  return totalPrice;
};

//Network call function
const fetchProductData = (productCard) => {
  const inputValue = document.querySelector(`.${ID}__calculateBox input`)?.value;
  if (!inputValue) {
    return;
  }
  const getPackSize = () => parseFloat(productCard.dataset.packsize);
  if (productCard.dataset.packsize) {
    //code for calculating
    const packSize = getPackSize();
    const quantity = parseInt(document.querySelector(`.${ID}__calculateBox input`)?.value);
    const oneSqmPrice = parseFloat(productCard.querySelector('.price').textContent.split('£')[1]);
    const totalPrice = calculateTotalPrice(packSize, quantity, oneSqmPrice);
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
          const totalPrice = calculateTotalPrice(packetSize, quantity, oneSqmPrice);
          renderDomPriceElement(productCard, totalPrice);
        }
      }
    })
    .catch((error) => console.error('Error fetching product data:', error));
};

//Intersection Observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const productCard = entry.target;
      fetchProductData(productCard);
      observer.unobserve(productCard);
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const quantityInputHandler = () => {
  const inputValue = document.querySelector(`.${ID}__calculateBox input`).value;

  if (inputValue) {
    const clearTextElement = document.querySelector(`.${ID}__clearText`);
    clearTextElement.classList.remove(`${ID}__hide`);
    const productCards = document.querySelectorAll(`.item.product.${ID}__loaded-product`);
    productCards.forEach((card) => observer.observe(card));
  }
};

const paginationHandler = () => {
  const productCards = document.querySelectorAll(`.item.product:not(.${ID}__loaded-product)`);

  productCards.forEach((card) => {
    card.classList.add(`${ID}__loaded-product`);
    observer.observe(card);
  });
};

const init = () => {
  const targetElement = document.querySelector('.category-info');
  if (!document.querySelector(`.${ID}__calculateBox`)) {
    targetElement.insertAdjacentHTML('afterend', calculateBox(ID));
  }

  const productCards = document.querySelectorAll('.item.product');
  productCards.forEach((card) => {
    card.classList.add(`${ID}__loaded-product`);
  });
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__clearText`)) {
      const inputElement = document.querySelector(`.${ID}__calculateBox input`);
      const clearTextElement = document.querySelector(`.${ID}__clearText`);
      inputElement.value = '';
      clearTextElement.classList.add(`${ID}__hide`);
      removePriceElement();
    }
  });

  init();

  const calculateForm = document.querySelector(`.${ID}__calculateBox form`);
  const inputElement = calculateForm.querySelector('input');
  inputElement.addEventListener('input', (e) => {
    if (!e.target.value) {
      const clearTextElement = document.querySelector(`.${ID}__clearText`);
      clearTextElement.click();
    }
  });
  calculateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    quantityInputHandler();
  });

  observeDOM('.column.main', paginationHandler);
};
