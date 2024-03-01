/*!=============================================================
    WTO-HS-024
    POST-RENDER script, Webtrends 2019
=============================================================*/
WTOTestWTO_HS_024.exec(function (Test, Config) {
    return {
      /* Configuration parameters
          -------------------------------------------------------------*/
      Config: {
        testName: 'WTO-HS-024',
        developer: 'Development',
        cssHide: '',
        useBeacon: false,
        cssPrefixClass: 'wt-WTO_HS_024',
        // Required for pinning of levels via _wt.exp=FxLx
        factors: { F1: { NAME: 'Factor 1', L1: 'F1L1' } }
      },
      device: WT.helpers.device,
  
      /*/////////////////////////////////////////////////////////////
          |   ENTRY POINT TO THE TEST
          -------------------------------------------------------------*/
  
      //call run function to start the test
  
      Run: function () {
        Test.poll({
          msg: 'body polling',
          // Polling function
          when: function () {
            return document.querySelectorAll('footer').length;
          },
          // Polling callback
          then: function () {
            Test.start('Rendering', Test.Render);
            Test.start('Tracking', Test.Tracking);
  
            // SHOW PAGE
            Test.showHidePage(Config.showPage);
          }
        });
      },
  
      /*/////////////////////////////////////////////////////////////
          |   Executes visual page transformations
          -------------------------------------------------------------*/
      Render: function () {
        // GLOBAL RENDER CSS
        var css = new Test.CSS({ id: 'wto-css-' + Config.testAlias });
        var console = Test.debug;
  
        /*  FACTOR 1
              =============================================================*/
        /*-------------------------------------------------------------
                  LEVEL 1
              -------------------------------------------------------------*/
        Test.render('F1L1', function (level) {
          var css = level.css;
          Test.debug.log('level:');
          Test.debug.dir(level);
  
          /// variation code started//////////////////
  
          const cDD = new Date('Dec 11, 2024 23:59:59 GMT+00:00').getTime();
          const now = new Date().getTime();
          let td = cDD - now;
          console.log('🚀 ~ td:', td);
  
          let pt = window.location.pathname;
  
          var cT = {
            init: function () {
              this.mainCss();
              this.mainJs();
            },
            mainCss: function () {
              var styles = document.createElement('style');
              styles.setAttribute('type', 'text/css');
              document.head.appendChild(styles).textContent =
                '' +
                '.var-283-wrapper div#coundown-timer{display:flex;align-items:center;justify-content:space-between;background-image:linear-gradient(to left, #0e96c3, #00749b);padding:15px 11px 15px 15px;border-radius:8px;width:fit-content}.var-283-wrapper div#coundown-timer .header{color:white;font-size:16px;font-weight:600;margin-right:15px;letter-spacing:0.5px}.var-283-wrapper div#coundown-timer .c-white{color:white;margin-top:4px;text-align:center;padding-right:14px}.var-283-wrapper div#coundown-timer .minutes-wrapper .c-white{padding-right:4px}.var-283-wrapper div#coundown-timer .condown-timer-inner{display:flex;align-items:center}.var-283-wrapper div#coundown-timer #coundown-day,.var-283-wrapper div#coundown-timer #coundown-hour,.var-283-wrapper div#coundown-timer #coundown-min{margin:0 4px 0 0;display:flex;align-items:center}.var-283-wrapper div#coundown-timer #coundown-day span#f-digit,.var-283-wrapper div#coundown-timer #coundown-day span#s-digit,.var-283-wrapper div#coundown-timer #coundown-hour span#f-digit,.var-283-wrapper div#coundown-timer #coundown-hour span#s-digit,.var-283-wrapper div#coundown-timer #coundown-min span#f-digit,.var-283-wrapper div#coundown-timer #coundown-min span#s-digit{margin:0 4px 0 0;font-size:24px;padding:4px 8px;background-color:white;border-radius:4px;font-weight:bold;line-height:32px;width:30px}.var-283-wrapper div#coundown-timer #coundown-day span.colon,.var-283-wrapper div#coundown-timer #coundown-hour span.colon,.var-283-wrapper div#coundown-timer #coundown-min span.colon{font-size:36px;color:white;line-height:40px;font-weight:bold}.var-283-wrapper div#coundown-timer #coundown-min{margin:0}.var-283-wrapper #heroBannerContent #heroBannerCopy{padding-bottom:65px;padding-right:0;z-index:99}.var-283-wrapper #heroBannerContent #heroBannerCopy .col-xs-11.col-sm-12{display:none}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper h1{font-size:42px !important;line-height:normal !important;margin-bottom:24px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul{list-style-type:none;padding:0;margin-top:16px;font-weight:600;margin-right:10px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper .banner__link-wrapper{margin-top:32px;margin-bottom:20px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper .banner__link-wrapper a{white-space:nowrap}.var-283-wrapper .banner-enhanced-wrapper.v2 .ticks{margin-top:10px;padding:0;font-weight:600}.var-283-wrapper .banner-enhanced-wrapper.v2 div#coundown-timer .header{font-size:16px}.var-283-wrapper .banner-enhanced-wrapper-v3{padding:0 60px;margin-top:45px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer{background:#3a3a3a;justify-content:space-between;width:100%;padding:16px 22.5px;max-width:844px;margin:0 auto}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .h3,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .header{color:#D6CDAC;text-align:left;margin-bottom:8px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .h3{margin:0;max-width:none;margin-right:12px;color:#D6CDAC;font-size:16px;font-style:normal;font-weight:600;line-height:normal}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .banner__link-wrapper{margin:0;margin-top:10px;margin-left:12px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .banner__link-wrapper a{color:white;padding:12px 24px;border-radius:50px;white-space:nowrap;background-color:#e3453d;font-size:16px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-day span#f-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-day span#s-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-hour span#f-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-hour span#s-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-min span#f-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-min span#s-digit,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-day span.colon,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-hour span.colon,.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer #coundown-min span.colon{font-size:28px;line-height:32px}.var-283-wrapper .banner-enhanced-wrapper-v3 ul.ticks{margin-top:20px;font-size:14px;padding:0;text-align:left;max-width:844px;margin:10px auto}.var-283-wrapper .gray-svg{position:absolute;bottom:0px;width:100%;left:0}.var-283-wrapper .hero-banner__content{z-index:999}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left{padding:10px 30px 0;position:relative}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left::after{-webkit-mask:none;border-bottom-left-radius:15px;border-bottom-right-radius:15px;transform:scale(1)}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left .limited-offer-top{width:100.5%;position:absolute;height:35px;background-image:linear-gradient(to left, #0e96c3, #00749b);left:0;border-top-left-radius:15px;border-top-right-radius:15px;display:flex;align-items:center;justify-content:center;top:-35px;font-size:18px;font-weight:600;letter-spacing:0.5px}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left .small.padding-bottom-20{padding-bottom:0 !important}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble-right.bubble--blue{display:none}.var-283-wrapper #heroBannerCopy #heroBannerCta{padding-left:0}@media screen and (max-width: 1200px){.var-283-wrapper .gray-svg{bottom:-15px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper h1{font-size:40px !important;line-height:44px !important}.var-283-wrapper .banner-enhanced-wrapper div#coundown-timer{flex-direction:column;align-items:flex-start}.var-283-wrapper .banner-enhanced-wrapper div#coundown-timer .header{font-weight:400;font-size:16px;margin-bottom:4px}}@media screen and (max-width: 991px){.var-283-wrapper .gray-svg{bottom:-25px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer{flex-direction:column;align-items:center;width:100%;padding:16px 22.5px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .h3{text-align:center;margin-bottom:10px;color:var(#EEE6C0, #EEE6C0);text-align:center;font-size:18px;font-style:normal;font-weight:600;line-height:normal}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .header{font-weight:400;font-size:16px;text-align:center;margin-bottom:8px;color:var(#EEE6C0, #EEE6C0);font-size:16px;font-style:normal;font-weight:600;line-height:normal}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .c-white{margin-bottom:12px}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .banner__link-wrapper{margin:10px 20px;min-width:100%}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .banner__link-wrapper a{width:70%;display:inline-block;padding:8px 24px}}@media screen and (max-width: 767px){.var-283-wrapper #heroBannerContent{padding:0 24px 0px 24px}.var-283-wrapper .gray-svg{bottom:-50px}.var-283-wrapper #heroBannerCopy{max-width:60%;padding-top:0 !important}.var-283-wrapper #heroBannerCopy h1{margin-top:0 !important}.var-283-wrapper #heroBannerContent #heroBannerHouse{top:25% !important;right:-10px !important;width:210px !important}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{height:180px;width:180px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper h1{font-size:32px !important;line-height:40px !important;width:calc(100vw - 60px)}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper .banner__link-wrapper{margin-top:0px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper .banner__link-wrapper a.btn-solid{padding:0.5em 0.8em !important;font-size:15px}.var-283-wrapper #heroBannerContent #heroBannerCopy{padding-bottom:0px}.var-283-wrapper #content-block #heroBanner{padding-bottom:20px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul li{font-size:16px}.var-283-wrapper div#coundown-timer{padding:8px}.var-283-wrapper div#coundown-timer #coundown-day span#f-digit,.var-283-wrapper div#coundown-timer #coundown-day span#s-digit,.var-283-wrapper div#coundown-timer #coundown-hour span#f-digit,.var-283-wrapper div#coundown-timer #coundown-hour span#s-digit,.var-283-wrapper div#coundown-timer #coundown-min span#f-digit,.var-283-wrapper div#coundown-timer #coundown-min span#s-digit{font-size:28px;line-height:32px;width:30px}.var-283-wrapper .banner-enhanced-wrapper.v2 div#coundown-timer{align-items:center;width:auto}.var-283-wrapper .banner-enhanced-wrapper-v3{padding:0}.var-283-wrapper .banner-enhanced-wrapper-v3 div#coundown-timer .banner__link-wrapper{margin:10px 20px}.var-283-wrapper #content-block .page--product .hero-banner__side .bubble.bubble--left{margin-top:60px;padding-bottom:0em}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left .limited-offer-top{width:100.5%}.var-283-wrapper #heroBannerCta{padding-left:0}.var-283-wrapper #heroBannerCta a{white-space:nowrap}}@media screen and (min-width: 480px) and (max-width: 767.9px){.var-283-wrapper .gray-svg{bottom:-40px}}@media screen and (min-width: 575px) and (max-width: 767.9px){.var-283-wrapper .gray-svg{bottom:-34px}.var-283-wrapper #heroBannerContent{padding-bottom:50px}.var-283-wrapper #heroBannerContent #heroBannerHouse{top:40px !important;width:290px !important}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{height:220px;width:220px;margin-top:20px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul{margin-top:30px;max-width:260px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul li{font-size:18px}.var-283-wrapper #helpToday{padding-top:0.5em}}@media screen and (min-width: 640px) and (max-width: 767.9px){.var-283-wrapper .banner-enhanced-wrapper div#coundown-timer{align-items:center;flex-direction:row;padding:12px 8px}}@media screen and (min-width: 500px) and (max-width: 767.9px){.var-283-wrapper #heroBannerContent #heroBannerHouse{width:250px !important}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{height:220px;width:220px}}@media screen and (max-width: 420px){.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-day span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-day span#s-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-hour span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-hour span#s-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-min span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-min span#s-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-day span.colon,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-hour span.colon,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-min span.colon{font-size:20px;line-height:24px}.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-day span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-day span#s-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-hour span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-hour span#s-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-min span#f-digit,.var-283-wrapper .banner-enhanced-wrapper:not(.v2) div#coundown-timer #coundown-min span#s-digit{padding:2px 6px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul{font-size:12px}.var-283-wrapper .banner-enhanced-wrapper div#coundown-timer .header,.var-283-wrapper div#coundown-timer .c-white{font-size:16px;line-height:18px;text-align:center;width:100%;margin-bottom:10px}.var-283-wrapper #heroBannerCta a{white-space:nowrap;padding:0.5em 1em !important}}@media screen and (max-width: 480px){.var-283-wrapper #heroBannerCopy #heroBannerCta{padding-bottom:12px !important}}@media screen and (max-width: 375px){.var-283-wrapper #heroBannerContent #heroBannerHouse{width:180px !important;top:20% !important}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{height:140px;width:140px !important;margin-top:25px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper ul li{font-size:14px}.var-283-wrapper #heroBannerContent #heroBannerCopy .banner-enhanced-wrapper h1{font-size:24px !important;line-height:30px !important}}@media screen and (min-width: 768px){.var-283-wrapper .banner-enhanced-wrapper.v2 .ticks{text-align:left;max-width:90%}}@media screen and (min-width: 429px) and (max-width: 440px){.var-283-wrapper #heroBannerContent{padding:24px 24px 0 24px}}@media screen and (min-width: 992px){.var-283-wrapper #heroBannerContent #heroBannerHouse{top:-14px;right:-2px}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{object-position:0px -15px;top:4px}.var-283-wrapper .page--product .hero-banner__side .bubble.bubble--left{margin-top:48px}}@media screen and (max-width: 350px){.var-283-wrapper #heroBannerContent #heroBannerHouse{right:-20px !important}.var-283-wrapper #heroBannerContent #heroBannerHouse img.heroMask{height:125px;width:125px !important}}@media (min-width: 576px){.var-283-wrapper #heroBannerCopy{padding-left:35px}}@media (min-width: 1200px){.var-283-wrapper #heroBannerContent #heroBannerCopy{left:20px}}' +
                '';
            },
            mainJs: function () {
              let $ = window.jQuery;
              let coundownTimerHtml = `
          <div class="day-wrapper">
              <div id="coundown-day">
                  <span id="f-digit"/>
                  <span id="s-digit"/>
                  <span class="colon">:</span>
              </div>
              <div class="c-white">
              Hours
              </div>
          </div>
          <div class="hour-wrapper">
              <div id="coundown-hour">
                  <span id="f-digit"/>
                  <span id="s-digit"/>
                  <span class="colon">:</span>
              </div>
              <div class="c-white">
              Minutes
              </div>
          </div>
          <div class="minutes-wrapper">
              <div id="coundown-min">
                  <span id="f-digit"/>
                  <span id="s-digit"/>
              </div>
              <div class="c-white">
                  Seconds
              </div>
          </div>`;
  
              if (pt === '/uk') {
                let html = `<div class="banner-enhanced-wrapper">
                  <h1>
                  Expert plumbing cover
                  for just 50p a month*
                  </h1>
                  <div id="coundown-timer">
                      <div class="header">
                          Limited offer ends in
                      </div>
                      <div class="condown-timer-inner">
                          ${coundownTimerHtml}
                      </div>
                      </div>
  
              </div>`;
                $('#heroBannerContent #heroBannerCopy').prepend(html);
                $('#heroBannerContent #heroBannerCopy #heroBannerCta a').text('View offer');
              } else if (
                pt === '/uk/insurance/plumbing-drainage-cover' ||
                pt === '/uk/insurance/landlords-plumbing-drainage'
              ) {
                let html = `<div class="banner-enhanced-wrapper v2">
                  <div id="coundown-timer">
                      <div class="header">
                          Limited offer ends in
                      </div>
                      <div class="condown-timer-inner">
                          ${coundownTimerHtml}
                      </div>
                  </div>
              </div>`;
  
                let limitedOffer = `<div class="limited-offer-top">
                  Limited offer
              </div>`;
                $('.container .page--product .hero-banner__content').append(html);
                $('.page--product .hero-banner__side .bubble.bubble--left').prepend(limitedOffer);
              } else if (
                pt === '/uk/insurance-cover/plumbing-and-drainage-comparison' ||
                pt === '/uk/insurance-cover/landlords-comparison'
              ) {
                let redirectUrl =
                  pt === '/uk/insurance-cover/plumbing-and-drainage-comparison'
                    ? '/uk/insurance/plumbing-drainage-cover?aboutyou=true'
                    : '/uk/insurance/landlords-plumbing-drainage';
                let html = `<div class="banner-enhanced-wrapper-v3">
                      <div id="coundown-timer">
                          <div class="h3">
                              Expert plumbing and drainage cover from 50p a month*
                          </div>
                          <div>
                              <div class="header">
                                  Limited offer ends in
                              </div>
                              <div class="condown-timer-inner">
                                  ${coundownTimerHtml}
                              </div>
                          </div>
                          <div class="banner__link-wrapper">
                              <a href=${redirectUrl} class="btn-solid">
                                  View offer
                              </a>
                          </div>
                      </div>
                      <ul class="ticks small">
                      * Offer ends 11th December 2023. New customer offer. Homeowners only. T&Cs apply.
                      </ul>
                  </div>`;
  
                $('body').after(html);
              }
  
              function updateTimer() {
                const cDD = new Date('Dec 11, 2024 23:59:59 GMT+00:00').getTime();
                const now = new Date().getTime();
                let td = cDD - now;
  
                var hours = Math.floor((td % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((td % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((td % (1000 * 60)) / 1000);
  
                if (td < 0) {
                  clearInterval(x);
                } else {
                  document.querySelector('#coundown-day #f-digit').innerHTML = parseInt(hours / 10);
                  document.querySelector('#coundown-day #s-digit').innerHTML = hours % 10;
                  document.querySelector('#coundown-hour #f-digit').innerHTML = parseInt(
                    minutes / 10
                  );
                  document.querySelector('#coundown-hour #s-digit').innerHTML = minutes % 10;
                  document.querySelector('#coundown-min #f-digit').innerHTML = parseInt(seconds / 10);
                  document.querySelector('#coundown-min #s-digit').innerHTML = seconds % 10;
                }
              }
              updateTimer();
              var x = setInterval(updateTimer, 1000);
            }
          };
  
          if (td > 0) {
            console.log('sfuoghsdohgo')(function pollOnload() {
              if (
                (document.querySelector('#heroBannerContent #heroBannerCopy') ||
                  document.querySelector('.container .page--product .hero-banner__content') ||
                  document.querySelector('.row.category-items > .h3')) &&
                window.jQuery !== undefined
              ) {
                try {
                  if (
                    pt === '/' ||
                    pt === '/uk/insurance/plumbing-drainage-cover' ||
                    pt === '/uk/insurance-cover/plumbing-and-drainage-comparison' ||
                    pt === '/uk/insurance-cover/landlords-comparison' ||
                    pt === '/uk/insurance/landlords-plumbing-drainage'
                  ) {
                    document.body.classList.add('var-283-wrapper');
                    cT.init();
                  }
                } catch (error) {}
              } else {
                setTimeout(pollOnload, 25);
              }
            })();
          }
  
          ///variation code finished////////////////////
          // Transformations for this level to go here.
        });
  
        Test.status.set('rendered');
      },
  
      /*/////////////////////////////////////////////////////////////
          |   Creates conversion points
          -------------------------------------------------------------*/
      Tracking: function () {
        var console = Test.debug;
  
        /*=========================================================================
                  PAGEVIEW
              =========================================================================*/
        /* Test.event.bindAfter('pageview', function()
              {
                   if(location.pathname === '/uk/insurance/plumbing-drainage-cover'){
                       Test.conversion('PlumbingAndDrainagePlusPageView');
                   }
              });
              */
  
        /*=========================================================================
                  CLICK-TRACKING
              =========================================================================*/
  
        var delegate = (function () {
          if (!Element.prototype.matches) {
            Element.prototype.matches =
              Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
          }
  
          return function (el, evt, sel, handler) {
            el.addEventListener(evt, function (event) {
              var t = event.target;
              while (t && t !== this) {
                if (t.matches(sel)) {
                  handler.call(t, event);
                }
                t = t.parentNode;
              }
            });
          };
        })();
  
        /*
                  Click tracking can go here, e.g.
                
                  delegate(document, 'click', '#myElm', function(){
                      Test.conversion('Click_myelm');
                  });
              */
      }
    };
  });
  