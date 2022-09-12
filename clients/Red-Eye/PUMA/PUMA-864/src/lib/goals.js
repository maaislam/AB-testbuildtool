(function pollForLoadComplete() {
  if (window.ga !== undefined && window.$ !== undefined && document.querySelector(`#siteHeader`)) {
    var $ = window.$;
    window.ga = window.ga || [];
    ga('create', 'UA-49440260-6', 'auto', 'optimize');
    var goGoalTrigFn = function (goalAction, goalLabel) {
      ga('optimize.send', {
        hitType: 'event',
        eventCategory: 'Ecommerce',
        eventAction: goalAction,
        eventLabel: goalLabel
      }); //console.log(goalAction , goalLabel);
    };
    $(document).on('click', '.PUMA-864__searchBarContainer span', function () {
      goGoalTrigFn('Click into search', 'Track total clicks into search bar');
    });

    document.querySelector(`.PUMA-864__searchBarContainer input`).addEventListener('focus', (e) => {
      goGoalTrigFn('Click into search', 'Track total clicks into search bar');
    });

    $(document).on('submit', '#mobileSearch input', function () {
      // code
      goGoalTrigFn('Search interaction', 'Track total search actions');
    });
  } else {
    setTimeout(pollForLoadComplete, 35);
  }
})();

//
//
// https://eu.puma.com/fr/fr/search?q=sports&originalphrase=sports
