import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';
import getProlfileVisibilityStatus from './helpers/getProfileVisibilityStatus';
import { getCookie, setCookie } from './helpers/utils';

const { ID } = shared;

const init = (data) => {
  const { active } = data;

  if (!active && !getCookie(`${ID}__modalShow`) && !document.querySelector(`.${ID}__modalContainer`)) {
    document.body.classList.add(`${ID}__modalShow`);
    document.body.insertAdjacentHTML('beforeend', modal(ID));
  }
};

export default () => {
  setup();

  const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
    if ('ga' in window) {
      window.ga.getAll()[0].send('event', {
        eventCategory,
        eventAction,
        eventLabel
      });
    }
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__continueCta`)) {
      const yesRadio = document.getElementById('yes');
      const maybeRadio = document.getElementById('maybe');

      if (yesRadio.checked) {
        document.querySelector('#switchToggle1 .switch.switch-green').click();
        document.body.classList.remove(`${ID}__modalShow`);
        setCookie(`${ID}__modalShow`, true, 30);
      } else if (maybeRadio.checked) {
        document.body.classList.remove(`${ID}__modalShow`);
        setCookie(`${ID}__modalShow`, true, 30);
      }
    } else if (target.closest(`.${ID}__crossIcon`)) {
      document.body.classList.remove(`${ID}__modalShow`);
      trackGAEvent('funnelenvy', 'click', 'Closed the overlay');
      setCookie(`${ID}__modalShow`, true, 30);
    }
  });

  const profileHref = document.querySelector('.personal-links-section .link-row a').href;

  const value = profileHref.split('/profiles/')[1];

  if (value.includes('active') || getCookie(`${ID}__modalShow`)) return;

  getProlfileVisibilityStatus(value).then((data) => {
    init(data);
  }).catch((error) => {
    console.error(error);
  });
};
