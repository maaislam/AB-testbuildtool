const addToCart = (id) => {
  const htmlStr = `
    <div class="${id}__addtocart">
        <div class="${id}__addtocart--btn">
            ADD TO BASKET
        </div>
    </div>`;

  return htmlStr.trim();
};
export default addToCart;
