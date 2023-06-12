import bookmakerCard from './bookmakerCard';

const bookmakerCards = (id, carouselData) => {
  const htmlStr = `   
    <div class="${id}__bookmakercards container">
        <div class="${id}__bookmakercards-swiper swiper-bookmaker">
            <div class="${id}__bookmakercards-swrapper swiper-wrapper">
                ${carouselData.map((carousel) => bookmakerCard(id, carousel)).join('\n')}
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
    `;

  return htmlStr.trim();
};

export default bookmakerCards;
