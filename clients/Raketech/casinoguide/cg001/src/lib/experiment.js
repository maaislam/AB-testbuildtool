import { addCssToPage, addJsToPage } from './helpers/utils';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

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
  const timeNow = Date.now();
  const cssUrl = `https://cdn.inbanner.com/w/css/pxpCx.css?cachebuster=${timeNow}`;
  const jsUrl = `https://cdn.inbanner.com/w/js/pxpCx.js?cachebuster=${timeNow}`;
  const widget = 'https://inbanner.com/0/widgets/js/locale:sv_SE/currency:SEK';

  const inBannerIframer1 =
    '<iframe name="easyXDM_default5699_provider" id="easyXDM_default5699_provider" src="https://inbanner.com/easyxdm/cors/index.html?xdm_e=https%3A%2F%2Fwww.casinoguide.se&amp;xdm_c=default5700&amp;xdm_p=1" frameborder="0" style="position: absolute; top: -2000px; left: 0px;"></iframe>';
  const inBannerIframer2 =
    '<iframe name="easyXDM_default5700_provider" id="easyXDM_default5700_provider" src="https://inbanner.com/easyxdm/cors/index.html?xdm_e=https%3A%2F%2Fwww.casinoguide.se&amp;xdm_c=default5700&amp;xdm_p=1" frameborder="0" style="position: absolute; top: -2000px; left: 0px;"></iframe>';

  addCssToPage(cssUrl, `${ID}__css`);
  addJsToPage(jsUrl, `${ID}__jsmain`);
  addJsToPage(widget, `${ID}__jsmain`);

  document.body.insertAdjacentHTML('beforeend', inBannerIframer1);
  document.body.insertAdjacentHTML('beforeend', inBannerIframer2);
};
//https://cdn.inbanner.com/w/css/pxpCx.css?cachebuster=1685105202727
//https://cdn.inbanner.com/w/js/pxpCx.js?cachebuster=1685105202727
