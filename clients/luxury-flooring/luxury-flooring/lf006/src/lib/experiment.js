import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('header.page-header');
  const accordionTextElem = document.querySelector('.sp_accordion .trigger em');
  const accordionText = accordionTextElem.textContent;

  const announcementBanner = `<div class='${ID}__announcementBanner'>
    <span class='${ID}__announcementBanner-text'>${accordionText}</span>
  </div>`;

  anchorPoint.insertAdjacentHTML('beforebegin', announcementBanner);
};
