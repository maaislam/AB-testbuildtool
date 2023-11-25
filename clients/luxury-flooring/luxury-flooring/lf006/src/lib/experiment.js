import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('header.page-header');
  const accordionTextElem = document.querySelector('.sp_accordion .trigger em');
  //const accordionText = accordionTextElem.textContent;

  const announcementBanner = `<div class='${ID}__announcementBanner'>
    
    <a href="#sp_accordion" class="${ID}__animation-wrapper marquee1"> 
     
      <span class='${ID}__announcementBanner-text'>Pay 25% Now, Deliver Later</span>
    </a>
    <div class="${ID}__animation-wrapper marquee2"> 
     
      <span class='${ID}__announcementBanner-text'>Price Promise: We Won't be beaten</span>
    </div>
  </div>`;
  if (document.querySelector(`.${ID}__announcementBanner`)) return;
  anchorPoint.insertAdjacentHTML('beforebegin', announcementBanner);
};

export default () => {
  setup();
  init();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`a.${ID}__animation-wrapper`)) {
      const infoAccordion = document.getElementById('sp_accordion');
      const firstItem = infoAccordion.querySelector('.collapsible:first-child .trigger');
      firstItem.click();
    }
  });
};
