/*eslint-disable object-curly-newline */
import addToCart from './addToCart';
import productImage from './productImage';
import prodPrice from './productPrice';
import productTitle from './productTitle';
import productVariant from './productVariants';
import quantitySelector from './quantitySelector';
import ratingStars from './ratingStar';

const productCard = (ID, data) => {
  const {
    imageUrls,
    isOnSale,
    isShadeVariant,
    isSizeVariant,
    listPrice,
    name,
    salePrice,
    variantGroups
  } = data;
  const variantData = {
    isShadeVariant,
    isSizeVariant,
    variants: variantGroups[0].variants,
    prodName: name
  };
  const priceData = { isOnSale, listPrice, salePrice };

  const productDetails = `
    <div class="${ID}__productdetails">
        <div class="${ID}__productdetails--imgwrapper">
            ${productImage(ID, { imageUrls, name })}
        </div>
        <div class="${ID}__productdetails--detailswrapper">
            ${ratingStars(ID, data)}
            ${productTitle(ID, name)}
            ${prodPrice(ID, priceData)}
        </div>
    </div>`;

  const productAction = `
    <div class="${ID}__productactions">
        <div class="row-quantityvariant">
            ${productVariant(ID, variantData)}
            ${quantitySelector(ID)}
        </div>
        <div class="row-addtocart">
            ${addToCart(ID)}
        </div>
    </div>
    `;

  const htmlStr = `
        <div class="${ID}__swiper-slide swiper-slide">
            ${productDetails}
            ${productAction}
        </div>
    `;

  return htmlStr.trim();
};

export default productCard;
