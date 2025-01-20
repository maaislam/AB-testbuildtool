import { calender, clockIcon, rewardIcon, rightArrow } from '../assets/icons';

const bettingWrapper = (ID, data) => {
  const html = `
        <div class="${ID}__bettingWrapper">
            <div class="${ID}__bettingContainer">
                <div class="${ID}__bettingLists">
                    ${data
                      .map((item) => {
                        return `
                            <div class="${ID}__bettingItem"  data-match="${
                          item.mainTitle.includes('Prediction')
                            ? item.mainTitle.replace('Prediction', '')
                            : item.mainTitle
                        }" data-link="${item.url}">
                                <div class="${ID}__bettingHeader">
                                    <div class="${ID}__bettingTime">
                                        ${
                                          item.eventDate
                                            ? `<span class="${ID}__calender"><span>${calender}</span> ${item.eventDate}</span>`
                                            : ''
                                        }
                                        ${
                                          item.eventTime
                                            ? `<span class="${ID}__time"><span>${clockIcon}</span> ${item.eventTime}</span>`
                                            : ''
                                        }
                                    
                                    </div>
                                    <div class="${ID}__bettingCategory">
                                        <a href="${item.eventUrl}">${item.eventName}</a>
                                    </div>
                                </div>
                                <div class="${ID}__bettingInfo">
                                    <div class="${ID}__bettingTitle">
                                        ${item.mainTitle} and Tips ${
                          item.competitionName ? ` | ${item.competitionName}` : ''
                        }</div>
                                    ${
                                      item.tipster
                                        ? `<div class="${ID}__tipsterWrapper">
                                            <span>Tipster:</span>
                                            <a href="${item.tipsterLink}" target="_blank">${item.tipster}</a>
                                            <span>${rewardIcon}</span>
                                        </div>`
                                        : ''
                                    }
                                </div>
                                <div class="${ID}__bettingContent">
                                    <div class="${ID}__bettingContentList">
                                        ${item.bettingItemsInfo
                                          .map((info) => {
                                            return `
                                                <div class="${ID}__bettingContentItem">
                                                    <a class="${ID}__bettingContentTitle" href="${
                                              info.link
                                            }"  data-operator="${
                                              info.dataOperator
                                            }" data-element="clicks-to-operators" data-placement="quick-tips-block" data-type="button" rel="nofollow noopener">${
                                              info.text
                                            }</a>
                                                    <div class="${ID}__ratingWrapper" data-operator="${
                                              info.dataOperator
                                            }">
                                                        <a class="${ID}__casinoLink"  data-operator="${
                                              info.dataOperator
                                            }" data-element="clicks-to-operators" data-placement="quick-tips-block" data-type="button" rel="nofollow noopener" target="_blank" href="${
                                              info.link
                                            }">
                                                            <span class="${ID}__image" style="--bgcolor:${
                                              info.bgColor
                                            };">
                                                                ${
                                                                  info.imageSource
                                                                    ? `<img src="${info.imageSource}"/>`
                                                                    : '<img src="https://cdn.backend.ocbscores.com/wp-content/uploads/2024/08/1xbet.png"/>'
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
                                <div class="${ID}__bettingButton">
                                    <a href="${item.url}">read full prediction</a>
                                </div>
                            </div>
                        `;
                      })
                      .join('\n')}
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default bettingWrapper;
