import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite, onUrlChange } from './helpers/utils';
import { casinoSlider } from './components/casinoSlider';

const { ID, VARIATION } = shared;
const init = () => {
  if (!window.location.href.includes('/maria')) return;

  pollerLite(['#sticky-cta-container + div'], () => {
    const data = [];
    const parentElement = document.querySelector('#sticky-cta-container + div');
    parentElement.classList.add(`${ID}__targetedCasino`);
    const targetElement = parentElement.querySelector('div');
    targetElement.querySelectorAll('div.mui-u2ar62').forEach((item) => {
      const casinoLink = item.querySelector('a[href^="/go/"]')?.href;
      const imageURL = item.querySelector('img')?.src;
      data.push({
        imageURL,
        casinoLink
      });
    });

    if (document.querySelector(`.${ID}__casinoSlider`)) {
      document.querySelector(`.${ID}__casinoSlider`).remove();
    }

    setTimeout(() => {
      document
        .querySelector(`.${ID}__targetedCasino > p`)
        .insertAdjacentHTML('afterend', casinoSlider(ID, data));
    }, 2000);
  });
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  if (!isListenerAdded) {
    document.body.addEventListener('click', (e) => {
      if (!window.location.href.includes('/maria')) return;

      const { target } = e;
      if (target.closest(`.${ID}_cta`) && target.closest(`.${ID}_card-container`)) {
        gaTracking('CTA CTO | Card');
      } else if (
        target.closest('a[data-operator="Mr Vegas Casino"]') &&
        target.closest('#sticky-cta-container')
      ) {
        gaTracking('CTA CTO | Card');
      } else if (target.closest('[data-click-target="Casino review CTA sticky"]')) {
        gaTracking('CTA CTO | Sticky');
      }
    });
  }

  document.body.dataset[`${ID}__isListenerAdded`] = true;

  if (VARIATION === 'Control') {
    return;
  }

  init();
  onUrlChange(() => {
    init();
  });
};
