import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import addCard from './addCard';

const { ID, VARIATION } = shared;

const init = () => {
  if (!window.location.href.includes('/svenska-casinon/jallacasino/')) return;
  pollerLite(['.sidebar__3SWUh .ctaWrapper__18skR'], () => {
    document.querySelector('.sidebar__3SWUh .ctaWrapper__18skR').innerHTML = addCard(ID);
    // setTimeout(() => {
    //   addCard(ID);
    // }, 2000);
  });
};

export default () => {
  setup(); //use if needed

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      if (!window.location.href.includes('/svenska-casinon/jallacasino/')) return;

      const { target } = e;
      if (target.closest(`.${ID}__casino-cta`) && target.closest(`.${ID}_card-container`)) {
        gaTracking('Card | Button');
      } else if (
        target.closest('.cta__1q8ve') &&
        target.closest('.ctaWrapper__18skR') &&
        target.closest('.sidebar__3SWUh')
      ) {
        gaTracking('Card | Button');
      } else if (target.closest(`.${ID}__casino-logo`)) {
        gaTracking(' Card | Logo');
      } else if (
        target.closest('a[href="/till/jalla-casino/"]') &&
        target.closest('div[class^="logoWrapper"]') &&
        target.closest('.sidebar__3SWUh')
      ) {
        gaTracking(' Card | Logo');
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'Control') return;

  init();
};
