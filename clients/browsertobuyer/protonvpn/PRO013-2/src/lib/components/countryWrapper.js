import searchWrapper from './searchWrapper';

import { checkIcon } from '../assets/icons';

const countryWrapper = (id, countryData) => {
  const html = `
         <div class="${id}__countriesWrapper">
          <div class="${id}__countriesBox">
            ${searchWrapper(id)}
            <div class="${id}__contriesConatiner">
              <div class="${id}__contriesLists">
                ${countryData
                  .map((country) => {
                    const { name, flag, servers } = country;
                    const serverText = servers === 1 ? 'server' : 'servers';

                    return `
                        <div class="${id}__countryItem" data-name="${name}" data-flag="${flag}">
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
                  .join('\n')}
              </div>
            </div>
          </div>
        </div>
    `;

  return html.trim();
};

export default countryWrapper;
