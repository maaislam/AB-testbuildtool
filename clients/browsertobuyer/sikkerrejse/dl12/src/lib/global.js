import { pollerLite } from './helpers/utils';

export default () => {
  console.log('hello');
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('button.open-input')) {
      pollerLite(['.search-wrap.active #searchInput'], () => {
        const inputElement = document.querySelector('.search-wrap.active #searchInput');
        inputElement.focus();
      });
    }
  });
};
