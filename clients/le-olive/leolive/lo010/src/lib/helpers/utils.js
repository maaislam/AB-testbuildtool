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

const collectionNameLang = {
  robes: {
    en: 'Robes',
    nl: 'Badjassen',
    de: 'Bademäntel',
    es: 'Albornoces',
    fr: 'Peignoirs'
  },
  kimonos: {
    en: 'Kimonos',
    nl: "Kimono's",
    de: 'Kimonos',
    es: 'Quimonos',
    fr: 'Kimonos'
  },
  pyjama: {
    en: 'pyjamas',
    nl: "Pyjama's",
    de: 'Pyjamas',
    es: 'Pijamas',
    fr: 'Pyjamas'
  }
};

export const collectionName = [
  {
    urlPortion: 'badjas',
    name: collectionNameLang.robes[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/badjassen`
      : '/collections/badjassen'
  },
  {
    urlPortion: 'robe',
    name: collectionNameLang.robes[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/badjassen`
      : '/collections/badjassen'
  },
  {
    urlPortion: 'kimono',
    name: collectionNameLang.kimonos[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/kimonos`
      : '/collections/kimonos'
  },
  {
    urlPortion: '/products/ruffle',
    name: collectionNameLang.kimonos[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/kimonos`
      : '/collections/kimonos'
  },
  {
    urlPortion: 'pyjama',
    name: collectionNameLang.pyjama[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/pyjamas`
      : '/collections/pyjamas'
  },
  {
    urlPortion: '/products/sleeping-dress-lace-champagne',
    name: collectionNameLang.pyjama[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/pyjamas`
      : '/collections/pyjamas'
  },
  {
    urlPortion: '/products/sleeping-dress-lace-snow-white',
    name: collectionNameLang.pyjama[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/pyjamas`
      : '/collections/pyjamas'
  },
  {
    urlPortion: '/products/sleeping-dress-lace-valentine-red',
    name: collectionNameLang.pyjama[window.Shopify.locale],
    link: window.location.href.includes(`/${window.Shopify.locale}/`)
      ? `/${window.Shopify.locale}/collections/pyjamas`
      : '/collections/pyjamas'
  }
];
