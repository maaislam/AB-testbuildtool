/*eslint-disable no-underscore-dangle */
import setup from './services/setup';
import shared from './shared/shared';
import header from './components/header';
import clickHandler from './handlers/clickHandler';
import countryData from './data/countryData';
import vpnLocationsWrapper from './components/vpnLocationsWrapper';
import filterCountries from './helpers/filterCountries';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

window._conv_q = window._conv_q || [];

const init = () => {
  const targetPoint = document.querySelector(
    '.bg-purple-900.text-white[data-testid="grid-section"]'
  );

  const targetSelector = `.${ID}__header`;
  const vpnServerDescHTML = `<p class="${ID}__vpnServerDesc dtc-text-white">
  Proton VPN has one of the world’s fastest and most extensive networks, with servers on every continent for truly global connectivity.
  </p>`;

  const reapplyChanges = () => {
    const vpnServerTitleElem = document.querySelector('.bg-purple-900.text-white h1.dtc-text-white');
    const serverCountMsgElem = document.querySelector('.bg-purple-900.text-white[data-testid="grid-section"] h2');
    const countryMsgElem = document.querySelector('.bg-purple-900.text-white[data-testid="grid-section"] .flex:nth-child(2) h2');

    if (vpnServerTitleElem) vpnServerTitleElem.textContent = 'Proton VPN server list and locations';
    if (serverCountMsgElem) serverCountMsgElem.textContent = '11,700+ servers worldwide';
    if (countryMsgElem) countryMsgElem.textContent = '117 countries';

    if (!document.querySelector(targetSelector)) {
      const headerElem = document.querySelector('header');
      headerElem.insertAdjacentHTML('beforebegin', header(ID));
    }

    if (!document.querySelector(`.${ID}__vpnServerDesc`)) {
      vpnServerTitleElem.insertAdjacentHTML('afterend', vpnServerDescHTML);
    }
  };

  observeDOM('body', () => {
    reapplyChanges();
  });

  if (!document.querySelector(`.${ID}__vpnLocationsWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', vpnLocationsWrapper(ID, countryData));
  }
  filterCountries(ID, countryData);
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    clickHandler(ID, target);
  });
};
