import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorPoint = document.querySelector('.product-form__buttons');
  const productForm = anchorPoint.closest('form');
  productForm.classList.add(`${ID}__product-form`);
  const noDomain = window.location.href.includes('no.minimeis.com');

  const findStoreBtn = `<div class="${ID}__findstore ${noDomain ? 'no-domain' : ''}">
    <a href="/pages/find-a-store">
      <h3>FIND A STORE</h3> 
    </a>  
  </div>`;
  if (document.querySelector(`.${ID}__findstore`)) return;
  anchorPoint.insertAdjacentHTML('afterend', findStoreBtn);
};
