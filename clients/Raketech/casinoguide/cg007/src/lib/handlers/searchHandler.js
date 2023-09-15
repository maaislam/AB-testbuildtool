/*eslint-disable function-paren-newline */
import { casinoLicenseData } from '../casinodata';

import renderSearchItems from '../helpers/renderSearchRes';
import gaTracking from '../services/gaTracking';

//import shared from '../shared/shared';

const searchHandler = (e) => {
  const { target } = e;
  //const searchInput = target.closest('.search__1Z9QX');

  const searchTerm = target.value.toLowerCase();

  if (searchTerm !== '') {
    const filteredCasinos = casinoLicenseData.filter((item) =>
      item.casino.toLowerCase().includes(searchTerm)
    );
    renderSearchItems(filteredCasinos);
    gaTracking(`${searchTerm} | 2nd Popup Search Click`);
    return;
  }
  renderSearchItems(casinoLicenseData);
};

export default searchHandler;
