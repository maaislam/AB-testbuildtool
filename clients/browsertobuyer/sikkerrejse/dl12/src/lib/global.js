import { pollerLite } from './helpers/utils';
import trackGA4Event from './services/gaTracking';

export default () => {
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('button.open-input')) {
      pollerLite(['.search-wrap.active #searchInput'], () => {
        const inputElement = document.querySelector('.search-wrap.active #searchInput');
        inputElement.focus();
      });
    }
  });

  pollerLite(
    [
      () =>
        document.querySelectorAll('#searchInput') &&
        document.querySelectorAll('#searchInput').length > 0
    ],
    () => {
      const inputElements = document.querySelectorAll('#searchInput');
      inputElements.forEach((item) => {
        item.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' && item.value.trim() !== '') {
            trackGA4Event('Search performed', 'Search submitted', `${item.value}`);
          }
        });
      });
    }
  );
};
