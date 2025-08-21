import card from './card';

const cardWrapper = (id, hasPageData, providerArray, language) => {
  const html = `
       <div class="${id}__cardWrapper">
        <div class="${id}__cardWrapper__inner">
            <h1 class="${id}__title">Here’s our summary of the best VPNs to change location on Netflix:</h1>

            <div class="${id}__cardList">
                ${providerArray
                  .map((provider, index) => card(hasPageData, provider, language, index))
                  .join('\n')}
            </div>
        </div>
       </div>
    `;
  return html.trim();
};

export default cardWrapper;
