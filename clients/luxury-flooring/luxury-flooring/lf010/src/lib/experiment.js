import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const floorFinderStr = () => {
  const html = `<a href="/#quiz-rkHWx0" class="${ID}__floorFinder">Floor Finder</a>`;
  return html.trim();
};

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (!document.querySelector(`.${ID}__floorFinder`)) {
    document.body.insertAdjacentHTML('beforeend', floorFinderStr());
  }
};
