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
      gameUrl: 'https://www.casinoguide.se/mr-vegas-casino',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/prontolive-mob.png',
      gameName: 'Mr Vegas Casino',
      btnUrl: '/go/mrvegas',
      gameInfo: '11 Freespins + upp till 2000 kr på första insättningen',

      gameBenfit_1: 'Massor av Slots',
      gameBenfit_2: 'Bra urval av tillverkare',
      gameBenfit_3: 'Har välkomstbonus',
      dataToplistitem: '636536'
    },
    {
      gameUrl: 'https://www.casinoguide.se/momang-casino',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/ninja-mob.png',
      gameName: 'Momang Casino',
      btnUrl: '/go/momang',
      gameInfo: 'Tillgång till mer än 2300 spel genom smidig registrering',

      gameBenfit_1: 'Svenska Spel-casino',
      gameBenfit_2: 'Verkar för ansvarsfullt spel',
      gameBenfit_3: 'Uttag med Swish',
      dataToplistitem: '666750'
    },
    {
      gameUrl: 'https://www.casinoguide.se/expekt',
      imgUrl:
        'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/casinoguide/happy-mob.png',
      gameName: 'Expekt',
      btnUrl: '/go/expekt',
      gameInfo: 'Upp till 1500 kr i casinobonus + 30 gratisspins',

      gameBenfit_1: 'Enkel registrering',
      gameBenfit_2: 'Nya versionen live nu',
      gameBenfit_3: 'Oslagbara odds & casinospel',
      dataToplistitem: '7074'
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
    <a class="game-name titleWrapper__22jhQ" href="${item.gameUrl}"><div class="title__2-ppJ"> ${item.gameName}</div></a>
    <div class="game-info toplistOfferContainer__A_vaq">
      <p>${item.gameInfo}</p>
      
    </div>
    <div class="gamebenefits">
      <p>${item.gameBenfit_1}</p>
      <p>${item.gameBenfit_2}</p>
      <p>${item.gameBenfit_3}</p>
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
    console.log('var 2 cg005');

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
    });
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};
