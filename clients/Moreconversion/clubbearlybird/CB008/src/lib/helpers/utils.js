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

export const getProduct = async (url) => {
  const res = await fetch(url, {
    //don't send cookies cross-site
    credentials: 'omit',
    //avoid unnecessary custom headers that can trigger preflight
    headers: {
      Accept: 'application/json'
    },
    cache: 'force-cache' //let the browser cache it
  });

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
};

export const uniqOpts = (arr, key) => [
  ...new Set(arr.map((o) => (typeof o[key] === 'string' ? o[key].trim() : o[key])).filter(Boolean))
];
export const getOption2WithPrice = (data) => {
  const seen = new Set();
  const out = [];

  data.forEach((v) => {
    const label = (v.option2 || '').trim();
    if (label && !seen.has(label)) {
      seen.add(label);
      out.push({
        label,
        price: v.price
      }); //price in cents
    }
  });

  return out;
};

export const formatPrice = (amountCents, qty = 1) => {
  const totalCents = (Number(amountCents) || 0) * (Number(qty) || 1);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(totalCents / 100);
};

export const getSavingsPercent = (price_max, sellprice, { precision = 0 } = {}) => {
  const max = Number(price_max);
  const sale = Number(sellprice);
  if (!Number.isFinite(max) || max <= 0 || !Number.isFinite(sale)) return 0;

  //((max - sale) / max) * 100, clamped to [0, 100]
  let pct = ((max - sale) / max) * 100;
  pct = Math.max(0, Math.min(100, pct));

  const f = 10 ** precision;
  return Math.round(pct * f) / f;
};

export const getPackCount = (label) => {
  if (label == null) return null;
  const s = String(label);

  //Prefer a number next to "pack"/"packs", fallback to the first number anywhere
  const m = s.match(/(\d+)\s*packs?/i) || s.match(/(\d+)/);
  return m ? parseInt(m[1]) : null;
};

//Add one item to Shopify cart; omit selling_plan when not provided
export const addToCart = (id, quantity = 1, sellingid = null) => {
  const qty = Math.max(1, parseInt(quantity, 10) || 1);

  const item = {
    id: String(id),
    quantity: qty
  };
  if (sellingid != null && sellingid !== '') {
    item.selling_plan = String(sellingid);
  }

  return fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      items: [item]
    })
  }).then((res) => {
    if (!res.ok) {
      //Try to surface a readable error
      return res.text().then((text) => {
        throw new Error(`Cart add failed: ${res.status} ${res.statusText} ${text || ''}`);
      });
    }
    return res.json(); //resolves with the added line item(s)
  });
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

export const addJsToPage = (src, id, cb, classes) => {
  if (document.querySelector(`#${id}`)) {
    return;
  }

  const s = document.createElement('script');
  if (typeof cb === 'function') {
    s.onload = cb;
  }

  if (classes) {
    s.className = classes;
  }

  s.src = src;
  s.setAttribute('id', id);
  document.head.appendChild(s);
};
