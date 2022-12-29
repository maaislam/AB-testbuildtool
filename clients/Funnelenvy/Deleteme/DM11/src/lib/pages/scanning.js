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
        <a href="${reviewsSrc}" target="_blank"><p class="review-text large" >${review}</p></a> 
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
                                    <a href="/legal/#terms" target="_blank">Terms of Service</a>
                                    and
                                    <a href="/legal/#privacy-policy" target="_blank">Privacy Policy</a>
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
window.feDm11Scanning = scanning;
//export default scanning;
