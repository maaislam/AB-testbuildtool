import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const textBoxHTML = () => {
  const html = `
    <div class="${ID}__detailsInfoContainer">
      <textarea id="freeform" name="freeform" row="1" placeholder="Please specify..." class="${ID}__freeForm"></textarea>
      <div class="mktoError ${ID}__hide"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div id="ValidMsgLastName" role="alert" tabindex="-1" class="mktoErrorMsg">This field is required.</div></div>
    </div>  
      `;

  return html.trim();
};

const textBoxListenerAdd = (selector1, selector) => {
  document.querySelector(selector).addEventListener('input', (e) => {
    console.log(e.target.value);

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
  setup(); //use if needed
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
  const otherCTA = document.querySelector('#fe-checkbox10').parentElement;
  const otherCTAInput = document.querySelector('#fe-checkbox10');
  otherCTA.classList.add(`${ID}__otherCTA`);

  const firstStepContinueCTAWrapper = document.querySelector(
    '.fe-step.step_one.active .fe-next-button'
  );

  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.fe-answer-btn.${ID}__otherCTA`)) {
      document.querySelector(`.${ID}__detailsInfoContainer`)?.remove();
      if (!document.querySelector(`.${ID}__detailsInfoContainer`)) {
        otherCTA.insertAdjacentHTML('afterend', textBoxHTML());

        textBoxListenerAdd(`.${ID}__detailsInfoContainer .mktoError`, `.${ID}__freeForm`);
      }
    } else if (
      !e.target.closest(`.fe-answer-btn.${ID}__otherCTA`) &&
      e.target.closest('.fe-answer-btn')
    ) {
      document.querySelector(`.${ID}__detailsInfoContainer`)?.remove();
    } else if (
      e.target.closest('.fe-next-button button') &&
      otherCTAInput.checked &&
      document.querySelector(`.${ID}__detailsInfoContainer`).querySelector('textarea').value === ''
    ) {
      e.preventDefault();
      e.stopPropagation();
      console.log('show error');
      errorHandle(true);
    }
  });
};
