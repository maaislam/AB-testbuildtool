import { activeBundleOption } from './activeBundleOption';

export const bundleOptions = (id, data) => {
  const isActiveBundle = data.find((item) => item.isActive);
  const html = `
  <div class="${id}__bundleOptionsContainer">
      <span class="${id}__title">Bundle & Save</span>
      <div class="${id}__bundleOptionsWrapper">
        <div class="${id}__activeBundleOption">
            ${activeBundleOption(isActiveBundle)}
        </div>
      <div class="bundleOptionLists">
      ${data
        .map((el) => {
          return `
      <div class="bundleOption" isActive="${el.isActive}" id="${el.id}">
      <div class="bundleContents">
      <span class="bundleQnty" data-quantity="${el.quantity}">${el.quantity}</span>
      <span class="multiple_sign">X</span>
      <img class="bundleOptionImage" width="30px" src="${el.image}" alt="">
      <span class="bundleOptionPrice">${el.price}</span>
      ${
        el.savings && el.savings !== 0
          ? `<span class="discountMsg"><span class="discounText">save</span>${el.savings}</span>`
          : ''
      } 
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
