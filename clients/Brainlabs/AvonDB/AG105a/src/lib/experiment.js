import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import brochureContainer from './components/brochuresContainer';
import { brochureDescription } from './data';
import getCatalog from './helpers/getCatalog';
import observeDOM from './helpers/observeDOM';
import obsIntersection from './helpers/observeIntersection';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

const CARD_INTERSECT_RATIO = 0.5;
const VARIATION_INIT_DELAY = 1000;
const CONTROL_INIT_DELAY = 2000;

const intersectionCallback = ({ isIntersecting, target }) => {
  if (isIntersecting && !document.querySelector(`.${ID}__seen`)) {
    target.classList.add(`${ID}__seen`);
    fireEvent('User scrolls to the end of the page', shared);
  }
};

const init = (catalogsData, anchorElement) => {
  if (
    window.location.pathname.includes('.html') ||
    !!document.querySelector(`.${ID}__brochure--container`)
  ) {
    return;
  }

  console.log(`${ID}-${VARIATION} catalog data:`, catalogsData);

  const logoContainer = document.getElementById('logo_container');
  document.getElementById('main_container').classList.add(`${ID}__main-container`);
  logoContainer.classList.add(`${ID}__logo-container`);
  logoContainer.insertAdjacentHTML('beforeend', '<span>DIGITAL BROCHURES</span>');

  anchorElement.insertAdjacentHTML('beforebegin', brochureContainer(ID, catalogsData));

  const newSplashContainer = document.querySelector(`.${ID}__brochure--container`);

  newSplashContainer.addEventListener('click', ({ target }) => {
    if (target.matches(`.${ID}__brochurebutton`) || target.closest(`.${ID}__brochurebutton`)) {
      const brochureTitle = target.closest('a').dataset.title;
      fireEvent(`user clicked "${brochureTitle.toUpperCase()}"`, shared);
    }
  });

  const lastCard = document.querySelector(`.${ID}__last-card`);

  obsIntersection(lastCard, CARD_INTERSECT_RATIO, intersectionCallback);
};

const controlInit = () => {
  const catalogCovers = document.querySelectorAll('.catalogue-cover');
  catalogCovers.forEach((cover, index) => {
    cover.querySelector('div:last-child').classList.add(`${ID}__control-brocurebutton`);
    if (index + 1 !== catalogCovers.length) return;
    cover.classList.add(`${ID}__control-lastcard`);
  });

  document.getElementById('main_container').addEventListener('click', ({ target }) => {
    if (
      target.matches(`.${ID}__control-brocurebutton`) ||
      target.closest(`.${ID}__control-brocurebutton`)
    ) {
      fireEvent(`user clicked "${target.innerText}"`, shared);
    }
  });

  const lastCard = document.querySelector(`.${ID}__control-lastcard`);

  obsIntersection(lastCard, CARD_INTERSECT_RATIO, intersectionCallback);
};

export default async () => {
  setup('Experimentation', `AvonGlobal - ${ID}`, shared);
  fireEvent('Conditions Met', shared);

  if (VARIATION === 'control') {
    setTimeout(controlInit, CONTROL_INIT_DELAY);
    return;
  }
  const catalogCover = document.querySelector('.catalogue-cover');
  const anchorElm = catalogCover.parentElement.parentElement;

  window.ag105aData = brochureDescription;
  anchorElm.classList.add(`${ID}__hide`);
  const catalogs = await getCatalog();

  init(catalogs, anchorElm);

  const mutationCallback = (mutation, urlChanged) => {
    if (urlChanged) {
      setTimeout(() => {
        init(catalogs, anchorElm);
      }, VARIATION_INIT_DELAY);
    }
  };
  observeDOM('body', mutationCallback);
};
