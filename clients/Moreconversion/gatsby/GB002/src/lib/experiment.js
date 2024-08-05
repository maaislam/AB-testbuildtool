import setup from './services/setup';
import shared from './shared/shared';
import text from './components/text';
import content from './components/content';
import { arrow } from './assets/icons';
import uspsWrapper from './components/uspsWrapper';
import { uspsData } from './data/data';
import timerWrapper from './components/timerWrapper';

const { ID, VARIATION } = shared;

const domChecker = () => {
  const hours = document.querySelectorAll('.timer-hours-box');
  const minutes = document.querySelectorAll('.timer-minutes-box');
  const seconds = document.querySelectorAll('.timer-seconds-box');

  const controlHours = document.querySelector('#timer span').textContent || '00';
  const controlMinutes = document.querySelector('#timer span:nth-child(2)').textContent || '00';
  const controlSeconds = document.querySelector('#timer span:last-child').textContent || '00';

  hours.forEach((hour) => {
    hour.textContent = controlHours;
  });
  minutes.forEach((minute) => {
    minute.textContent = controlMinutes;
  });
  seconds.forEach((second) => {
    second.textContent = controlSeconds;
  });
};

const init = () => {
  const mainElement = document.querySelector('header.section-features-2');
  const imageWrapper = mainElement.querySelector('.image-wrapper-1-1-30');
  const imageWrapperAnother = mainElement.querySelector(
    'header.section_header92 .image-wrapper-1-1-30'
  );

  const cardContainer = mainElement.querySelector('.header92_card-content');
  const cardContent = mainElement.querySelector('.header92_card-content-top');
  const cardContentAnother = mainElement.querySelector(
    'header.section_header92 .header92_card-content-top-2'
  );

  const button = mainElement.querySelector('#bfcm_01');
  const buttonAnother = mainElement.querySelector('header.section_header92 #bfcm_01');

  //timer element
  if (!cardContainer.querySelector(`.${ID}__timer-wrapper`)) {
    cardContainer.insertAdjacentHTML('afterbegin', timerWrapper(ID));
  }

  if (!cardContentAnother.querySelector(`.${ID}__timer-wrapper`)) {
    cardContentAnother.insertAdjacentHTML('afterbegin', timerWrapper(ID));
  }

  if (!imageWrapper.querySelector(`.${ID}__limitedTimeOffer`)) {
    imageWrapper.insertAdjacentHTML('beforeend', text(ID, 'LIMITED TIME OFFER!'));
  }

  if (!imageWrapperAnother.querySelector(`.${ID}__limitedTimeOffer`)) {
    imageWrapperAnother.insertAdjacentHTML('beforeend', text(ID, 'LIMITED TIME OFFER!'));
  }

  //main content element
  if (!cardContent.querySelector(`.${ID}__content`)) {
    cardContent.insertAdjacentHTML('afterbegin', content(ID));
  }

  if (!cardContentAnother.querySelector(`.${ID}__content`)) {
    cardContentAnother.querySelector('#bfcm_01').insertAdjacentHTML('beforebegin', content(ID));
  }

  if (!cardContentAnother.querySelector(`.${ID}__limitedTimeDeal`)) {
    cardContentAnother
      .querySelector('#bfcm_01')
      .insertAdjacentHTML(
        'beforebegin',
        `<div class="${ID}__limitedTimeDeal">This limited-time deal is in high demand and stock keeps selling out.</div>`
      );
  }

  if (!button.querySelector(`.${ID}__arrow`)) {
    button
      .querySelector('.button-texts')
      .insertAdjacentHTML('afterend', `<div class="${ID}__arrow">${arrow}</div>`);
  }

  if (!buttonAnother.querySelector(`.${ID}__arrow`)) {
    buttonAnother
      .querySelector('.button-texts')
      .insertAdjacentHTML('afterend', `<div class="${ID}__arrow">${arrow}</div>`);
  }

  //usps element insertion
  if (!cardContainer.querySelector(`.${ID}__usps-wrapper`)) {
    cardContainer.insertAdjacentHTML('beforeend', uspsWrapper(ID, uspsData));
  }

  if (!cardContentAnother.querySelector(`.${ID}__usps-wrapper`)) {
    cardContentAnother.insertAdjacentHTML('beforeend', uspsWrapper(ID, uspsData));
  }

  window.intervalID = setInterval(domChecker, 1000);
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  if (VARIATION === 'control') return;

  init(); //use if needed
};
