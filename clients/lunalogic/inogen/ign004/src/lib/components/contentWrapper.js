import cartDescription from './cartDescription';
import productDescription from './productDescription';

const contentWrapper = (id, mainProductObj, cartInfoObj, totalQuantity, selections) => {
  const html = `
        <div class="${id}__contentWrapper">
            <div class="${id}__contentContainer">
                ${productDescription(id, mainProductObj, selections)}
                <div class="${id}__divider"></div>
                ${cartDescription(id, cartInfoObj, totalQuantity)}
            </div>
            <div class="${id}__accessoriesTitle">Frequently bought together</div>
        </div>
    `;

  return html.trim();
};

export default contentWrapper;
