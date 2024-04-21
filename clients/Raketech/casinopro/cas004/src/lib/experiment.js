import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import addCard from './addCard';

const { ID, VARIATION } = shared;

const init = () => {
  if (!window.location.href.includes('/svenska-casinon/jallacasino/')) return;
  pollerLite(['.mui-psyrto'], () => {
    document.querySelector('.mui-psyrto').innerHTML = addCard(ID);
  });
};

export default () => {
  setup(); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      if (!window.location.href.includes('/svenska-casinon/jallacasino/')) return;

      const { target } = e;
      //console.log(target.closest('div[class^="mobSticky"]'));
      if (target.closest(`.${ID}__casino-cta`) && target.closest(`.${ID}_card-container`)) {
        gaTracking('Card | Button');
      } else if (target.closest('.mui-5zfb5a') && target.closest('.mui-psyrto')) {
        gaTracking('Card | Button');
      } else if (target.closest(`.${ID}__casino-logo`)) {
        gaTracking(' Card | Logo');
      } else if (
        target.closest('a[href="/till/jalla-casino/"]') &&
        !target.closest('[stickbottom="0"]') &&
        target.closest('.mui-83jy48')
      ) {
        gaTracking(' Card | Logo');
      } else if (
        target.closest('a[href="/till/jalla-casino/"]') &&
        target.closest('[stickbottom="0"]') &&
        target.closest('.mui-83jy48')
      ) {
        gaTracking('Sticky Card | Logo');
      } else if (
        target.closest('a.mui-5zfb5a[href="/till/jalla-casino/"]') &&
        target.closest('[stickbottom="0"]')
      ) {
        gaTracking('Sticky Card | Button');
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  setTimeout(init, 1500);
};
