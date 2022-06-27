export const GetSkeleton = () => {
    
        const refNode = document.querySelector('.section-list .container');
        var sliderHTML = `<div class="section-games"> 
                            <div class="container">
                                <div class="title-with-link">
                                   <div class="title-with-link__wrap">
                                      <div class="title-with-link__title">
                                        Continue Playing
                                      </div>
                                    </div>
                                   </div>
                                </div>
                                <div class="section-games__wrap">
                                  <div class="container">
                                    <div class="section-games__list  section-games__list--default">
                                      <div class="games-slider__horiz-scroll">
                                      </div>
                                    </div>
                                  </div>
                                </div>
                             </div>`;


        refNode.insertAdjacentHTML("afterend", sliderHTML);
    

}
