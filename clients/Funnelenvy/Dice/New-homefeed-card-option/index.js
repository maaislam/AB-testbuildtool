/* eslint-disable */

(function () {
    try {
        // Main variables
        var debug = 0;
        var variation_name = "";
        // Define waitForElement function
        function waitForElement(selector, callback, delayInterval, delayTimeout) {
            var interval = setInterval(function () {
                var element = document.querySelector(selector);
                if (element) {
                    clearInterval(interval);
                    callback(element);
                }
            }, delayInterval);
            setTimeout(function () {
                clearInterval(interval);
            }, delayTimeout);
        }
        var card_option = '' +
            // Desktop
            '  <div class="homefeed-ad home-cards" id="New-homefeed-card-option-1" style="">' +
            '      <div class="card-header-section">' +
            '          <div class="close" id="mdiv" onclick="hideOptimizeCard(\'New-homefeed-card-option-1\', false)">' +
            '              <div class="mdiv">' +
            '                  <div class="md"></div>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '      <div class="col-sm-12 col-md-12 card-content-section" style="background-color: white;">' +
            '          <div class="col1">' +
            '              <img id="banner-image" src="https://client-data.knak.io/production/email_assets/5d0ceed96c945/BmF5CihWj8O7Ew42fLIGEpKGMY6fOHMnPdS0TWWF.jpg">' +
            '          </div>' +
            '          <div class="col2">' +
            '              <div class="header-text">New Year, new job?</div>' +
            '              <div class="subcopy">It is easier than ever to discover the companies that meet your ideal preferences. Filter your company search by what matters most to you including size, industry, location, and remote vs. in-office.</div>' +
            '              <div class="button-container">' +
            '                  <a href="https://www.dice.com/companies/">' +
            '                      <button class="get-copy-button">' +
            '                          Discover Now' +
            '                      </button>' +
            '                  </a>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '  </div>' +
            // Mobile
            '  <div class="homefeed-ad-mobile home-cards" id="New-homefeed-template-option-1-Mobile" style="">' +
            '      <div class="card-header-section-mobile">' +
            '          <div class="close-mobile" id="mdiv" onclick="hideOptimizeCard(\'New-homefeed-template-option-1-Mobile\', false)">' +
            '              <div class="mdiv">' +
            '                  <div class="md"></div>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '      <div class="col-sm-12 col-md-12 card-content-section-mobile" style="background-color: white;">' +
            '          <div class="col1-mobile">' +
            '              <img class="cover-image-mobile" src="https://client-data.knak.io/production/email_assets/5d0ceed96c945/BmF5CihWj8O7Ew42fLIGEpKGMY6fOHMnPdS0TWWF.jpg">' +
            '              <div class="header-text-mobile">New Year, new job?</div>' +
            '              <div class="subcopy-mobile">It is easier than ever to discover the companies that meet your ideal preferences. Filter your company search by what matters most to you including size, industry, location, and remote vs. in-office.</div>' +
            '              <div class="button-container-mobile">' +
            '                  <a href="https://www.dice.com/companies/">' +
            '                      <button class="get-copy-button-mobile">' +
            '                          Discover Now' +
            '                      </button>' +
            '                  </a>' +
            '              </div>' +
            '          </div>' +
            '      </div>' +
            '  </div>';
        /* Variation Init */
        function init() {
            document.querySelector("#profile-card").insertAdjacentHTML("afterend", card_option);
        }
        /* Initialise variation */
        waitForElement("#profile-card", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();