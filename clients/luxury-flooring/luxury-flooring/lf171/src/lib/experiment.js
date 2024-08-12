import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import calculateBox from './components/calculateBox';
import fetchProductData from './helpers/fetchProductData';

const { ID, VARIATION } = shared;

const removePriceElement = () => {
  const priceElements = document.querySelectorAll(`.${ID}__totalPrice`);
  priceElements.forEach((element) => {
    element.remove();
  });
};

//Intersection Observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4
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
  calculateForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    quantityInputHandler();
  });

  observeDOM('.column.main', paginationHandler);
};
