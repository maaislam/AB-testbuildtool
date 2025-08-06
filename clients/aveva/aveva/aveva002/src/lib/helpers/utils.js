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
      console.log('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
};

export const getElement = (cssSelector, outTimer = 100000) => {
  const els = document.querySelectorAll(cssSelector);
  if (els.length > 0) {
    return Promise.resolve({
      selector: cssSelector,
      elements: Array.from(els)
    });
  }
  return new Promise((resolve, reject) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        const elems = document.querySelectorAll(cssSelector);
        if (elems.length > 0) {
          observer.disconnect();
          resolve({
            selector: cssSelector,
            elements: Array.from(elems)
          });
        }
      });
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    setTimeout(() => {
      observer.disconnect();
      reject(new Error(`Timeout while waiting for ${cssSelector}`));
    }, outTimer);
  });
};

export const waitForConditions = (conditions, callback, timeout = 10000, pollFreq = 100) => {
  if (!Array.isArray(conditions)) {
    throw new TypeError('The first parameter must be an array');
  }

  if (typeof callback !== 'function') {
    throw new TypeError('The second parameter must be a function');
  }

  if (typeof timeout !== 'number' || timeout < 1000) {
    throw new TypeError('The third parameter must be a number greater than or equal to 1000');
  }

  const promises = conditions.map((condition) => {
    if (typeof condition === 'function') {
      return new Promise((resolve, reject) => {
        let intervalId;
        let timeoutId;

        const clearIds = () => {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
        };
        intervalId = setInterval(() => {
          if (condition()) {
            clearIds();
            resolve();
          }
        }, pollFreq);
        timeoutId = setTimeout(() => {
          clearIds();
          reject(new Error(`Timeout while waiting for ${condition}`));
        }, timeout);
      });
    }
    return getElement(condition).catch((error) => {
      throw new Error(`Failed to find elements matching selector '${condition}': ${error}`);
    });
  });

  Promise.all(promises)
    .then((fullfilledPromises) => {
      const elements = fullfilledPromises.reduce((acc, curr) => {
        if (curr) {
          acc[curr.selector] = curr.elements;
        }
        return acc;
      }, {});

      console.log('All conditions are true');
      callback(elements);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const observeDOM = (targetSelectorString, callbackFunction, configObject) => {
  const target = document.querySelector(targetSelectorString);
  let oldHref = window.location.href;
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      let urlChanged = false;
      if (oldHref !== window.location.href) {
        oldHref = window.location.href;
        urlChanged = true;
      }
      setTimeout(() => {
        callbackFunction(mutation, urlChanged);
      }, 500);
    });
  });

  //configuration of the observer:

  const config = configObject || {
    childList: true,
    characterData: true,
    characterDataOldValue: true,
    attributes: true,
    subtree: true
  };

  observer.observe(target, config);
};

export const sendAdobeEvent = (options) => {
  const { linkName, events = [], eVars = {}, props = {}, contextData = {} } = options;

  if (typeof window.s !== 'undefined') {
    const { s } = window;

    //Combine all variable keys to send
    const eVarKeys = Object.keys(eVars);
    const propKeys = Object.keys(props);
    const contextKeys = Object.keys(contextData);

    const allVars = ['events']
      .concat(eVarKeys)
      .concat(propKeys)
      .concat(contextKeys.map((key) => `contextData.${key}`));

    s.linkTrackVars = allVars.join(',');
    s.linkTrackEvents = events.join(',');
    s.events = events.join(',');

    //Set eVars
    eVarKeys.forEach((key) => {
      s[key] = eVars[key];
    });

    //Set props
    propKeys.forEach((key) => {
      s[key] = props[key];
    });

    //Set contextData
    contextKeys.forEach((key) => {
      s.contextData = s.contextData || {};
      s.contextData[key] = contextData[key];
    });

    //Fire Adobe Analytics custom link event
    s.tl(true, 'o', linkName);
  }
};
