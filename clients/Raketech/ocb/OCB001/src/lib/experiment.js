import setup from './services/setup';

import shared from './shared/shared';
import { removeElements } from './data/data';
import { betContainer } from './components/betContainer';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const targetElement = document.querySelector('.modal.betting-odds .odds-holder');
  targetElement.querySelectorAll('.betrow').forEach((item) => {
    const mainUrl = item.querySelector('a.bookmaker').href;
    const isChecked = removeElements.find((element) => element.url === mainUrl);
    if (isChecked) {
      item.classList.add(`${ID}__hidden`);
    }
  });

  //now add

  targetElement.querySelectorAll(`.${ID}__added`).forEach((item) => {
    if (item) {
      item.remove();
    }
  });
  targetElement.insertAdjacentHTML('beforeend', betContainer(ID));
};
