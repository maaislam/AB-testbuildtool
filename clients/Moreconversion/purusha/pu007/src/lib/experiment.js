import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { topBarIcon } from './assets/icons';

const { ID, VARIATION } = shared;

const topBarHtml = () => {
  const html = `
    <div class="${ID}__topBar">
      <div class="${ID}__topBarIcon">
        ${topBarIcon}   
      </div>
      <div class="${ID}__topBarText">Enjoy FREE SHIPPING on orders over $200</div>
    </div>
  `;

  return html.trim();
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
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
  if (!document.querySelector(`.${ID}__topBar`)) {
    document
      .querySelector('#section-header .Header__Wrapper')
      .insertAdjacentHTML('beforebegin', topBarHtml());
  }
};
