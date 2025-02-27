import { checkIcon } from '../assets/icons';

const renderCountryList = (id, countryData, container) => {
    container.innerHTML = countryData
        .map((country) => {
            return `
                <div class="${id}__countryItem" data-name="${country.name}" data-flag="${country.flag}">
                    <div class="${id}__countryImage">
                        <img src="${country.flag}"/>
                    </div>
                    <div class="${id}__countryName">${country.name}</div>
                    <div class="${id}__countryServers">${country.servers === 1 ? `${country.servers} server` : `${country.servers} servers`}</div>
                    <div class="${id}__countryChecked">${checkIcon}</div>
                </div>
            `;
        })
        .join('');
};

export default renderCountryList;
