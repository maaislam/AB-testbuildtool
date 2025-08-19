import setup from './services/setup';
import shared from './shared/shared';
import { obsIntersection } from './helpers/utils';
import { data, pageIDs } from './data/data';
import cardWrapper from './components/cardWrapper';
import trackGA4Event from './services/gaTracking';

const { ID, VARIATION } = shared;

const handleIntersectionForTest = (entry) => {
  console.log('Intersection entry:', entry);
  if (entry.isIntersecting) {
    if (!document.body.classList.contains(`${ID}__hasSeen`)) {
      console.log('In view', entry.target);
      trackGA4Event('test_run_ct_280', 'scrolls down', '');
      document.body.classList.add(`${ID}__hasSeen`);
    }
  }
};

const handleObserver = (selector) => {
  const intersectionAnchor = document.querySelector(selector);
  if (intersectionAnchor) {
    obsIntersection(intersectionAnchor, 0.2, handleIntersectionForTest);
  }
};

const init = () => {
  const hideInitial = (id) => {
    const HIDE_CLASS = 'hidden-by-hideInitial';
    try {
      const startEl = document.querySelector(`h2:has(#${id})`);
      if (!startEl) return;

      const wrappers = document.querySelectorAll('.pro-con-list-wrapper');
      const lastWrapper = wrappers[wrappers.length - 1];
      if (!lastWrapper) return;

      //If start is after lastWrapper, do nothing
      if (lastWrapper.compareDocumentPosition(startEl) & Node.DOCUMENT_POSITION_FOLLOWING) {
        return;
      }

      const hidden = [];

      //Hide from startEl up to (but not past) lastWrapper
      let el = startEl;
      while (el && el !== lastWrapper) {
        el.classList.add(HIDE_CLASS);
        hidden.push(el);
        el = el.nextElementSibling;
      }

      //Hide the lastWrapper
      lastWrapper.classList.add(HIDE_CLASS);
      hidden.push(lastWrapper);

      //Hide the next <p>
      const after = lastWrapper.nextElementSibling;
      if (after?.tagName === 'P') {
        after.classList.add(HIDE_CLASS);
        hidden.push(after);
      }

      //hiddenEls = hidden;
    } catch (err) {
      console.error('hideInitial failed:', err);
    }
  };

  const { pathname } = window.location;
  const hasPageData = data[pathname];
  const currentId = pageIDs[pathname];
  if (hasPageData && !document.querySelector(`.${ID}__card-wrapper`) && currentId) {
    if (VARIATION === 'control') {
      handleObserver(`#${currentId}`);
      return;
    }

    hideInitial(currentId);
    const mainTargetPoint = document.querySelector(`#${currentId}`).closest('h2');
    if (mainTargetPoint) {
      mainTargetPoint.insertAdjacentHTML('afterend', cardWrapper(ID, hasPageData));
      handleObserver(`.${ID}__card`);
    }
  }
};

export default () => {
  setup();

  init();
};
