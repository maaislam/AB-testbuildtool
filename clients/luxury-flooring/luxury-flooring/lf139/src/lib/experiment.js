import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

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
};
