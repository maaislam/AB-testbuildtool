import { calender, clockIcon, rewardIcon, rightArrow } from '../assets/icons';

const bettingWrapper = (ID, data) => {
  const html = `
        <div class="${ID}__bettingWrapper">
            <div class="${ID}__bettingContainer">
                <div class="${ID}__bettingLists">
                    ${data
                      .map((item) => {
                        return `
                            <div class="${ID}__bettingItem">
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
                                    <div class="${ID}__bettingCategory"></div>
                                </div>
                                <div class="${ID}__bettingInfo">
                                    <div class="${ID}__bettingTitle">
                                        ${item.mainTitle} and Tips</div>
                                    ${
                                      item.tipster
                                        ? `<div class="${ID}__tipsterWrapper">
                                            <span>Tipster:</span>
                                            <a href="${item.tipsterLink}">${item.tipster}</a>
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
                                                    <h2>${info.text}</h2>
                                                    <div class="${ID}__ratingWrapper">
                                                        <a class="${ID}__casinoLink" href="${
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
                                                                ${info.number} ${rightArrow}
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
                                    <a href="${item.ur}">read full prediction</a>
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
