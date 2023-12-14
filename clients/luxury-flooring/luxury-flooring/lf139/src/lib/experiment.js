import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  const obsIntersection = (target, threshold, callback) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          callback(entry, observer);
        });
      },
      {
        threshold
      }
    );
    if (!target) {
      return;
    }

    observer?.observe(target);
  };

  const anchoringElem = document.querySelector('.category-readmore');
  const filter = document.querySelector('.filter-toolbar');

  const intersectionHandler = (entry) => {
    //console.log('🚀 ~ file: experiment.js:31 ~ intersectionHandler ~ entry:', entry);
    if (entry.isIntersecting) {
      //console.log('Conditions Met');
      filter.classList.remove(`${ID}__sticky`);
      //check if filter state is open

      return;
    }
    filter.classList.add(`${ID}__sticky`);
  };

  obsIntersection(anchoringElem, 1, intersectionHandler);

  let lastScrollTop = 0;

  function isScrollingUp() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      //Scrolling down
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      return false;
    }
    //Scrolling up
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    return true;
  }

  //const selectedFilters = document.querySelector(`.${ID}__sticky + .filter-state`);
  window.addEventListener('scroll', () => {
    if (isScrollingUp()) {
      //User is scrolling up
      console.log('Scrolling Up');
      document.querySelector(`.${ID}__sticky + .filter-state`)?.classList.remove(`${ID}__hide`);
    } else {
      //User is scrolling down
      document.querySelector(`.${ID}__sticky + .filter-state`)?.classList.add(`${ID}__hide`);
      console.log('Scrolling Down');
    }
  });
};
