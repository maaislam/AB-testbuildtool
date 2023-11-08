import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  if (document.querySelector('.selected_size_wrapper')) {
    return;
  }
  setup();
  //execution time console log
  const start = new Date().getTime();

  const productWrapper = document.querySelector('.product-form__header');
  const kidSizeBtn = document.querySelector('.product-form__kids-size');
  const productOptions = document.querySelector('.product-form__options');
  const allProductOption = document.querySelectorAll('.product-form__options li');
  const productSizeTitle = document.querySelector('.product-form__options-title');
  const isBaby = () => document.body.classList.contains('baby-wrapper');

  if (productOptions) {
    productOptions.classList.add('hide_content');
  }
  if (document.querySelector('.product-form__kids-size a')) {
    //document.querySelector('.product-form__kids-size a').classList.remove('btn', 'btn--primary');
  }

  productSizeTitle.insertAdjacentHTML(
    'afterend',
    `<div class='selected_size_wrapper'>
  <div class='selected_size'></div>
  </div>`
  );

  const selectedSize = document.querySelector('.selected_size');
  const selectedSizeWrapper = document.querySelector('.selected_size_wrapper');
  const activeOption = document.querySelector('.product-form__options li.active');
  const firstOption = document.querySelector('.product-form__options li');

  if (activeOption) {
    selectedSize.innerHTML = activeOption.innerHTML;
  } else {
    selectedSize.innerHTML = firstOption.innerHTML;
  }
  //selectedSize.innerHTML = document.querySelector('.product-form__options li.active').innerHTML;

  selectedSize.insertAdjacentElement('afterend', productOptions);

  selectedSizeWrapper.insertAdjacentHTML(
    'beforeend',
    "<img class='dropdow_arrow' src='https://us.le-olive.com/cdn/shop/t/114/assets/dark-down-icon.png'>"
  );

  if (kidSizeBtn && !isBaby()) {
    productWrapper.insertAdjacentElement('beforeend', kidSizeBtn);
  }

  document.querySelector('.selected_size').addEventListener('click', () => {
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

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.ps__klaviyo-popup__container .ps__klaviyo-popup__bg') || target.closest('.ps__klaviyo-popup__container .ps__klaviyo-popup__close')) {
      let isSelected = false;
      allProductOption.forEach((productOption) => {
        if (!productOption.classList.contains('disabled') && !isSelected) {
          productOption.click();
          isSelected = true;
        }
      });
    }
  });
};
