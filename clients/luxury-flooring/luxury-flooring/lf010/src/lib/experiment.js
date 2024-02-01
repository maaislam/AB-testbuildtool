import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const floorFinderStr = () => {
  const html = `<a href="#" class="${ID}__floorFinder">Floor Finder</a>`;
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
  if (!document.querySelector(`.${ID}__floorFinder`)) {
    document.querySelector('.page-with-filter').insertAdjacentHTML('beforeend', floorFinderStr());
  }
};
