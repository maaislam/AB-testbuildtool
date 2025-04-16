import reviewCard from './reviewCard';

const reviewcards = (id, carouselData) => {
  const htmlStr = `   
    <div class="${id}__reviewcards">
        <div class="${id}__reviewcards-swiper swiper swiper-bookmaker">
            <div class="${id}__reviewcards-swrapper swiper-wrapper">
                ${carouselData.map((carousel) => reviewCard(id, carousel)).join('\n')}
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    `;

  return htmlStr.trim();
};

export default reviewcards;
