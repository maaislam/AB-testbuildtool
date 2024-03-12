import categoryCards from './components/categoryCards';
import { categoryData } from './data/categoryData';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('.filter-toolbar');

  const { pathname } = window.location;

  const data = categoryData[pathname];

  const htmlStr = `<div class="${ID}__container">
    <div class="scrollable-wrapper">
      ${categoryCards(ID, data)}
    </div>
  </div>`;

  anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);
};

export default () => {
  setup();

  init();
};
