/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 10000) => {
  const POLLING_INTERVAL = 25;
  const startTime = Date.now();
  const interval = setInterval(() => {
    const allConditionsMet = conditions.every((condition) => {
      if (typeof condition === 'function') {
        return condition();
      }
      return !!document.querySelector(condition);
    });
    if (allConditionsMet) {
      clearInterval(interval);
      callback();
    } else if (Date.now() - startTime >= maxTime) {
      clearInterval(interval);
      console.error('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
};

export const initSwiper = (id) => {
  let init = false;
  let swiper;

  const styleSheet = document.createElement('link');
  styleSheet.rel = 'stylesheet';
  styleSheet.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
  document.head.appendChild(styleSheet);

  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
  document.head.appendChild(script);

  const swiperReviews = () => {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        swiper = new window.Swiper(`.${id}__swiper`, {
          slidesPerView: 1.2,
          spaceBetween: 38,
          loop: true,
          delay: 2000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  };

  script.onload = () => {
    swiperReviews();
    window.addEventListener('resize', swiperReviews);
  };
};

export const observeIntersection = (target, threshold, callback) => {
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold
  });
  if (!target) {
    return;
  }

  observer?.observe(target);
};

export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      callbackFunction(mutation);
    });
  });

  observer.observe(target, config);
};

export const wrapInner = (parentSelector, wrapperAttributes = {}) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;

  const wrapper = document.createElement('div');
  Object.entries(wrapperAttributes).forEach(([key, value]) => wrapper.setAttribute(key, value));

  Array.from(parent.childNodes).forEach((child) => wrapper.appendChild(child));

  parent.appendChild(wrapper);
};
