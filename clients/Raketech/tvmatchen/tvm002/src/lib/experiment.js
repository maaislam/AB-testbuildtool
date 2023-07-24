import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const aws = 'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/tvmatchen/';

  const paidCustomers = ['discovery+', 'c-more-live', 'vidplay.se', 'c more stream'];

  const leagueDesc = document.querySelector('#match-view .league-desc');

  const header = document.querySelector("#match-view .day-wrap");

  header.prepend(leagueDesc);

  const dayTitle = document.querySelector("#match-view .day-wrap .day-title");

  const centerLi = document.querySelector("#match-view .section.title-area .versus-title li.centerpiece");
  let date = dayTitle.textContent.trim().split("–")[1]?.trim();
  console.log(date);
  centerLi.insertAdjacentHTML("beforeend", `<div class="match_date">${date}</div>`);

  const dom = `<div class="match_details">
        <div class="match_details__item watch-online">
          <div class="match_details__item__title">Watch online</div>
          <div class="match_details__item__content">
            <a href="https://www.bet365.com/en/" target="_blank" rel="nofollow">bet365</a>
          </div>
        </div>

        <div class="match_details__item watch-on-tv">
          <div class="match_details__item__title">Watch on TV</div>
          <div class="match_details__item__content">
            <a href="https://www.bet365.com/en/" target="_blank" rel="nofollow">bet365</a>
          </div>
        </div>

        <div class="match_details__item">
          <div class="match_details__item__nav">
              <a href="#odds" target="_blank" rel="nofollow">Odds</a>
          </div>
          <div class="match_details__item__content">
            <div id="odds">
              <table class="match_details__item__content__table">
                <thead>
                  <tr>
                    <th>Bookmaker</th>
                    <th>1^</th>
                    <th>X</th>
                    <th>2^</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>1.5</td>
                    <td>2.5</td>
                    <td>3.5</td>
                    <td>3.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  </div>`;

  document.querySelector("#match-view .section.title-area.section").insertAdjacentHTML("afterend", dom);

  const matchData = document.querySelectorAll("#match-view .match-details .tv-channels li.tv");

  matchData.forEach((item) => {
    console.log(item);
    if (item.querySelector('a.no-href')) {
      console.log("TV");
      const anchorTag = item.querySelector('a.no-href');
      const href = anchorTag.getAttribute("href");
      const title = anchorTag.getAttribute("title");
      const anchor = `
        <a href="${href}" target="_blank" rel="nofollow">
          <div class="left_content">
            <div class="channel_image">
              <img src="${aws + encodeURIComponent(title.replace(/ /g, '-').toLowerCase())}.png" alt="${title}">
            </div>
            <div class="info">
              <div class="title">${title}</div>
              <div class="subtitle">TV Channel</div>
            </div>
          </div>
        </a>
      `;
      document.querySelector("#match-view .match_details .watch-on-tv .match_details__item__content").innerHTML = "";
      document.querySelector("#match-view .match_details .watch-on-tv .match_details__item__content").insertAdjacentHTML("beforeend", anchor);
    } else if (item.querySelector('a.do-link') && item.querySelector('a.do-link img.tv-icon')) {
      console.log("Beting site");
    } else {
      console.log("Other");
      const anchorTag = item.querySelector('a.do-link');
      const href = anchorTag.getAttribute("href");
      const title = anchorTag.getAttribute("title");
      const anchor = `
        <a href="${href}" target="_blank" rel="nofollow">
          <div class="left_content">
            <div class="channel_image">
              <img src="${aws + encodeURIComponent(title.replace(/ /g, '-').toLowerCase())}.png" alt="${title}">
            </div>
            <div class="info">
              <div class="title">${title}</div>
              <div class="subtitle">Stream</div>
            </div>
          </div>
          <div class="right_content">
            <div class="stream">
              <span class="text">Watch</span>
              <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5L17 12L7 19V5V5Z" stroke="#0092D0" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </a>
      `;

      document.querySelector("#match-view .match_details .watch-online .match_details__item__content").innerHTML = "";
      document.querySelector("#match-view .match_details .watch-online .match_details__item__content").insertAdjacentHTML("beforeend", anchor);
    }
  });
};
