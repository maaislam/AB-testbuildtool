import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

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

const init = (entry, observer) => {
  //console.log('🚀 ~ init ~ entry:', entry);

  if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
    const dropdown = document.querySelector('select.jdgm-sort-dropdown');
    dropdown.value = VARIATION === '1' ? 'most-helpful' : 'highest-rating';
    dropdown.dispatchEvent(new Event('change'));
    observer?.disconnect();
  }
};

export default () => {
  setup();
  //init();

  obsIntersection(document.querySelector('select.jdgm-sort-dropdown'), 0.1, init);
};
