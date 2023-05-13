import bookmakerCard from './bookmakerCard';

const bookmakerCards = (id, carouselData, orientation = 'column') => {
  const htmlStr = `   
    <div class="${id}__bookmakercards card-block ${orientation === 'column' ? '' : 'vertical'}">
        <div class="${id}__toprow">
            <h2 class="card-title">Populære bookmakere</h2>
            ${
              orientation === 'column'
                ? `<a href="/bookmakere/bonus" class="${id}__learnmore desktop-show">Alle Bonusser</a>`
                : ''
            }
        </div>
        <div class="${id}__disclaimer desktop-hide">
            **Indeholder <a target="_blank" href="/saadan-anmelder-betxpert-bookmakerne">reklamelinks</a> | 18+ | <a target="_blank" rel="nofollow" href="https://www.stopspillet.dk/">stopspillet.dk</a> | r&v gælder | Selvudelukkelse: <a target="_blank" rel="nofollow" href="https://www.rofus.nu/">Rofus.nu</a>
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
            **Indeholder <a target="_blank" href="/saadan-anmelder-betxpert-bookmakerne">reklamelinks</a> | 18+ | <a target="_blank" rel="nofollow" href="https://www.stopspillet.dk/">stopspillet.dk</a> | r&v gælder | Selvudelukkelse: <a target="_blank" rel="nofollow" href="https://www.rofus.nu/">Rofus.nu</a> 
        </div>
        <a href="/bookmakere/bonus" class="${id}__learnmore desktop-hide">Alle Bonusser</a>
        ${
          orientation === 'column'
            ? ''
            : `<a href="/bookmakere/bonus" class="${id}__learnmore desktop-show">Alle Bonusser</a>`
        }
    </div>
    `;

  return htmlStr.trim();
};

export default bookmakerCards;
