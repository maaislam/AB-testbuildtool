const stickyAtc = (id) => {
  const htmlStr = `
        <div class="${id}__stickyatc nav-main">
            <div class="product-single__submit">         
                <input 
                    onclick="ga('send','event','Products','Add to Cart','classic-black-belt');" 
                    type="submit" 
                    name="add" 
                    class="fde btn add add-to-cart-main chec" 
                    value="Add to cart" id="add-to-cart" 
                    data-chec="10" js-pdp-atc="">
            </div>
        </div>
    `;
  return htmlStr;

};

export default stickyAtc;
