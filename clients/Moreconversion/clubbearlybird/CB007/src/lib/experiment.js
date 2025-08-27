import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import variantsWrapper from './components/variantsWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.zpa-product-wrapper');
  if (!document.querySelector(`.${ID}__product-selection`)) {
    targetPoint.insertAdjacentHTML('beforebegin', variantsWrapper(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.active-option')) {
      const clickedItem = target.closest('.active-option');
      const wrapper = clickedItem.closest('.delivery-options');
      wrapper.classList.toggle('active');

      const flavorWrapper = document.querySelector('.flavor-mobile');
      if (flavorWrapper) flavorWrapper.classList.remove('active');
    } else if (target.closest('.option-item')) {
      const wrapper = document.querySelector('.delivery-options');
      const clickedItem = target.closest('.option-item');
      const text = clickedItem.textContent;
      const targetPoint = document.querySelector('.active-option span');
      if (targetPoint) targetPoint.textContent = text;
      if (wrapper) wrapper.classList.remove('active');
    } else if (target.closest('.pack-option')) {
      const clickedItem = target.closest('.pack-option');
      const activeItems = document.querySelectorAll('.pack-option.pack-active');
      activeItems.forEach((item) => {
        item.classList.remove('pack-active');
      });
      clickedItem.classList.add('pack-active');
    } else if (target.closest('.flavor-option') && target.closest('.flavor-desktop')) {
      const clickedItem = target.closest('.flavor-option');
      const activeItems = document.querySelectorAll('.flavor-option.flavor-active');
      activeItems.forEach((item) => {
        item.classList.remove('flavor-active');
      });
      clickedItem.classList.add('flavor-active');
    } else if (target.closest('.active-flavor') && target.closest('.flavor-mobile')) {
      const clickedItem = target.closest('.active-flavor');
      const wrapper = clickedItem.closest('.flavor-mobile');
      wrapper.classList.toggle('active');

      const subscribeWrapper = document.querySelector('.delivery-options');
      if (subscribeWrapper) subscribeWrapper.classList.remove('active');
    } else if (target.closest('.flavor-option') && target.closest('.flavor-options-hidden')) {
      const wrapper = document.querySelector('.flavor-mobile');
      const clickedItem = target.closest('.flavor-option');
      const text = clickedItem.querySelector('span:last-child').textContent;
      const icon = clickedItem.querySelector('span:first-child').innerHTML;

      const targetPoint = document.querySelector('.active-flavor');
      if (targetPoint) {
        targetPoint.querySelector('span:nth-child(2)').textContent = text;
        targetPoint.querySelector('span:first-child').innerHTML = icon;
      }
      if (wrapper) wrapper.classList.remove('active');
    } else if (!target.matches('.active-option') || !target.matches('.active-flavor')) {
      const wrapper = document.querySelector('.delivery-options');
      if (wrapper) wrapper.classList.remove('active');

      const flavorWrapper = document.querySelector('.flavor-mobile');
      if (flavorWrapper) flavorWrapper.classList.remove('active');
    }
  });
  init();
};
