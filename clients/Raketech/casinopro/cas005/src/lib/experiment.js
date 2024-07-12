import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { onUrlChange, pollerLite } from './helpers/utils';
import addCard from './addCard';

const { ID, VARIATION } = shared;

const init = () => {
  if (VARIATION === '1') {
    pollerLite(['.mui-psyrto .MuiGrid-grid-xs-7'], () => {
      if (document.querySelector('.mui-psyrto > div').classList.contains('noBgColor')) {
        document.querySelector('.mui-psyrto > div').classList.remove('noBgColor');
      }

      const casinoTitle = document.querySelector('.mui-psyrto + div span').textContent.trim();
      const collectBgColor = getComputedStyle(
        document.querySelector('.mui-psyrto > div')
      ).backgroundColor;

      const applyBgColorElem = document.querySelector('.mui-psyrto .MuiGrid-grid-xs-5');
      applyBgColorElem.style.backgroundColor = collectBgColor;

      document.querySelector('.mui-psyrto > div').classList.add('noBgColor');

      if (document.querySelector(`.${ID}_card-container`)) {
        document.querySelector(`.${ID}_card-container`).remove();
      }

      document
        .querySelector('.mui-psyrto .MuiGrid-grid-xs-7')
        .insertAdjacentHTML('afterbegin', addCard(ID, casinoTitle, VARIATION));
    });
  }

  if (VARIATION === '2') {
    pollerLite(['.mui-psyrto .MuiGrid-grid-xs-7'], () => {
      const collectColor = getComputedStyle(
        document.querySelector('.mui-psyrto .MuiGrid-grid-xs-7 span')
      ).color;

      const casinoTitle = document.querySelector('.mui-psyrto + div span').textContent.trim();

      const reviewPageButton = document.querySelector(
        '.mui-psyrto .MuiGrid-grid-xs-7 a[data-type="button"]'
      );

      reviewPageButton &&
        document
          .querySelector('.mui-psyrto .MuiGrid-grid-xs-7')
          .insertAdjacentElement('afterend', reviewPageButton);

      if (document.querySelector(`.${ID}_card-container`)) {
        document.querySelector(`.${ID}_card-container`).remove();
      }

      document
        .querySelector('.mui-psyrto .MuiGrid-grid-xs-7 span')
        .insertAdjacentHTML('afterend', addCard(ID, casinoTitle, VARIATION));

      const applyBgColorElem = document.querySelector(`.${ID}_card-container`);
      applyBgColorElem.querySelector('p').style.color = collectColor;
      applyBgColorElem.style.borderColor = collectColor;
    });
  }
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
      } else if (
        target.closest('.mui-psyrto .MuiGrid-grid-xs-7 a[data-type="button"]') ||
        target.closest('.mui-psyrto .MuiGrid-container > a')
      ) {
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
