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

  const contactUsCopy = document.querySelector('.fe-static-page-content');
  //contactUsCopy.classList.add(`FE-${ID}__hide`);

  const offerLine = `<span class="FE-${ID}__offerline">This offer ends December 31, so act now!</span>`;
  document.querySelector('.bm_form_heading>p').insertAdjacentHTML('beforeend', offerLine);

  contactUsCopy.innerHTML = newContent(ID);
};
