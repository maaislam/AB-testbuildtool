import setup from './services/setup';
import shared from './shared/shared';
import { parseHTML } from './helpers/utils';
import categoryData from './data/data';
import newArrivalWrapper from './components/newArrivalWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.shopify-section.slidershow');
  if (!document.querySelector(`.${ID}__newArrivalWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', newArrivalWrapper(ID, categoryData));
  }

  parseHTML(categoryData)
    .then((data) => {
      const newArrivalProductsWrapper = document.querySelector(`.${ID}__newArrivalProducts`);
      newArrivalProductsWrapper.innerHTML = '';
      data.forEach((item) => {
        item.product.setAttribute('data-tag', item.tag);
        newArrivalProductsWrapper.insertAdjacentElement('beforeend', item.product);
      });

      document.querySelectorAll(`.${ID}__newArrivalProducts > x-cell`).forEach((item) => {
        const cardFooter = item.querySelector('.card-footer');
        const cardImage = item.querySelector('.card-image');
        cardImage.insertAdjacentElement('beforeend', cardFooter);
      });
    })
    .catch((error) => {
      //remove loader
    });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__newArrivalItem`)) {
      const clickedItem = target.closest(`.${ID}__newArrivalItem`);
      const { attr } = clickedItem.dataset;
      const wrapper = clickedItem.closest(`.${ID}__newArrivalWrapper`);
      wrapper.setAttribute('data-select', attr);

      const allActiveSteps = document.querySelectorAll(`.${ID}__newArrivalItem`);
      allActiveSteps.forEach((item) => item.classList.remove('active'));
      clickedItem.classList.add('active');
    }
  });

  init(); //
};
