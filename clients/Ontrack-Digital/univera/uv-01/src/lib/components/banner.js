import shared from '../shared/shared';

const { ID } = shared;

const bannerContent = `<div class="${ID}-banner-section">
                        <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/07/DISCOUNT-CODE-USA-1-1.png"/>
                      </div>`
export const bannerSection = (selector) => {
  const header = document.querySelector(selector)
  header.insertAdjacentHTML("beforebegin", bannerContent);
}