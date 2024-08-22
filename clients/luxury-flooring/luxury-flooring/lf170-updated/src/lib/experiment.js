import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';
import fakeSearchBar from './components/fakeSearchBar';

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__modal`)) {
    document.querySelector('.page-wrapper').insertAdjacentHTML('beforebegin', modal(ID));
  }

  if (!document.querySelector(`.${ID}__fakeSearchBar`)) {
    document
      .querySelector('.header-usps-search > .block.block-search')
      .insertAdjacentHTML('afterend', fakeSearchBar(ID));
  }

  if (!document.querySelector(`.${ID}__modal .header-usps-search .block.block-search`)) {
    document
      .querySelector(`.${ID}__modal .header-usps-search`)
      .insertAdjacentElement(
        'beforeend',
        document.querySelector(
          `.header-usps-search > .block.block-search:not(.${ID}__fakeSearchBar)`
        )
      );
  }
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return; //
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (
      target.closest(`.${ID}__fakeSearchBar .block-content #minisearch-form-top-search`) &&
      target.closest(`.${ID}__fakeSearchBar .control`)
    ) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      const input = document.querySelector(`.${ID}__modal input`);
      input.value = '';
      input.focus();
    } else if (target.closest('.custom_cross_btn')) {
      document.querySelector(`.${ID}__modal`).classList.add('hide_content');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (target.closest('.bg-overlay')) {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        document.querySelector(`.${ID}__modal`).classList.add('hide_content');
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else if (
      target.closest(`.${ID}__fakeSearchBar .block.block-title`) &&
      target.closest(`.${ID}__fakeSearchBar`)
    ) {
      document.querySelector(`.${ID}__modal`).classList.remove('hide_content');
      setTimeout(() => {
        document.querySelector(`.${ID}__modal .block.block-content`).removeAttribute('style');
        const input = document.querySelector(`.${ID}__modal input`);
        input.value = '';
        input.focus();
      }, 100);
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
