import bookmakerCard from './bookmakerCard';

const bookmakerCards = (id, carouselData, orientation = 'column') => {
  const htmlStr = `   
    <div class="${id}__bookmakercards card-block ${orientation === 'column' ? '' : 'vertical'}">
        <div class="${id}__toprow">
            <h1>Bookmaker bonus</h1>
            ${
              orientation === 'column'
                ? `<a href="/bookmakere/bonus" class="${id}__learnmore desktop-show">Se Alle Bonus</a>`
                : ''
            }
        </div>
        <div class="${id}__disclaimer desktop-hide">
            **Indeholder reklamelinks | 18+ | stopspillet.dk | r&v gælder | Selvudelukkelse: Rofus.nu
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
            **Indeholder reklamelinks | 18+ | stopspillet.dk | r&v gælder | Selvudelukkelse: Rofus.nu
        </div>
        <a href="/bookmakere/bonus" class="${id}__learnmore desktop-hide">Se Alle Bonus</a>
        ${
          orientation === 'column'
            ? ''
            : `<a href="/bookmakere/bonus" class="${id}__learnmore desktop-show">Se Alle Bonus</a>`
        }
    </div>
    `;

  return htmlStr.trim();
};

export default bookmakerCards;
