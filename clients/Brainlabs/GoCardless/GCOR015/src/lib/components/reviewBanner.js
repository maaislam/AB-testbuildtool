import { siteRatingStar, trustpilotLogo1 } from '../reviewData';

const reviewBanner = (id) => {
  const loginBannerRendered = !!document.querySelector('.TP231__loginbanner');
  const htmlStr = `
        <div class="${id}__review-banner ${loginBannerRendered ? 'adjusted-padding' : ''}">   
        <div class="logo"><span>${siteRatingStar}</span><span>${trustpilotLogo1}</span></div>
                <div class="headline">
                Our customers say we're great!
                </div>
                
        </div>
    `;

  return htmlStr;
};

export default reviewBanner;
