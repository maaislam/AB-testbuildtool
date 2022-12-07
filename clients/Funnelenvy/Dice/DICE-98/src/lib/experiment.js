import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__promo-button`)) {
      gaTracking('get_your_free_month');
    } else if (
      (target.closest('[id^="bm-next-"]') &&
        target.closest('.bm-step').querySelector('.fe-active')) ||
      (target.closest('.mktoButton') &&
        target.closest('button[type="submit"]') &&
        target.closest('form').querySelector('.mktoError')?.style.display === 'none')
    ) {
      gaTracking('form_engagement');
      //console.log('worked');
    }
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const promoContent = `<div class="FE-${ID}__freemonthpromo">
    <h3>Win tech talent in 2023 with a FREE month</h3>
    <div class="end-date">This offer ends December 31, so act now!</div>
    <a href="https://www.dice.com/hiring/contact-us/win-talent-2023" class="${ID}__promo-button" target="_self">
        Get Started For Free
    </a>
  </div>`;

  document.querySelector('.fe-static-page-content>ul').insertAdjacentHTML('afterend', promoContent);
};
