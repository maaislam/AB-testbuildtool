import benefitItem from './benefitItem';

const benefitStr = (ID, benefitArray) => {
  const html = `
    <div class="${ID}__banner_list">
        <div class="banner_prod-mob showMob"><img src="https://hitsdesignclients.com/InfiniteAge_BlackSeed_Extract/V2/images/mob-prod.png" width="383" height="519" alt="img"></div>
        <ul class="banner__points">
            ${benefitArray.map((item) => benefitItem(item)).join('\n')}
        </ul>
    </div>`;

  return html.trim();
};

export default benefitStr;
