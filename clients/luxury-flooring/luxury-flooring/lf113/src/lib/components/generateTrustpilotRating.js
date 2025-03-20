/*eslint-disable no-param-reassign */
const generateTrustpilotRating = (id, rating) => {
  rating = Math.min(5, Math.max(0, rating));

  const starImageUrl = `https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-${rating}.svg`;
  const trustpilotLogoUrl = 'https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg';

  return `
        <a href="https://uk.trustpilot.com/review/luxuryflooring.co.uk?utm_medium=trustbox&utm_source=MicroCombo" class="trustpilot-rating">
            <span class="trustpilot-excellent">Excellent</span>
            <div class="${id}__imageWrapper"><img src="${starImageUrl}" alt="Trustpilot ${rating} stars" class="trustpilot-stars"></div>
            <span class="review-count">${rating} out of 5</span>
            <div class="${id}__logoWrapper"><img src="${trustpilotLogoUrl}" alt="Trustpilot Logo" class="trustpilot-logo"></div>
        </a>
    `;
};
export default generateTrustpilotRating;
