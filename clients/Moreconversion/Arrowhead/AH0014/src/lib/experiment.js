import atcBtn from './components/atcBtn';
import customCheckbox from './components/customCheckbox';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const getCartInfo = async () => {
  return fetch('/cart.js').then((res) => res.json());
};

const atcBtnVisibilityAndClick = () => {
  const atcBtnElem = document.querySelector(`.${ID}__atc-btn`);
  const atcBtnCtrlElem = document.querySelector(`.${ID}__visibleAtcBtn`);

  atcBtnElem.classList.add(`${ID}__hide`);
  atcBtnCtrlElem.classList.remove(`${ID}__hide`);
  atcBtnCtrlElem.click();
};

const init = () => {
  const attachPoint = document.querySelector('.custom-swatch-label .custom-checkbox');

  if (!document.querySelector(`.${ID}__checkbox`)) {
    attachPoint.insertAdjacentHTML('afterend', customCheckbox(ID));
  }

  const atcBtnCtrl = document.querySelector(`.${ID}__visibleAtcBtn`);
  atcBtnCtrl.classList.add(`${ID}__hide`);

  if (!document.querySelector(`.${ID}__atc-btn`)) {
    atcBtnCtrl.insertAdjacentHTML('afterend', atcBtn(ID));
  }
};

export default () => {
  setup();

  const atcBtnCtrlElems = document.querySelectorAll('.atc-qty-merge .add-to-cart');
  atcBtnCtrlElems.forEach((btn) => {
    const style = getComputedStyle(btn);
    //style display flex
    if (style.display === 'flex' || style.display === 'block') {
      btn.classList.add(`${ID}__visibleAtcBtn`);
    }
  });

  init();

  document.addEventListener('click', (e) => {
    const { target } = e;

    const productPrice = window.normalPrice;
    const productPriceElem = document.querySelector('.product__price');

    if (target.closest(`.${ID}__atc-btn`)) {
      const checkboxElem = document.querySelector(`.${ID}__checkbox #belt-checkbox`);
      const atcBtnElem = document.querySelector(`.${ID}__atc-btn`);

      const beltId = 45608590573827;

      if (checkboxElem.checked) {
        atcBtnElem.disabled = true;

        getCartInfo().then((data) => {
          const cartItems = data.items;
          const isItemInCart = cartItems.some((item) => item.variant_id === beltId);

          if (!isItemInCart) {
            //api call - send rentention belt to cart
            fetch('/cart/add.js', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                items: [
                  {
                    id: beltId,
                    quantity: 1
                  }
                ]
              })
            })
              .then((response) => response.json())
              .then(() => {
                atcBtnVisibilityAndClick();
              })
              .catch((error) => {
                atcBtnElem.disabled = false;
                console.error('Error updating cart', error);
              });
          } else {
            atcBtnVisibilityAndClick();
          }
        });
      } else {
        atcBtnVisibilityAndClick();
      }
    } else if (target.closest(`.${ID}__checkbox`)) {
      const checkboxElem = document.querySelector(`.${ID}__checkbox #belt-checkbox`);

      if (checkboxElem.checked) {
        productPriceElem.textContent = `$${productPrice + 15}`;
      } else {
        productPriceElem.textContent = `$${productPrice}`;
      }
    }
  });
};
