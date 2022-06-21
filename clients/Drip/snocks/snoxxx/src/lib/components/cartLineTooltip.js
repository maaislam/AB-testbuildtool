import { downArrow } from './asset';

const cartLineTootip = (id, lineQuantity, arrowPositionClass) => {
  const htmlStr = `
  <div class="${id}__tooltip ${arrowPositionClass == 'leftarrow' ? 'cartpage-adjustments' : ''} ${
    lineQuantity === 1 ? 'arrow-adjust' : ''
  }">
    <span class="${id}__tooltip--headline">Schon gewusst?</span>
    <span class="${id}__tooltip--text">
        Kaufe ${lineQuantity === 1 ? '2 oder' : ''} 3 Packs und spare bis zu 17% 
    </span>
    <span class="${id}__tooltip--${arrowPositionClass}">
     ${downArrow}
    </span>
  </div>`;
  return htmlStr;
};

export default cartLineTootip;
