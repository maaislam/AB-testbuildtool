import loader from './loader';

const newCartButton = (id) => {
  const htmlStr = `
    <div title="In Winkelmand" class="${id}__product-addtocart-button action primary tocart">
        <span class="${id}__atc-loader">${loader(id)}</span>
        <div class="${id}__atc-button">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span>In Winkelmand</span>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default newCartButton;
