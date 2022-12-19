import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import collectName from './pages/collectName';
import nameSubmitHandler from './handlers/nameSubmitHandler';
import nameChangeHandler from './handlers/nameChangeHandle';
import scanPage from './pages/scanPage';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fullname--submit`)) {
      e.preventDefault();
      nameSubmitHandler(ID, target);
    }
  });
  document.body.addEventListener('change', ({ target }) => {
    nameChangeHandler(target);
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
  const page = document.getElementById('page');
  page.classList.add(`${ID}__hide`);

  const pageContentConfig = {
    '/scan/': collectName(ID),
    '/scanning/': scanPage(ID)
  };

  const pageContent = pageContentConfig[window.location.pathname];

  page.insertAdjacentHTML('afterend', pageContent);
};
