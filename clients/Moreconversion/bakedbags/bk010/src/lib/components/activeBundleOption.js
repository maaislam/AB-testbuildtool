import { downArrow } from '../assets/icons';

export const activeBundleOption = (isActiveBundle) => {
  const html = `
        <div class="bundleOption" isActive="${isActiveBundle.isActive}" id="${isActiveBundle.id}">
            <div class="bundleContents">
            <span class="bundleQnty">${isActiveBundle.quantity}</span>
            <span class="multiple_sign">X</span>
            <img class="bundleOptionImage" width="30px" src="${isActiveBundle.image}" alt="">
            <span class="bundleOptionPrice">${isActiveBundle.price}</span>
            ${
              isActiveBundle.savings && isActiveBundle.savings !== 0
                ? `<span class="discountMsg"><span class="discounText">save</span>${isActiveBundle.savings}</span>`
                : ''
            } 
            </div>
            <span class="bundleDivider"></span>
            <span class="bundleDropdnArrow">${downArrow}</span>
          </div>
    `;
  return html;
};
