const scanning = (id) => {
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
                                    class="${id}__getemail--input common-input"
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
                          .map((site) => `<p class="small">${site}.com</p>`)
                          .join('\n')}
                    <p>...</p>    
                </div>
            </div>    
        </div>
    </div>`;

  return htmlStr.trim();
};
window.feDm11Scanning = scanning;
//export default scanning;
