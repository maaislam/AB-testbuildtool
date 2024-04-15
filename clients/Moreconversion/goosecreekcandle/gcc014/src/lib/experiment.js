import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  function calculateShippingDate() {
    const now = new Date();
    let shippingHours = 48; //Maximum shipping time in hours

    //Calculate the shipping day by adding hours until we reach or exceed 48 business hours
    while (shippingHours > 0) {
      switch (now.getDay()) {
        //If it's Saturday or Sunday, just move to the next day
        case 0: //Sunday
        case 6: //Saturday
          now.setDate(now.getDate() + 1);
          break;
        default:
          //Subtract 24 hours for each business day
          shippingHours -= 24;
          now.setDate(now.getDate() + 1);
      }
    }

    //Get the name of the day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[now.getDay()];

    //Format the month and day
    const month = now.toLocaleString('default', {
 month: 'long'
});
    const day = now.getDate();

    return `Expected to ship from our Warehouse before <b>${dayName}, ${month} ${day}</b>`;
  }

  const getOrderDeadlineMessage = () => {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

    //Calculate remaining time until the end of the day
    const timeLeft = endOfDay - now;
    const hours = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

    //Shipping message
    const shippingMessage = `Leaves our warehouse within 24-48 hours. Order within <span>${hours} hrs ${minutes} mins.</span>`;

    return shippingMessage;
  };

  const shippingicon1 = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="#9888B4"/>
  <g clip-path="url(#clip0_455_3134)">
  <path d="M23.171 21.536C22.8321 21.5363 22.5007 21.436 22.2188 21.2479C21.9369 21.0598 21.7171 20.7923 21.5872 20.4792C21.4573 20.1662 21.4232 19.8217 21.4892 19.4892C21.5552 19.1568 21.7182 18.8514 21.9578 18.6116C22.1974 18.3719 22.5026 18.2086 22.835 18.1424C23.1674 18.0762 23.512 18.11 23.8251 18.2397C24.1383 18.3693 24.4059 18.5889 24.5942 18.8707C24.7826 19.1525 24.8831 19.4838 24.8831 19.8227C24.8829 20.2768 24.7024 20.7123 24.3815 21.0335C24.0605 21.3548 23.6251 21.5355 23.171 21.536ZM23.171 18.7344C22.9557 18.7341 22.7451 18.7977 22.566 18.9172C22.3869 19.0366 22.2472 19.2065 22.1646 19.4054C22.0821 19.6042 22.0603 19.8231 22.1022 20.0343C22.144 20.2455 22.2476 20.4395 22.3997 20.5918C22.5519 20.7442 22.7458 20.8479 22.957 20.89C23.1681 20.9321 23.387 20.9107 23.5859 20.8283C23.7849 20.746 23.9549 20.6065 24.0746 20.4275C24.1942 20.2485 24.2581 20.038 24.2581 19.8227C24.258 19.5343 24.1434 19.2577 23.9396 19.0537C23.7358 18.8497 23.4594 18.7348 23.171 18.7344ZM14.1422 21.536C13.8033 21.5364 13.4719 21.4362 13.1899 21.2481C12.9079 21.06 12.6881 20.7926 12.5581 20.4795C12.4282 20.1665 12.394 19.8219 12.46 19.4895C12.5259 19.157 12.6889 18.8516 12.9285 18.6118C13.168 18.372 13.4733 18.2087 13.8057 18.1424C14.1381 18.0762 14.4827 18.11 14.7959 18.2396C15.109 18.3693 15.3767 18.5889 15.565 18.8707C15.7534 19.1525 15.8539 19.4838 15.8539 19.8227C15.8536 20.2767 15.6732 20.7121 15.3523 21.0333C15.0314 21.3545 14.5963 21.5353 14.1422 21.536ZM14.1422 18.7344C13.9269 18.734 13.7163 18.7976 13.5371 18.917C13.358 19.0364 13.2182 19.2062 13.1356 19.4051C13.0529 19.6039 13.0312 19.8228 13.073 20.034C13.1148 20.2452 13.2183 20.4393 13.3704 20.5917C13.5226 20.7441 13.7165 20.8479 13.9276 20.89C14.1388 20.9321 14.3577 20.9107 14.5567 20.8284C14.7556 20.746 14.9257 20.6065 15.0454 20.4275C15.165 20.2485 15.2289 20.038 15.2289 19.8227C15.2287 19.5344 15.1142 19.258 14.9105 19.054C14.7068 18.85 14.4305 18.735 14.1422 18.7344Z" fill="white" stroke="white" stroke-width="0.2"/>
  <path d="M25.4253 20.1381H24.5707C24.4879 20.1381 24.4084 20.1051 24.3498 20.0465C24.2912 19.9879 24.2582 19.9085 24.2582 19.8256C24.2582 19.7427 24.2912 19.6632 24.3498 19.6046C24.4084 19.546 24.4879 19.5131 24.5707 19.5131H25.337V17.856C25.3368 17.632 25.2794 17.4117 25.1703 17.216L23.4787 14.1831C23.4642 14.1572 23.4431 14.1356 23.4176 14.1206C23.392 14.1056 23.3629 14.0977 23.3332 14.0977H21.0278V19.5143H21.772C21.8549 19.5143 21.9344 19.5472 21.993 19.6059C22.0516 19.6645 22.0845 19.7439 22.0845 19.8268C22.0845 19.9097 22.0516 19.9892 21.993 20.0478C21.9344 20.1064 21.8549 20.1393 21.772 20.1393H20.7153C20.6325 20.1393 20.553 20.1064 20.4944 20.0478C20.4358 19.9892 20.4028 19.9097 20.4028 19.8268V13.7852C20.4028 13.7023 20.4358 13.6228 20.4944 13.5642C20.553 13.5056 20.6325 13.4727 20.7153 13.4727H23.3332C23.4742 13.4726 23.6127 13.5102 23.7343 13.5815C23.8559 13.6529 23.9562 13.7554 24.0249 13.8785L25.7162 16.9118C25.877 17.2005 25.9614 17.5255 25.9616 17.856V19.6018C25.9614 19.744 25.9048 19.8802 25.8043 19.9808C25.7038 20.0813 25.5675 20.1379 25.4253 20.1381ZM12.7428 20.1381H9.74658C9.6637 20.1381 9.58422 20.1051 9.52561 20.0465C9.46701 19.9879 9.43408 19.9085 9.43408 19.8256V17.4222C9.43408 17.3394 9.46701 17.2599 9.52561 17.2013C9.58422 17.1427 9.6637 17.1097 9.74658 17.1097C9.82946 17.1097 9.90895 17.1427 9.96755 17.2013C10.0262 17.2599 10.0591 17.3394 10.0591 17.4222V19.5131H12.7428C12.8257 19.5131 12.9052 19.546 12.9638 19.6046C13.0224 19.6632 13.0553 19.7427 13.0553 19.8256C13.0553 19.9085 13.0224 19.9879 12.9638 20.0465C12.9052 20.1051 12.8257 20.1381 12.7428 20.1381ZM9.74658 16.3135C9.6637 16.3135 9.58422 16.2806 9.52561 16.222C9.46701 16.1634 9.43408 16.0839 9.43408 16.001V13.9027C9.43408 13.8198 9.46701 13.7403 9.52561 13.6817C9.58422 13.6231 9.6637 13.5902 9.74658 13.5902C9.82946 13.5902 9.90895 13.6231 9.96755 13.6817C10.0262 13.7403 10.0591 13.8198 10.0591 13.9027V16.0022C10.0588 16.0849 10.0257 16.1641 9.96711 16.2224C9.90854 16.2807 9.82925 16.3135 9.74658 16.3135Z" fill="white" stroke="white" stroke-width="0.2"/>
  <path d="M20.7152 20.1364H15.5415C15.4586 20.1364 15.3791 20.1034 15.3205 20.0448C15.2619 19.9862 15.229 19.9067 15.229 19.8239C15.229 19.741 15.2619 19.6615 15.3205 19.6029C15.3791 19.5443 15.4586 19.5114 15.5415 19.5114H20.4027V11.3359H10.059V12.623C10.059 12.7059 10.026 12.7854 9.96743 12.844C9.90882 12.9026 9.82934 12.9355 9.74646 12.9355C9.66358 12.9355 9.58409 12.9026 9.52549 12.844C9.46688 12.7854 9.43396 12.7059 9.43396 12.623V11.2784C9.43418 11.1279 9.4941 10.9836 9.60057 10.8773C9.70704 10.7709 9.85136 10.711 10.0019 10.7109H20.4602C20.6107 10.7112 20.7549 10.771 20.8612 10.8774C20.9676 10.9838 21.0275 11.128 21.0277 11.2784V19.8239C21.0277 19.9067 20.9948 19.9862 20.9362 20.0448C20.8776 20.1034 20.7981 20.1364 20.7152 20.1364ZM10.9819 17.733H7.01562C6.93274 17.733 6.85326 17.7001 6.79465 17.6415C6.73605 17.5829 6.70312 17.5034 6.70312 17.4205C6.70312 17.3376 6.73605 17.2582 6.79465 17.1995C6.85326 17.1409 6.93274 17.108 7.01562 17.108H10.9819C11.0648 17.108 11.1442 17.1409 11.2028 17.1995C11.2615 17.2582 11.2944 17.3376 11.2944 17.4205C11.2944 17.5034 11.2615 17.5829 11.2028 17.6415C11.1442 17.7001 11.0648 17.733 10.9819 17.733Z" fill="white" stroke="white" stroke-width="0.2"/>
  <path d="M14.1423 16.3098H8.60775C8.52487 16.3098 8.44538 16.2769 8.38678 16.2183C8.32817 16.1597 8.29525 16.0802 8.29525 15.9973C8.29525 15.9145 8.32817 15.835 8.38678 15.7764C8.44538 15.7178 8.52487 15.6848 8.60775 15.6848H14.1423C14.2252 15.6848 14.3047 15.7178 14.3633 15.7764C14.4219 15.835 14.4548 15.9145 14.4548 15.9973C14.4548 16.0802 14.4219 16.1597 14.3633 16.2183C14.3047 16.2769 14.2252 16.3098 14.1423 16.3098ZM8.43566 14.6598H6.27441C6.19153 14.6598 6.11205 14.6269 6.05344 14.5683C5.99484 14.5097 5.96191 14.4302 5.96191 14.3473C5.96191 14.2645 5.99484 14.185 6.05344 14.1264C6.11205 14.0678 6.19153 14.0348 6.27441 14.0348H8.43566C8.51854 14.0348 8.59803 14.0678 8.65663 14.1264C8.71524 14.185 8.74816 14.2645 8.74816 14.3473C8.74816 14.4302 8.71524 14.5097 8.65663 14.5683C8.59803 14.6269 8.51854 14.6598 8.43566 14.6598ZM11.9011 12.9336H8.08608C8.0032 12.9336 7.92371 12.9007 7.86511 12.8421C7.8065 12.7835 7.77358 12.704 7.77358 12.6211C7.77358 12.5382 7.8065 12.4587 7.86511 12.4001C7.92371 12.3415 8.0032 12.3086 8.08608 12.3086H11.9011C11.984 12.3086 12.0634 12.3415 12.1221 12.4001C12.1807 12.4587 12.2136 12.5382 12.2136 12.6211C12.2136 12.704 12.1807 12.7835 12.1221 12.8421C12.0634 12.9007 11.984 12.9336 11.9011 12.9336Z" fill="white" stroke="white" stroke-width="0.2"/>
  </g>
  <defs>
  <clipPath id="clip0_455_3134">
  <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
  </clipPath>
  </defs>
  </svg>`;

  const shippingIcon2 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M17.5004 16.899H3.83375C3.80417 16.884 3.77625 16.8631 3.74458 16.8544C3.03167 16.6527 2.61833 16.0806 2.67917 15.349C2.72958 14.7423 2.80208 14.1377 2.86292 13.5319C2.90542 13.1081 2.945 12.684 2.98792 12.239H2.73708C2.13333 12.239 1.52875 12.2198 0.925833 12.2456C0.5 12.264 0.18375 12.1427 0 11.7456V11.4548C0.144583 11.039 0.444583 10.901 0.8725 10.9144C1.54542 10.9352 2.21917 10.9198 2.8925 10.9198C2.96667 10.9198 3.04083 10.9198 3.12208 10.9198C3.16833 10.464 3.21208 10.0331 3.25833 9.57938C3.16792 9.57938 3.10042 9.57938 3.0325 9.57938C2.41458 9.57938 1.79667 9.58271 1.17875 9.57812C0.800833 9.57521 0.510417 9.28813 0.506667 8.92771C0.5025 8.55521 0.7925 8.26854 1.18292 8.26063C1.30792 8.25813 1.43292 8.26021 1.55792 8.26021C2.16125 8.26021 2.76417 8.26021 3.39042 8.26021C3.43458 7.81063 3.47708 7.37563 3.52208 6.91979C2.89833 6.91979 2.30958 6.92104 1.72083 6.91938C1.29917 6.91813 1.00042 6.63562 1.00542 6.24896C1.01042 5.87104 1.305 5.60188 1.72083 5.60063C2.29 5.59896 2.85958 5.60021 3.42875 5.60021C3.5025 5.60021 3.57583 5.60021 3.64875 5.60021C3.65958 5.54396 3.66708 5.51771 3.66958 5.49104C3.78 4.40354 3.88917 3.31563 4.00042 2.22813C4.07833 1.47188 4.65125 0.946458 5.40833 0.946458C9.79583 0.944792 14.1838 0.945208 18.5713 0.946042C19.245 0.946042 19.7712 1.34979 19.9529 1.99354C19.9638 2.03146 19.9842 2.06687 20.0004 2.10354V2.60229C19.9863 2.65479 19.9642 2.70646 19.9588 2.75979C19.75 4.82479 19.5425 6.89021 19.335 8.95563C19.1113 11.1865 18.8917 13.4173 18.6608 15.6473C18.6013 16.2227 18.2742 16.6098 17.7313 16.8144C17.6546 16.8431 17.5775 16.8706 17.5004 16.8985V16.899ZM5.00125 5.58979C5.46042 5.58979 5.88958 5.58604 6.31875 5.59104C6.7075 5.59562 7.00125 5.88313 7.005 6.25229C7.00875 6.63021 6.71167 6.92396 6.31292 6.92896C5.98667 6.93313 5.66042 6.92979 5.33417 6.93021C5.03139 6.93021 4.86208 7.0766 4.82625 7.36937C4.82208 7.40354 4.81375 7.43771 4.81083 7.47188C4.78875 7.72354 4.7675 7.97479 4.74417 8.24938C5.13125 8.24938 5.48375 8.24354 5.83625 8.25104C6.20708 8.25896 6.49833 8.55729 6.50042 8.91646C6.50208 9.27479 6.21208 9.57812 5.8425 9.58729C5.5025 9.59604 5.16208 9.58896 4.82208 9.59021C4.74917 9.59021 4.67583 9.59771 4.60042 9.60188C4.55583 10.0452 4.51375 10.4631 4.46917 10.909C4.76333 10.909 5.03917 10.9085 5.315 10.909C5.58958 10.9098 5.79667 11.0298 5.92583 11.2702C6.16333 11.7115 5.85042 12.2344 5.33792 12.2473C5.00792 12.2556 4.67708 12.249 4.33375 12.249C4.22042 13.3648 4.11 14.4498 3.99875 15.5473H17.3342C17.7796 11.1231 18.2238 6.71313 18.6696 2.28771H14.8896C14.8746 2.38896 14.8563 2.48271 14.8467 2.57771C14.7196 3.83771 14.5908 5.09729 14.4683 6.35771C14.3858 7.20979 13.5788 7.58854 12.8767 7.09771C12.53 6.85521 12.1804 6.61604 11.845 6.35896C11.7025 6.24979 11.6 6.26146 11.4596 6.35354C11.0592 6.61521 10.6508 6.86479 10.2437 7.11646C9.895 7.33188 9.535 7.35604 9.18292 7.13688C8.83833 6.92229 8.69792 6.59771 8.7375 6.19688C8.83208 5.23979 8.92833 4.28271 9.02292 3.32563C9.05667 2.98396 9.08792 2.64188 9.12167 2.28729H5.34C5.2275 3.38271 5.11625 4.46812 5.00125 5.58938V5.58979ZM13.1929 5.68396C13.3096 4.52146 13.4213 3.40604 13.5338 2.28521H10.47C10.36 3.38771 10.2508 4.47604 10.1379 5.60813C10.4729 5.40021 10.7654 5.21854 11.0575 5.03687C11.5275 4.74479 11.8787 4.75271 12.3267 5.06854C12.6033 5.26354 12.8783 5.46021 13.1933 5.68396H13.1929Z" fill="black"/>
  </svg>`;

  const customerDelivery = document.querySelector('.custom-delivery');

  const v1Msg = `<div class="${ID}__shipping-msg">
<div class="${ID}__shipping-msg-icon">${shippingicon1}</div>
<div class="${ID}__shipping-msg-text">${calculateShippingDate()}</div>
</div>`;

  const v2Msg = `<div class="${ID}__shipping-msg">
  <div class="${ID}__shipping-msg-icon">${shippingIcon2}</div>
  <div class="${ID}__shipping-msg-text">${getOrderDeadlineMessage()}</div>
</div>`;

  const shippingMsg = VARIATION === '1' ? v1Msg : v2Msg;
  if (customerDelivery) {
    customerDelivery.innerHTML = shippingMsg;
  }

  if (VARIATION === '2') {
    setInterval(() => {
      const message = getOrderDeadlineMessage();
      const shippingMsgText = document.querySelector(`.${ID}__shipping-msg-text`);
      if (shippingMsgText) {
        shippingMsgText.innerHTML = message;
      }
    }, 60000);
  }
};
