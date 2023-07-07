import gameNameElem from '../components/gameNameElem';
import { getOperatorFromUrl } from '../helpers/utils';
import piwikTrack from '../services/gaTracking';
import shared from '../shared/shared';

const { ID } = shared;
const toggleModalView = () => {
  const modalElem = document.getElementById(`${ID}__modal`);
  modalElem.classList.toggle('hide_content');
};

const clickHandler = (e) => {
  const { target } = e;

  if (target.closest('[class*="play-money-btn"]')) {
    const { gamename } = target.closest('[data-gamename]').dataset;
    document.querySelector(`#${ID}__modal .header-headline`).innerHTML = gameNameElem(gamename);
    const btnPositionElem = target.closest('[data-position]');
    const btnPosition = btnPositionElem ? `| ${btnPositionElem.dataset.position}` : '';
    toggleModalView();
    piwikTrack(`${gamename} | Clicks to Open Popup ${btnPosition}`);
  } else if (
    target.closest('.footer-button') ||
    target.closest('.header-close') ||
    (target.closest(`#${ID}__modal`) && !target.closest(`.${ID}__topcasinos`))
  ) {
    toggleModalView();
    const gameName = document.querySelector(`#${ID}__modal .header-headline span`).innerHTML;
    piwikTrack(`Top Casino Popup | ${gameName}  | Clicks on 'Close Popup'`);
  } else if (target.closest('[href*="/visita/"]') && target.closest('.modal-content')) {
    const { casino } = target.closest(`.${ID}__topcasinos-listitem`).dataset;
    const { position } = target.closest('a').dataset;
    const gameName = document.querySelector(`#${ID}__modal .header-headline span`).innerHTML;
    piwikTrack(
      `Top Casino Popup | ${gameName} | ${casino} | CTA Clicks to Operator (Bonus Intent) ${
        position ? `| ${position}` : ''
      }`
    );
  } else if (target.closest('.slot-navigator-filter__provider-list-item')) {
    const { providerName } = target.closest('.slot-navigator-filter__provider-list-item').dataset;

    piwikTrack(`${providerName} | Clicks on Filter | Game Providers`);
  } else if (target.closest('#slotNavigatorLoadButton')) {
    piwikTrack("Clicks on 'Load More Slots'");
  } else if (
    target.closest('.slot-navigator-order__dropdown-item') &&
    target.closest('.slot-navigator-order__dropdown-menu')
  ) {
    const filterName = target
      .closest('.slot-navigator-order__dropdown-item')
      .querySelector('.description').innerText;
    piwikTrack(`${filterName} | Clicks on Filter | Dropdown`);
  } else if (target.closest('[href*="/slot/"]')) {
    const url = target.closest('a').href;
    const btnPositionElem = target.closest('[data-position]');
    const btnPosition = btnPositionElem ? `| ${btnPositionElem.dataset.position}` : '';
    piwikTrack(`${getOperatorFromUrl(url)} | Clicks to Slot Reviews ${btnPosition}`);
  } else if (
    target.closest('[href*="/visita/"]') &&
    !target.closest('.modal-content') &&
    !target.closest('[data-click-target="Slot Page Editors Picks"]')
  ) {
    const url = target.closest('a').href;
    const opName = getOperatorFromUrl(url, '/visita/', '/');
    piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Sidebar`);
  } else if (
    target.closest('[href*="/visita/"]') &&
    target.closest('[data-click-target="Slot Page Editors Picks"]')
  ) {
    const url = target.closest('a').href;
    const opName = getOperatorFromUrl(url, '/visita/', '/');
    piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Editor Casino Picks`);
  }
};

export default clickHandler;
