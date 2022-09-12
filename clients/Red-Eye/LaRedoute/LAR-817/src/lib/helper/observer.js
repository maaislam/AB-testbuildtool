import { pollerLite } from '../../../../../../../globalUtil/util';

const changeDom = (indicator, variationBtn, id) => {
  if (indicator) {
    variationBtn.classList.contains(`${id}__hide`) && variationBtn.classList.remove(`${id}__hide`);
    variationBtn.classList.add(`${id}__show`);
  } else {
    variationBtn.classList.contains(`${id}__show`) && variationBtn.classList.remove(`${id}__show`);
    variationBtn.classList.add(`${id}__hide`);
  }
};

const observer = (id, controlBtn, variationBtn, callback) => {
  const obsere = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === false) {
        callback(true, variationBtn, id);
      } else {
        callback(false, variationBtn, id);
      }
    },
    {
      threshold: 1,
    }
  );
  controlBtn && obsere.observe(controlBtn);
};

const globalObserver = (ID, variationBtnStr, controlBtn, changeDom, selector) => {
  pollerLite([`.${selector}`], () => {
    variationBtnStr = document.querySelector(`.${selector}`);
    observer(ID, controlBtn, variationBtnStr, changeDom);
  });
};

export { globalObserver, changeDom };

// (function pollForATB() {
//   if (document.readyState === 'complete' && window.jQuery !== undefined) {
//       try {
//           setTimeout(function () {

//                   var $ = window.jQuery;
//                   if (window.location.pathname.indexOf('/ppdp/') !== -1) {
//                       var addedtoBasket = function() {
//                           if ($('#layerAtb').is(':visible')) {
//                               if($(`.LAR-817__btnAtbWrapper.LAR-817__hide`).length > 0){
//                                   console.log("add to bag control");
//                               }else{
//                                   console.log("add to bag variation");
//                               }

//                               //ABTastyClickTracking('Custom: Add to bag', null, 867224);
//                           }
//                       };
//                       var cont2 = document.querySelector('#basketIcon');
//                       new MutationObserver(addedtoBasket).observe(cont2, {childList: true, subtree: true});
//                   }

//           }, 50);
//       } catch (err) {
//           console.log('TRY ERROR: ' + err);
//       }
//   } else {
//       setTimeout(pollForATB, 25);
//   }
// })();
