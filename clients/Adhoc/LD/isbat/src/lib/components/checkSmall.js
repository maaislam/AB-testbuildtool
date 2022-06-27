export const checkSmall = (allGames) => {
    //  console.log("checked",allGames);
    var x = JSON.parse(localStorage.getItem("PLAYED_GAMES_IDS_LS_KEY"));
    // console.log("from local",x);
    var array = [];
    for(var key in allGames){
        
        if(allGames.hasOwnProperty(key)){
           var name= allGames[key].outerText.split('\n')[1].replace(/\s/g, '');
           var Url = allGames[key].childNodes[1].querySelector('.game__title .link-no-styles').href;
              console.log("url",Url);
           var smallerName = name.toLowerCase();
          
           for(let i =0;i<x.length;i++){
               // console.log(x[i]);
               var companyName = x[i].substr(0, x[i].indexOf('/'));
               var filteredName = x[i].substring(x[i].indexOf("/")+1);
               var smallerFilteredName = filteredName.toLowerCase();
               
               if(smallerName.includes(smallerFilteredName) || smallerFilteredName.includes(smallerName)){
                   if(array.includes(filteredName)){
                       console.log("included");
                       continue;
                   }
                   else{
                       array.push(filteredName);
                   var imageUrl = `https://cdn2.softswiss.net/luckydreams/i/s4/${companyName}/${filteredName}.webp`;
                   var singleSlider = `
                   <a variant="primary"
                   href=${Url}>
                   <div class="game-slider__item">
                                           <div class="game game--user">
                                               <div class="game__block-img">
                       <span></span>
                       
                       <img class="game__img image" alt="Dark Wolf game tile" src=${imageUrl}><img
                               class="game__img image image--hidden" alt="Dark Wolf game tile"
                               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC+CAQAAAAhfX0WAAABCElEQVR42u3QMQEAAAwCoNm/9BJ4+0AEcsxEgXz5yJePfPnIl498+ciXj3z5yJePfPnIl498+fKRLx/58pEvH/nykS8f+fKRLx/58pEvH/ny5SNfPvLlI18+8uUjXz7y5SNfPvLlI18+8uXLR7585MtHvnzky0e+fOTLR7585MtHvnzky5evQL585MtHvnzky0e+fOTLR7585MtHvnzky0e+fPnIl498+ciXj3z5yJePfPnIl498+ciXj3z58pEvH/nykS8f+fKRLx/58pEvH/nykS8f+fLlI18+8uUjXz7y5SNfPvLlI18+8uUjXz7y5ctXIF8+8uUjXz7y5SNfPvLlI18+8uXTPZ3ZAL+v38d+AAAAAElFTkSuQmCC">
                           <div class="game__action">
                               <div class="game__buttons">
                                   <div class="game__play"><button
                                           class="btn btn--primary game__button game__button--play button--play">Play
                                           Now</button></div>
                               </div>
                           </div>
                           <div class="game__label-list"></div><button
                               class="text-btn text-btn--primary game__favorite"><i
                                   class="font-icons font-icons--star-empty"></i></button>
                       </div>
                       <div class="game__info">
                           <div class="game__title"><a class="link-no-styles" variant="primary"
                                   href=${Url}>${filteredName}</a></div>
                       </div>
                   </div>
               </div>
            </a>
               `;
               
               const newRef = document.querySelector('.games-slider__horiz-scroll');
               newRef.insertAdjacentHTML("afterbegin",singleSlider);
                   }              
               }
               else{
                   continue;
               }
           }
       }
       
     }
     return array;
}