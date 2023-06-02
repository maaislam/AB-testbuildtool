import bookmakerCard from './bookmakerCard';

const bookmakerCards = (id, carouselData, orientation = 'column') => {
  const htmlStr = `   
    <div class="${id}__bookmakercards card-block ${orientation === 'column' ? '' : 'vertical'}">
        <div class="${id}__toprow">
            <h2 class="card-title">Populära spelbolag 2023</h2>
            ${
              orientation === 'column'
                ? `<a href="/bonus" class="${id}__learnmore desktop-show">Alla bonusar</a>`
                : ''
            }
        </div>
        <div class="${id}__disclaimer desktop-hide">
            *Innehåller reklamlänk | 18+ år, spela ansvarsfullt, <a target="_blank" rel="nofollow" href="https://stodlinjen.se/#!/">stodlinjen.se</a>, <a target="_blank" rel="nofollow" href="https://www.spelpaus.se/">spelpaus.se</a>.
        </div>
        <div class="${id}__bookmakercards-swiper swiper-bookmaker 
            ${orientation === 'column' ? '' : 'vertical'}">
            <div class="${id}__bookmakercards-swrapper swiper-wrapper">
                ${carouselData
                  .map((carousel) => bookmakerCard(id, carousel, orientation))
                  .join('\n')}
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="${id}__disclaimer desktop-show">
            *Innehåller reklamlänk | 18+ år, spela ansvarsfullt, <a target="_blank" rel="nofollow" href="https://stodlinjen.se/#!/">stodlinjen.se</a>, <a target="_blank" rel="nofollow" href="https://www.spelpaus.se/">spelpaus.se</a>. 
        </div>
        <a href="/bonus" class="${id}__learnmore desktop-hide">Alla bonusar</a>
        ${
          orientation === 'column'
            ? ''
            : `<a href="/bonus" class="${id}__learnmore desktop-show">Alla bonusar</a>`
        }
    </div>
    `;

  return htmlStr.trim();
};

export default bookmakerCards;
