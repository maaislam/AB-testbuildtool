import { checkIcon, starIcon } from '../assets/icons';

const ipVanishVpnCard = (providerData) => {
    const { id } = providerData;
    const { score, skyGoElem, ctaUrl, imgUrl } = providerData.ipvanish;

    const htmlStr = `
    <div class="card ${id}__basicVpnCard ipvanish-featured-card">
        <div class="card-header-hidden">
            <span>EDITOR'S CHOICE</span>
            <span class="star-icons">
                ${starIcon}
                ${starIcon}
                ${starIcon}
                ${starIcon}
                ${starIcon}
            </span>
        </div>
        <div class="card-header">Best for Security & Privacy</div>
        <div class="card-body">
            <a href="${imgUrl}" target="__blank">
                <img src="https://cdn.comparitech.com/wp-content/themes/comparitech-2018/static/img/featured-assets/810.svg?v=1610974086" alt="Surfshark Logo" class="logo">
            </a>
            <div class="score-wrapper">
                <span class="score-heading">Our Score:</span>
                <span class="score">${score}</span>
                <span class="score-max">/10</span>
            </div>
            <ul class="features">
                <li>Great choice for security and privacy</li>
                <li>Easy to use VPN</li>
                <li>Unlimited devices on one subscription</li>
            </ul>
            <a href="${ctaUrl}" class="button">Get IPVanish 
                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 4.99414L0.250001 9.75728L0.250001 0.231001L8.5 4.99414Z" fill="white"/>
                </svg>
            </a>
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

export default ipVanishVpnCard;
