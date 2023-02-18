import { pollerLite } from '../../../../../../../globalUtil/util';
import contactCta from '../components/contactCta';
import setup from '../services/setup';
import shared from '../shared/shared';

const { ID } = shared;
export default () => {
  setup();

  pollerLite(['[data-bind="foreach:productSearchResult"]'], () => {
    const searchTbody = document.querySelector('[data-bind="foreach:productSearchResult"]');
    const searchRows = searchTbody.querySelectorAll('tr');
    searchRows.forEach((row) => {
      const configureButton = row.querySelector('.config');
      //console.log(row);
      if (configureButton) {
        row.classList.add(`${ID}__adjust`);
        return;
      }
      const atcCta = row.querySelector('#add-to-cart');
      if (atcCta && !row.querySelector(`.${ID}__contactcommercial`)) {
        atcCta.insertAdjacentHTML('beforebegin', contactCta(ID));

        atcCta.classList.add(`${ID}__hide`);
      }
    });
  });
};
