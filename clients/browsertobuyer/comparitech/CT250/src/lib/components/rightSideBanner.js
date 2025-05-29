import card from './card';

const rightSideBanner = (id, mustReadArray, reviewsArray) => {
  const html = `
        <div class="${id}__rightSideBanner ${id}__rightSideContainer">
            <div class="${id}__rightSideBanner-container">
                <div class="${id}__rightSideBanner-readSection">
                    <div class="${id}__rightSideBanner-title">Must reads</div>
                    <div class="${id}__lists">
                         ${mustReadArray.map((item) => card(id, item)).join('\n')}
                    </div>
                    <div class="${id}__ctaWrapper">
                        <a href="https://www.comparitech.com/net-admin/" class="${id}__ctaLink">See all articles</a>
                    </div>
                </div>
                <div class="${id}__rightSideBanner-reviewsSection">
                    <div class="${id}__rightSideBanner-title">Our reviews</div>
                    <div class="${id}__lists">
                           ${reviewsArray.map((item) => card(id, item)).join('\n')}
                    </div>
                    <div class="${id}__ctaWrapper">
                        <a href="https://www.comparitech.com/net-admin/" class="${id}__ctaLink">See all reviews</a>
                    </div>
                </div>
            </div>
        </div>
    `;
  return html.trim();
};

export default rightSideBanner;
