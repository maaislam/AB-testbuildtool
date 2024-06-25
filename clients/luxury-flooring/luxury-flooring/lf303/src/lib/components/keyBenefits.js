import { checkMark } from '../assets/svgs';

const keyBenefits = (id, data, screen) => {
  const htmlStr = `
        <div class="${id}__benefitSection ${screen}">
            <h2 class='${id}__benefitsTitle'>Why you'll love it</h2>
            <div class='${id}__benefits-wrapper'>
                <div class='${id}__benefit-content'>
                    ${data
                      .map((item, index) => {
                        return `
                            <div class="${id}__benefit" data-index='${index + 1}'>
                                <span class='${id}__icon'>${checkMark}</span>
                                <span class='${id}__benefit-text'>${item.benifit}</span>
                            </div>
                        `;
                      })
                      .join('')}
                    <a class='${id}__benifitDetailsCta' href="#${id}__floor-section">Read all product details</a>
                </div>
                <img src="https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/icon_flooring_size.png" alt="placeholder" class="${id}__benefit-image" />
            </div>
            
        </div>
    `;

  return htmlStr;
};
export default keyBenefits;
