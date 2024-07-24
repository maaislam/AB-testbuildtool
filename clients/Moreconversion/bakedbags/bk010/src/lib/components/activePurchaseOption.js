import { downArrow } from '../assets/icons';

export const activePurchaseOption = (isActivePurchase, isActiveIndex) => {
  const html = `
        
        <div class="bundleOption" isActive="${isActivePurchase.isActive}" id="${
    isActivePurchase.id
  }">
            <div class="bundleContents">
                <span class="bundleTitle">${
                  isActiveIndex === 0 ? `${isActivePurchase.title} - ` : isActivePurchase.title
                }</span>
                ${
                  isActiveIndex === 0
                    ? `<span class="bundleOptionPrice">${isActivePurchase.price}</span>`
                    : ''
                }
            </div>
       
            <span class="bundleDropdnArrow">${downArrow}</span>
        </div> 
        
    
    `;
  return html;
};
