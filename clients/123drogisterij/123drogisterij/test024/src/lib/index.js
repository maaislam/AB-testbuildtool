(function () {
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  const shared = {
    ID: 'test024',
    VARIATION: '1',
    CLIENT: '123drogisterij',
    SITE: '123drogisterij'
  };
  const shared$1 = getDefaultExportFromCjs(shared);

  const setup = () => {
    const { ID, VARIATION } = shared$1;
    document.documentElement.classList.add(ID);
    document.documentElement.classList.add(`${ID}-${VARIATION}`);
  };

  const pollerLite = (conditions, callback, maxTime = 10000) => {
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

  const init = () => {
    const priceOptions = Array.from(document.querySelectorAll('.prices-tier.items .item')).map(
      (item) => {
        return {
          count: item.dataset.item,
          price: item.querySelector('span.price-wrapper').dataset.priceAmount
        };
      }
    );

    const finalPrice = document.querySelector('.price-wrapper[data-price-type="finalPrice"]');
    const price = finalPrice.dataset.priceAmount;

    priceOptions.push({
      count: '1',
      price
    });
    const targetPoint = document.querySelectorAll(
      '#product_addtocart_form label.custom-child-upsel-checkbox'
    );
    targetPoint.forEach((label) => {
      const inputElem = label.querySelector('input[type="radio"]');
      const { value } = inputElem;
      const isExistOption = priceOptions.find((option) => option.count === value);
      if (isExistOption && !label.querySelector('.per-pack-price')) {
        inputElem.insertAdjacentHTML(
          'afterend',
          `<span class="per-pack-price">€&nbsp;${isExistOption.price} per stuk</span>`
        );
      }
    });
  };
  const activate = () => {
    setup();
    init();
  };

  pollerLite(['body', '.prices-tier.items', '#product_addtocart_form'], activate);
})();
