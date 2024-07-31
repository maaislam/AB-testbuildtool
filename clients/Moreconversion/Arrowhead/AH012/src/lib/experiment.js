import setup from './services/setup';
import shared from './shared/shared';
import searchForm from './components/searchForm';

const { ID, VARIATION } = shared;

const init = () => {
  const url = new URL(window.location.href);
  const searchValue = url.searchParams.get('q');
  const targetPoint = document.querySelector('.site-nav__icons');
  const controlPageWidth = document.querySelector('header .page-width');
  //DESKTOP
  if (!document.querySelector(`.${ID}__searchForm.desktop-search`)) {
    targetPoint.insertAdjacentHTML('beforebegin', searchForm(ID, 'desktop-search', searchValue));
  }

  //mobile
  if (!document.querySelector(`.${ID}__searchForm.mobile-search`)) {
    controlPageWidth.insertAdjacentHTML('afterend', searchForm(ID, 'mobile-search', searchValue));
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'Control') return;

  init();
};
