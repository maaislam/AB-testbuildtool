const updateCount = (count) => {
  const countEls = document.querySelectorAll('.cart-link__bubble-num');

  if (countEls.length) {
    countEls.forEach((el) => {
      //eslint-disable-next-line no-param-reassign
      el.innerText = count;
    });
  }

  //show/hide bubble(s)
  const bubbles = document.querySelectorAll('.cart-link__bubble');
  if (bubbles.length) {
    if (count > 0) {
      bubbles.forEach((b) => {
        b.classList.add('cart-link__bubble--visible');
      });
    } else {
      bubbles.forEach((b) => {
        b.classList.remove('cart-link__bubble--visible');
      });
    }
  }
};

const addToCart = (id, quantity = 1) => {
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
  })
    .then((result) => {
      const res = result.json();

      return res;
    })
    .then(() => {
      return fetch('/cart.js');
    })
    .then((cartData) => cartData.json())
    .then((data) => {
      updateCount(data.item_count);
    });

  return response;
};

export default addToCart;
