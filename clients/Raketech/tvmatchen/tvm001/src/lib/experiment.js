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
    const viewOptions = tipRow.querySelectorAll('.match-channels li');
    const viewOptionsData = [...viewOptions].map((item, i) => {
      const isBettingLink = item.querySelector('img').src.includes('liveodds') ? 'betting' : '';
      const isStreamLink =
        item.querySelector('a') && !item.querySelector('img').src.includes('liveodds')
          ? 'Streama'
          : '';
      const isTvLink = !item.querySelector('a') ? 'TV' : '';

      const imageElem = item.querySelector('img');
      const imageLink = imageElem.src;
      const imageAlt = imageElem.alt;
      const optionLink = item.querySelector('a')
        ? item.querySelector('a').href
        : tipRow.querySelector('a').href;
      const viewType = isTvLink || isStreamLink || isBettingLink;
      const paidCustomers = ['discovery+', 'tv4 play', 'vidplay.se', 'c more stream'];
      console.log(paidCustomers.includes('tv4 play'), imageAlt.toLowerCase());
      const isPromoted = paidCustomers.includes(imageAlt.toLowerCase());

      viewOptions[i].setAttribute('data-viewtype', viewType);
      viewOptions[i].setAttribute('data-channelname', imageAlt);
      viewOptions[i].setAttribute('data-promoted', isPromoted);
      tipRow.classList.add(`${ID}__tipRow`);
      const matchDetailsPage = tipRow.querySelector('a');
      matchDetailsPage.style.display = 'none';
      //tipRow.setAttribute('date-href', matchDetailsPage.href);
      if (viewType === 'TV') {
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

  //add tracking
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('target:', target);

    if (target.closest('[data-channelname]')) {
      const parentElem = target.closest('li') || target.closest('a');
      const { channelname, viewtype, promoted } = parentElem.dataset;
      viewtype !== 'betting' &&
        gaTracking(
          `${channelname} | CTA Click to ${
            viewtype === 'Streama' ? 'Streaming' : viewtype
          } Service Providers ${
            promoted === 'true' || channelname === 'TV4 Play' ? ' | Highlighted' : ''
          }`
        );

      viewtype === 'betting' &&
        gaTracking(
          `${channelname} | CTA Clicks to operator (Place Bet Intent) ${
            promoted === 'true' ? ' | Highlighted' : ''
          }`
        );
    } else if (
      (target.closest('.match-detail') &&
        target.closest(`.${ID}__viewoptions`) &&
        !target.closest('a') &&
        !target.closest('.match-channels')) ||
      target.closest('.match-info')
    ) {
      const clickedItem = target.closest('.match-info') ? 'Sports Icon' : 'Headline';

      gaTracking(`Clicks to Match Details | ${clickedItem}`);

      target.closest(`.${ID}__tipRow`).querySelector('a').click();
      //const channelname = target.closest(`.${ID}__tipRow`).getAttribute('data-mainchannelname');
    } else if (target.closest('li.date')) {
      const closestParent = target.closest('li.date');
      const clickedDate = closestParent.dataset.date;
      gaTracking(`${clickedDate} | Clicks on Date`);
    }
  });

  init();
  observeDOM('.main-container', init);
};
