/*eslint-disable object-curly-newline */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import data from './alldata';
import { getAllAttributes } from './helpers/utils';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__csm-btn`)) {
      const opName = target.closest('a').dataset.operator;
      console.log('🚀opName:', opName);
      gaTracking(opName);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  const customAttr = {
    hajper: [
      { name: 'inbanner-affCampaign', value: '487' },
      { name: 'inbanner-widget', value: '186' },
      { name: 'rel', value: '940' },
      { name: 'locale', value: 'sv_SE' },
      { name: 'currency', value: 'SEK' }
    ],
    playojo: [
      { name: 'inbanner-affCampaign', value: '488' },
      { name: 'inbanner-widget', value: '186' },
      { name: 'rel', value: '934' },
      { name: 'locale', value: 'sv_SE' },
      { name: 'currency', value: 'SEK' }
    ],
    lyllo: [
      { name: 'inbanner-affCampaign', value: '496' },
      { name: 'inbanner-widget', value: '186' },
      { name: 'rel', value: '941' },
      { name: 'locale', value: 'sv_SE' },
      { name: 'currency', value: 'SEK' }
    ],
    ninjacasino: [
      { name: 'inbanner-affCampaign', value: '493' },
      { name: 'inbanner-widget', value: '186' },
      { name: 'rel', value: '977' },
      { name: 'locale', value: 'sv_SE' },
      { name: 'currency', value: 'SEK' }
    ],
    gogocasino: [
      { name: 'inbanner-affCampaign', value: '495' },
      { name: 'inbanner-widget', value: '186' },
      { name: 'rel', value: '952' },
      { name: 'locale', value: 'sv_SE' },
      { name: 'currency', value: 'SEK' }
    ]
  };

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
      inBannerBtn.setAttribute('data-operator', gameName);
      if (Object.keys(customAttr).includes(gameName)) {
        customAttr[gameName].forEach(({ name, value }) => {
          inBannerBtn.setAttribute(name, value);
          inBannerBtn.classList.add('inbanner-link');
        });
      }
    }

    if (!newBtnUrl || card.querySelector(`.${ID}__csm-btn`) || VARIATION !== '1') return;

    inBannerBtn.style.display = 'none';

    inBannerBtn.insertAdjacentHTML(
      'afterend',
      `<a href='${newBtnUrl}' data-operator="${gameName}" target='_blank' class='${ID}__csm-btn'>TILL CASINOT</a>`
    );
    //patch work
    //if (VARIATION !== '2') return;
    const inBannerAttr = getAllAttributes(inBannerBtn, 'inbanner');
    const newBtn = card.querySelector(`.${ID}__csm-btn`);
    if (!newBtn) return;
    inBannerAttr.forEach((attr) => {
      newBtn.setAttribute(attr.name, attr.value);

      if (Object.keys(customAttr).includes(gameName)) {
        customAttr[gameName].forEach(({ name, value }) => {
          newBtn.setAttribute(name, value);
          newBtn.classList.add('inbanner-link');
        });
      }
    });
  });
};
