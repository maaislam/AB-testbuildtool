import { arrow, tickIcon } from '../assets/icons';
import { translationData } from '../data/data';

const getStarSvg = (inputRating) => {
  //1. force to nearest two decimals (eliminate tiny FP errors)
  let rating = Math.round(inputRating * 100) / 100;
  //2. optionally snap to nearest 0.5
  rating = Math.round(rating * 2) / 2;

  const total = 5;
  const fullCount = Math.floor(rating);
  const fracPart = rating - fullCount; //now always exactly 0 or 0.5
  const hasPartial = fracPart > 0;
  const clipWidth = fracPart * 20; //exactly 10 for .5

  const defs = hasPartial
    ? `<defs>
            <clipPath id="starClip">
              <rect x="0" y="0" width="${clipWidth}" height="20" />
            </clipPath>
          </defs>`
    : '';

  const starD =
    'M9.9993 14.9727L14.9702 17.6216L14.0436 12.1922L17.9185 8.19064L12.3165 7.43277L9.9993 2.37793L7.68293 7.43277L2.08008 8.19064L5.95575 12.1922L5.0284 17.6216L9.9993 14.9727Z';

  let stars = '';
  for (let i = 0; i < total; i++) {
    const x = i * 20;
    if (i < fullCount) {
      stars += `<g transform="translate(${x},0)"><path d="${starD}" fill="#FFA600"/></g>`;
    } else if (i === fullCount && hasPartial) {
      stars += `
            <g transform="translate(${x},0)">
              <path d="${starD}" fill="#E0E0E0"/>
              <path d="${starD}" fill="#FFA600" clip-path="url(#starClip)"/>
            </g>`;
    } else {
      stars += `<g transform="translate(${x},0)"><path d="${starD}" fill="#E0E0E0"/></g>`;
    }
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 100 20" fill="none">
      ${defs}
      ${stars}
    </svg>`.trim();
};

const getLdJsonByBrand = (targetBrand) => {
  const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));

  //Use Array.prototype.reduce to find the first matching object
  return scripts.reduce((found, script) => {
    if (found) return found;
    let data;
    try {
      data = JSON.parse(script.textContent.trim());
    } catch {
      return found; //skip invalid JSON
    }

    //Handle both array and single-object cases
    const candidates = Array.isArray(data) ? data : [data];

    //Use Array.prototype.find to get the first matching object
    const match = candidates.find((obj) => obj.brand && obj.brand.name === targetBrand);
    return match || found;
  }, null);
};
const oneDecimal = (s) => {
  const n = parseFloat(s);
  if (Number.isNaN(n)) throw new Error(`"${s}" is not a number`);
  return n.toFixed(1);
};

const card = (hasPageData, provider, language, index) => {
  const providerExtraData = getLdJsonByBrand(provider.name);

  const overallRating = providerExtraData?.aggregateRating?.ratingValue || '9.8';
  const ratingnumber = Number(overallRating);

  const ratingOutofFive = ratingnumber / 2; //Convert to 0-5 scale

  const finalRatingNumber = Math.round(ratingOutofFive * 10) / 10; //Round to 1 decimal place

  const starIcons = getStarSvg(finalRatingNumber); //Round to 1 decimal place

  console.log(hasPageData, 'hasPageData');
  console.log(provider, 'provider');
  //Filter the main array based on the small array
  const filteredData = hasPageData.filter((item) => {
    //Ensure that the provider is 'shown' and the name matches
    return (
      provider.shown && item.name.toLowerCase().trim().includes(provider.name.toLowerCase().trim())
    );
  });

  console.log(filteredData, 'filterend');

  if (filteredData.length === 0) {
    //Do something with filteredData
    return null; //Return null if no matching data found
  }

  const html = `
        <div class="vpn-card" data-name="${provider.name}">
          <!-- LEFT -->
          <div class="vpn-left">
              ${
                filteredData[0].extraName
                  ? `<div class="badge">${index + 1}. EDITOR'S CHOICE</div>`
                  : `<div class="badge">${index + 1}.</div>`
              }
              <img src="${filteredData[0].imageUrl}" alt="${filteredData[0].name}" />
              <div class="headline">${filteredData[0].best_for}</div>
          </div>

          <!-- MIDDLE -->
          <div class="vpn-middle">
              ${
                provider.linkElement
                  ? `
                  <div class="vpn-title">
                    ${provider.linkElement.outerHTML}
                  </div>
                `
                  : ''
              }
             <ul>
            ${filteredData[0].pros
              .map((feature) => {
                return `<li><span>${tickIcon}</span><span>${feature}</span></li>`;
              })
              .join('')}
            </ul>
            ${
              filteredData[0].features
                ? `
               <h4 class="featured-title">Features</h4>
               <ul class="featured-lists">
                 ${filteredData[0].features
                   .map((feature) => {
                     return `<li>${feature}</li>`;
                   })
                   .join('')}
               </ul>
              `
                : ''
            }
          </div>

          <!-- RIGHT -->
          <div class="vpn-right">
            <div class="rating-wrapper">
              <div class="rating-wrapper-first">
                <div class="rating">Exceptional</div>
                <div class="stars">${starIcons}</div>
              </div>

              <div class="rating-wrapper-second">
                <div class="score">${oneDecimal(overallRating)}</div>
              </div>
            </div> 
            ${
              provider.linkElement
                ? `
                  <div class="vpn-button-wrapper">
                     ${provider.linkElement.outerHTML}
                  </div>
                `
                : ''
            }
          </div>
        </div>
  `;
  return html.trim();
};

export default card;
