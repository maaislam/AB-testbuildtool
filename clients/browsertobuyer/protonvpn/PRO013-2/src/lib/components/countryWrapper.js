import searchWrapper from './searchWrapper';

const countryWrapper = (id, countryData) => {
  const html = `
         <div class="${id}__countriesWrapper">
                   ${searchWrapper(id)}
                    <div class="${id}__contriesConatiner">
                        <div class="${id}__contriesLists">

                            ${countryData
                              .map((country) => {
                                return `
                                    <div class="${id}__countryItem">
                                        <div class="${id}__countryImage">
                                            <img src="${country.flag}"/>
                                        </div>
                                        <div class="${id}__countryName">${country.name}</div>
                                        <div class="${id}__countryServers">${
                                  country.servers === 1
                                    ? `${country.servers} server`
                                    : `${country.servers} servers`
                                }</div>
                                    </div>
                                `;
                              })
                              .join('\n')}
                            
                        </div>
                    </div">
                </div>
    `;

  return html.trim();
};

export default countryWrapper;
