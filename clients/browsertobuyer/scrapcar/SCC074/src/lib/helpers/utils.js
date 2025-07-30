/**
 * Polls the DOM for a condition to be met before executing a callback.
 *
 * @param {array} conditions The array of conditions to check for.
 * @param {function} callback The callback function when all conditions are true.
 * @param {number} maxTime max time the check witll run before abort.
 */
export const pollerLite = (conditions, callback, maxTime = 1000000) => {
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

export const setAttributeInDom = () => {
  const offerButtons = document.querySelectorAll('button[aria-label="Accept this offer"]');

  const offerCards = Array.from(offerButtons)
    .map((button) => {
      //Step 1: Go up to main card container
      const card = button.closest('.rounded-lg'); //safer than .parentElement chain

      if (!card) return null;

      //Step 2: Look for <div> containing price <span>
      const priceEl = card.querySelector('.h-12 span');
      if (!priceEl) return null;

      const rawText = priceEl.textContent.trim();
      const priceMatch = rawText.match(/[\d.]+/); //match numbers like 174.00 or 87.5
      const price = priceMatch ? parseFloat(priceMatch[0]) : NaN;

      return {
        card,
        price
      };
    })
    .filter(({ price }) => !isNaN(price));

  //Step 3: Sort by price descending
  offerCards.sort((a, b) => b.price - a.price);

  //Step 4: Add data attributes + console logs
  offerCards.forEach(({ card, price }, index) => {
    const rank = index + 1;
    const formattedPrice = price.toFixed(2);

    card.dataset.price = formattedPrice;
    card.dataset.rank = rank;
  });
};

export const detectInactivity = ({ timeout = 60000, onInactive, onActive, fireOnce = false }) => {
  let timerId = null;
  let isInactive = false;
  let hasFiredOnce = false;

  const triggerInactive = () => {
    if (fireOnce && hasFiredOnce) return;
    isInactive = true;
    hasFiredOnce = true;
    onInactive?.();
    if (fireOnce) clearTimeout(timerId);
  };

  const markActive = () => {
    if (isInactive) {
      isInactive = false;
      onActive?.();
    }
    if (!fireOnce || !hasFiredOnce) {
      resetTimer();
    }
  };

  const resetTimer = () => {
    clearTimeout(timerId);
    timerId = setTimeout(triggerInactive, timeout);
  };

  const events = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];

  events.forEach((event) =>
    window.addEventListener(event, markActive, {
      passive: true
    })
  );

  resetTimer();

  return () => {
    clearTimeout(timerId);
    events.forEach((event) => window.removeEventListener(event, markActive));
  };
};

export const getPostcodeFromQFI = () => {
  try {
    const qfiKey = new URLSearchParams(window.location.search).get('qfi');
    if (!qfiKey) return null;

    const { postcode } = JSON.parse(localStorage.getItem(qfiKey) || '{}');
    if (!postcode) return null;

    const cleaned = postcode.replace(/\s+/g, '').toUpperCase();
    return cleaned.length < 5 ? null : `${cleaned.slice(0, -3)} ${cleaned.slice(-3)}`;
  } catch (err) {
    console.error('Error retrieving or formatting postcode:', err);
    return null;
  }
};
