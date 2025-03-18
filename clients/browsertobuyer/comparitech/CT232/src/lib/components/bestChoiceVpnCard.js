import { checkIcon } from '../assets/icons';

const bestChoiceVpnCard = (providerData, shortSubjectElem) => {
    const { id } = providerData;
    const { score, skyGoElem, ctaUrl, imgUrl } = providerData.nordvpn;
    let shortSubText = null;

    if (shortSubjectElem) {
        shortSubText = shortSubjectElem.textContent;
    }

    const htmlStr = `
    <div class="vpn-featured-card ${id}__bestChoiceVpnCard nordvpn-featured-card">
        <div class="card-header">
            EDITOR'S CHOICE ★★★★★
        </div>
        ${shortSubjectElem ? `<div class="card-title">
            Best Overall for ${shortSubText}
        </div>` : '<div class="card-title">Best Overall VPN</div>'}
        <div class="card-body">
            <a href="${imgUrl}" target="__blank">
                <img src="https://cdn.comparitech.com/wp-content/themes/comparitech-2018/static/img/featured-assets/2273.svg?v=1610974086" alt="NordVPN Logo">
            </a>
            <div class="score-wrapper">
                <span class="score-heading">Our Score:</span>
                <span class="score">${score}</span>
                <span class="score-max">/10</span>
            </div>
            <ul class="features">
                <li>Best overall VPN for Sky Go</li>
                <li>Most reliable choice for streaming and unblocking</li>
                <li>All major apps & devices supported - use on up to 10 at once</li>
            </ul>
            <a href="${ctaUrl}" class="deal-btn">Get Special Deal
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 4.99414L0.250001 9.75728L0.250001 0.231001L8.5 4.99414Z" fill="white"/>
                </svg>
            </a>
            <div class="offer-note">Get 72% off NordVPN plans - LIMITED TIME</div>
        </div>
        ${skyGoElem ? `
        <div class="card-footer">
            <span class="check-icon">${checkIcon}</span>
            <div class="footer-text">
                Unblocks Sky Go -
                <span class="footer-date">Tested Mar 2025</span>
            </div>
        </div>` : ''}
    </div>
    `;

    return htmlStr;
};

export default bestChoiceVpnCard;
