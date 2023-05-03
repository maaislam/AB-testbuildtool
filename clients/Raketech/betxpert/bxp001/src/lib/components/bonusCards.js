import bonusCard from './bonusCard';

const bonusCards = (id, carouselData) => {
  const htmlStr = `   
    <div class="${id}__bonuscards card-block">
        <div class="${id}__toprow">
            <h1>Discover April’s offers and Bonus</h1>
            <a href="/ekspert/tips" class="${id}__learnmore">Læs mere</a>
        </div>
        <div class="${id}__bonuscard-swiper swiper-hero">
            <div class="${id}__bonuscards-swrapper swiper-wrapper">
                ${carouselData.map((carousel) => bonusCard(id, carousel)).join('\n')}
            </div>
            <div class="swiper-pagination"></div>     
        </div>
    </div>
    `;

  return htmlStr.trim();
};

export default bonusCards;
