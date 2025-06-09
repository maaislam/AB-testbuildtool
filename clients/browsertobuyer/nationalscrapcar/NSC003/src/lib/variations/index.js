if (typeof btbTestTracking !== 'undefined' && btbTestTracking.running) {
  btbTestTracking.running.scc058 = 'v1';
}

function waitForElem(
  waitFor,
  callback,
  minElements = 1,
  isVariable = false,
  timer = 60000,
  frequency = 25
) {
  const elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
  if (timer <= 0) return;
  (!isVariable && elements.length >= minElements) ||
  (isVariable && typeof window[waitFor] !== 'undefined')
    ? callback(elements)
    : setTimeout(
        () => waitForElem(waitFor, callback, minElements, isVariable, timer - frequency),
        frequency
      );
}

function createElem(el, className, id = '') {
  const elem = document.createElement(el);
  elem.className = className;
  if (id) {
    elem.id = id;
  }
  return elem;
}

const footerHTML = `<footer class="site-footer" id="colophon">
<div class="wrapper" id="wrapper-footer">
<div class="container">
<div class="row">
<div class="col-lg-4 col-xl-5 brand-details">
<a class="navbar-brand" rel="home" href="#" data-toggle="modal" data-target="#leaveqfmodal" title="Scrap Car Comparison"><img src='https://cdn-3.convertexperiments.com/uf/10021806/10025545/download.png' alt="Scrap Car Comparison"></a>
<p>Scrap Car Comparison Limited, a company registered in England and Wales under company number 08472194</p>
<strong>Get In Touch</strong>
<p>You can ring our team on <a href="tel:03333 44 99 50" class="call-click" id="footer-call-link">03333 44 99 50</a> - we're in the office Monday to Friday 8am to 8pm, Saturday from 8am until 5pm and Sunday 9am to 5pm.</p>
<strong>Registered Address</strong>
<address>
<span>1 Manor Court</span>, <span>6 Barnes Wallis Road</span>, <span itemprop="addressLocality">Fareham</span>, <span>Hampshire</span>, <span>PO15 5TH</span>, <span>United Kingdom</span>
</address>
<script type="application/ld+json">
            { 
                "@context" : "http://schema.org",
                "@type": "LocalBusiness",
                "name" : "Scrap Car Comparison",
                "description":"Scrap Car Comparison are a hassle free site that compares over 120 top rated buyers instantly. Enjoy a free collection and more money for your car today.",
                "address":
                {
                    "@type":"PostalAddress", 
                    "streetAddress":"1 Manor Court, Barnes Wallis Road",
                    "addressLocality":"Fareham",
                    "addressRegion":"Hampshire",
                    "postalCode":"PO15 5TH", 
                    "addressCountry":"United Country"
                },
                "hasmap" : " https://www.google.co.uk/maps/place/Scrap+Car+Comparison/@50.8687573,-1.2556789,17z",
                "geo":
                {
                    "@type":"GeoCoordinates", 
                    "latitude":50.8687573,  
                    "longitude":-1.2556789
                }, 
                "telephone" : "+44 (0)33 3344 9950",
                "image" : "https://www.scrapcarcomparison.co.uk//wp-content/themes/scc/img/scaled/scrap-car-comparison.svg", 
                "openingHoursSpecification":
                    [ 
                        {
                            "@type":"OpeningHoursSpecification",
                            "dayOfWeek":[
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens":"08:00",
                            "closes":"19:30"
                        },
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Saturday"
                            ],
                            "opens":"08:00", 
                            "closes":"18:00" 
                        },
                        {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Sunday"
                            ],
                            "opens":"09:00", 
                            "closes":"17:00" 
                        }
                    ]
                }
             
        </script>
<strong>Looking to buy scrap or salvage vehicles?</strong>
<p><a href="/about/scc-for-buyers/">Scrap Car Comparison for Buyers →</a></p>
<div class="social-row">
<a href="https://www.facebook.com/scrapcarcomparison/" target="_blank" rel="noopener noreferrer" aria-label="Scrap Car Comparison on Facebook">
<img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath id='Facebook' d='M29,16.07912A13,13,0,1,0,13.96875,28.94694V19.84447H10.668V16.07912h3.30078v-2.8698c0-3.26466,1.94081-5.06795,4.91029-5.06795a19.95289,19.95289,0,0,1,2.91.25441v3.20563H20.14979a1.88079,1.88079,0,0,0-2.11854,2.03423v2.44348h3.60547l-.57637,3.76535h-3.0291v9.10247A13.02132,13.02132,0,0,0,29,16.07912' fill='%23262626'/%3e%3c/svg%3e" width="16" height="16" alt="fb">
</a>
<a href="https://twitter.com/scrapcarcompare" target="_blank" rel="noopener noreferrer" aria-label="Scrap Car Comparison on Twitter">
<img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath id='twitter' d='M26.32865,10.20428c.01043.22891.01043.45778.01043.6867A15.18194,15.18194,0,0,1,2.99214,23.68808a10.26487,10.26487,0,0,0,1.26929.07283A10.70029,10.70029,0,0,0,10.8889,21.472a5.33486,5.33486,0,0,1-4.9836-3.70387,5.36636,5.36636,0,0,0,2.40336-.09364,5.34632,5.34632,0,0,1-4.2761-5.23331v-.07283a5.39627,5.39627,0,0,0,2.41374.6659A5.35659,5.35659,0,0,1,4.79205,5.90738,15.1498,15.1498,0,0,0,15.78924,11.484a5.89821,5.89821,0,0,1-.13524-1.21727,5.33642,5.33642,0,0,1,9.22847-3.65189,10.61188,10.61188,0,0,0,3.3918-1.2901A5.368,5.368,0,0,1,25.9229,8.27951a10.81127,10.81127,0,0,0,3.06924-.84274A10.868,10.868,0,0,1,26.32865,10.20428Z' fill='%23262626'/%3e%3c/svg%3e" width="16" height="16" alt="twitter">
</a>
<a href="https://www.youtube.com/user/scrapcarcomparison/" target="_blank" rel="noopener noreferrer" aria-label="Scrap Car Comparison on YouTube">
<img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath id='youtube' d='M28.24034,9.81073A3.21021,3.21021,0,0,0,25.9816,7.53732C23.9892,7,16,7,16,7s-7.98921,0-9.9816.53732A3.21021,3.21021,0,0,0,3.75967,9.81073,33.67486,33.67486,0,0,0,3.2258,16a33.6751,33.6751,0,0,0,.53387,6.18928,3.21018,3.21018,0,0,0,2.25874,2.27339C8.0108,25,16,25,16,25s7.98919,0,9.98159-.53734a3.21018,3.21018,0,0,0,2.25874-2.27339A33.67633,33.67633,0,0,0,28.77419,16,33.6761,33.6761,0,0,0,28.24034,9.81073ZM13.3871,19.7987V12.2013l6.67742,3.79882Z' fill='%23262626'/%3e%3c/svg%3e" width="16" height="16" alt="youtube">
</a>
<a href="https://uk.linkedin.com/company/scrap-car-comparison-ltd" target="_blank" rel="noopener noreferrer" aria-label="Scrap Car Comparison on LinkedIn">
<img src="data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cpath id='linkedin' d='M26.22362,4H5.77133A1.75177,1.75177,0,0,0,3.99985,5.72983V26.26822A1.75294,1.75294,0,0,0,5.77133,28H26.22362a1.75631,1.75631,0,0,0,1.77653-1.73177V5.72983A1.75514,1.75514,0,0,0,26.22362,4ZM11.118,24.45115H7.55811V12.99771H11.118ZM9.33887,11.432a2.06388,2.06388,0,1,1,2.06281-2.06453A2.06444,2.06444,0,0,1,9.33887,11.432Zm15.112,13.01918h-3.5573V18.88134c0-1.32878-.02441-3.03719-1.84977-3.03719-1.85237,0-2.136,1.447-2.136,2.941v5.666H13.35058V12.99771h3.41471v1.56487h.04738a3.73973,3.73973,0,0,1,3.368-1.84993c3.60464,0,4.27018,2.37223,4.27018,5.456Z' fill='%23262626'/%3e%3c/svg%3e" width="16" height="16" alt="linkedin">
</a>
</div>
</div>
<div class="col-lg-6 offset-lg-1 col-xl-6">
<div class="row">
<div class="col-md-6">
</div>
<div class="col-md-6">
</div>
<div class="col-md-6">
</div>
<div class="col-md-6">
</div>
</div>
</div>
</div>
<hr>
<div class="row footer-meta">
<div class="col-12 col-lg-7">
<div class="meta-links">
<a href="/privacy-policy/">Privacy Policy</a>
<a href="/terms-conditions/">Terms &amp; Conditions</a>
<a href="/cookie-policy/">Cookie Policy</a>
<a href="/site-map/">Site Map</a>
</div>
</div>
<div class="col-12 col-lg-5 meta-copyright text-lg-right">© 2008 - 2023 <a href="/">Scrap Car Comparison</a>. <span>All Rights Reserved.</span></div>
</div>
</div>
</div>
</footer>`;

waitForElem('body', ([form]) => {
  document.body.classList.add('SCC003');
  document.body.classList.add('scc058');

  const decoyLoadingContainer = createElem('div', 'decoy_loading_container');
  decoyLoadingContainer.innerHTML = `
            <div class='decoy_loader_parent'>
                <div class='decoy_loader_background'></div>
                <div class='decoy_loader_foreground'></div>
            </div>
            <div class='decoy_loader_screen'>
                <div class='screen screen1'>
                    <h1 class='screen_title'>We’re comparing prices from over 130 scrap yards...</h1>
                    <div class='screen_box'>
                        <p class='screen_review_title'>Great service, found me the best price and all went very smoothly.</p>
                        <p class='screen_review_author'>Paul K</p>
                    </div>
                </div>
                <div class='screen screen2'>
                    <h1 class='screen_title'>You could get 3x more for your car</h1>
                    <p class='screen_subtitle'>When you tell us about</p>
                    <div class='screen_box'>
                        <div>
                            <img src='https://cdn-3.convertexperiments.com/uf/10021806/10025545/mileage.png' width='50' atl='The Mileage'>
                            <span>The Mileage</span>
                        </div>
                        <div>
                            <img src='https://cdn-3.convertexperiments.com/uf/10021806/10025545/engine.png' width='55' atl='The Engine'>
                            <span>Engine and Gearbox Condition</span>
                        </div>
                    </div>
                    <p class='screen_bottom'>Just select GET HIGHER PRICE on the next step...</p>
                </div>
                <div class="screen screen2-new">
                    <h1 class="screen_title">Comparing scrap yards</h1>
                    <ul class="searching-animation">
                        <li class="loading">Searching 130+ scrap yards</li>
                        <li class="loading" style="display:none;">Searching scrap yards near <span class="postal-code"></span></li>
                        <li class="loading" style="display:none;">Searching garages and salvage experts</li>
                    </ul>
                </div>
            </div>
            <div class='decoy_loader_footer'>
                <div>
                    <span><strong>Rated Excellent</strong></span>
                    <span><strong>4.85/5</strong> from <strong>3469</strong> reviews</span>
                    <img src='https://cdn-3.convertexperiments.com/uf/10021806/10025545/reviews.png' class='reviewStars' width='130'>
                </div>
                <div>
                    <a rel="noreferrer" target="_blank" href="https://www.reviews.io/company-reviews/store/scrap-car-comparison-ltd" title="Read more reviews on REVIEWS.io"><img src="https://cdn-3.convertexperiments.com/uf/10021806/10025545/reviewsio-logo--white%201.png" alt="REVIEWS.io Logo" width="150" height="20"></a>
                </div>
            </div>
        `;

  document.querySelector('body').insertAdjacentElement('beforeend', decoyLoadingContainer);

  document.querySelector('body').insertAdjacentHTML('beforeend', footerHTML);

  const fakeButton = createElem('button', 'btn-green sccFakeButton', 'submit');
  fakeButton.textContent = 'Get My Offers';
  fakeButton.addEventListener('click', (e) => {
    e.preventDefault();

    const isValidated = $j('#form').parsley().validate();

    let telNumValue = document.querySelector('#tel_num').value;
    telNumValue = telNumValue[0] !== '0' ? `0${telNumValue}` : telNumValue;
    const telNumValidated = telNumValue.length >= 10;

    if (!telNumValidated && !document.querySelector('#tel_num.parsley-error')) {
      document
        .querySelector('#tel_num')
        .insertAdjacentHTML(
          'afterend',
          "<p class='scc003_error_text'>Provided number is way too short.</p>"
        );
      document.querySelector('#tel_num').classList.add('scc003_has-error');
      document.querySelector('.scc003_error_text').classList.add('scc003_has-error');

      document.querySelector('#tel_num').addEventListener('input', (e) => {
        if (e.target.value.length >= 10) {
          document.querySelector('#tel_num').classList.remove('scc003_has-error');
          document.querySelector('.scc003_error_text').classList.remove('scc003_has-error');
        } else {
          document.querySelector('#tel_num').classList.add('scc003_has-error');
          document.querySelector('.scc003_error_text').classList.add('scc003_has-error');
        }
      });
      return;
    }

    function handleUpdate(clickCTA) {
      console.log('handleUpdate');
      const $screen2 = decoyLoadingContainer.querySelector('.screen2-new');
      if ($screen2) {
        if ($screen2.querySelector('.loading')) {
          $screen2.querySelector('.loading').classList.add('loaded');
          $screen2.querySelector('.loading').classList.remove('loading');
          if ($screen2.querySelector('.loading')) {
            $screen2.querySelector('.loading').style.display = 'block';
          }
        }
        if (clickCTA) {
          document.querySelector('form button#submit').click();
          console.log('actual form button clicked');
        }
      }
    }

    if (isValidated) {
      document.body.classList.add('is-decoy');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.querySelector('.decoy_loader_foreground').classList.add('animated');
      return setTimeout(() => {
        decoyLoadingContainer.querySelector('.screen1').style.display = 'none';
        decoyLoadingContainer.querySelector('.screen2-new').style.display = 'block';
        setTimeout(() => {
          handleUpdate();
          setTimeout(() => {
            handleUpdate(true);
            setTimeout(() => {
              handleUpdate();
            }, 2000);
          }, 2000);
        }, 2000);
      }, 5000);
    }
  });

  document.querySelector('body').before(fakeButton);

  waitForElem('body', (elem) => {
    if (elem) {
      const requestedPostCode = 'BH6 5HQ';
      //if (requestedPostCode) {
      //var $postalCode = document.querySelector('.postal-code');
      //if ($postalCode) {
      //$postalCode.textContent = requestedPostCode.substring(0, 3);
      //}
      //}
    }
  });
});
