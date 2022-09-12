const deliveryMsg = (id) => {
  const truckIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 33 23" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 5.75H24V1.8254C24 0.817257 23.1792 0 22.1667 0H3C1.35 0 0 1.29375 0 2.875V18.6875H3C3 21.0737 5.01 23 7.5 23C9.99 23 12 21.0737 12 18.6875H21C21 21.0737 23.01 23 25.5 23C27.99 23 30 21.0737 30 18.6875H33V11.5L28.5 5.75ZM7.50092 20.8438C6.25592 20.8438 5.25092 19.8807 5.25092 18.6875C5.25092 17.4944 6.25592 16.5313 7.50092 16.5313C8.74592 16.5313 9.75092 17.4944 9.75092 18.6875C9.75092 19.8807 8.74592 20.8438 7.50092 20.8438ZM27.7487 7.90626L30.6887 11.5H23.9987V7.90626H27.7487ZM25.4995 20.8438C24.2545 20.8438 23.2495 19.8807 23.2495 18.6875C23.2495 17.4944 24.2545 16.5313 25.4995 16.5313C26.7445 16.5313 27.7495 17.4944 27.7495 18.6875C27.7495 19.8807 26.7445 20.8438 25.4995 20.8438Z" fill="#33705A"/>
</svg>`;

  const htmlStr = `<div class="${id}__deliverymsg">
    <div class="${id}__deliverymsg--icon">${truckIcon}</div>
    <div class="${id}__deliverymsg--text">Choose your delivery date at checkout.</div>
</div>`;

  return htmlStr.trim();
};
export default deliveryMsg;
