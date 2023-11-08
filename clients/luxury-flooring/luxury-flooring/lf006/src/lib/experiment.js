import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('header.page-header');
  const accordionTextElem = document.querySelector('.sp_accordion .trigger em');
  //const accordionText = accordionTextElem.textContent;

  const announcementBanner = `<div class='${ID}__announcementBanner'>
    <div class="${ID}__animation-wrapper marquee1">
      <span class='${ID}__announcementBanner-text'>Black Friday Now On / Black Friday Deals Ending Soon</span>
    </div>
    <div class="${ID}__animation-wrapper marquee2"> 
     
    <span class='${ID}__announcementBanner-text'>Pay 25% Now, Deliver Later</span>
    </div>
    <div class="${ID}__animation-wrapper marquee3"> 
     
    <span class='${ID}__announcementBanner-text'>Price Promise: We Won't be beaten*</span>
    </div>
  </div>`;
  if (document.querySelector(`.${ID}__announcementBanner`)) return;
  anchorPoint.insertAdjacentHTML('beforebegin', announcementBanner);
};

export default () => {
  setup();
  init();
};
