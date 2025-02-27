import { dropdownArrow, searchIcon } from '../assets/icons';
import countryWrapper from './countryWrapper';

const vpnLocationsWrapper = (id, countryData) => {
  const html = `
        <div class="${id}__vpnLocationsWrapper bg-purple-900">
            <div class="${id}__vpnLocationsContainer">
                <h3 class="${id}__title">See all Proton VPN locations</h3>
                <div class="${id}__selectedCountryDropdown">
                    <div class="${id}__defaultDropdownWrapper">
                        <span class="${id}__flagIcon"></span>
                        <span class="${id}__searchIcon">${searchIcon}</span>
                        <span class="${id}__text">Select one of 115+ countries</span>
                        <span class="${id}__icon">${dropdownArrow}</span>
                    </div>
                </div>

               ${countryWrapper(id, countryData)}
            </div>
        </div>
    `;

  return html.trim();
};

export default vpnLocationsWrapper;
