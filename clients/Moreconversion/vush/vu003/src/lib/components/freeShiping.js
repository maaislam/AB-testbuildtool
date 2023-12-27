export const freeShipping = (ID) => {
  const html = `
   <div class="shopify-section shopify-section-group-header-group">
        <div class="announcement-bar__item ff-body fs-body-50 ${ID}__freeShipping">
            <div class="announcement-bar__item-inner">
                <p>FREE EXPRESS SHIPPING ON ALL ORDERS</p>
            </div>
        </div>
    </div>
    `;

  return html.trim();
};
