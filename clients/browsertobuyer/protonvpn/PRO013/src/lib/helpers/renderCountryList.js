/*eslint-disable no-param-reassign */
import { checkIcon } from '../assets/icons';

const renderCountryList = (id, countryData, container) => {
    container.innerHTML = countryData
        .map((country) => {
            const { name, flag, servers } = country;
            const serverText = servers === 1 ? 'server' : 'servers';

            return `
                <div class="${id}__countryItem" data-name="${name}" data-flag="${flag}" data-server="${servers}">
                    <div class="${id}__countryImage">
                        <img src="${flag}"/>
                    </div>
                    <div class="${id}__countryName">${name}</div>
                    <div class="${id}__countryServers">
                        ${servers} <span class="${id}__serverText">${serverText}</span>
                    </div>
                    <div class="${id}__countryChecked">${checkIcon}</div>
                </div>
            `;
        })
        .join('');
};

export default renderCountryList;
