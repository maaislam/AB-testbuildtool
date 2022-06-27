import { checkLarge } from "./checkLarge";
import { checkSmall } from "./checkSmall";

export const makeSlider = () => {
    

    //   var x = JSON.parse(localStorage.getItem("PLAYED_GAMES_IDS_LS_KEY"));
    //     console.log("from local",x);
       
         var large = document.getElementsByClassName('large-game large-game--user');
        var small = document.getElementsByClassName('game game--user');

        // const allGames = {...small,...large};
    //   const allGames = document.getElementsByClassName('game game--user');
        // console.log("all games",allGames);
    //    var array = [];
        var arr = checkSmall(small);
        // console.log(arr);
        var finalArr = checkLarge(large,arr);
        // console.log(finalArr);
}