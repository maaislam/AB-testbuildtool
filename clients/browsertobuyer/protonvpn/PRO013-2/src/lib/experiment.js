import setup from './services/setup';
import shared from './shared/shared';
import vpnLocationsWrapper from './components/vpnLocationsWrapper';
import countryData from './data/countryData';

const { ID } = shared;

const init = () => {
  const targetPoint = document.querySelector(
    '.bg-purple-900.text-white[data-testid="grid-section"]'
  );
  if (!document.querySelector(`.${ID}__vpnLocationsWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', vpnLocationsWrapper(ID, countryData));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', ({ target }) => {
    if (
      target.closest(`.${ID}__defaultDropdownWrapper`) &&
      target.closest(`.${ID}__selectedCountryDropdown:not(.${ID}__open)`)
    ) {
      const clickedItem = target.closest(`.${ID}__defaultDropdownWrapper`);
      const dropdownWrapper = clickedItem.closest(`.${ID}__selectedCountryDropdown`);
      const mainWrapper = dropdownWrapper.closest(`.${ID}__vpnLocationsWrapper`);
      const countryWrapper = mainWrapper.querySelector(`.${ID}__countriesWrapper`);

      dropdownWrapper.classList.add(`${ID}__open`);
      countryWrapper.classList.remove(`${ID}__close`);
    } else if (
      target.closest(`.${ID}__defaultDropdownWrapper`) &&
      target.closest(`.${ID}__selectedCountryDropdown.${ID}__open`)
    ) {
      const clickedItem = target.closest(`.${ID}__defaultDropdownWrapper`);
      const dropdownWrapper = clickedItem.closest(`.${ID}__selectedCountryDropdown`);
      const mainWrapper = dropdownWrapper.closest(`.${ID}__vpnLocationsWrapper`);
      const countryWrapper = mainWrapper.querySelector(`.${ID}__countriesWrapper`);

      dropdownWrapper.classList.remove(`${ID}__open`);
      countryWrapper.classList.add(`${ID}__close`);
    }
  });

  init(); //
};
