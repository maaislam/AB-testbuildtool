import { underlayRules } from '../data/data';

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
      observer.disconnect();

      callbackFunction(mutation);
      observer.observe(target, config);
    });
  });

  observer.observe(target, config);
};

export const getUnderlay = (rugWidth, rugLength) => {
  //filter out the rules that match the rug width
  const matchedWidthRules = underlayRules.filter((rule) => {
    return rule.maxWidth === null || rugWidth <= rule.maxWidth;
  });

  //filter out the rules that match the rug length from the matched width rules
  for (let i = 0; i < matchedWidthRules.length; i++) {
    const rule = matchedWidthRules[i];
    const lengthMatch = rule.maxLength === null || rugLength <= rule.maxLength;
    if (lengthMatch) {
      console.log(`Rug Size: ${rugWidth}x${rugLength}`);
      console.log(`Underlay: ${rule.variantName}`);
      //console.log(`Variant ID: ${rule.variantId}`);
      //console.log(`Price: £${rule.price}`);
      return rule;
    }
  }

  //console.log(`No underlay found for rug size ${rugWidth}x${rugLength}`);
  return null;
};

export const getCartRugData = () => {
  const cartItem = document.querySelector('.cart-item');
  if (!cartItem) return null;

  const sizeText = cartItem.querySelector('.cart-item-product-options__option-value')?.textContent?.trim();

  if (!sizeText) return null;

  const sizeMatch = sizeText.match(/(\d+)\s*cm\s*x\s*(\d+)\s*cm/i);

  if (!sizeMatch) return null;

  const width = parseInt(sizeMatch[1], 10);
  const length = parseInt(sizeMatch[2], 10);

  return {
 width, length
};
};

export const addToCart = (id, quantity) => {
  const payload = {
    id,
    quantity
  };

  const response = fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((responses) => {
    const res = responses.json();
    return res;
  });
  return response;
};
