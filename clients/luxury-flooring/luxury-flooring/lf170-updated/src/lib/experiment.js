import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import modal from './components/modal';
import fakeSearchBar from './components/fakeSearchBar';

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__modal`)) {
    document.querySelector('.page-wrapper').insertAdjacentHTML('beforebegin', modal(ID));
  }

  if (!document.querySelector('.custom_searchBar')) {
    document.querySelector('.header-usps-search').insertAdjacentHTML('afterend', fakeSearchBar());
  }

  if (!document.querySelector('.bg-overlay .search_content .header-usps-search')) {
    document
      .querySelector('.search_content')
      .insertAdjacentElement(
        'afterbegin',
        document.querySelector('.header-usps-search:not(.custom_searchBar)')
      );
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.custom_searchBar .block-content #minisearch-form-top-search')) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      const input = document.querySelector(`.${ID}__modal input`);
      input.value = '';
      input.focus();
    } else if (target.closest('.custom_cross_btn') || target.closest('.bg-overlay')) {
      document.querySelector(`.${ID}__modal`).classList.add('hide_content');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (target.closest('.block.block-title') && target.closest('.custom_searchBar')) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      setTimeout(() => {
        document.querySelector(`.${ID}__modal .block.block-content`).removeAttribute('style');
        const input = document.querySelector(`.${ID}__modal input`);
        input.value = '';
        input.focus();
      }, 500);
    } else if (
      target.closest('label[data-role="minisearch-label"]') &&
      target.closest(`.${ID}__modal`)
    ) {
      setTimeout(() => {
        document
          .querySelector('#minisearch-form-top-search button[type="submit"]:not([disabled])')
          ?.click();
      }, 100);
    }
  });

  init();
};
