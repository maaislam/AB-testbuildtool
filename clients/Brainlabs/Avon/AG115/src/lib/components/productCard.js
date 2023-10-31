import productDetails from './productDetails';
import productImage from './productImage';

const productCard = (id, data) => {
  const htmlStr = `
    <a href='${data.productUrl}' class='${id}__productCard swiper-slide'>
        ${productImage(id, data)}
        ${productDetails(id, data)}
    </a>`;
  return htmlStr;
};

export default productCard;
