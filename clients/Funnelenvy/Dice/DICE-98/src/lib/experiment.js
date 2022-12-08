import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  document.body.addEventListener('pointerup', ({ target }) => {
    if (target.closest('.bm-answer-btn') || target.closest('.mktoFormCol')) {
      gaTracking('form_engagement');
    } else if (
      (target.closest('[id^="bm-next-"]') &&
        !target.closest('.bm-step').querySelector('.fe-active')) ||
      (!target.closest('.mktoButton') &&
        target.closest('button[type="submit"]') &&
        target.closest('form').querySelector('.mktoError')?.style.display !== 'none')
    ) {
      gaTracking('CTA_continue');
      //console.log('worked');
    } else if (
      (target.closest('[id^="bm-next-"]') &&
        target.closest('.bm-step').querySelector('.fe-active')) ||
      (target.closest('.mktoButton') &&
        target.closest('button[type="submit"]') &&
        target.closest('form').querySelector('.mktoError')?.style.display === 'none')
    ) {
      gaTracking('CTA_continue');
      gaTracking('continuation_rate');
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
  //hide contact us copy

  const contactUsCopy = document.querySelector('.fe-static-page-content p:last-child');
  contactUsCopy.classList.add(`FE-${ID}__hide`);

  const promoContent = `
    <div class="FE-${ID}__freemonthpromo">
      <div class="left-wrapper">
        <h4>WIN TECH TALENT IN 2023 WITH A FREE MONTH FROM DICE</h4>
        <div class="subheading">We want to help you win skilled tech candidates in a tight market next year,
          and to make your job a little bit easier,
          we’re offering one month of our annual tech recruitment services package for free.
        </div>  
      </div>
      <div class="right-wrapper">
          <span class="right-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" nighteye="disabled"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"/></svg></span>
      </div>
    </div>`;

  document.querySelector('.fe-static-page-content>ul').insertAdjacentHTML('afterend', promoContent);
};

/*Promote the free month offer on the paid B2B landing page.
add the following text in #CD0100 below the bullets:
WIN TECH TALENT IN 2023 WITH A FREE MONTH FROM DICE
Subheading in #343434
We want to help you win skilled tech candidates in a tight market next year,
and to make your job a little bit easier,
we’re offering one month of our annual tech recruitment services package for free.
remove the "contact us" copy
Add an arrow (you can find it on dice.com and turn it to point right).
The gray lines are from this page https://www.dice.com/hiring below the proof points
funnelenvy > click > CTA_continue (The event should fire upon clicking on the CTA)
funnelenvy > continuation_rate > 2nd_step_b2b_from (fire when visitors advance to the 2nd step of the form)
funnelenvy > continuation_rate > 3rd_step_b2b_from (fire when visitors advance to the 3rd step of the form)
funnelenvy > click > form_engagement (The event should fire when visitors engage with the form on the targeted URL */
// else if (
//   (target.closest('[id^="bm-next-"]') &&
//     target.closest('.bm-step').querySelector('.fe-active')) ||
//   (target.closest('.mktoButton') &&
//     target.closest('button[type="submit"]') &&
//     target.closest('form').querySelector('.mktoError')?.style.display === 'none')
// ) {
//   gaTracking('continuation_rate');
//   //console.log('worked');
// } else if (
//   (target.closest('[id^="bm-next-"]') &&
//     target.closest('.bm-step').querySelector('.fe-active')) ||
//   (target.closest('.mktoButton') &&
//     target.closest('button[type="submit"]') &&
//     target.closest('form').querySelector('.mktoError')?.style.display !== 'none')
// ) {
//   gaTracking('CTA_continue');
// }
