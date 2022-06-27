import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  var productPrice;
  if (document.querySelector(".js-product-button-add-to-cart").getAttribute("data-button-status") !== "sold-out"){
    productPrice =  document.querySelector(".js-product-button-add-to-cart .btn__text").innerHTML;
    var sticky_add_button = document.createElement("button");
    sticky_add_button.className = "sticky_add";
    sticky_add_button.innerHTML = productPrice;
    sticky_add_button.addEventListener("click", function () {
      document.querySelector(".js-product-button-add-to-cart").click();
  });
    document.querySelector("body").prepend(sticky_add_button);
  }

  const options = document.querySelectorAll(".product-page-info .product-options__value");

  for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function () {
          console.log("colooor",options[i]);
          checkForTotalButtonUpdate();
      });
  }

  function checkForTotalButtonUpdate() {
    var timesRun = 0;
    var interval = setInterval(function () {

        timesRun += 1;

        var updatedProductPrice = document.querySelector(".js-product-button-add-to-cart .btn__text").innerHTML;

        if (timesRun === 80 || updatedProductPrice !== productPrice) {
            sticky_add_button.innerHTML =
                document.querySelector(".js-product-button-add-to-cart .btn__text").innerHTML;
            clearInterval(interval);
        }

    }, 100);
}

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
