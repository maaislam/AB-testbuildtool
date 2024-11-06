import { freeShipingIcon, toolTipIcon } from '../assets/icons';

const wrapper = (id, tooltipText) => {
  const html = `
        <div class="${id}__wrapper">
            <div class="${id}__container">
                <div class="${id}__imageWrapper">
                    ${freeShipingIcon}
                </div>
                <div class="${id}__text">
                    <span class="${id}__onlyText">Free shipping + Returns</span>
                    <div class="${id}__icon">
                        ${toolTipIcon}
                        <span class="tooltiptext">${tooltipText}</span>
                    </div>
                </div>
                <div class="${id}__price">$0.00</div>
            </div>
        </div>
    `;
  return html;
};

export default wrapper;
