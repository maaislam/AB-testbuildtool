/*eslint-disable no-plusplus */
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const IMG_BASE_URL = 'https://growganic.s3.amazonaws.com';

  const homepage = window.location.pathname === '/';

  const userImages = [];
  for (let index = 0; index < 5; index++) {
    const imageUrl = `${IMG_BASE_URL}/random_user${index + 1}.webp`;
    const imgHtml = `<div class="${ID}__socialproof-image">
      <img src="${imageUrl}"
          alt="">
      </div>`;
    userImages.push(imgHtml);
  }

  const htmlStr = (width) => `
  <div class="${ID}__socialproof" style = "width: ${width}">
    <div class="${ID}__socialproof-images">
        ${userImages.join('\n')}
    </div>
    <div class="${ID}__socialproof-text">
        Über 150.000 zufriedene Kunden
    </div>
  </div>`;

  const ctaElems = document.querySelectorAll('a.kt-button[href*="/wegatech_de"]');
  ctaElems.forEach((cta) => {
    if (document.querySelectorAll(`.${ID}__socialproof`).length === 3) return;
    const attachPoint = cta.closest('.kt-btn-wrap');
    if (attachPoint.parentNode.querySelector(`.${ID}__socialproof`)) return;
    const ctaWidth = window.getComputedStyle(cta).width;
    //console.log('🚀 ~ ctaElems.forEach ~ ctaWidth:', ctaWidth);
    //const ctaWidthNum = parseInt(ctaWidth, 10);
    attachPoint.insertAdjacentHTML('afterend', htmlStr(ctaWidth));
  });

  //for tablet
  if (!homepage) return;
  document.body.classList.add(`${ID}__homepage`);
  const attatchPointTablet = document.querySelector('#kt-layout-id_06afdc-45 .kt-btn-wrap');
  if (attatchPointTablet.parentNode.querySelector(`.${ID}__socialproof`)) return;
  attatchPointTablet.insertAdjacentHTML('afterend', htmlStr());
};
