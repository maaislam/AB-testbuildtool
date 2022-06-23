import { downArrow } from './asset';

const cartLineTootip = (id, lineQuantity, arrowPositionClass, copyInfo, device) => {
    const htmlStr = `
    <div class="${id}__wrapper-${device}">
  <div class="${id}__tooltip ${id}__tooltip-${device} ${
    arrowPositionClass == 'leftarrow' ? 'cartpage-adjustments' : ''
  } ${lineQuantity === 1 ? 'arrow-adjust' : ''}">
    <span class="${id}__tooltip--headline">Schon gewusst?</span>
    <span class="${id}__tooltip--text">
        Kaufe ${lineQuantity === 1 ? '2 oder' : ''} 3 ${copyInfo.text} und spare bis zu <strong>${
    copyInfo.count
  }</strong> 
    </span>
    <span class="${id}__tooltip--${arrowPositionClass}">
     ${downArrow}
    </span>
  </div>
  </div>`;
    return htmlStr;
};

export default cartLineTootip;