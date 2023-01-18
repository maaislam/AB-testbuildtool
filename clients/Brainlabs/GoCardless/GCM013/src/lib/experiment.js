/*eslint-disable function-paren-newline */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pageData } from './pageData';
import { observeDOM, obsIntersection } from './helpers/utils';
import clickHandler from './helpers/clickHandler';
import wistiaTrackings from './helpers/wistiaTrackings';

const { ID, VARIATION } = shared;

const init = () => {
  //console.log('init', );
  const data = pageData[window.location.pathname];
  if (!data) return;
  const signupBtnDesktop = document.querySelector('.css-19nbx3n');
  const signupBtnMobile = document.querySelector('.css-1rhoc2k');
  const integrateBtn = document.querySelectorAll('.css-140tqjo')[1];
  const customerStoryBtn = document.querySelector('.css-1ywp5l1');

  const navItems = document.querySelector('.css-1lnsvng');
  navItems.classList.add(`${ID}__navItems`);
  //hide menu items except contact sales

  signupBtnDesktop.innerText = data.contanctSalesCopy;
  signupBtnMobile.innerText = data.contanctSalesCopy;
  signupBtnMobile.setAttribute('href', data.contanctSalesUrl);

  document.querySelectorAll('.css-qcchdl').forEach((el, i) => {
    el.setAttribute('href', data.slot1[i].url);
  });
  integrateBtn?.setAttribute('href', data.slot3[0].url);
  customerStoryBtn?.setAttribute('href', data.slot5[0].url);
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    clickHandler(e);
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  wistiaTrackings('qu3rohwaec');

  init();
  const mutationCallback = (mutation) => {
    const { addedNodes, removedNodes } = mutation;
    const modifiedNodes = [...addedNodes, ...removedNodes];
    const isChangingElem = modifiedNodes.some((node) => node.nodeType === 3);
    if (isChangingElem) return;
    init();
  };
  observeDOM('#___gatsby', mutationCallback, {
    childList: true,
    subtree: true
  });

  const contactCta = document.querySelector('.css-5j6s9h');
  const headerContactCta = document.querySelector('.css-95l7bd');
  const intersectionCallback = (entry) => {
    //console.log(entry);
    if (entry.isIntersecting) {
      headerContactCta.classList.remove('show');
      return;
    }
    headerContactCta.classList.add('show');
  };

  obsIntersection(contactCta, 0.5, intersectionCallback);
};
