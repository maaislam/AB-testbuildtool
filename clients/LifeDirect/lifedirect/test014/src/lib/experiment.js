import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { pollerLite } from '../../../../../../globalUtil/util';
import coverCard from './components/coverCard';
import { coverData } from './data';
import clickHandler from './helpers/clickHandler';
import { hideControlElems } from './helpers/setControl';

import shared from './shared/shared';

const { ID, VARIATION } = shared;
const DOM_RERENDER_DELAY = 20;

const init = () => {
  const controlSelector = document.getElementById('life.premiumStructure');
  const newCoverSelector = document.querySelector(`.${ID}__covercard`);
  //console.log(newCoverSelector, controlSelector);
  if (!controlSelector || newCoverSelector) return;

  if (sessionStorage.getItem(`${ID}__conditions-met`) !== 'true') {
    sessionStorage.setItem(`${ID}__conditions-met`, 'true');
    fireEvent('Conditions Met', shared);
  }
  if (VARIATION === 'control') {
    return;
  }

  const panelCard = controlSelector.closest('.panel-card');
  panelCard.classList.add(`${ID}__panelcard`);

  hideControlElems(ID, panelCard);
  panelCard.insertAdjacentHTML('afterbegin', coverCard(ID, coverData));
};

export default () => {
  setup('Experimentation', `LifeDirect - ${ID}`, shared);
  const appContainer = document.querySelector('body');
  pollerLite(['#app', '#life\\.premiumStructure'], () => {
    //console.log('in');
    setTimeout(init, DOM_RERENDER_DELAY);
  });
  //Poll and re-run init

  let oldHref = window.location.href;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;

        setTimeout(init, DOM_RERENDER_DELAY);
      }
    });
  });

  const config = {
    childList: true,
    subtree: true
  };

  appContainer.addEventListener('click', ({ target }) => {
    clickHandler(ID, target);
  });

  observer.observe(appContainer, config);
};
