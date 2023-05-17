/*eslint-disable object-curly-newline */
import bonusCards from './components/bonusCards';
import bookmakerCards from './components/bookmakerCards';
import newsItems from './components/newsItems';
import bookmakerCarouselConfig from './configs/bookmakerBonusCarouselConfig';
import mbCarouselConfig from './configs/monthlyBonusCarouselConfig';
import {
  bonusSwiperConfig,
  bonusSwiperConfigMob,
  bookmakerSwiperConfig,
  bookmakerSwiperConfigMob,
  vBookmakerSwiperConfig,
  vBookmakerSwiperConfigMob
} from './configs/swiperConfigs';
import initSwiper from './helpers/initSwiper';
import {
  addCssToPage,
  addJsToPage,
  getOperatorFromUrl,
  isMobile,
  observeDOM,
  pollerLite
} from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //setup for hero section

  const bonusCardAttachPoint = document.querySelector('#main>.card:first-child');
  if (document.querySelector(`.${ID}__bonuscards`)) return;
  bonusCardAttachPoint.querySelector('.card-block').classList.add(`${ID}__hide`);
  bonusCardAttachPoint.querySelector('.card-title').classList.add(`${ID}__hide`);
  bonusCardAttachPoint.insertAdjacentHTML('afterbegin', bonusCards(ID, mbCarouselConfig));
  bonusCardAttachPoint.classList.add('bonus-carousel');
  //init hero swiper
  const heroSwiperConfig = isMobile() ? bonusSwiperConfigMob : bonusSwiperConfig;
  initSwiper('.swiper-hero', heroSwiperConfig);

  //setup for bookmaker section
  //const bookmakerCardsAttachPoint = document.querySelector('.current-picks-widget');

  //if (document.querySelector(`.${ID}__bookmakercards`)) return;
  //const firstBmposition = isMobile() ? 'beforebegin' : 'afterend';
  //bookmakerCardsAttachPoint.insertAdjacentHTML(
  //firstBmposition,
  //`<div class="card bm-carousel">${bookmakerCards(ID, bookmakerCarouselConfig)}</div>`
  //);
  ////init bookmaker swiper
  //const bookmakersSwiperConfig = isMobile() ? bookmakerSwiperConfigMob : bookmakerSwiperConfig;
  //initSwiper('.swiper-bookmaker', bookmakersSwiperConfig);

  ////setup for vertical bookmaker bonus section

  //const vBookmakerAttachPoint = isMobile()
  //? document.querySelector('.current-picks-widget')
  //: document.querySelector('#right>.card:first-child');

  //if (document.querySelector(`.${ID}__bookmakercards.vertical`)) return;
  //isMobile()
  //? vBookmakerAttachPoint.insertAdjacentHTML(
  //'afterend',
  //bookmakerCards(ID, bookmakerCarouselConfig, 'vertical')
  //)
  //: (vBookmakerAttachPoint.innerHTML = bookmakerCards(ID, bookmakerCarouselConfig, 'vertical'));
  ////init bookmaker swiper
  //const vBookmakersSwiperConfig = window.matchMedia('(max-width: 850px)').matches
  //? vBookmakerSwiperConfigMob
  //: vBookmakerSwiperConfig;

  //initSwiper('.vertical.swiper-bookmaker', vBookmakersSwiperConfig);

  //setup for latest news
  if (document.querySelector(`.${ID}__newsitems`)) return;

  const newContainer = document.querySelector('.news-carousel');
  const newsFirstRows = newContainer.querySelectorAll('.first-level>div');
  const newsSecRows = newContainer.querySelectorAll('.second-level>div');
  const newsRowsData = [...newsFirstRows, ...newsSecRows].map((news) => {
    const titleElm = news.querySelector('.title') || news.querySelector('.list-link');
    const commentElem = news.querySelector('.comments');
    const title = titleElm.innerText;
    const newsLink = news.querySelector('a').getAttribute('href');
    const image = news.querySelector('img').getAttribute('src');
    const commentCount = commentElem ? commentElem.innerText : '0';

    return {
      title,
      newsLink,
      image,
      commentCount
    };
  });
  console.log(newsRowsData);

  const newsContainerAttachPoint = isMobile()
    ? document.querySelector(`.${ID}__bookmakercards.vertical`)
    : document.querySelector('#right>.card:nth-child(2)');
  newsContainerAttachPoint.insertAdjacentHTML(
    'beforebegin',
    `<div class="card newsitemmargin">${newsItems(ID, newsRowsData)}</div>`
  );
  isMobile() && document.querySelector('#right>.card:nth-child(1)').classList.add(`${ID}__hide`);
};

const initTipsStyles = () => {
  //style tips section
  pollerLite([() => !document.querySelector('.fa-spinner')], () => {
    const tipsTable = document.querySelectorAll('#picks-table');

    const expertTips = document.querySelectorAll('tr.has-experttip');
    const userTips = document.querySelectorAll('tr.has-usertip');

    const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" viewBox="0 0 6 13" fill="none">
    <path d="M1 1.5498L4.89793 5.88084C5.24021 6.26114 5.24021 6.83846 4.89793 7.21877L1 11.5498" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

    tipsTable.forEach((table) => table.classList.add(`${ID}__tipstable`));

    [...userTips, ...expertTips].forEach((expertTip) => {
      const SINGLE_LINE_HEIGHT = 45;
      const operatorLink = expertTip.querySelector('a.pick-odds').getAttribute('href');
      const operatorName = expertTip.querySelector('a.pick-odds').getAttribute('data-ga-label');
      const pickOdds = expertTip.querySelector('.pick-odds');
      const expTipHeight = expertTip.offsetHeight;
      const classTOAdjust = expTipHeight > SINGLE_LINE_HEIGHT ? 'adjust-star' : 'no-adjust-star';

      expertTip.classList.add(classTOAdjust);

      const palceBetBtn = `<td class="${ID}__oplink bet-intent"><a class="${
        isMobile() ? '' : `${ID}__bluebtn`
      }" target="_blank" data-operator="${operatorName}" href="${operatorLink}"><span class="desktop-show inline">Placer Bet</span> ${arrowSvg}</a></td>`;
      pickOdds.closest('td').classList.add(`${ID}__pickodds`);
      if (!expertTip.querySelector(`.${ID}__oplink`)) {
        expertTip.insertAdjacentHTML('beforeend', palceBetBtn);
      }
      //adjust star positions
      const starCell = expertTip.querySelector('.star-icon');
      if (starCell) {
        expertTip.querySelector(`.${ID}__pickodds`).insertAdjacentElement('beforebegin', starCell);
      }
    });
  });
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;

    if (
      target.closest(`.${ID}__bonus-intent`) ||
      target.closest('[data-ga-action="Operator bonus list"]')
    ) {
      const href = target.closest('a').getAttribute('href');
      const operator =
        VARIATION !== 'control'
          ? target.closest('a').getAttribute('data-operator')
          : getOperatorFromUrl(href);
      gaTracking(`${operator} | Bonus Intent CTA Click`);
    } else if (target.closest('.bet-intent') || target.closest('.pick-odds')) {
      const operator =
        target.closest('a').getAttribute('data-operator') ||
        target.closest('a').getAttribute('data-ga-label');
      gaTracking(
        `${operator} | Bet Intent ${
          target.closest('.bet-intent') ? 'Green CTA' : 'Odd & Logo'
        } Click `
      );
    } else if (
      target.closest('.seeallnews') ||
      target.closest(`.${ID}__newsitem`) ||
      (target.closest('[data-ga-action="Content carousel"]') && target.closest('a'))
    ) {
      gaTracking('Clicks to News');
    } else if (target.closest('.list-link') || target.closest('[href*="/ekspert/tips"]')) {
      gaTracking('Clicks To Tips');
    } else if (target.closest('[href*="/bookmakere/bonus"]')) {
      console.log('Clicks to all bonus page');
      gaTracking('Clicks to all bonus page');
    } else if (
      target.closest('li.nav-item') &&
      target.closest('.ajax-nav-tabs') &&
      target.closest('.current-picks-widget')
    ) {
      gaTracking(`${target.innerText} Filter Clicks`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  if (VARIATION === 'control') {
    return;
  }

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  initTipsStyles();
  const callbackFn = () => {
    setTimeout(initTipsStyles, 1000);
  };
  observeDOM('.current-picks-widget .ajax-nav-tabs', callbackFn);

  pollerLite([() => window.Swiper !== undefined], () => {
    init();
  });
};
