import button from './button';
import image from './image';
import prodPrice from './price';
import quantitySelector from './quantity';
import prodTitle from './title';

const productRow = (id, data) => {
  const { featured_image, price, title, url, variantToUse } = data;

  const sampleUrl = `${url}?variant=${variantToUse.id}`;
  const titleData = {
    title,
    sampleUrl,
    varTitle: variantToUse.title,
    varImage: variantToUse.featured_image
  };

  const htmlStr = `
    <div class="${id}__sampleupsell--row" data-title='${url}'>
        <div class="col1">${image(id, {
          title,
          featured_image,
          sampleUrl
        })}</div>
        <div class="col2">
            <div class="desktop-product-details">
                ${prodTitle(id, titleData)}
                ${prodPrice(id, price)}
                ${quantitySelector(id)}
            </div>
            <div class="desktop-product-action">
                ${button(id, 'Add', variantToUse.id)}
            </div>
        </div>
        <div class="col3 ${id}__delete-btn">
            <svg aria-hidden="true" class="icon icon-delete" viewBox="0 0 13 15"><path d="M2.621 14.025 1.761 3.7h9.478l-.86 10.325a.3.3 0 0 1-.3.275H2.92a.3.3 0 0 1-.299-.275z" stroke="#BEBEBE" stroke-width="1.4"></path><path fill="#BEBEBE" d="M4 0h5v1.4H4zM0 3h13v1.4H0z"></path></svg>
        </div>
    </div>`;

  return htmlStr.trim();
};

export default productRow;
