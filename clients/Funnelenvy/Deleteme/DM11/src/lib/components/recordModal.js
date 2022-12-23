const recordModal = (id, recordProvider) => {
  const checkMark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#f08d0b" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
    </svg>`;
  const date = new Date().toLocaleDateString();
  const recordsDaily = {
    addresses: '39,680',
    peoplefinders: '588,000',
    instantcheckmate: '477,533',
    inforver: 'N/A',
    nuwber: '400,400',
    ussearch: '19,380',
    idtrue: 'N/A',
    beenverified: '1,479,667',
    spokeo: '1,554,133',
    intelius: '409,133'
  };

  const protectionBenifits = [
    'Removal from 56 people-search sites *',
    'Constant monitoring of your info',
    'Phone, live chat, or email customer support',
    'Quaterly reports with recent updates'
  ];

  const benefitHtml = (benefit) => {
    return `<div class="benefit">
            <div class="checkmark">${checkMark}</div>
            <p>${benefit}</p>
        </div>`;
  };

  const htmlStr = `
        <div class="${id}__modalcontent">
            <span class="${id}__modalclose">&times;</span>
            <div class="${id}__recordInfo">
                <h2>${recordProvider}.com</h2>
                <div class="row1">
                    <span><p>Profile was found on: </p></span>
                    <span><p class="bold">${date}</p></span>
                </div>    
                <div class="row2">
                    <span><p>Daily people searches: </p></span>
                    <span><p class="bold">${recordsDaily[recordProvider]}</p></span>
                </div>    
                <div class="${id}__purchasebanner">
                    ${protectionBenifits.map((benefit) => benefitHtml(benefit)).join('\n')}
                    <div class="btn-row">
                        <a href="https://joindeleteme.com/delete-me/user/order/new/dmbb2/5" 
                            class="${id}__startprotection button button-alt button-medium button-icon-pos button-block">
                            Start Protection
                            <span class="icon icon-arrow-right"></span>
                        </a>
                        <div class="pricing-info">
                            Starting at $10.75/mo <br/>
                            Billed annually  at $129.00
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

  return htmlStr.trim();
};

//window.feDm11RecordModal = recordModal;

export default recordModal;
