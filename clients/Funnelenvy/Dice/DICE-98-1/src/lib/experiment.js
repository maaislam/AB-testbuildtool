import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  //document.body.addEventListener('pointerup', ({ target }) => {
  //if (
  //target.closest('.mktoField') ||
  //target.closest('.mktoFormCol') ||
  //target.closest('.bm-answer-btn') ||
  //target.closest('.fe-step-answer')
  //) {
  //gaTracking('form_engagement');
  //} else if (
  //(target.closest('.mktoButton') && document.querySelector('.mktoFormRow.fe_step1.fe_show')) ||
  //target.closest('#fe-step-one-button') ||
  //target.closest('.fe_button') ||
  //(target.closest('button[type="submit"]') && target.innerText === 'Continue')
  //) {
  //gaTracking('CTA_continue');
  //setTimeout(() => {
  //const landedOnStep2 =
  //!!document.querySelector('.step1Complete') || !!document.querySelector('.fe-step-two');
  //const landedOnStep3 =
  //!!document.querySelector('.mktoFormRow.fe_step2.fe_show input#Phone') &&
  //document.querySelector('.fe_stepBar');
  //console.log('landedOnStep2', landedOnStep2);
  //console.log('landedOnStep3', landedOnStep3);

  //landedOnStep2 && !landedOnStep3 && gaTracking('2nd_step_b2b_from', 'continuation_rate');
  //landedOnStep3 && gaTracking('3rd_step_b2b_from', 'continuation_rate');
  //}, 1000);
  //}
  //});
  const specialClass = window.location.pathname.includes('contact-us')
    ? `${ID}__adjust-padding`
    : '';
  const htmlStr = `
  <div class="${ID}__promo-wrapper header-wrapper ${specialClass}">
    <div class="header-inner">
        <div class="headline">
          GET ONE MONTH FREE WHEN YOU SIGN UP FOR A YEAR WITH DICE
        </div>
        <p class="subheadline">This offer ends December 31, so act now</d>
        <div class="disclaimer">* <em>Offer not valid for active Dice subscription clients.</em></div>
    </div>
  </div>`;
  document.querySelector('header').insertAdjacentHTML('afterbegin', htmlStr);
};
