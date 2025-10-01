import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import initCT281 from './helpers/initCT281';
import uspsData from './data/data';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const startExperiment = () => {
  initCT281();

  pollerLite(['.CT281__expert-summary'], () => {
    const mainWrapper = document.querySelector('.CT281__expert-summary');
    const language = document.documentElement.lang;

    const data = uspsData[VARIATION][language];

    if (data) {
      console.log('data', data);
      if (!document.querySelector(`.${ID}__trusted-card`)) {
        mainWrapper.insertAdjacentHTML('beforeend', wrapper(ID, data, VARIATION));
      }
    }

    console.log(language, 'language');
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

  startExperiment();
};
