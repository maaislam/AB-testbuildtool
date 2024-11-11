import setup from './services/setup';
import shared from './shared/shared';
import description from './components/description';
import button from './components/button';
import appointment from './components/appointment';
import { appoinmentData, vaccineData, info, images, descriptionData } from './data/data';
import vaccineWrapper from './components/vaccineWrapper';
import partnersWrapper from './components/partnersWrapper';
import titleWrapper from './components/titleWrapper';

const { ID } = shared;

const init = () => {
  const mainWrapper = document.querySelector('#main');
  const footer = document.querySelector('footer');
  const heroElement = mainWrapper.querySelector('.c-info-hero');
  const titleElement = heroElement.querySelector('.c-info-hero__sash__title');
  const title = titleElement.textContent.trim();
  const bannerDescription = heroElement.querySelector('.c-info-hero__sash__subtitle');
  const accordion = mainWrapper.querySelector('.c-accord');
  accordion.querySelector('.c-accord__item:nth-child(2)').classList.add('add-border-top');
  accordion.querySelector('.c-accord__item:last-child').classList.add('no-border-bottom');
  const { pathname } = window.location;
  const collectedData = vaccineData[`${pathname}`];
  const collectedDesData = descriptionData[`${pathname}`];

  //add title wrapper
  if (!heroElement.querySelector(`.${ID}__titleWrapper`)) {
    bannerDescription.insertAdjacentHTML('beforebegin', titleWrapper(ID, title));
  }
  //add banner description
  if (!heroElement.querySelector(`.${ID}__description`) && collectedDesData) {
    bannerDescription.insertAdjacentHTML('beforebegin', description(ID, collectedDesData));
  }

  //vaccine wrapper add
  if (!document.querySelector(`.${ID}__vaccineWrapper`) && collectedData) {
    accordion.insertAdjacentHTML('beforebegin', vaccineWrapper(ID, collectedData, info));
  }

  //appoinment section add
  if (!document.querySelector(`.${ID}__appointmentWrapper`)) {
    accordion.insertAdjacentHTML('beforebegin', appointment(ID, appoinmentData));
  }

  //button add in accordion section
  if (!accordion.querySelector(`.${ID}__buttonWrapper`)) {
    accordion.insertAdjacentHTML('beforeend', button(ID));
  }

  //footer image add
  if (!footer.querySelector(`.${ID}__clinic-footer__partners`)) {
    footer
      .querySelector('.clinic-footer__partners')
      .insertAdjacentHTML('beforebegin', partnersWrapper(ID, images));
  }
};

export default () => {
  setup();

  init();
};
