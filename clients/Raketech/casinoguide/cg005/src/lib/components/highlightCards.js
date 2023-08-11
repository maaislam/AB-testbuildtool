import highlightCard from './highlightCard';

const highlightCards = (id, carouselData = '') => {
  const htmlStr = `
    <div class="${id}__highlightcards">
      <div class="${id}__experiment-wrapper">  
        <div class="${id}__highlightcards-swiper swiper-highlight">
            <div class="${id}__highlightcards-swrapper swiper-wrapper">
              ${
                carouselData &&
                carouselData.map((carousel) => highlightCard(id, carousel)).join('\n')
              }
            </div>
            <div class="swiper-pagination"></div>
          </div>
      </div>
    </div> 
    `;

  return htmlStr.trim();
};

export default highlightCards;
