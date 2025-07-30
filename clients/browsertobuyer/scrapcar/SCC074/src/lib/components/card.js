import { tickIcon, tooltipIcon } from '../assets/icons';
import staticData from '../data/data';

const card = (id, item) => {
  const rank = item.getAttribute('data-rank');
  const price = item.getAttribute('data-price');
  const html = `
        <div class="${id}__card-box">
            <div class="offer-left">
                ${
                  rank === '1'
                    ? `
                    <span class="badge" id="customModalTrigger">
                        <span class="info-text">Certified Scrap Buyer</span>
                        <span class="info-icon">${tooltipIcon}</span>
                    </span>
                    `
                    : ''
                }
                <ul class="offer-list">
                    ${
                      staticData[rank]
                        ? staticData[rank]
                            .map((text) => `<li><span>${tickIcon}</span><span>${text}</span></li>`)
                            .join('')
                        : ''
                    }
                </ul>
            </div>
            <div class="offer-right">
                <div class="price">£${price}</div>
                <button class="accept-btn ${
                  rank === '1' ? 'accept-btn-colored' : ''
                }" data-rank-update="${rank}">Accept offer</button>
            </div>
        </div>
    `;
  return html.trim();
};

export default card;
