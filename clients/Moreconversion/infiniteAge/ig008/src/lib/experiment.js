import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import benefitStr from './components/benefitstr';
import images from './data/images';

const { ID, VARIATION } = shared;

const setVideo = () => {
  const videoHTML = `<video class='${ID}__heroVideo' autoplay muted controls poster="https://cdn.shopify.com/s/files/1/0267/7080/0737/files/thumbnail_l_-_v2.jpg?v=1706274934"><source src="https://cdn.shopify.com/videos/c/o/v/df5f1d4db2a845c19092e87b653e6ffc.mp4" type="video/mp4"></video>`;
  const mobileImg = document.querySelector('.banner img.bnrprd-v2-mob');

  //desktopImg.insertAdjacentHTML('afterend', videoHTML);
  if (!document.querySelector(`.${ID}__heroVideo`)) {
    mobileImg.insertAdjacentHTML('afterend', videoHTML);
  }
};

export default () => {
  setup(); //use if needed
  setVideo();
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const orderNowBtn = document.querySelector('.banner.flt .bnrbtnbx.bnrbtnbx-v2');
  if (!document.querySelector(`.${ID}__banner_list`)) {
    orderNowBtn.insertAdjacentHTML('beforebegin', benefitStr(ID, images));
  }
};
