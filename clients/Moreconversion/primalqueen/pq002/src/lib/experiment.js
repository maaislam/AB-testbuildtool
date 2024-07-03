import reviewcards from './components/reviewCards';
import { swiperConfig } from './configs/swiperConfigs';
import initSwiper from './helpers/initSwiper';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = (data) => {
  const carouselAttachPoint = document.querySelector('.banner_rev.hideMob');

  if (document.querySelector(`.${ID}__bookmakercards`)) return;

  carouselAttachPoint.insertAdjacentHTML('afterend', `<div>${reviewcards(ID, data)}</div>`);

  initSwiper('.swiper-bookmaker', swiperConfig);
};

export default () => {
  setup();
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  fetch('https://stamped.io/api/widget/reviews/batch', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'en-US,en;q=0.9',
      'content-type': 'application/json'
    },
    body: '{"data":[{"type":"carousel","reviewIds":null,"productIds":null,"productBrand":"","limitWords":"20","random":"false","isFillEmpty":"false","apiKey":"fd9081a9-009f-434f-af1c-c8694f857024","storeUrl":"3be06b-2.myshopify.com","skip":"30","minRating":"4","isWithPhotos":true,"tags":"","isSyndication":true,"elementId":"1","referralCode":null}]}',
    method: 'POST'
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result[0].data);
      if (VARIATION === 'Control') {
        return;
      }

      pollerLite([() => window.Swiper !== undefined], () => {
        init(result[0].data);
      });
    });
};
