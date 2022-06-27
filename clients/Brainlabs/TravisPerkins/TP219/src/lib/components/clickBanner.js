const clickCollectMessages = (id, anchorElm, pageType, plpCard) => {
  const message = 'CLICK & COLLECT IN JUST 10 MINUTES!';

  const htmlStr = `
    <div class="${id}__click-collect ">
        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <circle cx="9.5" cy="9.5" r="9.5" fill="#F6B112"/>
        <circle cx="9.5" cy="9.5" r="7.5" fill="white"/>
        <path d="M9.5 9.5V2C9.5 2 11.7385 2.34471 13 3C14.3533 3.70301 16 5.5 16 5.5L9.5 9.5Z" fill="#F6B113" stroke="#F6B113" stroke-width="0.5"/>
        </svg></div>
        <div class="message">${message}</div>
      
    </div>
    `;
  const controlStockLvlMsgBlock =
    pageType === 'plp'
      ? plpCard.querySelector('[data-test-id="collection-availability-message"]')
      : document.querySelector('[data-test-id="collection-availability-message"]');

  const changeUnderBtnText = () => {
    const stockCount = parseInt(controlStockLvlMsgBlock.getAttribute('title').split(' ')[0]);

    pageType === 'plp'
      ? plpCard.querySelector(`.${id}__underbtn--msg`)?.remove()
      : document.querySelector(`.${id}__underbtn--msg`)?.remove();
    const message2 = `<div class="${id}__underbtn--msg"><div>Available in 10 mins</div><div>(${stockCount} in stock)</div></div>`;
    if (stockCount) {
      controlStockLvlMsgBlock.style.display = 'none';
      controlStockLvlMsgBlock.insertAdjacentHTML('beforebegin', message2);
    }
  };
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      changeUnderBtnText();
    });
  });

  const config = {
    childList: true,
    subtree: false,
    characterData: true,
    attributes: true,
  };
  changeUnderBtnText();
  observer.observe(controlStockLvlMsgBlock, config);

  pageType !== 'plp' && anchorElm.insertAdjacentHTML('afterend', htmlStr);
};

export default clickCollectMessages;
