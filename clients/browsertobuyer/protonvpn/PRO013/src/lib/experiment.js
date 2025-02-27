/*eslint-disable no-underscore-dangle */
import setup from './services/setup';
import shared from './shared/shared';
import header from './components/header';
import clickHandler from './handlers/clickHandler';
import countryData from './data/countryData';
import vpnLocationsWrapper from './components/vpnLocationsWrapper';
import filterCountries from './helpers/filterCountries';

const { ID } = shared;

window._conv_q = window._conv_q || [];

const init = () => {
  const headerElem = document.querySelector('header');
  const targetPoint = document.querySelector(
    '.bg-purple-900.text-white[data-testid="grid-section"]'
  );

  if (!document.querySelector(`.${ID}__header`)) {
    headerElem.insertAdjacentHTML('afterend', header(ID));
  }

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
