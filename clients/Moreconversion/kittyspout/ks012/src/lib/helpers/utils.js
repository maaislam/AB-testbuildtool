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
      //eslint-disable-next-line no-console
      console.log('Polling exceeded maximum time limit');
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

export const getLocalThreshold = (amountInUSD) => {
  if (window.Shopify && window.Shopify.currency && window.Shopify.currency.rate) {
    const { rate: conversionRate } = window.Shopify.currency;
    const convertedAmount = amountInUSD * conversionRate;
    const roundedAmount = Math.ceil(convertedAmount); //Round up to the nearest dollar
    const moneyFormat = window.theme.settings.moneyFormat || '$ {{amount}}';

    //Replace '{{amount}}' in the format string with the rounded amount
    const formattedAmount = moneyFormat.replace('{{amount}}', roundedAmount.toFixed(2));
    return {
      formattedAmount,
      roundedAmount
    };
  }
  throw new Error('Shopify currency rate is not available.');
};

export const getCartCallback = async (callback) => {
  const cart = await fetch('/cart.js');
  const cartData = await cart.json();

  if (callback) return callback(cartData);

  return cartData;
};
