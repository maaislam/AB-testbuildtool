import { ID } from '../shared/shared';

const priceBox = (currentPrice, wasPrice) => {
  const htmlStr = `
    <div class='${ID}__priceBox'>
        <div class='${ID}__priceBox-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M16.3 9.5V18H2.7V9.5M9.5 18V5.25M9.5 5.25H5.675C5.11142 5.25 4.57091 5.02612 4.1724 4.6276C3.77388 4.22909 3.55 3.68859 3.55 3.125C3.55 2.56141 3.77388 2.02091 4.1724 1.6224C4.57091 1.22388 5.11142 1 5.675 1C8.65 1 9.5 5.25 9.5 5.25ZM9.5 5.25H13.325C13.8886 5.25 14.4291 5.02612 14.8276 4.6276C15.2261 4.22909 15.45 3.68859 15.45 3.125C15.45 2.56141 15.2261 2.02091 14.8276 1.6224C14.4291 1.22388 13.8886 1 13.325 1C10.35 1 9.5 5.25 9.5 5.25ZM1 5.25H18V9.5H1V5.25Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class='${ID}__priceBox-prices'>
            <div class='${ID}__currentPrice'>${currentPrice}</div>
            ${wasPrice ? `<div class='${ID}__wasPrice'>${wasPrice}</div>` : ''}
        </div>
    </div>`;
  return htmlStr;
};

export default priceBox;
