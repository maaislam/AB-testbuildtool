import { arrowRight, churnLogo } from '../asset';

const calcBanner = (id, calcUrl) => {
  const htmlStr = `   
    <a class="${id}__calcbanner" href="${calcUrl}">
        <div class="${id}__calcbanner-left">
            <div class="${id}__calcbanner--title">How much could you save by reducing churn with GoCardless?</div>
            <div class="${id}__calcbanner--cta">
                <span class="text">Calculate now</span>
                <span class="arrow-right">${arrowRight}</span>
            </div>
        </div>
        <div class="${id}__calcbanner-right">${churnLogo}</div>
    </a>`;
  return htmlStr;
};

export default calcBanner;
