import { downArrow, tickIcon } from '../assets/icons';

const banner = (id, data) => {
  const html = `
        <div class="${id}__banner">
            <div class="${id}__bannerContainer">
                <div class="${id}__bannerHeader">
                    <h2>A specialist Audi buyer is interested in your vehicle</h2>
                    <p>We can negotiate a higher price for you with a few more details</p>
                </div>
                <div class="${id}__bannerContent">
                    <img src="https://www.scrapcarcomparison.co.uk/wp-content/themes/scc/img/sidebar_quote_header.png" alt="Specialist image">
                    <ul class="${id}__desktopList">
                        ${data
                          .map((item) => {
                            return `<li>
                                    <span class="${id}__icon">${tickIcon}</span>
                                    <span class="${id}__text">${item.text}</span>
                                </li>`;
                          })
                          .join('\n')}
                         
                    </ul>
                </div>
                <div class="${id}__mobileWrapper">
                        <div class="${id}__mobileContainer">
                            <div class="${id}__mobileImage">
                                <img src="https://www.scrapcarcomparison.co.uk/wp-content/themes/scc/img/sidebar_quote_header.png" alt="Specialist image"/>
                            </div>
                            <p>We can negotiate a higher price for you with a few more details.</p>
                        </div>
                        <div class="${id}__dropdown">
                            <div class="${id}__dropdown-header">
                                <span class="${id}__text">What is a trusted buyer?</span>
                                <span class="arrow">${downArrow}</span>
                            </div>
                            <div class="${id}__dropdown-content">
                                <ul>
                                    ${data
                                      .map((item) => {
                                        return `
                                            <li>
                                                <span class="${id}__icon">${tickIcon}</span>
                                                <span class="${id}__text">${item.text}</span>
                                            </li>
                                        `;
                                      })
                                      .join('\n')}
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    `;
  return html.trim();
};

export default banner;
