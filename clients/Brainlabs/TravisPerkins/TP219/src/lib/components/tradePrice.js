import { lockedImg, unlockedImg } from '../assets';
import { formatPrice } from '../helpers/utils';
import renderPopup from './popup';

const tradePriceMsg = (id, loginStatus, tradePrice, anchorElem, fireEvent, pageType) => {
  const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="49" height="40" viewBox="0 0 49 40" fill="none">
  <path d="M0 4.70588C0 2.10689 1.79086 0 4 0H37.295C38.754 0 40.098 0.935192 40.801 2.44012L47.942 17.7342C48.601 19.1453 48.601 20.8547 47.942 22.2658L40.801 37.5599C40.098 39.0648 38.754 40 37.295 40H3.99999C1.79085 40 0 37.8931 0 35.2941V4.70588Z" fill="#F0F3F6"/>
  </svg>`;

  const config = {
    login: {
      msgClass: 'message-unlocked',
      msgLine1: `<div class="${loginStatus ? `${id}__hide-desktop` : ''}">YOUR</div>&nbsp;TRADE`,
      msgLine2: 'PRICE IS UNLOCKED',
      specialPrice: '',
      lockImgClass: 'unlocked-img'
    },
    notLogin: {
      msgClass: 'message-locked',
      msgLine1: 'UNLOCK TRADE',
      msgLine2: 'PRICE OF',
      specialPrice: `${tradePrice}`,
      lockImgClass: 'locked-img'
    }
  };

  const adjustedWidth = (data) => {
    //const scrnSize = window.matchMedia('(min-width: 768px)').matches;
    return pageType === 'plp' && data.specialPrice.length >= 5
      ? 'style="width:calc(100% + 10px)"'
      : '';
  };
  const htmlStr = (data) => `
    
    <div ${adjustedWidth(data)} class="${id}__tradeprice ${
    loginStatus ? `${id}__tradeprice-margin` : ''
  } ${pageType === 'plp' ? `${id}__plp-changes` : ''} ${
    pageType === 'plp' && data.specialPrice.length > 6 ? `${id}__overflow-width` : ''
  }">
        ${arrowSvg}
        <div class="${id}__loginstatus--msg ">
            <div class="${data.msgClass}">
                <div>${data.msgLine1}&nbsp;</div>
                <div>${data.msgLine2}&nbsp;<span>${
    data.specialPrice ? formatPrice(data.specialPrice) : ''
  }</span></div>
            </div>
            <div class="${data.lockImgClass}">
                ${loginStatus ? unlockedImg : lockedImg}
            </div>      
        </div>
       
    </div>`;
  if (!loginStatus && pageType !== 'plp') {
    anchorElem.classList.add(`${id}__hide`);
    anchorElem.setAttribute('style', 'padding: 0; border: none; height:40px;');
  }

  const contentToRender = loginStatus ? htmlStr(config.login) : htmlStr(config.notLogin);

  if (pageType === 'plp') {
    anchorElem.insertAdjacentHTML('beforebegin', contentToRender);
  } else {
    anchorElem.insertAdjacentHTML(`${loginStatus ? 'afterend' : 'afterend'}`, contentToRender);
  }

  const eventAnchor =
    pageType === 'plp'
      ? anchorElem.closest('[data-test-id="product"]').querySelector(`.${id}__tradeprice`)
      : document.querySelector(`.${id}__tradeprice`);

  eventAnchor.addEventListener('click', (e) => {
    e.preventDefault();
    fireEvent(
      `Test ID: ${id} Variation: 1 Label: Clicked message with price on ${
        pageType === 'plp' ? 'PLP' : 'PDP'
      }`
    );

    renderPopup(id, loginStatus, fireEvent);
  });
};
export default tradePriceMsg;
