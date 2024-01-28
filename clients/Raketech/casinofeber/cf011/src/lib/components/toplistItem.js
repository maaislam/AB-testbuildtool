import { bonusWageringIcon, spinsWageringIcon } from '../assets/svg';
import badges from './badges';
import featureBoxes from './featureBoxes';
import toplistItemFooter from './toplistItemFooter';

/*eslint-disable max-len */
const toplistItem = (id, data) => {
    const { displayName, image, bonusAmount, spinsAmount, bonusWagering, spinsWagering, withdrawalWagering, withdrawalAttempt1, withdrawalAttempt2, speedExperience, liveChat, combinedRatings, trustly, swish, operatorColor } = data;

    const htmlStr = `<div class='${id}__toplistItem'>
        <div class='${id}__toplistItem-topHeader'>
            <div class='${id}__toplistItem-topHeader-logo'>
                <img src='${image}' alt='${displayName}'>
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
            ${featureBoxes(id, data.features)}
        </div>
        <div class='${id}__toplistItem-footer'>
            ${toplistItemFooter(id, data)}
        </div>
    </div>`;
    return htmlStr;
};

export default toplistItem;
