import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

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
  const allItems = document.querySelectorAll(
    '.tabellcasino-container .tabellcasino-info .visible-xs span:nth-child(1)'
  );
  allItems.forEach((item) => {
    item.textContent = 'Inga';
  });

  allItems.forEach((el) => {
    el.nextSibling.textContent = ' FS utan insattaning ';
  });
};
