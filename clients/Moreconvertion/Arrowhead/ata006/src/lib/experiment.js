import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { exchangeIcon, returnIcon, payMentIcon } from './data/icons';

const { ID, VARIATION } = shared;

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
  const htmlStr = () => {
    const html = `
      <div class="${ID}__container">
        <div class="${ID}__box">
          <div class="${ID}__item">
            ${exchangeIcon}
            <span>Free Exchanges</span>
          </div>
          <div class="${ID}__item">
            ${returnIcon}
            <span>30-Day Return Window</span>
          </div>
          <div class="${ID}__item">
            ${payMentIcon}
            <span>Secure Payment</span>
          </div>
        </div>
      </div>
    `;
    return html.trim();
  };

  if (!document.querySelector(`.${ID}__container`)) {
    document.querySelector('body #CartPageForm').insertAdjacentHTML('beforebegin', htmlStr(ID));
  }
};
