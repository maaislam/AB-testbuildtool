/*eslint-disable no-shadow */
import setup from './services/setup';

import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import gaTracking from './services/gaTracking';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const config = {
      'TV Channel': 'Streaming Service Providers',
      Stream: 'TV Service Providers',
      betting: 'Operator (Place Bet Intent)'
    };

    if (target.closest('[data-viewType]')) {
      const { viewtype, provider } = target.closest('[data-viewType]').dataset;

      gaTracking(`${provider} | CTA Clicks to ${config[viewtype]}`);
    } else if (target.closest('.match_details__item__nav')) {
      const filterName = target.closest('a').innerText.trim();
      gaTracking(`${filterName} | Clicks on Filter`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const aws = 'https://raketect-cro-public.s3.ap-southeast-2.amazonaws.com/images/tvmatchen/';

  const paidCustomers = ['discovery+', 'c-more-live', 'vidplay.se', 'c more stream', 'viaplay.se'];

  const leagueDesc = document.querySelector('#match-view .league-desc');

  const header = document.querySelector('#match-view .day-wrap');

  header.prepend(leagueDesc);

  const dayTitle = document.querySelector('#match-view .day-wrap .day-title');

  const centerLi = document.querySelector(
    '#match-view .section.title-area .versus-title li.centerpiece'
  );
  const date = dayTitle.textContent.trim().split('–')[1]?.trim();

  centerLi?.insertAdjacentHTML('beforeend', `<div class="match_date">${date}</div>`);

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
              
          </div>
          <div class="match_details__item__tables">
           
          </div>
        </div>
  </div>`;

  document
    .querySelector('#match-view .section.title-area.section')
    .insertAdjacentHTML('afterend', dom);

  const matchData = document.querySelectorAll(
    '#match-view .match-details .tv-channels li.tv a.no-href'
  );

  const matchData2 = document.querySelectorAll(
    '#match-view .match-details .tv-channels li.tv a.do-link'
  );

  if (matchData.length > 0) {
    matchData.forEach((item, index) => {
      if (!item.querySelector('img.tv-icon')) {
        const anchorTag = item;
        const href = anchorTag.getAttribute('href');
        const title = anchorTag.getAttribute('title');
        const isPaid = paidCustomers.includes(title.toLowerCase().trim());

        const anchor = `
        <a href="${href}"  data-viewType="TV Channel" data-provider="${title}" target="_blank" rel="nofollow" 
          class="${isPaid ? 'active' : ''}" 
        ${!href ? 'style="pointer-events: none;"' : ''}>
          <div class="left_content">
            <div class="channel_image">
              <img src="${
                aws + encodeURIComponent(title.replace(/ /g, '-').toLowerCase())
              }.png" alt="${title}">
            </div>
            <div class="info">
              <div class="title">${title}</div>
              <div class="subtitle">TV Channel</div>
            </div>
          </div>
        </a>
      `;
        document.querySelector(
          '#match-view .match_details .watch-on-tv .match_details__item__content'
        ).innerHTML = '';
        document
          .querySelector('#match-view .match_details .watch-on-tv .match_details__item__content')
          .insertAdjacentHTML('beforeend', anchor);
      }
    });
  } else {
    document.querySelector('#match-view .match_details .watch-on-tv').remove();
  }
  let isOnlineStream = false;
  if (matchData2.length > 0) {
    matchData2.forEach((item, index) => {
      if (!item.querySelector('img.tv-icon')) {
        isOnlineStream = true;
        const anchorTag = item;
        const href = anchorTag.getAttribute('href');
        const title = anchorTag.getAttribute('title');
        const isPaid = paidCustomers.includes(title.toLowerCase().trim());

        const anchor = `
          <a href="${href}" data-viewType="Stream" data-provider="${title}" target="_blank" rel="nofollow" class="${
          isPaid ? 'active' : ''
        }">
            <div class="left_content">
              <div class="channel_image">
                <img src="${
                  aws + encodeURIComponent(title.replace(/ /g, '-').toLowerCase())
                }.png" alt="${title}">
              </div>
              <div class="info">
                <div class="title">${title}</div>
                <div class="subtitle">Stream</div>
              </div>
            </div>
            <div class="right_content">
              <div class="stream">
                <span class="text">Watch</span>
                <span class="icon_play_logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5L17 12L7 19V5V5Z" stroke="#0092D0" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        `;

        document.querySelector(
          '#match-view .match_details .watch-online .match_details__item__content'
        ).innerHTML = '';
        document
          .querySelector('#match-view .match_details .watch-online .match_details__item__content')
          .insertAdjacentHTML('beforeend', anchor);
      }
    });
  } else {
    document.querySelector('#match-view .match_details .watch-online').remove();
  }
  if (!isOnlineStream) {
    document.querySelector('#match-view .match_details .watch-online').remove();
  }

  pollerLite(['.best-odds'], () => {
    if (!document.querySelector('.best-odds .empty-odds')) {
      const logo = document.querySelector('.best-odds .partner-logo img');
      const linkToPartner = document.querySelector('.best-odds .go-to-partner');
      const value1 = document.querySelector('.best-odds .odds .home');
      const value2 = document.querySelector('.best-odds .odds .draw');
      const value3 = document.querySelector('.best-odds .odds .away');

      const content = `
                   <div id="odds" class="table_tabs active">
                    <table class="match_details__item__content__table">
                      <thead>
                        <tr>
                          <th>Bookmaker</th>
                          <th></th>
                          <th>1<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M12.5 10L8.5 6L4.5 10" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg></th>
                          <th>X</th>
                          <th>2<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                          <path d="M12.5 10L8.5 6L4.5 10" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style="width: 120px">
                            <img src="${logo.getAttribute('src')}" 
                            alt="${logo.getAttribute('alt')}"/>
                          </td>
                          <td>
                            <a class="${ID}__partnerlink" data-viewType="betting" 
                               data-provider="${linkToPartner.innerText}" 
                               href="${linkToPartner.href}" target="_blank">
                                GO To Website <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6 12L10 8L6 4" stroke="#0092D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                          </td>
                          <td>${value1.textContent.trim()}</td>
                          <td>${value2.textContent.trim()}</td>
                          <td>${value3.textContent.trim()}</td>
                        </tr>
                       
                      </tbody>
                    </table>
                  </div>`;
      document
        .querySelector('.match_details__item__nav')
        .insertAdjacentHTML(
          'afterbegin',
          '<a href="#odds" target="_blank" rel="nofollow" class="active">Odds</a>'
        );
      document
        .querySelector('.match_details__item__tables')
        .insertAdjacentHTML('afterbegin', content);
    }
  });

  pollerLite(['.match.fotboll'], () => {
    pollerLite(['#lineup'], () => {
      const isOddav = document.querySelector('#odds');

      const nav = `<a href="#lineups" target="_blank" rel="nofollow" class="${
        !isOddav ? 'active' : ''
      }">Line Ups</a>`;
      document.querySelector('.match_details__item__nav').insertAdjacentHTML('beforeend', nav);

      const homeTeam_title = document.querySelector('#lineup .teams .home')?.textContent.trim();
      const awayTeam_title = document.querySelector('#lineup .teams .away')?.textContent.trim();
      const homeList = document.querySelector('#lineup .home-list').cloneNode(true);
      const awaysList = document.querySelector('#lineup .away-list').cloneNode(true);

      const content = `
                   <div id="lineups" class="table_tabs ${!isOddav ? 'active' : ''}">
                    <div class="match_details__item__content__table">
                        <div class="home_team">
                          <div class="home_team_main">
                            <h4>${homeTeam_title}</h4>
                            <div class="home-list"></div>
                          </div>
                          <div class="home_team_sub">
                            <h4>Substitutes</h4>
                            <div class="home-list">
                            </div>
                          </div>
                        </div>
                        <div class="away_team">
                        <div class="away_team_main">
                            <h4>${awayTeam_title}</h4>
                            <div class="away-list"></div>
                          </div>
                          <div class="away_team_sub">
                            <h4>Substitutes</h4>
                            <div class="away-list">
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>`;

      document
        .querySelector('.match_details__item__tables')
        .insertAdjacentHTML('beforeend', content);

      let homeSub = false;
      let awaySub = false;

      homeList.querySelectorAll('div').forEach((item) => {
        if (item.classList.contains('substitutes')) {
          homeSub = true;
        }

        if (homeSub) {
          document.querySelector('#lineups .home_team_sub .home-list')?.append(item);
        } else {
          document.querySelector('#lineups .home_team_main .home-list')?.append(item);
        }
      });

      awaysList.querySelectorAll('div').forEach((item) => {
        if (item.classList.contains('substitutes')) {
          awaySub = true;
        }

        if (awaySub) {
          document.querySelector('#lineups .away_team_sub .away-list')?.append(item);
        } else {
          document.querySelector('#lineups .away_team_main .away-list')?.append(item);
        }
      });
    });

    pollerLite(['#stagetable'], () => {
      const isActiveAvail = document.querySelector('.match_details__item__nav a.active');
      const nav = `<a href="#point_table" target="_blank" rel="nofollow" class="${
        !isActiveAvail ? 'active' : ''
      }">Table</a>`;
      document.querySelector('.match_details__item__nav').insertAdjacentHTML('beforeend', nav);

      const table = document.querySelector('#stagetable table').cloneNode(true);
      table.classList.add('point_table');

      const tableCont = ` <div id="point_table" class="table_tabs ${
        !isActiveAvail ? 'active' : ''
      }">
                            <div class="match_details__item__content__table">
                              ${table.outerHTML}
                            </div>
                          </div>`;
      document
        .querySelector('.match_details__item__tables')
        .insertAdjacentHTML('beforeend', tableCont);
    });

    pollerLite(['.match_details__item__nav'], () => {
      const nav = document.querySelectorAll('.match_details__item__nav a');
      const tab = document.querySelectorAll('.table_tabs');
      nav.forEach((item, index) => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const id = item.getAttribute('href');

          nav.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove('active');
          });
          item.classList.add('active');

          document.querySelector(`${id}`).classList.add('active');
        });
      });
    });
  });
};
