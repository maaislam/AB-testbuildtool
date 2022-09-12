//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  //setup(); //use if needed

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  setUniqueClass();
  // -----------------------------
  // Write experiment code here

  var modal = `
  <div class="modal-window hidden">
    <div class="modal">
      <div class="modal-img">
        <p class="img-courtesy">Image courtesy of Destination NSW</p>
        <img src="https://sandbox.echologyx.com/wp-content/uploads/2022/08/143400_Man_Credit_Tourism-and-Events-Queensland-7.png" />
      </div>
      <div class="modal-info">
        <span class="modal-cross-icon">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="16" height="16" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="#0f172a" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>
        </svg>
        </span>
        <h1 class="modal-title">Top rated on TripAdvisor</h1>
        <p class="modal-sub-title">★★★★★<br/>
        22,171 Guests on Tripadvisor rate Oaks as Excellent or Very Good* </p>
        <p class="modal-sub-title">*Oaks Hotels in NSW, QLD, VIC 
        <span>as of 27 May 2022, 12:00PM AEST</span> </p>
        <div class="left-align_btn"><button class="find-hotel-btn" 
        onclick="window.location.href='https://be.synxis.com/?_ga=2.164949885.332240232.1653260296-1242823349.1649397295&_gac=1.53416410.1650521645.Cj0KCQjw3v6SBhCsARIsACyrRAkVnNAucQsHXNRTQ1KaH-5uFHDn-GUGnQod_30PcGEOkchpuV3nW8kaAgAiEALw_wcB&adult=2&arrive=2022-07-27&brand=OAKS&chain=18336&child=0&config=OAKS&configcode=OAKS&currency=AUD&depart=2022-07-29&dest=AUS&level=chain&locale=en-US&rooms=1&start=availresults&theme=OAKS&themecode=OAKS'">Find A Hotel</button></div>
      </div>
    </div>
  </div>`;

  if (window.location.pathname === '/en' || window.location.pathname === '/en/') {

    document.querySelector('.main-banner-image').classList.add(`hidden`);
    if (window.screen.width < 1024) {
      document.querySelector('.main-banner').classList.add(`banner-height`);
    }
    document.querySelector('.main-banner .wrapper.clearfix').classList.add("hidden");
    document.querySelector(`.main-banner .banner-link`).classList.add("hidden");

    var bannerImage = `
    <div class="banner-image">
      <p class="img-courtesy">Image courtesy of Destination NSW, *Oaks Hotels in NSW, QLD, VIC
      as of 27 May 2022, 12:00PM AEST</p>
      <div class="banner-text-section">
        <p class="banner-header-title">Top rated <span><img src="https://sandbox.echologyx.com/wp-content/uploads/2022/07/on.png"/></span> TripAdvisor</p>
        <p class="banner-header-sub-title">Rated ★★★★+ by 22,171 guests*</p>
        <button class="find-hotel-btn-banner" 
        onclick="window.location.href='https://be.synxis.com/?_ga=2.164949885.332240232.1653260296-1242823349.1649397295&_gac=1.53416410.1650521645.Cj0KCQjw3v6SBhCsARIsACyrRAkVnNAucQsHXNRTQ1KaH-5uFHDn-GUGnQod_30PcGEOkchpuV3nW8kaAgAiEALw_wcB&adult=2&arrive=2022-07-27&brand=OAKS&chain=18336&child=0&config=OAKS&configcode=OAKS&currency=AUD&depart=2022-07-29&dest=AUS&level=chain&locale=en-US&rooms=1&start=availresults&theme=OAKS&themecode=OAKS'">Find A Hotel</button>
      </div>
    </div>
    `;
    document.querySelector('.main-banner').insertAdjacentHTML('afterbegin', bannerImage);
  } else if(window.location.pathname === '/'){
    console.log("no-test")
  }
   else {

    // transfers sessionStorage from one tab to another
    var sessionStorage_transfer = function (event) {
      if (!event) {
          event = window.event;
      } // ie suq
      if (!event.newValue) return; // do nothing if no value to work with
      if (event.key == "getSessionStorage") {
          // another tab asked for the sessionStorage -> send it
          localStorage.setItem(
              "shareSessionStorage",
              sessionStorage.getItem(`modalOpen`)
          );
          // the other tab should now have it, so we're done with it.
          localStorage.removeItem("shareSessionStorage"); // <- could do short timeout as well.
      } else if (event.key == "shareSessionStorage") {
          // another tab sent data <- get it
          var data = JSON.parse(event.newValue);
          if (data != "" && data != null) {
          }
          sessionStorage.setItem(`modalOpen`, data);
      }
      };    // listen for changes to localStorage
      if (window.addEventListener) {
          window.addEventListener("storage", sessionStorage_transfer, false);
      } else {
          window.attachEvent("onstorage", sessionStorage_transfer);
      }    // Ask other tabs for session storage (this is ONLY to trigger event)
      if (!sessionStorage.getItem(`modalOpen`)) {
          localStorage.setItem("getSessionStorage", `${ID}`);
          localStorage.removeItem("getSessionStorage", `${ID}`);
      }

    var modalOpenCheck = sessionStorage.getItem("modalOpen");
    if(modalOpenCheck === null){
      sessionStorage.setItem('modalOpen', true);
    }else{
      sessionStorage.setItem('modalOpen', false);
    }

    document.querySelector('.header-navbar').insertAdjacentHTML('beforeend', modal);

    window.addEventListener("load", () => {
    setTimeout(() => {
      if (sessionStorage.getItem("modalOpen") === 'true') {
        document.querySelector('.modal-window').classList.remove(`hidden`);

        document.querySelector(`.modal-cross-icon svg`).addEventListener('click', () => {
          document.querySelector(`.modal-window`).classList.add(`visibility`);
          sessionStorage.setItem('modalOpen', false);
        });

        document.addEventListener(
          "click",
          function (event) {
            // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
            if (
              event.target.matches(".modal-cross-icon") ||
              !event.target.closest(".modal")
            ) {
              closeModal();
            }
          },
          false
        );

        function closeModal() {
          document.querySelector(".modal-window").style.display = "none";
          sessionStorage.setItem('modalOpen', false);
        }
      }
    }, 5000);
    });
  }
  // -----------------------------
  // ...
};
