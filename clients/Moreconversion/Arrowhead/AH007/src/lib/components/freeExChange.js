export const freeExChange = (id, VARIATION) => {
  const htmlV1 = `
      <div class="${id}__freeExChange">
          <div class="${id}__freeExChange-icon">
              <img src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/Mask_group.png?v=1714466058" alt='freeExCahngeIcon'/>
          </div>
          <div class="${id}__freeExChange-text">Free Exchanges</div>
      </div>
    `;

  const htmlV2 = `
      <div class="${id}__freeExChange">
          <div class="${id}__freeExChange-icon">
              <img src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/Mask_group.png?v=1714466058" alt='freeExCahngeIcon'/>
          </div>
          <div class="${id}__freeExChange-text">
            <div class="${id}__freeExChange-title">Free Exchanges</div>
            <div class="${id}__freeExChange-subtitle">Easy 30 Days Free Exchange Available</div>
          </div>
      </div>
    `;

  const mainHTML = VARIATION === '1' ? htmlV1 : htmlV2;
  return mainHTML;
};
