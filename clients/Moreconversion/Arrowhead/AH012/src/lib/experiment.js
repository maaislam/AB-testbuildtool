import setup from './services/setup';
import shared from './shared/shared';
import searchForm from './components/searchForm';
import searchFormMobile from './components/searchFormMobile';

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
    controlPageWidth.insertAdjacentHTML(
      'afterend',
      searchFormMobile(ID, 'mobile-search', searchValue)
    );
  }
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__cross`)) {
      const targetElm = target.closest(`.${ID}__cross`);
      const mainElement = targetElm.closest(`.${ID}__formWrapper`);
      const inputElement = mainElement.querySelector('input[type="search"]');
      inputElement.value = '';
      inputElement.focus();
    }
  });

  if (VARIATION === 'Control') return;

  init();
};
