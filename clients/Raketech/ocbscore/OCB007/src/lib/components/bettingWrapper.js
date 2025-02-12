import { calender, clockIcon, matchIcon, rightArrow } from '../assets/icons';

const bettingWrapper = (ID, data) => {
  const html = `
        <div class="${ID}__bettingWrapper">
    <div class="${ID}__bettingContainer">
        <div class="${ID}__bettingLists">
            <div class="${ID}__bettingItem"
                 data-link="${data.url}">
                <div class="${ID}__bettingContent">
                    <div class="${ID}__contentHeader">
                      <div class="${ID}__eventInfo">
                        <span>Upcoming</span>
                        <a href="${data.eventUrl}">${data.eventName}</a>
                      </div>
                    </div>
                    <div class="${ID}__teamInfo">
                      <div class="${ID}__teamNames">
                        <p>${data.firstTeam}</p>
                        <p>${data.secondTeam}</p>
                      </div>
                      <div class="${ID}__eventTime">
                        <span>${data.startingText}</span>
                        <span>${data.textTime}</span>
                      </div>
                    </div>
                    <div class="${ID}__additionalInfo">
                        ${
                          data.eventDate
                            ? `<span class="${ID}__section">${calender} <span class="${ID}__text">${data.eventDate}</span></span>`
                            : ''
                        }
                        ${
                          data.eventTime
                            ? `<span class="${ID}__section">${clockIcon} <span class="${ID}__text">${data.eventTime}</span></span>`
                            : ''
                        }
                        ${
                          data.competitionName
                            ? `<span class="${ID}__section">${matchIcon} <span class="${ID}__text">${data.competitionName}</span></span>`
                            : ''
                        }
                        
                    </div>
                    <div class="${ID}__bettingContentList">
                        ${data.bettingItemsInfo
                          .map((info) => {
                            return `
                        <div class="${ID}__bettingContentItem">
                            <a class="${ID}__bettingContentTitle"
                               href="${info.link}"
                               data-operator="${info.dataOperator}"
                               data-element="clicks-to-operators"
                               data-placement="quick-tips-block"
                               data-type="button"
                               rel="nofollow noopener">${info.text}</a>
                            <div class="${ID}__ratingWrapper"
                                 data-operator="${info.dataOperator}">
                                <a class="${ID}__casinoLink"
                                   data-operator="${info.dataOperator}"
                                   data-element="clicks-to-operators"
                                   data-placement="quick-tips-block"
                                   data-type="button"
                                   rel="nofollow noopener"
                                   target="_blank"
                                   href="${info.link}">
                                    <span class="${ID}__image"
                                          style="--bgcolor:${info.bgColor};">
                                        ${
                                          info.imageSource
                                            ? `<img src="${info.imageSource}" />`
                                            : '<img src="https://cdn.backend.ocbscores.com/wp-content/uploads/2024/08/1xbet.png" />'
                                        }
                                    </span>
                                    <span class="${ID}__number">
                                        <span class="${ID}__numberText">
                                            ${info.number}
                                        </span>
                                        <span class="${ID}__icon">${rightArrow}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        `;
                          })
                          .join('\n')}

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
  return html.trim();
};

export default bettingWrapper;
