import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import newContent from './newContent';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  document.body.addEventListener('pointerup', ({ target }) => {
    if (target.closest('.bm-answer-btn') || target.closest('.mktoFormCol')) {
      gaTracking('form_engagement');
    } else if (target.closest('#bm-next-one') || target.closest('#bm-next-two')) {
      gaTracking('CTA_continue');
      setTimeout(() => {
        const landedOnStep2 = !!document.querySelector(
          '.fe-step1-complete:not(.fe-step2-complete)'
        );
        const landedOnStep3 = !!document.querySelector('.fe-step1-complete.fe-step2-complete');
        console.log(landedOnStep2, landedOnStep3);
        landedOnStep2 && gaTracking('2nd_step_b2b_from', 'continuation_rate');
        landedOnStep3 && gaTracking('3rd_step_b2b_from', 'continuation_rate');
      }, 500);
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

  const contactUsCopy = document.querySelector('.fe-static-page-content');
  //contactUsCopy.classList.add(`FE-${ID}__hide`);

  const offerLine = `<span class="FE-${ID}__offerline">This offer ends December 31, so act now!</span>`;
  const formHead = document.querySelector('.bm_form_heading > p');
  formHead.innerText = 'Get Your Free Month';
  formHead.insertAdjacentHTML('beforeend', offerLine);

  contactUsCopy.innerHTML = newContent(ID);
};
