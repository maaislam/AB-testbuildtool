import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import initCT281 from './helpers/initCT281';
import { uspsData, uspsDataMobile } from './data/data';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const startExperiment = () => {
  initCT281();

  pollerLite(['.CT281__expert-summary'], () => {
    const mainWrapper = document.querySelector('.CT281__expert-summary');
    const language = document.documentElement.lang;

    const data = isMobile() ? uspsDataMobile[VARIATION][language] : uspsData[VARIATION][language];

    if (data) {
      if (!document.querySelector(`.${ID}__trusted-card`)) {
        mainWrapper.insertAdjacentHTML('beforeend', wrapper(ID, data, VARIATION));
      }
    }
  });
};

export default () => {
  setup();

  startExperiment();
};
