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
export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(`${targetSelectorString}`);

  if (!target) return;
  //configuration of the observer:

  const config = configObject || {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
    characterDataOldValue: true
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      //console.log(mutation);
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

export const addCssToPage = (href, id, classes) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const c = document.createElement('link');
  c.setAttribute('id', id);
  c.setAttribute('rel', 'stylesheet');

  if (classes) {
    c.className = classes;
  }

  c.href = href;
  document.head.appendChild(c);
};

export const addJsToPage = (src, id, classes, integrity = '') => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`#${id}`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');

    if (classes) {
      script.className = classes;
    }

    script.onload = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };

    script.src = src;
    script.setAttribute('id', id);
    document.head.appendChild(script);
  });
};

export const initSwiper = (container) => {
  //const { slidesPerView, spaceBetween, direction } = initConfig;

  const baseConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3.2
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  const slider = new Swiper(`${container}`, baseConfig);
};
