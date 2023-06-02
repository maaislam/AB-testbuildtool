import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import viewOptionLogos from './components/viewOptionLogos';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const tipRows = document.querySelectorAll('.match-list.event_list__js>div');

  //collect each row data and place new DOM

  tipRows.forEach((tipRow) => {
    //const liveScoreElem = tipRow.querySelector('.match-detail .match-livescore');
    //const score = liveScoreElem ? liveScoreElem.innerText : '';
    //console.log('🚀score:', score, liveScoreElem);

    const viewOptions = tipRow.querySelectorAll('.match-channels li');
    const viewOptionsData = [...viewOptions].map((item, i) => {
      const isBettingLink = item.querySelector('img').src.includes('liveodds') ? 'betting' : '';
      const isStreamLink =
        item.querySelector('a') && !item.querySelector('img').src.includes('liveodds')
          ? 'Watch'
          : '';
      const isTvLink = !item.querySelector('a') ? 'TV' : '';

      const imageElem = item.querySelector('img');
      const imageLink = imageElem.src;
      const imageAlt = imageElem.alt;
      const optionLink = item.querySelector('a')
        ? item.querySelector('a').href
        : tipRow.querySelector('a').href;
      const viewType = isTvLink || isStreamLink || isBettingLink;

      viewOptions[i].setAttribute('data-viewtype', viewType);
      viewOptions[i].setAttribute('data-channelname', imageAlt);
      tipRow.classList.add(`${ID}__tipRow`);
      if (viewType === 'TV') {
        console.log(imageAlt);
        viewOptions[i].closest(`.${ID}__tipRow`)?.setAttribute('data-mainchannelname', imageAlt);
      }
      return {
        imageLink,
        imageAlt,
        optionLink,
        viewType
      };
    });

    if (tipRow.querySelector(`.${ID}__viewoptions`)) return;
    const matchChannelsBlock = tipRow.querySelector('.match-channels');
    if (matchChannelsBlock && VARIATION !== 'control') {
      matchChannelsBlock.insertAdjacentHTML('afterend', viewOptionLogos(ID, viewOptionsData));
      matchChannelsBlock.classList.add(`${ID}__hide`);
    }
  });
};

export default () => {
  setup(); //use if needed

  init();
  observeDOM('.main-container', init);

  //add tracking
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('target:', target);

    if (target.closest('[data-channelname]')) {
      const parentElem = target.closest('li') || target.closest('a');
      const { channelname, viewtype } = parentElem.dataset;
      gaTracking(`user clicked ${viewtype} ${channelname}`);
    } else if (target.closest('a') && !target.closest('[data-channelname]')) {
      const channelname = target.closest(`.${ID}__tipRow`).getAttribute('data-mainchannelname');

      gaTracking(`user clicked TV ${channelname}`);
    }
  });
};
