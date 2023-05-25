import bonusCard from './bonusCard';

const bonusCards = (id, carouselData) => {
  const htmlStr = `   
    <div class="${id}__bonuscards card-block">
        <div class="${id}__toprow">
            <h1>Här får du allt om betting – speltips, guider och bra bonusar!</h1>
        </div>
        <div class="${id}__bonuscard-swiper swiper-hero" style="display:none;">
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
//import bonusCard from './bonusCard';

//const bonusCards = (id, carouselData) => {
//const htmlStr = `
//<div class="${id}__bonuscards card-block">
//<div class="${id}__toprow">
//<h1>En verden af spilforslag, odds og betting</h1>
//<a href="/bookmakere/bonus" class="${id}__learnmore">Se Alle Bonus</a>
//</div>
//<div class="${id}__bonuscard-swiper swiper-hero ${id}__hide">
//<div class="${id}__bonuscards-swrapper swiper-wrapper">
//${carouselData.map((carousel) => bonusCard(id, carousel)).join('\n')}
//</div>
//<div class="swiper-pagination"></div>
//</div>
//</div>
//`;

//return htmlStr.trim();
//};

//export default bonusCards;
