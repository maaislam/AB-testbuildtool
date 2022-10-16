import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import giftQuestion from './components/giftQuestion';
import { deleteCookie, setCookie } from './helpers/cookie';
import obsIntersection from './helpers/observeIntersection';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `Avon - ${ID}`, shared);

  const isMobile = () => window.matchMedia('(max-width: 700px)').matches;
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION == 'control') {

  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorElems = document.querySelectorAll('button[name="checkout"]');
  if (VARIATION === 'control') {
    const callback = (entry) => {
      if (!entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
        entry.target.classList.add(`${ID}__seen`);
        fireEvent('Conditions met', shared);
      }
    };
    obsIntersection(anchorElems[0], 1, callback);
    return;
  }

  document.querySelectorAll(`.${ID}__container`).forEach((item) => {
    item.remove();
  });

  const intersectionCallback = (entry) => {
    if (!entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      fireEvent('Conditions met', shared);
      fireEvent('Customer sees content below 1st checkout button', shared);
    }
  };
  anchorElems.forEach((elm, i) => {
    if (isMobile() && i > 0) return;
    elm.insertAdjacentHTML('afterend', giftQuestion(ID));
    obsIntersection(elm, 0.5, intersectionCallback);
  });

  const giftChekbox = document.querySelectorAll(`#${ID}__giftcheckbox`);

  giftChekbox.forEach((box) => {
    box.addEventListener('click', () => {
      if (box.checked === true) {
        fireEvent('Customer selects the checkbox', shared);
        setCookie(`${ID}__giftselected`, true);
      } else {
        deleteCookie(`${ID}__giftselected`);
      }
    });
  });
};
