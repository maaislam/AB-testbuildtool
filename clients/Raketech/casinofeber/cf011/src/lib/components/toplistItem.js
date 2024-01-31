/*eslint-disable consistent-return */
import { bonusWageringIcon, spinsWageringIcon } from '../assets/svg';
import badges from './badges';
import featureBoxes from './featureBoxes';
import toplistItemFooter from './toplistItemFooter';
import shared from '../shared/shared';
import translationConfig from '../data/translationConfig';
import checkLength from '../helpers/checkLength';

/*eslint-disable max-len */
const toplistItem = (id, casino, index) => {
    const { VARIATION } = shared;
    const casinoData = window[`${id}__data`];
    const casinoName = casino.querySelector('a.title').getAttribute('href').split('/')[2];

    const matchedData = casinoData[casinoName];
    if (!matchedData) return;

    const casinoRank = index + 1;

    const { displayName, bonusAmount, spinsAmount, bonusWagering, spinsWagering } = matchedData;

    const itemHref = casino.querySelector('a.title').getAttribute('href');
    const image = casino.querySelector('.img img').getAttribute('src');
    const reviews = casino.querySelector('.item-rating').outerHTML;
    const terms = casino.querySelector('.toplist-terms').outerHTML;

    const pageLang = document.querySelector('html').getAttribute('lang');
    const bonusText = translationConfig.bonus[pageLang];
    const spinsText = translationConfig.spins[pageLang];

    const bonusWageringText = translationConfig['bonus wagering'][pageLang];
    const spinsWageringText = translationConfig['spins wagering'][pageLang];

    const isBonusAmount = bonusAmount.toLowerCase().includes('kr');
    const isLength = checkLength(spinsAmount);

    const htmlStr = `<div class='${id}__toplistItem swiper-slide'>
        <div class='${id}__toplistItem-inner' data-rank='${casinoRank}'>
            <div class='${id}__toplistItem-inner-topHeader'>
                <div class='${id}__toplistItem-inner-topHeader-logo'>
                    <div class='${id}__rankBadgeContainer'>
                        <div class='${id}__casinoRank'>#${casinoRank}</div>
                    </div>
                    <a href='/spela/${casinoName}'>
                        <img src='${image}' alt='${displayName}'>
                    </a>
                    <div class='${id}__casinoReviews'>${reviews}</div>
                </div>
                <div class='${id}__toplistItem-inner-topHeader-info'>
                    <span class='${id}__bonusAmount'>
                        ${bonusAmount} 
                        <span>${isBonusAmount ? `${bonusText}` : ''}</span>
                    </span>
                    <span class='${id}__spinsAmount'>
                        ${spinsAmount}
                        <span>${isLength ? spinsText : ''}</span>
                    </span>
                    <span class='${id}__bonusWagering'>
                        ${bonusWageringIcon}
                        ${bonusWagering && bonusWagering !== '-' ? bonusWageringText : 'Bonus ej tillgänglig'}
                        <span>${bonusWagering && bonusWagering !== '-' ? bonusWagering : ''}</span>
                    </span>
                    <span class='${id}__spinsWagering'>
                        ${spinsWageringIcon}               
                        ${spinsWagering && spinsWagering !== '-'
                            ? spinsWageringText
                            : 'Free spins ej tillgängligt'
                        }
                        <span>${
                            spinsWagering && spinsWagering !== '-' ? spinsWagering : ''
                          }</span>
                    </span>
                    <div class="${id}__badges">
                        ${badges(id)}
                    </div>
                    <div class='${id}__toplistItem-footer ${VARIATION === '1' ? `${id}__hide` : `${id}__topCta`}'>
                        ${toplistItemFooter(id, itemHref, casinoName, displayName)}
                    </div>
                </div>
            </div>
            <div class='${id}__featureBoxContainer'>
                ${featureBoxes(id, matchedData.features)}
            </div>
            <div class='${id}__toplistItem-footer ${VARIATION !== '1' ? `${id}__hide` : ''}'>
                ${toplistItemFooter(id, itemHref, casinoName, displayName)}
            </div>
        </div>
        <div class='${id}__toplistItem-outer'>
            ${terms}
        </div>
    </div>
    `;

    return htmlStr;
};

export default toplistItem;
