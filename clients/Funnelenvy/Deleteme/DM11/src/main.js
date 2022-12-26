const scanning = (id, reviewsData) => {
  //show scanning page
  //update nav tabs
  const servicesArr = [
    'ADDRESSES',
    'PEOPLEFINDERS',
    'INSTANTCHECK',
    'NUWBER',
    'USSEARCH',
    'BEENVERIFIED',
    'SPOKEO',
    'INTELIUS'
  ];
  const recordsFoundOn = [
    'PeopleFinders',
    'FastPeopleSearch',
    'TruePeopleSearch',
    'BeenVerified',
    'PeopleLooker',
    'WhitePages',
    'Spokea',
    'ThatsThem'
  ];
  let progression;
  let progressInterval;
  let serviceIndex;
  const serviceInterval = 100 / servicesArr.length;

  progression = 0;
  serviceIndex = 0;

  const incrementProgress = () => {
    const progressBar = document.querySelector(`.${id}__scanning-progress-animation`);
    if (progression >= 80) {
      clearInterval(progressInterval);
      progressBar.classList.add(`${id}__scanning-progress--complete`);
    } else {
      progression += serviceInterval;
      serviceIndex += 1;
      //console.log('progression', progression, progressBar);
      progressBar.style.width = `${progression}%`;
      progressBar.innerHTML = `<span>${
        servicesArr[serviceIndex] || servicesArr[servicesArr.length - 1]
      }.com...</span>`;
    }
  };

  progressInterval = setInterval(incrementProgress, 1500);

  const reviewStars = [];

  for (let index = 0; index < 5; index += 1) {
    const element =
      '<img src="https://joindeleteme.com/wp-content/themes/deleteme/assets/images/star.svg" alt="⭐">';
    reviewStars.push(element);
  }

  const arrowLeftSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill-rule="evenodd" clip-rule="evenodd"><path xmlns="http://www.w3.org/2000/svg" stroke="#000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M47.5 19.5h-43M20 37L2 20M19 2L2 20"/></svg>';

  const reviewItem = (data) => {
    const { review, author, reviewsSrc } = data;
    return `
      <div data-href="${reviewsSrc}" class="${id}__swiper-slide swiper-slide" >
          <span class="review-stars">
              ${reviewStars.join('\n')}
          </span>
          <h4 class="review-author">${author}</h4>
          <a href="${reviewsSrc}" target="_blank"><p class="review-text large">${review}</p></a> 
      </div>
      `;
  };

  const reviews = () => {
    const htmlStr = `
      <div class="${id}__swiper swiper ${id}__hide">
          <div class="${id}__swiper-wrapper swiper-wrapper">
              ${reviewsData.map((reviewData) => reviewItem(reviewData)).join('\n')}
          </div>
          <div class="swiper-button-prev">${arrowLeftSvg}</div>
          <div class="swiper-button-next">${arrowLeftSvg}</div>
      </div>
      `;
    return htmlStr.trim();
  };

  const htmlStr = `
      <div class="${id}__scanning ${id}__container site">
          <div class="${id}__page-wrapper">
              <div class="${id}__scanning--col1">
                  <div class="${id}__scanning--row1">
                      <div class="${id}__scanning--title">
                          <h2>
                              Scanning...
                          </h2>
                      </div>
                      <div class="subheading">
                          <p class="bold">
                                  We are searching for your personal information on people-search sites.
                          </p>
                      </div>
                      <div class="${id}__scanning-gauge">
                          <div class="${id}__scanning-progress">
                              <div class="${id}__scanning-progress-animation" style="width: 10%;">
                                  <span>smartbackgroundchecks.com...</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="${id}__scanning--row2 ${id}__hide">
                      <div class="${id}scanning--title">
                          
                          <h2>
                              See detailed results. <br/>
                              It's free.
                          </h2>
                      </div>
                      <div class="subheading">
                          <p class="bold">
                              You can start removing your records yourself or with us.
                          </p>
                      </div>
                      <div class="getemail-form">
                          <form autocomplete="off"
                              class="${id}__getemail--form">
                              <span>
                                  <input name="getemail"
                                      required
                                      type="text"
                                      class="${id}__getemail--input common-input not-colored"
                                      id="${id}__getemail--input">
                                  <label for="${id}__getemail--input">
                                      Email
                                  </label>
                              </span>
                              <input type="submit"
                                  value="Submit"
                                  class="${id}__getemail--submit common-submit">
                              <div class="checkbox-block ${id}__checkbox-block"><input id="acceptRules" type="checkbox" name="isAcceptRules">
                                  <label for="acceptRules">
                                      I have read and I agree to the
                                      <a href="/terms-of-service" target="_blank">Terms of Service</a>
                                      and
                                      <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                                      .
                                  </label>
                              </div>
                          </form>    
                      </div>
                  </div>
              </div>
              <div class="${id}__scanning--col2">
                  <div class="records-found">
                      <p class="bold">Records found on:</p>
                          ${recordsFoundOn
                            .map((site) => `<p class="small">${site}.com,</p>`)
                            .join('\n')}
                      <p>...</p>    
                  </div>
                  ${reviews()}
              </div>    
          </div>
      </div>`;

  return htmlStr.trim();
};

const scanRecordRow = (id, records) => {
  const recordRow = (record) => {
    const { address, age, name } = record.personInfoList[0];
    const { site } = record;
    const removalTimes = {
      addresses: '3-5 Days',
      peoplefinders: '10 Days',
      instantcheckmate: '7 Days',
      inforver: '7 Days',
      nuwber: '24 Hours',
      ussearch: 'Up to 6 Weeks',
      idtrue: 'Instant',
      beenverified: '10 Days',
      spokeo: '3-5 Days',
      intelius: 'Up to 14 Days'
    };

    const htmlStr = `
      <div class="${id}__scanresults--resultrow" data-site="${site}">
          <div class="mobile-view">
            <div class="record-site">${site}</div>
            <div class="record-profile">${name}</div>
            <div class="record-location">${address}</div>
            <div class="record-age">${age}</div>
            
          </div>
          <div class="record-site desktop-view">${site}</div>
          <div class="record-profile desktop-view">${name}</div>
          <div class="record-location desktop-view">${address}</div>
          <div class="record-age desktop-view">${age}</div>
          <div class="record-removaltime ">${removalTimes[site]}</div>
      </div>
    `;
    return htmlStr.trim();
  };

  return records
    .map((record) => {
      return recordRow(record);
    })
    .join('');
};
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
                      <span class="disclaimer">
                          * Number of sites for removal can fluctuate.
                      </span>
                  </div>
              </div>
          </div>`;

  return htmlStr.trim();
};
//import header from '../components/header';

const collectName = (id) => {
  const header = () => {
    const htmlStr = `
            <div class="${id}__header">
                <div class="${id}__header--logo">
                    <a href="/"> <img src="/wp-content/themes/deleteme/assets/svgs/deleteme-color.svg" alt="deleteme logo" /></a>
                  
                </div>
            </div>`;

    return htmlStr.trim();
  };

  const htmlStr = `
      ${header()}
      <div class="${id}__collectname ${id}__container site">
          <div class="${id}__page-wrapper">
              <div class="${id}__collectname-text">
                  <h1 class="${id}__collectname--title">
                      <span>Remove your personal</span>
                      <span>
                          information from Google
                      </span>
                      <span>
                          and data brokers
                      </span>
                  </h1>
              </div>
              <div class="${id}__collectname--form">
                  <p>
                      Find out which sites publish your info. It's free!
                  </p>
                  <form autocomplete="off"
                      class="${id}__fullname--form">
                      <span>
                          <input name="fullName"
                              type="text"
                              class="${id}__fullname--input common-input"
                              id="${id}__fullname--input">
                          <label for="${id}__fullname--input">
                              Enter First and Last Name
                          </label>
                      </span>
                      <input type="submit"
                          value="Search"
                          class="${id}__fullname--submit common-submit">
                  </form>
              </div>
          </div>
      </div>`;

  return htmlStr.trim();
};
window.feDm11CollectName = collectName;
//export default collectName;

window.feDm11Scanning = scanning;
window.feDm11ScanRecordRow = scanRecordRow;
window.feDm11RecordModal = recordModal;
//export default scanning;
