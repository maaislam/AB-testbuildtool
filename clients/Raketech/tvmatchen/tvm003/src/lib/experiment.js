import setup from './services/setup';

import shared from './shared/shared';
import gaTracking from './services/gaTracking';
import { getCookie, setCookie } from './helpers/utils';
import modalWrapper from './components/modalWrapper';
import stepTwoValidation from './helpers/stepTwoValidation';
import stepThreeValidation from './helpers/stepThreeValidation';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.body;

  const experimentCookie = getCookie(`${ID}__tracker`);

  if (!document.querySelector(`.${ID}__validateUserModal`) && !experimentCookie) {
    targetPoint.insertAdjacentHTML('beforeend', modalWrapper(ID));
    targetPoint.classList.add(`${ID}__modalOpen`);
    setCookie(`${ID}__tracker`, true);

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
    } else if (target.closest(`.${ID}__continue`)) {
      gaTracking('Continue Popup Button');
      const targetedEl = target.closest(`.${ID}__continue`);
      const parentEl = targetedEl.closest(`.${ID}__step`);
      parentEl.classList.remove(`${ID}__show`);
      const nextEl = parentEl.nextElementSibling;
      nextEl.classList.add(`${ID}__show`);
    } else if (target.closest(`.${ID}__closeIcon`)) {
      if (document.querySelector(`.${ID}__step[data-attr="1"]`).classList.contains(`${ID}__show`)) {
        gaTracking('Close 1st Popup Cross');
      } else if (
        document.querySelector(`.${ID}__step[data-attr="2"]`).classList.contains(`${ID}__show`)
      ) {
        gaTracking('Close 2nd Popup');
      } else if (
        document.querySelector(`.${ID}__step[data-attr="3"]`).classList.contains(`${ID}__show`)
      ) {
        gaTracking('Close 3rd Popup');
      }

      document.body.classList.remove(`${ID}__modalOpen`);
    }
  });
  if (VARIATION === 'Control') return;

  init();
};
