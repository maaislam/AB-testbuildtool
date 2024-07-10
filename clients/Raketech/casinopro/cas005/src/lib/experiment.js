import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import addCard from './addCard';

const { ID, VARIATION } = shared;

const init = () => {
  pollerLite(['.mui-psyrto .MuiGrid-grid-xs-7'], () => {
    const casinoTitle = document.querySelector('.mui-psyrto + div span').textContent.trim();
    if (document.querySelector(`.${ID}_card-container`)) {
      document.querySelector(`.${ID}_card-container`).remove();
    }

    document
      .querySelector('.mui-psyrto .MuiGrid-grid-xs-7')
      .insertAdjacentHTML('afterbegin', addCard(ID, casinoTitle));
  });
};

export default () => {
  setup(); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      if (!window.location.href.includes('/svenska-casinon/')) return;

      const { target } = e;
      if (target.closest('.mui-psyrto .MuiGrid-grid-xs-5 a')) {
        gaTracking('Card | Logo');
      } else if (target.closest('.mui-psyrto .MuiGrid-grid-xs-7 a[data-type="button"]')) {
        gaTracking('Card | Button');
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  setTimeout(init, 1500);

  onUrlChange(() => {
    setTimeout(init, 1500);
  });
};
