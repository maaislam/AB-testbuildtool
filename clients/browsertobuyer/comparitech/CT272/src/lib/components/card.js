import { arrow, startsIcon, tickIcon } from '../assets/icons';
import { translationData } from '../data/data';

const card = (provider, language, index) => {
  console.log(provider, 'provider');
  const html = `
       <div class="vpn-card">
            <!-- LEFT -->
            <div class="vpn-left">
                ${provider.badge ? `<div class="badge">${index + 1}. EDITOR'S CHOICE</div>` : ''}
                <img src="${provider.image}" alt="${provider.name}" />
                <div class="headline">${provider.headline}</div>
            </div>

            <!-- MIDDLE -->
            <div class="vpn-middle">
                <div class="vpn-title">${index + 1}. <a href="${provider.link}">${
    provider.name
  }</a></div>
                <ul>
                    ${translationData[language][provider.name].features
                      .map((feature) => {
                        return `<li><span>${tickIcon}</span><span>${feature}</span></li>`;
                      })
                      .join('')}
                </ul>
            </div>

            <!-- RIGHT -->
            <div class="vpn-right">
                <div class="rating-wrapper">
                    <div class="rating-wrapper-first">
                        <div class="rating">Exceptional</div>
                        <div class="stars">${startsIcon}</div>
                    </div>

                    <div class="rating-wrapper-second">
                        <div class="score">9.8</div>
                    </div>
                </div>
                <a href="#" class="button">${
                  index !== 0 ? `Get ${provider.name}` : 'Get Special Deal'
                } <span>${arrow}</span></a>
                <div class="small-text">Get 72% off NordVPN plans<br>LIMITED TIME</div>
            </div>
        </div>
    `;
  return html.trim();
};

export default card;
