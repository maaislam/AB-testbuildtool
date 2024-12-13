import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { parseHTML, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //...

  const items = document.querySelectorAll('.MuiGrid-container.mui-isbt42 .MuiGrid-item');
  const collectUrls = [];
  items.forEach((item) => {
    const url = item.querySelector('a').href;
    collectUrls.push(url);
  });

  console.log(collectUrls, 'collectUrls');

  parseHTML(collectUrls).then((data) => {
    console.log('data', data);
  });
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

  init(); //
};
