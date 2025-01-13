import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import headerContent from './components/headerContent';
import headerItemList from './data/data';
import { postIcon, regIcon } from './assets/icons';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('header.entry-header');
  const formElement = document.querySelector('#top-quote-form');
  const regIconElement = formElement.querySelector('.input-group.reg-group .input-group-addon');
  const postIconElement = formElement.querySelector(
    '.input-group.postcode-group .input-group-addon'
  );
  if (!document.querySelector(`.${ID}__headerContent`) && VARIATION === '1') {
    targetPoint.insertAdjacentHTML('afterend', headerContent(ID, headerItemList, VARIATION));
  }

  if (!document.querySelector(`.${ID}__headerContent`) && VARIATION === '2') {
    if (!document.querySelector(`.${ID}__mainTitle`)) {
      targetPoint.insertAdjacentHTML(
        'afterend',
        `<h1 class="${ID}__mainTitle">Scrap your car the hassle-free way</h1>`
      );
    }
    document
      .querySelector('#top-quote-form')
      .insertAdjacentHTML('afterend', headerContent(ID, headerItemList, VARIATION));
  }

  if (regIconElement) {
    regIconElement.innerHTML = regIcon;
  }

  if (postIconElement) {
    postIconElement.innerHTML = postIcon;
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

  init();
};
