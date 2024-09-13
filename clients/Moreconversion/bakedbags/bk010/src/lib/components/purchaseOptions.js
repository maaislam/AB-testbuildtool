import { activePurchaseOption } from './activePurchaseOption';

export const purchaseOptions = (id, data) => {
  const isActiveBundle = data.find((item) => item.isActive);
  const isActiveIndex = data.findIndex((item) => item.isActive);
  const html = `
        <div class="${id}__purchaseOptionsContainer">
          <span class="${id}__title">Purchase Options</span>
          <div class="${id}__bundleOptionsWrapper">
            <div class="${id}__activeBundleOption">
                ${activePurchaseOption(isActiveBundle, isActiveIndex)}
            </div>
            <div class="bundleOptionLists">
                  ${data
                    .map((el, index) => {
                      return `
                  <div class="bundleOption" isActive="${el.isActive}" id="${el.id}">
                    <div class="bundleContents">
                    <span class="bundleTitle">${index === 0 ? `${el.title} - ` : el.title}</span>
                    ${index === 0 ? `<span class="bundleOptionPrice">${el.price}</span>` : ''}
                    </div>
                  </div> 

                `;
                    })
                    .join('')}
            </div>
          </div>
        
        </div>
    `;
  return html;
};
