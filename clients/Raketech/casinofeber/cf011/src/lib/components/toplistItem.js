/*eslint-disable consistent-return */
import { bonusWageringIcon, spinsWageringIcon } from '../assets/svg';
import badges from './badges';
import featureBoxes from './featureBoxes';
import toplistItemFooter from './toplistItemFooter';

/*eslint-disable max-len */
const toplistItem = (id, casino, index) => {
    const casinoData = window[`${id}__data`];
    const casinoName = casino.querySelector('a.title').getAttribute('href').split('/')[2];

    const matchedData = casinoData[casinoName];
    if (!matchedData) return;

    const casinoRank = index + 1;

    const { displayName, bonusAmount, spinsAmount, bonusWagering, spinsWagering, withdrawalWagering, withdrawalAttempt1, withdrawalAttempt2, speedExperience, liveChat, combinedRatings, trustly, swish, operatorColor } = matchedData;

    const itemHref = casino.querySelector('a.title').getAttribute('href');
    const image = casino.querySelector('.img img').getAttribute('src');
    const reviews = casino.querySelector('.item-rating').outerHTML;

    const htmlStr = `<div class='${id}__toplistItem' data-rank='${casinoRank}'>
        <div class='${id}__toplistItem-topHeader'>
            <div class='${id}__toplistItem-topHeader-logo'>
                <div class='${id}__rankBadgeContainer'>
                    <div class='${id}__casinoRank'>#${casinoRank}</div>
                </div>
                <a href='/spela/${casinoName}'>
                    <img src='${image}' alt='${displayName}'>
                </a>
                <div class='${id}__casinoReviews'>${reviews}</div>
            </div>
            <div class='${id}__toplistItem-topHeader-info'>
                <span class='${id}__bonusAmount'>
                    ${bonusAmount} 
                    <span>Bonus</span>
                </span>
                <span class='${id}__spinsAmount'>
                    ${spinsAmount}
                    <span>Free spins</span>
                </span>
                <span class='${id}__bonusWagering'>
                    ${bonusWageringIcon}
                    Bonus wagering 
                    <span>${bonusWagering}</span>
                </span>
                <span class='${id}__spinsWagering'>
                    ${spinsWageringIcon}               
                    Spin Wagering
                    <span>${spinsWagering}</span>
                </span>
                <div class="${id}__badges">
                    ${badges(id)}
                </div>
            </div>
        </div>
        <div class='${id}__featureBoxContainer'>
            ${featureBoxes(id, matchedData.features)}
        </div>
        <div class='${id}__toplistItem-footer'>
            ${toplistItemFooter(id, itemHref, casinoName)}
        </div>
    </div>`;

    return htmlStr;
};

export default toplistItem;
