import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import giftQuestion from './components/giftQuestion';
import { deleteCookie, setCookie } from './helpers/cookie';
import obsIntersection from './helpers/observeIntersection';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);

  const isMobile = () => window.DY.deviceInfo.type === 'smartphone';
  const anchorElems = isMobile()
    ? document.querySelectorAll('.Cart-Footer')
    : document.querySelectorAll('.Cart-Summary');

  //just for control
  if (VARIATION === 'control') {
    const callback = (entry) => {
      if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        entry.target.classList.add(`${ID}__seen`);
        fireEvent('Conditions met', shared);
      }
    };
    obsIntersection(anchorElems[0], 1, callback);
    return;
  }

  //remove existing
  document.querySelectorAll(`.${ID}__container`).forEach((item) => {
    item?.remove();
  });

  //intersection callback
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      isMobile() && fireEvent('Conditions met', shared);
      fireEvent('Customer scrolls to see summary section', shared);
    }
  };

  //render new element add event and intersection observer
  anchorElems.forEach((elm) => {
    elm.insertAdjacentHTML(`${isMobile() ? 'beforebegin' : 'afterend'}`, giftQuestion(ID));
    if (!isMobile()) {
      fireEvent('Conditions met', shared);
    }

    obsIntersection(elm, 1, intersectionCallback);
  });

  //click handler
  const checkbox = document.getElementById(`${ID}__giftcheckbox`);
  checkbox.addEventListener('click', () => {
    if (checkbox.checked === true) {
      fireEvent('Customer selects the checkbox', shared);
      setCookie(`${ID}__giftselected`, true);
    } else {
      fireEvent('Customer unselects the checkbox', shared);
      deleteCookie(`${ID}__giftselected`);
    }
  });
};
