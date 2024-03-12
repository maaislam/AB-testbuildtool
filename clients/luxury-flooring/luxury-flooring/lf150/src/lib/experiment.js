import categoryCards from './components/categoryCards';
import { categoryData } from './data/categoryData';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const isMobile = window.matchMedia('(max-width: 1023px)').matches;

  const anchorPoint = document.querySelector('.filter-toolbar');

  const { pathname } = window.location;

  const data = categoryData[pathname];

  const htmlStr = `<div class="${ID}__container">
    <div class="scrollable-wrapper">
      ${categoryCards(ID, data)}
    </div>
  </div>`;

  const isContainer = document.querySelector(`.${ID}__container`);

  if ((!isContainer && VARIATION !== '3') || (!isContainer && VARIATION === '3' && isMobile)) {
    anchorPoint.insertAdjacentHTML('beforebegin', htmlStr);
  } else if (!isContainer && VARIATION === '3' && !isMobile) {
    const categoryInfo = document.querySelector('.main .category-info');
    const headerTitle = document.querySelector('.main .page-title-wrapper-new');

    const wrapperHtml = `<div class="${ID}__wrapper">
      <div class="${ID}__categoryWrapper">
        <div class="${ID}__header"></div>
        <div class="${ID}__categories">
        
        </div>
      </div>
    </div>`;
    categoryInfo.insertAdjacentHTML('beforebegin', wrapperHtml);

    const wrapper = document.querySelector(`.${ID}__wrapper`);
    const header = document.querySelector(`.${ID}__wrapper .${ID}__header`);
    const categories = document.querySelector(`.${ID}__wrapper .${ID}__categories`);

    header.insertAdjacentElement('afterbegin', headerTitle);
    categories.insertAdjacentHTML('afterbegin', htmlStr);
    wrapper.insertAdjacentElement('beforeend', categoryInfo);
  }
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  init();
};
