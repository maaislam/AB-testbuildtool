import setup from './services/setup';

import shared from './shared/shared';

import { getCookie, setCookie } from './helpers/utils';
import modalWrapper from './components/modalWrapper';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.body;

  const experimentCookie = getCookie(`${ID}__tracker`);

  if (!document.querySelector(`.${ID}__validateUserModal`) && !experimentCookie) {
    targetPoint.insertAdjacentHTML('beforeend', modalWrapper(ID));
    targetPoint.classList.add(`${ID}__modalOpen`);
    setCookie(`${ID}__tracker`, true);
  }
};
export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__noThanksBtn`)) {
      document.body.classList.remove(`${ID}__modalOpen`);
    } else if (target.closest(`.${ID}__continue`)) {
      const targetedEl = target.closest(`.${ID}__continue`);
      const parentEl = targetedEl.closest(`.${ID}__step`);
      parentEl.classList.remove(`${ID}__show`);
      const nextEl = parentEl.nextElementSibling;
      nextEl.classList.add(`${ID}__show`);
    } else if (target.closest(`.${ID}__subscribeBtn`)) {
      const targetedEl = target.closest(`.${ID}__subscribeBtn`);
      const parentEl = targetedEl.closest(`.${ID}__step`);
      parentEl.classList.remove(`${ID}__show`);
      const nextEl = parentEl.nextElementSibling;
      nextEl.classList.add(`${ID}__show`);
    }
  });
  if (VARIATION === 'control') return;

  init();
};
