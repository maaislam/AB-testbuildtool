import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import promoMsg from './components/promoMsg';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed
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
  const anchorElem = document.querySelector('.pr__infobox');
  anchorElem.classList.add(`${ID}__hide`);
  anchorElem.insertAdjacentHTML('beforebegin', promoMsg(ID));
  document.querySelector(`.${ID}__terms--title`).addEventListener('click', () => {
    document.querySelector(`.${ID}__terms--content`).classList.toggle('open');
    document.querySelector(`.${ID}__closebtn`).classList.toggle('open');
  });
};
