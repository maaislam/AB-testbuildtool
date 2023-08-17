import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import lib from './roomvo';

const { ID, VARIATION } = shared;

const filterOptions = {
  '/vinyl-flooring.html': ['Vinyl (LVT)'],
  '/solid-wood-flooring.html': ['Solid', 'Solid Wood'],
  '/engineered-wood-flooring.html': ['Engineered Wood', 'Engineered'],
  '/laminate-flooring.html': ['Laminate']
};
const currentUrl = window.location.pathname;
const currentFilter = filterOptions[currentUrl] || '';
const init = () => {
  lib();

  const btnHtml = `
  <a class="${ID}__roomvobtn" >
      <div><img src="https://www.roomvo.com/services/vendor/vendor_images/luxuryflooringandfurnishingscouk/roomvo_icon.png" alt="" /></div>
      <div style="display: inline-block;">Try out our Room Visualiser</div>
  </a>
  `;
  const anchorPoint = document.querySelector('.filter-toolbar');
  if (document.querySelector(`.${ID}__roomvobtn`)) return;
  anchorPoint.insertAdjacentHTML('beforebegin', btnHtml);
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__roomvobtn`)) {
      gaTracking('Clicks on Roomvo');
      console.log('Roomvo clicked', currentFilter);
      window.roomvo.startStandaloneVisualizer('floor', '', '', '', {
        prefilter: JSON.stringify({ categories: currentFilter })
      });
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
