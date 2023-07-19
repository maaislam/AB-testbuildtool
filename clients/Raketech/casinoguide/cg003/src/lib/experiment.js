import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import data from './alldata';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__csm-btn`)) {
      const opName = target.dataset.operator;
      gaTracking(opName);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const gameCard = document.querySelectorAll('[data-toplist-item]');
  gameCard.forEach((card) => {
    //console.log(card);
    const inBannerBtn = card.querySelector('a.inbanner-link');
    if (!inBannerBtn) return;
    const btnUrl = inBannerBtn.href;
    const gameName = btnUrl.split('/go/')[1];
    const newBtnType = VARIATION === '1' ? 'default' : 'inbanner';
    if (!data[gameName]) return;

    const newBtnUrl = data[gameName][newBtnType];
    inBannerBtn.href = newBtnUrl;
    if (VARIATION === '2') {
      //console.log(gameName);
      inBannerBtn.classList.add(`${ID}__csm-btn`);
    }

    if (!newBtnUrl || card.querySelector(`.${ID}__csm-btn`) || VARIATION !== '1') return;

    inBannerBtn.style.display = 'none';

    inBannerBtn.insertAdjacentHTML(
      'afterend',
      `<a href='${newBtnUrl}' data-operator="${gameName}" target='_blank' class='${ID}__csm-btn'>TILL CASINOT</a>`
    );
  });
};
