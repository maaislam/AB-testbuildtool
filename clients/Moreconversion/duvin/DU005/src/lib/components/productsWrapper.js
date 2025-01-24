import { arrow, shadow } from '../assets/icons';

const productsWrapper = (id, categoryData) => {
  const html = `
    <div class="${id}__productsWrapper">
        <div class="${id}__productsContainer">
            <div class="${id}__categorySection">
                <a class="${id}__title" href="/collections/duvin-team-picks">
                    <p>Men’s</p>
                    <span>${arrow}</span>
                </a>
                <div class="${id}__contents" data-attr="men">
                    ${categoryData.men
                      .map((item) => {
                        return `
                            <a class="${id}__item" href="${item.link}">
                                <div class="${id}__image">
                                    <img src="${item.image}" />
                                </div>
                                <span>${item.name}</span>
                            </a>
                        `;
                      })
                      .join('\n')}
                </div>
            </div>
            <div class="${id}__categorySection">
                <a class="${id}__title" href="/collections/duvin-team-picks-womens">
                    <p>Women’s</p>
                    <span>${arrow}</span>
                </a>
                <div class="${id}__contents" data-attr="women">
                    ${categoryData.women
                      .map((item) => {
                        return `
                            <a class="${id}__item" href="${item.link}">
                                <div class="${id}__image">
                                    <img src="${item.image}" />
                                </div>
                                <span>${item.name}</span>
                            </a>
                        `;
                      })
                      .join('\n')}
                </div>
            </div>
            <div class="${id}__categorySection">
                <a class="${id}__title"  href="/collections/kids-swim">
                    <p>Kid’s</p>
                    <span>${arrow}</span>
                </a>
                <div class="${id}__contents" data-attr="kid">
                    ${categoryData.kid
                      .map((item) => {
                        return `
                            <a class="${id}__item" href="${item.link}">
                                <div class="${id}__image">
                                    <img src="${item.image}" />
                                </div>
                                <span>${item.name}</span>
                            </a>
                        `;
                      })
                      .join('\n')}
                </div>
            </div>
            <div class="${id}__categorySection">
                <a class="${id}__title"  href="">
                    <p>Big Deal is coming soon</p>
                    <span>${arrow}</apn>
                </a>
                <div class="${id}__contents" data-attr="big_deal">
                    ${categoryData.big_deal
                      .map((item) => {
                        return `
                            <a class="${id}__item" href="${item.link}">
                                <div class="${id}__image">
                                    <img src="${item.image}" />
                                </div>
                            </a>
                        `;
                      })
                      .join('\n')}
                </div>
            </div>
        </div>
    </div>
  `;
  return html.trim();
};

export default productsWrapper;
