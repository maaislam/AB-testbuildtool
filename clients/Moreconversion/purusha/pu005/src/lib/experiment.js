import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const plusIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M11.7296 16.4718V8.97182H13.0024V16.4718H11.7296ZM8.61599 13.3582V12.0855H16.116V13.3582H8.61599Z" fill="black"/>
  <circle cx="12.3667" cy="12.8542" r="11.5" stroke="black"/>
  </svg>`;
  const atc = document.querySelector('.ProductForm__BuyButtons');
  const atcBtnInner = atc.querySelector('span');
  if (!atcBtnInner) return;

  atcBtnInner.classList.add(`${ID}__atc-btn-inner`);
  atcBtnInner.innerHTML = `${plusIcon} <span>Add to Basket</span>`;
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    //console.log('in');
    setTimeout(init, 500);
  });
};
