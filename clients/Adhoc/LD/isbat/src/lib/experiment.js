import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { GetSkeleton } from './components/getSkeleton';
import { makeSlider } from './components/makeSlider';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
 
  let lastUrl = location.href; 
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      onUrlChange();
    }
  }).observe(document, {subtree: true, childList: true});
   
   
  function onUrlChange() {
    if(location.href == 'https://www.luckydreams.com/en-CA/')
    GetSkeleton();
    makeSlider();
  }

  
  // const title = document.querySelector('.header-mobile');
  // if(document.querySelector('.user-info-player__nickname')){
    // GetSkeleton();
    // makeSlider();
  // }
 
  // const mutationObserver = new MutationObserver(function(mutations){
  //   mutations.forEach(function (mutation){
  //     if(mutation.addedNodes.length){
  //       console.log(mutation.addedNodes[0]);
  //     }
  //   })
  // });
  // mutationObserver.observe(title,{childList:true})
 
  const pollFor = () => { 
    if (document.querySelector('.header-mobile__user-data')) {
          GetSkeleton();
          makeSlider();
      console.log("gotit"); 
        try { 
} catch (error) { 
    console.log("Initialization error:", error); 
} 
    } else { 
        setTimeout(pollFor, 25); 
    } 
}; 
pollFor();
  
  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
