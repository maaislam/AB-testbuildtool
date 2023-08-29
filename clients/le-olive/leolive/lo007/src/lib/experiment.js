import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
  ////-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here

  console.log('leolive');
  //execution time console log
  const start = new Date().getTime();

  const productWrapper = document.querySelector('.product-form__header');
  const kidSizeBtn = document.querySelector('.product-form__kids-size');
  const productOptions = document.querySelector('.product-form__options');
  const productSizeTitle = document.querySelector('.product-form__options-title');
  if (productOptions) {
    productOptions.classList.add('hide_content');
  }
  if (document.querySelector('.product-form__kids-size a')) {
    document.querySelector('.product-form__kids-size a').classList.remove('btn', 'btn--primary');
  }

  productSizeTitle.insertAdjacentHTML(
    'afterend',
    `<div class='selected_size_wrapper'>
  <div class='selected_size'></div>
  </div>`
  );

  const selectedSize = document.querySelector('.selected_size');
  const selectedSizeWrapper = document.querySelector('.selected_size_wrapper');

  selectedSize.innerHTML = document.querySelector('.product-form__options li.active').innerHTML;

  selectedSize.insertAdjacentElement('afterend', productOptions);

  selectedSizeWrapper.insertAdjacentHTML(
    'beforeend',
    "<img class='dropdow_arrow' src='https://us.le-olive.com/cdn/shop/t/114/assets/dark-down-icon.png'>"
  );

  if (kidSizeBtn) {
    productWrapper.insertAdjacentElement('beforeend', kidSizeBtn);
  }

  document.querySelector('.selected_size').addEventListener('click', (e) => {
    //console.log('clicked');
    productOptions.classList.toggle('hide_content');
    selectedSize.classList.add('active-border');
  });

  document.body.addEventListener('click', (e) => {
    if (!document.querySelector('.product-form__options-wrapper').contains(e.target)) {
      productOptions.classList.add('hide_content');
    }
  });

  document.querySelectorAll('.product-form__options li').forEach((el) => {
    el.addEventListener('click', (e) => {
      selectedSize.innerText = e.target.innerText;
      productOptions.classList.add('hide_content');
      //document.querySelector('.dropdow_arrow').classList.add('hide_content');
    });
  });

  //execution time console log
  const end = new Date().getTime();
  const time = end - start;
  console.log('Execution time: ' + time);

  //-----------------------------
  //...
};
