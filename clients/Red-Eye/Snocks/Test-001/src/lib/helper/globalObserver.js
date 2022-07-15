const notificationDom = (id, count) => {
  const text = `<span class="${id}__notifyBody">You have to add ${5 - count} more ${
    5 - count > 1 ? 'products' : 'product'
  } to get discount</span>`;
  document.querySelector(`.${id}__notifyBody`)?.remove();
  document.querySelector(`.${id}__notifyContainer`).insertAdjacentHTML('beforeend', text);

  setTimeout(() => {
    document.querySelector(`.${id}__notifyBody`)?.remove();
  }, 3000);
};

const compareFn = (id, updateCount) => {
  if (updateCount < 5) {
    notificationDom(id, updateCount);
  } else {
    console.log("don't show notification");
  }
};

const cartApiFn = async (id) => {
  const cartApi = await fetch(`/cart.js`);
  const cartJson = await cartApi.json();

  compareFn(id, cartJson.item_count);
};

const globalObserver = (id, selector, initialCartItem) => {
  const target = document.querySelector(selector);
  const config = { characterData: false, attributes: false, childList: true, subtree: false };
  const callback = function (mutationList) {
    for (const mutation of mutationList) {
      if (
        mutation.type === 'childList' &&
        (parseInt(mutation.addedNodes[0].textContent) > initialCartItem ||
          parseInt(mutation.addedNodes[0].textContent) < initialCartItem)
      ) {
        initialCartItem = parseInt(mutation.addedNodes[0].textContent);
        cartApiFn(id);
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(target, config);
};

export default globalObserver;
