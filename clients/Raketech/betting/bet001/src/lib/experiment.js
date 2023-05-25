/*eslint-disable object-curly-newline */
import bonusCards from './components/bonusCards';
import bookmakerCard from './components/bookmakerCard';

import newsItems from './components/newsItems';

import { bonusSwiperConfig, bonusSwiperConfigMob } from './configs/swiperConfigs';
import initSwiper from './helpers/initSwiper';
import {
  addCssToPage,
  addJsToPage,
  applyFallbackImages,
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

const getBoostedAticle = () => {
  const bostedArticles = document.querySelectorAll('.first-level .article-image');
  return [...bostedArticles].map((article) => {
    const imageSrc = article.querySelector('img').src;
    const linkElem = article.querySelector('a[data-ga-label]');
    const btnLink = linkElem.href;
    const title = article.querySelector('.title').innerText;
    const bodyText = article.querySelector('.teaser').innerText;
    const btnText = linkElem.dataset.gaLabel;
    return {
      imageSrc,
      title,
      bodyText,
      btnLink,
      btnText
    };
  });
};

const init = () => {
  //setup for hero section
  //get boosted articles
  const boostedArticle = getBoostedAticle();
  console.log('boostedArticle:', boostedArticle);
  const bonusCardAttachPoint = document.querySelector('#main>.card:first-child');
  if (document.querySelector(`.${ID}__bonuscards`)) return;
  bonusCardAttachPoint.querySelector('.card-block').classList.add(`${ID}__hide`);
  bonusCardAttachPoint.querySelector('.card-title').classList.add(`${ID}__hide`);
  bonusCardAttachPoint.insertAdjacentHTML('afterbegin', bonusCards(ID, boostedArticle));
  bonusCardAttachPoint.classList.add('bonus-carousel');
  //init hero swiper
  const heroSwiperConfig = isMobile() ? bonusSwiperConfigMob : bonusSwiperConfig;
  initSwiper('.swiper-hero', heroSwiperConfig);

  //new bonus section

  const bonusList = document.querySelectorAll('.b-bonus-list>div');
  const sectionParent = document.querySelector('.b-bonus-list').closest('.card-block');
  sectionParent.querySelector('div:first-child').classList.remove('d-block');
  sectionParent.querySelector('div:first-child').classList.add(`${ID}__hide`);
  bonusList.forEach((operatorRow, index) => {
    if (index >= 24) {
      //eslint-disable-next-line no-param-reassign
      operatorRow.style.display = 'none';
    }
    //extract data
    if (index % 2 !== 0) {
      return;
    }
    const opLinkElem = operatorRow.querySelector('a[data-ga-label]');
    const { gaLabel } = opLinkElem.dataset;
    const link = opLinkElem.href;
    const title = operatorRow.querySelector('.bb-title').innerText;
    const domainFlagSrc = operatorRow.querySelector('img.domain-flag').src;
    const data = {
      link,
      gaLabel,
      title,
      domainFlagSrc
    };

    operatorRow.classList.add(`${ID}__operatorrow`);

    const newLogo = bookmakerCard(ID, data);
    operatorRow.insertAdjacentHTML('beforeend', newLogo);
  });
  const images = document.querySelectorAll(`.${ID}__opimages`);
  applyFallbackImages(images);

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

  const newsContainerAttachPoint = document.querySelector('#right>.card:nth-child(2)');
  newsContainerAttachPoint.insertAdjacentHTML(
    'beforebegin',
    `<div class="card newsitemmargin">${newsItems(ID, newsRowsData)}</div>`
  );
  //isMobile() && document.querySelector('#right>.card:nth-child(1)').classList.add(`${ID}__hide`);
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
      }" target="_blank" data-operator="${operatorName}" href="${operatorLink}"><span class="desktop-show inline">Rygga spelet</span> ${arrowSvg}</a></td>`;
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
      (target.closest(`.${ID}__bonus-intent`) ||
        target.closest('[data-ga-action="Operator bonus list"]')) &&
      !target.closest('.tc-wrapper')
    ) {
      const href = target.closest('a').getAttribute('href');

      const operator = getOperatorFromUrl(href);
      gaTracking(`${operator} | Bonus Intent CTA Click`);
    } else if (target.closest('.bet-intent') || target.closest('.pick-odds')) {
      const operator =
        target.closest('a').getAttribute('data-operator') ||
        target.closest('a').getAttribute('data-ga-label');
      gaTracking(
        `${operator} | Bet Intent ${
          target.closest('.bet-intent') ? 'Green CTA' : 'Odd & Logo CTA'
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
      gaTracking('Clicks to all bonus page');
    } else if (
      target.closest('li.nav-item') &&
      target.closest('.ajax-nav-tabs') &&
      target.closest('.current-picks-widget')
    ) {
      gaTracking(`${target.innerText} Filter Clicks`);
    } else if (target.closest('.tc-wrapper')) {
      target.closest('.tc-wrapper').classList.toggle('open');
    } else if (target.closest(`.${ID}__bonuscard`)) {
      const url = target.closest(`.${ID}__bonuscard`).dataset.href;
      gaTracking('Boosted odd cta clicks');
      window.open(url, '_blank');
    } else if (target.closest('[href*="/bonus"]')) {
      gaTracking('Clicks to all bonus page');
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
