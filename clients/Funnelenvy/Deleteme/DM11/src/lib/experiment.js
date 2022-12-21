import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import collectName from './pages/collectName';
import nameSubmitHandler from './handlers/nameSubmitHandler';
import inputChangeHandler from './handlers/inputChangeHandle';
import scanPage from './pages/scanPage';
import scanning from './pages/scanning';
import locationInputhandler from './handlers/locationInputHandler';
import locationSubmitHandler from './handlers/locationSubmitHandler';
import scanSubmitHandler from './handlers/scanSubmitHandler';
import emailSibmitHandler from './handlers/emailsubmitHandler';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed

  const page = document.getElementById('page');
  //page.classList.add(`${ID}__hide`);

  const pageContentConfig = {
    '/scan/': collectName(ID),
    '/scanning/': scanPage(ID),
    '/scan-results/': ''
  };

  const pageContent = pageContentConfig[window.location.pathname];

  //click listener
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fullname--submit`)) {
      e.preventDefault();
      nameSubmitHandler(ID, target);
    } else if (target.closest('[data-btn="local-incorrect"]')) {
      target.closest(`.${ID}__confirmlocation--row1`).classList.add(`${ID}__hide`);
      target
        .closest(`.${ID}__confirmlocation--col1`)
        .querySelector(`.${ID}__confirmlocation--row2`)
        .classList.remove(`${ID}__hide`);
    } else if (target.closest('[data-btn="local-correct"]')) {
      const header = document.querySelector(`.${ID}__header`);
      document.querySelector(`.${ID}__confirmlocation`)?.remove();
      header.insertAdjacentHTML('afterend', scanning(ID));
      scanSubmitHandler(ID);
      const navtabs = document.querySelector(`.${ID}__navtab`);
      navtabs?.classList.remove('step-1');
      navtabs?.classList.add('step-2');
    } else if (target.closest(`.${ID}__getlocal--submit`)) {
      e.preventDefault();

      //handle loation confirm submit
      locationSubmitHandler(ID, target);
      const navtabs = document.querySelector(`.${ID}__navtab`);
      navtabs?.classList.remove('step-1');
      navtabs?.classList.add('step-2');
    } else if (target.closest(`.${ID}__getemail--submit`)) {
      e.preventDefault();
      emailSibmitHandler(ID, target);
    } else if (target.closest(`.${ID}__checkbox-block`)) {
      document.querySelector('#lbl-term-1').click();
      document.getElementById('chk-term-1').checked = true;
    }
  });

  //input listener
  document.body.addEventListener('input', ({ target }) => {
    document.querySelector('.input-error')?.remove();
    inputChangeHandler(target);

    if (target.closest(`.${ID}__getlocal--input`)) {
      locationInputhandler(target.value);
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  page.insertAdjacentHTML('afterend', pageContent);
};
