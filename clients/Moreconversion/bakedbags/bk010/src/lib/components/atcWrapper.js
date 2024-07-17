import { bundleOptions } from './bundleOptions';
import { button } from './button';
import { purchaseOptions } from './purchaseOptions';

export const atcWrapper = (id, productObj, bundleData, purchaseData) => {
  const { productImage, productTitle, productPrice } = productObj;
  const html = `
        <div class="${id}__atcWrapper">
            <div class="${id}__atcWrapper-container">
                <div class="${id}__first-container">
                    <div class="${id}__prodContent">
                        <div class="${id}__image">
                            <img src="${productImage}"/>
                        </div>
                        <div class="${id}__title">
                            <div class="${id}__name">${productTitle}</div>
                            <div class="${id}__price">${productPrice}</div>
                        </div>
                    </div>
                    <div class="${id}__optionsContainer">
                        ${bundleOptions(id, bundleData)}
                        ${purchaseOptions(id, purchaseData)}
                    </div>
                </div>
                <div class="${id}__atcButtonContainer">
                   ${button(id)}
                </div>
            </div>
        </div>
    `;
  return html;
};
