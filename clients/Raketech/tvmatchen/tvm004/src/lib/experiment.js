import setup from './services/setup';

import shared from './shared/shared';
import gaTracking from './services/gaTracking';
import { pollerLite } from './helpers/utils';
import modalWrapper from './components/modalWrapper';
import stepTwoValidation from './helpers/stepTwoValidation';
import stepThreeValidation from './helpers/stepThreeValidation';
import { crossForAds } from './components/crossForAds';

const { ID, VARIATION } = shared;

const callWithInterval = (fn, interval = 500, duration = 100000) => {
  window.intervalId = setInterval(fn, interval);

  setTimeout(() => {
    clearInterval(window.intervalId);
  }, duration);
};

const renderCloseAds = () => {
  if (window.sessionStorage.getItem(`${ID}__tracker`)) {
    return;
  }

  pollerLite([() => document.querySelectorAll('div[data-google-query-id]').length > 0], () => {
    const googleAds = document.querySelectorAll('div[data-google-query-id]');
    googleAds.forEach((googleAd) => {
      if (googleAd.querySelector(`.${ID}__crossAds`)) {
        googleAd.querySelector(`.${ID}__crossAds`).remove();
      }
      googleAd.insertAdjacentHTML('beforeend', crossForAds(ID));
    });
  });
};

const init = () => {
  const targetPoint = document.body;

  const experimentCookie = window.sessionStorage.getItem(`${ID}__tracker`);

  if (!document.querySelector(`.${ID}__validateUserModal`) && !experimentCookie) {
    targetPoint.insertAdjacentHTML('beforeend', modalWrapper(ID));

    stepTwoValidation(ID);
    stepThreeValidation(ID);
  }
};
export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__noThanksBtn`)) {
      gaTracking('Close Popup Button');
      document.body.classList.remove(`${ID}__modalOpen`);
      window.sessionStorage.setItem(`${ID}__tracker`, true);
    } else if (target.closest(`.${ID}__continue`)) {
      gaTracking('Continue Popup Button');
      const targetedEl = target.closest(`.${ID}__continue`);
      const parentEl = targetedEl.closest(`.${ID}__step`);
      parentEl.classList.remove(`${ID}__show`);
      const nextEl = parentEl.nextElementSibling;
      nextEl.classList.add(`${ID}__show`);
      document.body.classList.add('step-one');
    } else if (target.closest(`.${ID}__closeIcon`)) {
      if (document.querySelector(`.${ID}__step[data-attr="2"]`).classList.contains(`${ID}__show`)) {
        gaTracking('Close 1st Popup');
        document.body.classList.remove('step-one');
      } else if (
        document.querySelector(`.${ID}__step[data-attr="3"]`).classList.contains(`${ID}__show`)
      ) {
        gaTracking('Close 2nd Popup');
        document.body.classList.remove('step-two');
      }

      document.body.classList.remove(`${ID}__modalOpen`);
      window.sessionStorage.setItem(`${ID}__tracker`, true);
    } else if (target.closest(`.${ID}__crossAds`)) {
      gaTracking('Close Ads');
      document.body.classList.add(`${ID}__modalOpen`);
    }
  });
  if (VARIATION === 'Control') return;

  init();
  callWithInterval(renderCloseAds);
};
