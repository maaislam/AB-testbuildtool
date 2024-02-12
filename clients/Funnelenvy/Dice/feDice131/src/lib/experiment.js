import setup from './services/setup';
import shared from './shared/shared';
import postRole from './helpers/postRole';
import trackGAEvent from './helpers/trackGAEvent';

const { ID, VARIATION } = shared;

const textBoxHTML = () => {
  const htmlStr = `
    <div class="${ID}__detailsInfoContainer">
      <textarea id="freeform" name="freeform" row="1" placeholder="Please specify..." class="${ID}__freeForm"></textarea>
      <div class="mktoError ${ID}__hide"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div id="" role="alert" tabindex="-1" class="mktoErrorMsg">This field is required.</div></div>
    </div>  
      `;

  return htmlStr;
};

const textBoxListenerAdd = (selector1, selector) => {
  document.querySelector(selector).addEventListener('input', () => {
    document.querySelector(selector1).classList.add(`${ID}__hide`);
  });
};

const errorHandle = (isError) => {
  if (isError) {
    document
      .querySelector(`.${ID}__detailsInfoContainer .mktoError`)
      .classList.remove(`${ID}__hide`);
  }
};

export default () => {
  setup();
  let formEngagement = false;

  const otherCTA = document.querySelector('#fe-checkbox10').parentElement;
  const otherCTAInput = document.querySelector('#fe-checkbox10');
  otherCTA.classList.add(`${ID}__otherCTA`);

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('button.fe-answer-btn') && formEngagement === false) {
      trackGAEvent('funnelenvy', 'click', 'form_engagement_LP');
      formEngagement = true;
    }

    if (target.closest(`.fe-answer-btn.${ID}__otherCTA`)) {
      document.querySelector(`.${ID}__detailsInfoContainer`)?.remove();
      if (!document.querySelector(`.${ID}__detailsInfoContainer`)) {
        otherCTA.insertAdjacentHTML('afterend', textBoxHTML());

        textBoxListenerAdd(`.${ID}__detailsInfoContainer .mktoError`, `.${ID}__freeForm`);
      }
    } else if (
      !target.closest(`.fe-answer-btn.${ID}__otherCTA`) &&
      target.closest('.fe-answer-btn')
    ) {
      document.querySelector(`.${ID}__detailsInfoContainer`)?.remove();
    } else if (
      target.closest('.fe-next-button button') &&
      otherCTAInput.checked &&
      document.querySelector(`.${ID}__detailsInfoContainer textarea`).value === ''
    ) {
      e.preventDefault();
      e.stopPropagation();
      errorHandle(true);
    } else if (target.closest('.fe-next-button button') &&
    otherCTAInput.checked &&
    document.querySelector(`.${ID}__detailsInfoContainer textarea`).value.length > 0) {
      const roleValue = document.querySelector(`.${ID}__detailsInfoContainer textarea`).value;
      postRole(roleValue);
      const selectedOption = document.querySelector('div.step_one #fe-form-answers button.fe-active span').getAttribute('data');
      trackGAEvent('funnelenvy', 'Qualifying question', 'Other answer submitted');

      if (VARIATION === '1') trackGAEvent('funnelenvy', 'Qualifying question', selectedOption);
    } else if (e.target.matches('.step_one div.fe-next-button button') && document.querySelector('div.step_one #fe-form-answers button.fe-active')) {
      const selectedOption = document.querySelector('div.step_one #fe-form-answers button.fe-active span').getAttribute('data');
      trackGAEvent('funnelenvy', 'Qualifying question', selectedOption);
    } else if (target.closest('.FE-Form-Validator__tempStep1Btn')) {
      //console.log('form submitted');
      trackGAEvent('funnelenvy', 'click', 'Step 1 completion');
    }
  });
};
