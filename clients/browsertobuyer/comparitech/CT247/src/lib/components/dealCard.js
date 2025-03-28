import { closeIcon, locationIcon, rectangleVector, sponsoredIcon, totalIcon } from '../assets/icons';

const dealCard = (id) => {
    const btnLink = 'https://www.comparitech.com/go/totalvpn-promoted/l/promoted/';
    const shortSubjectElem = document.querySelector('div.short-subject');
    const shortSubject = shortSubjectElem?.textContent?.trim();
    const description = shortSubject
    ? `Get a massive discount on a VPN which is great for ${shortSubject}, plus includes Antivirus, Adblocking and Malware Protection.`
    : 'Get a massive discount on a VPN which is great for browsing, streaming and privacy, plus includes Antivirus, Adblocking and Malware Protection.';

    const htmlStr = `
    <div class="${id}__dealCardContainer">
        <div class="${id}__dealCard">
            <div class="deal-header">
                <div class="deal-header-content">
                    <p>Deal of the month</p>
                    <div class="sponsored ${id}__sponsoredBtn">
                        <span class='sponsoredIcon'>${sponsoredIcon}</span>
                        <span>Sponsored</span>
                    </div>
                </div>
                <div class="deal-header-description">${description}</div>
                
            </div>
            <div class="deal-image">${rectangleVector}</div>
            <div class="deal-content">
                <div class="vpn-info">
                    <span class="locationIcon">${locationIcon}</span>
                    <span class="totalIcon">${totalIcon}</span>
                </div>
                <div class="vpn-price">$1.59/mo <span>(usually $8.25/mo)</span></div>
                <a href="${btnLink}" target="_blank" class="${id}__getDealBtn">GET DEAL ></a>
            </div>
        </div>
        <div class="sponsored-tooltip ${id}__sponsoredTooltip ${id}__hide">
            <div>
                Sponsored listings help to support this site and pay for our amazing analysts, writers, developers and web designers.
                Our mission has always been to provide open and honest reviews, comparison and consumer information and to put our readers’ interests first.
            </div>
            <div style="font-style: italic; margin-top: 6px;">
                TotalVPN is owned by Point Wild, Comparitech’s parent company. This has not influenced our comparison in any way and all of our
                findings, claims, and statements are backed by concrete evidence.
            </div>
            <span class="close-tooltip">${closeIcon}</span>
        </div>
    </div>
    `;

    return htmlStr;
};

export default dealCard;
