import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';
import getProlfileVisibilityStatus from './helpers/getProfileVisibilityStatus';
import { getCookie, setCookie } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = (data) => {
  console.log('dataL', data);
  const { status } = data;

  if (status === 'Not Searchable' && !getCookie(`${ID}__modalShow`)) {
    if (!document.querySelector(`.${ID}__modalContainer`)) {
      document.body.classList.add(`${ID}__modalShow`);
      document.body.insertAdjacentHTML('beforeend', modal(ID));
    }
  }
};

export default () => {
  setup();

  getProlfileVisibilityStatus().then((data) => {
    init(data);
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__continueCta`)) {
      const yesRadio = document.getElementById('yes');
      const maybeRadio = document.getElementById('maybe');

      if (yesRadio.checked) {
        document.querySelector('#switchToggle1 .switch.switch-green').click();
        setCookie(`${ID}__modalShow`, true, 30);
      } else if (maybeRadio.checked) {
        setCookie(`${ID}__modalShow`, false, 30);
      }
    }
    if (target.closest(`.${ID}__crossIcon`)) {
      setCookie(`${ID}__modalShow`, false, 30);
      document.body.classList.remove(`${ID}__modalShow`);
    }
  });
};
