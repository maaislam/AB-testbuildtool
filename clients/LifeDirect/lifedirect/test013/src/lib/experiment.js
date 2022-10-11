import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `LifeDirect - ${ID}`, shared);

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  fireEvent('Conditions Met', shared);

  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const imgContainer = document.querySelector('.quote-continue');
  imgContainer.classList.add(`${ID}__quote-continue`);

  if (VARIATION === '1') {
    //change button text
    const compareBtn = imgContainer.querySelector(
      '.quote-continue--button__container>a>span:first-child'
    );
    compareBtn.innerText = 'GET STARTED NOW';
    return;
  }

  // const title = imgContainer.querySelector('.quote-continue__headline');
  // const subtitle = imgContainer.querySelector('.quote-continue__subheadline');

  // title.innerHTML = 'MAKING<br>INSURANCE<br>EASY';
  // subtitle.innerText = "Compare and buy from NZ's top insurers";
};
