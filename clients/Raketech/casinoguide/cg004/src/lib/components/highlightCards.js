import highlightCard from './highlightCard';

const highlightCards = (id, carouselData) => {
  const htmlStr = `   
    <div class="${id}__highlightcards container">
        <div class="${id}__highlightcards-swiper swiper-highlight">
            <div class="${id}__highlightcards-swrapper swiper-wrapper">
                ${carouselData.map((carousel) => highlightCard(id, carousel)).join('\n')}
            </div>
            <div class="${id}__tc">
              
            </div>
        </div>
    </div>
    `;

  return htmlStr.trim();
};

export default highlightCards;
