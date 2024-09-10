import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM, pollerLite } from './helpers/utils';
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

    localStorage.setItem(
      `${ID}__value`,
      JSON.stringify({
        path: window.location.pathname,
        value: inputValue
      })
    );

    const firstItem = document.querySelector('.filter-toolbar');
    firstItem.scrollIntoView({
      behavior: 'smooth'
    });
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

  const inputValue = localStorage.getItem(`${ID}__value`);

  if (!inputValue) return;
  const { path, value } = JSON.parse(inputValue);

  if (path === window.location.pathname && value) {
    const inputElement = document.querySelector(`.${ID}__calculateBox form input`);
    inputElement.value = value;
    quantityInputHandler();
  } else if (path !== window.location.pathname && value) {
    window.localStorage.removeItem(`${ID}__value`);
  }
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
      window.localStorage.removeItem(`${ID}__value`);
    } else if (target.closest(`.${ID}__options-price`)) {
      const calBox = document.querySelector(`.${ID}__calculateBox`);
      calBox.classList.toggle('open');
    } else if (target.closest(`.${ID}__options-visualiser`)) {
      pollerLite(
        [() => window.roomvo && typeof window.roomvo.startStandaloneVisualizer === 'function'],
        () => {
          window.roomvo.startStandaloneVisualizer();
        }
      );
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
