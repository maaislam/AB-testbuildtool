import gaTracking from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  document.body.addEventListener('click', (ev) => {
    const { target } = ev;
    //ev.preventDefault();
    //console.log('🚀 ~ file: experiment.js:12 ~ document.body.addEventListener ~ target:', target);
    if (target.closest('a[href*="/go/"]')) {
      const operatorName = target.closest('a').href.split('/go/')[1];
      const insideCarousel = target.closest(`.${ID}__highlightcard`);
      const clickedElem = target.closest(`.${ID}__cta`) ? ' | Top Banner Button' : ' | Top Banner';
      gaTracking(`${operatorName} | Clicks to Operator ${insideCarousel ? clickedElem : ''} `);
    } else if (target.closest('.game-cardleft') || target.closest('.title__2-ppJ')) {
      const url = target.closest('a').href;
      const operatorName = new URL(url).pathname.split('/')[1];

      gaTracking(`${operatorName} | Clicks to Review`);
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  const allCasino = [
    {
      gameUrl: 'https://www.casinoguide.se/prontolive',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/prontolive-mob.png',
      imgUrlsv2: 'https://www.casinoguide.se/wp-content/uploads/2020/02/Prontolive-logga.png.webp',
      gameName: 'ProntoLive',
      btnUrl: '/go/prontolive',
      gameInfo: 'Sätt in 100kr spela för 200 kr',
      gameBenfit_1: 'Enkel registrering',
      gameBenfit_2: 'PlayNPay-koncept',
      gameBenfit_3: '',
      dataToplistitem: '501434'
    },

    {
      gameUrl: 'https://www.casinoguide.se/ninjacasino',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/ninja-mob.png',
      imgUrlsv2: 'https://www.casinoguide.se/wp-content/uploads/2023/05/ninjacasino-7.png.webp',
      gameName: 'Ninja Casino',
      btnUrl: '/go/ninjacasino',
      gameInfo: 'Sätt in 100 kr få 100 spins utan omsättning på första insättningen',

      gameBenfit_1: 'Enkel registrering',
      gameBenfit_2: 'Hajpersnurr',
      gameBenfit_3: 'Hajpermiljonen',
      dataToplistitem: '10655'
    },
    {
      gameUrl: 'https://www.casinoguide.se/happycasino',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/happy-mob.png',
      imgUrlsv2: 'https://www.casinoguide.se/wp-content/uploads/2023/05/happy-casino-4.png.webp',
      gameName: 'Happy Casino',
      btnUrl: '/go/happycasino',
      gameInfo: 'Få 50 jackpott spins utan omsättning',
      gameBenfit_1: 'Festlig webbdesign',
      gameBenfit_2: '',
      gameBenfit_3: '',
      dataToplistitem: '661773'
    }
  ];

  if (VARIATION === '1') {
    //console.log('variation 1 cg005');

    document.querySelector('#topplista').insertAdjacentHTML(
      'beforebegin',
      `<div class="gameCardWrapper">
      
      ${allCasino
        .map((item) => {
          return ` 
          <div class="game-card">
          <div class="game-cardtop">
  <div class="game-cardleft">
    <a href="${item.gameUrl}"><img src="${item.imgUrl}" alt="${item.gameName}" /></a>
  </div>
  <div class="game-cardright">
    <a class="game-name titleWrapper__22jhQ" href="${item.gameUrl}"><div class="title__2-ppJ"> ${
            item.gameName
          }</div></a>
    <div class="game-info toplistOfferContainer__A_vaq">
      <p>${item.gameInfo}</p>
      
    </div>
    <div class="gamebenefits">
      ${item.gameBenfit_1 ? `<p>${item.gameBenfit_1}</p>` : '<p class="no-bullet"></p>'}
      ${item.gameBenfit_2 ? `<p>${item.gameBenfit_2}</p>` : '<p class="no-bullet"></p>'}
      ${item.gameBenfit_3 ? `<p>${item.gameBenfit_3}</p>` : '<p class="no-bullet"></p>'}
      
    </div>
    <a class="game-btn" target="_blank" href="${item.btnUrl}">Till Casinot</a>
  </div>
</div>
<div class="game-cardbtm">
  <p>
    Reklamlänk | 18+ | Välkomsterbjudanden gäller nya kunder | Spela ansvarsfullt |
    <a href="https://stodlinjen.se" target="_blank">stodlinjen.se</a> |
    <a href="https://www.spelpaus.se" target="_blank">spelpaus.se</a> |
    <a href="/go/mrvegasterms" target="_blank">Regler &amp; Villkor gäller</a>
  </p>
</div>
</div>

        `;
        })
        .join('')}
      
      
      </div>`
    );
  }

  if (VARIATION === '2') {
    console.log('var 2 cg006');

    document
      .querySelector('#topplista')
      .insertAdjacentHTML('beforebegin', '<div class="gameCardWrapper"></div>');

    const cardWrapper = document.querySelector('.gameCardWrapper');

    allCasino.forEach((data) => {
      const mainCard = document.querySelector(
        `.container__1Sosv[data-toplist-item='${data.dataToplistitem}']`
      );
      const cloneCard = mainCard.cloneNode(true);
      cardWrapper.appendChild(cloneCard);
      const newCardImg = cloneCard.querySelector('img');
      if (!newCardImg) {
        const logoContainer = cloneCard.querySelector('.logoContainer__2kEvL');
        logoContainer.insertAdjacentHTML(
          'afterbegin',
          `<img src="${data.imgUrlsv2}" alt="Mr Vegas Casino logo" class="logo__s8dmk" height="184px" width="110px">`
        );
      }
    });
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};
