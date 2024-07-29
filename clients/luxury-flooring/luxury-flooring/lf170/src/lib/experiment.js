import crossBtn from './components/crossBtn';
import fakeHeader from './components/fakeHeader';
import modal from './components/modal';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const handleCustomSearchClick = () => {
  document.body.classList.add('search_dialog_show');
};

const init = () => {
  if (!document.querySelector('.fakeHeader')) {
    document
      .querySelector("[for='minisearch-input-top-search'] ~ .control")
      .insertAdjacentHTML('beforebegin', fakeHeader());
  }

  if (!document.querySelector('.custom_cross_btn')) {
    document
      .querySelector("[for='minisearch-input-top-search'] ~ .control")
      .insertAdjacentHTML('beforeend', crossBtn());
  }

  if (!document.querySelector('.empty_div') || !document.querySelector('.custom_search_icon')) {
    document
      .querySelector("[for='minisearch-input-top-search'] ~ .control")
      .insertAdjacentHTML('afterbegin', modal());
  }

  if (window.innerWidth < 1024) {
    document.body.classList.add('search_dialog_show');
  }
};
export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('#minisearch-input-top-search')) {
      handleCustomSearchClick();
    } else if (target.closest('.custom_cross_btn')) {
      e.stopPropagation();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      if (window.innerWidth >= 1024) {
        document.body.classList.remove('search_dialog_show');
      } else {
        document.querySelector('.header-usps-search .block-title').click();
      }
    } else if (target.closest('.custom_search_icon')) {
      setTimeout(() => {
        document
          .querySelector('#minisearch-form-top-search button[type="submit"]:not([disabled])')
          ?.click();
      }, 100);
    } else if (
      target.closest('.header-usps-search .block-title:not(.c-header__main__sliding-pannel-button)')
    ) {
      handleCustomSearchClick();
    } else if (target.closest('.custom-overlay')) {
      document.body.classList.remove('search_dialog_show');
    }

    if (window.innerWidth < 1024) {
      if (document.querySelector('.block-search').classList.contains('active')) {
        setTimeout(() => {
          document.querySelector('.header-right').classList.add('custom_hide');
        }, 350);
      } else {
        document.querySelector('.header-right').classList.remove('custom_hide');
      }
    }
  });
  if (VARIATION === 'Control') return;

  init();
};
