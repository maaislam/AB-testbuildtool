import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import collectName from './pages/collectName';
import nameSubmitHandler from './handlers/nameSubmitHandler';
import inputChangeHandler from './handlers/inputChangeHandle';
import scanPage from './pages/scanPage';
//import scanning from './pages/scanning';
import locationInputhandler from './handlers/locationInputHandler';
import locationSubmitHandler from './handlers/locationSubmitHandler';
import scanSubmitHandler from './handlers/scanSubmitHandler';
import emailSibmitHandler from './handlers/emailsubmitHandler';
import scanResult from './pages/scanResult';
import getScanResult from './helpers/getScanResult';
//import scanRecordRow from './components/scanRecordRow';
import recordModalHandler from './handlers/recordModalHandler';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  const page = document.getElementById('page');
  page.classList.add(`${ID}__hide`);

  const pageContentConfig = {
    '/scan/': collectName(ID),
    '/scanning/': scanPage(ID),
    '/scan-results/': scanResult(ID)
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
      header.insertAdjacentHTML('afterend', window.feDm11Scanning(ID));
      scanSubmitHandler(ID);
      const navtabs = document.querySelector(`.${ID}__navtab`);
      navtabs?.classList.remove('step-1');
      navtabs?.classList.add('step-2');
    } else if (target.closest(`.${ID}__getlocal--submit`)) {
      e.preventDefault();

      //handle loation confirm submit
      locationSubmitHandler(ID, target);
    } else if (target.closest(`.${ID}__getemail--submit`)) {
      e.preventDefault();
      emailSibmitHandler(ID, target);
    } else if (target.closest(`.${ID}__checkbox-block`)) {
      document.querySelector('#lbl-term-1').click();
      document.getElementById('chk-term-1').checked = true;
    } else if (target.closest(`.${ID}__scanresults--resultrow`)) {
      recordModalHandler(ID, target);
    } else if (
      (target.closest(`.${ID}__recordmodal`) && !target.closest(`.${ID}__modalcontent`)) ||
      target.closest(`.${ID}__modalclose`)
    ) {
      //close modal
      const modal = document.querySelector(`.${ID}__recordmodal`);
      const modalContent = document.querySelector(`.${ID}__modalcontent`);

      modalContent.classList.add('close');
      setTimeout(() => {
        modal.classList.add(`${ID}__hide`);
        modal.innerHTML = '';
      }, 500);
    } else if (target.closest('#menu-item-1580')) {
      gaTracking('remove_my_private_info');
    } else if (target.closest(`.${ID}__startprotection`)) {
      gaTracking('start_protection');
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

  //add scan result rows if scan result page
  if (window.location.pathname === '/scan-results/') {
    document.body.classList.add(`${ID}__scanresults--page`);
    const clonedJoinBtn = document.getElementById('menu-item-1580').cloneNode(true);
    clonedJoinBtn.classList.add(`${ID}__scanresults--joinbtn`);
    clonedJoinBtn.querySelector('a').innerText = 'Remove my profile info';
    document.querySelector(`.${ID}__header--logo`).insertAdjacentElement('afterend', clonedJoinBtn);

    const clonedJoinBtn2 = document.querySelector(`.${ID}__scanresults--joinbtn`).cloneNode(true);
    document
      .querySelector(`.${ID}__scanresults--resultfooter`)
      .insertAdjacentElement('beforeend', clonedJoinBtn2);

    getScanResult(ID).then((records) => {
      //render scan result rows
      document
        .querySelector(`.${ID}__scanresults--resultheader`)
        .insertAdjacentHTML('afterend', window.feDm11ScanRecordRow(ID, records));
      const recordModal = `<div class="${ID}__recordmodal ${ID}__hide"></div>`;
      document.body.insertAdjacentHTML('afterbegin', recordModal);
    });
  }
};
