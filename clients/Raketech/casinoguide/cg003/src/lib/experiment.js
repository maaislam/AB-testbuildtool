import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import data from './alldata';

//1. Inside for each Get Casino Name
//2. Get button url based on variation number
//3. HIde control's button
//4. Render new button

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

  const gameCard = document.querySelectorAll('[data-toplist-item]');
  gameCard.forEach((card) => {
    const btnUrl = card.querySelector('a.logoContainer__2kEvL').href;
    const gameName = btnUrl.split('se/')[1];
    card.addEventListener('click', (e) => {
      console.log(gameName);
    });
    card
      .querySelector('.toplistContent__2Iaiy')
      .insertAdjacentHTML(
        'beforeend',
        `<a href='https://www.google.com/' target='_blank' class='csm-btn'>Custom Button</a>`
      );
  });
};
