import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import form from './components/form';

const { ID, VARIATION } = shared;

const resetError = (step) => {
  const container = document.querySelector(`.${ID}__formWrapper .${ID}__step[data-step="${step}"]`);
  const allErrorElems = container.querySelectorAll('.validation-failure');
  const allErrorInputs = container.querySelectorAll('input[aria-invalid="true"]');
  allErrorElems.forEach((item) => item.classList.remove('validation-failure'));
  allErrorInputs.forEach((input) => {
    input.removeAttribute('aria-invalid');
    input.value = '';
  });
};

const init = () => {
  const targetPoint = document.querySelector('.guideGridFluidLayout2Container');

  if (!document.querySelector(`.${ID}__formWrapper`)) {
    targetPoint.insertAdjacentHTML('afterbegin', form(ID));
  }

  const firstStepInner = document.querySelector(`.${ID}__first-step .${ID}__stepInner`);
  const secondStepInner = document.querySelector(`.${ID}__second-step .${ID}__stepInner`);
  const thirdStepInner = document.querySelector(`.${ID}__third-step .${ID}__stepInner`);
  const firstStepElements = document.querySelector(
    `.${ID}__formWrapper ~ #guideContainer-rootPanel-panel___guide-item`
  );

  if (firstStepElements) {
    firstStepInner.insertAdjacentElement('beforeend', firstStepElements);
  }

  const secondStepElements = document.querySelectorAll(
    `.${ID}__formWrapper ~ [id^="guideContainer-rootPanel-panel"]`
  );

  if (secondStepElements.length > 0) {
    secondStepElements.forEach((item, index) => {
      if (index <= 3) {
        secondStepInner.insertAdjacentElement('beforeend', item);
      } else {
        thirdStepInner.insertAdjacentElement('beforeend', item);
      }
    });
  }

  const phoneNumberElem = document.querySelector(`.${ID}__second-step .${ID}__stepInner > div`);
  const companyNameElem = document.querySelector(
    `.${ID}__first-step .${ID}__stepInner #guideContainer-rootPanel-panel-guidetextbox___guide-item`
  );
  if (!phoneNumberElem.classList.contains(`${ID}__phoneNumber`)) {
    companyNameElem.insertAdjacentElement('afterend', phoneNumberElem);
    phoneNumberElem.classList.add(`${ID}__phoneNumber`);
  }

  if (!companyNameElem.classList.contains(`${ID}__companyName`)) {
    secondStepInner.insertAdjacentElement('afterbegin', companyNameElem);
    companyNameElem.classList.add(`${ID}__companyName`);
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__next-btn`)) {
      const clickedItem = target.closest(`.${ID}__next-btn`);
      const mainWrapper = clickedItem.closest(`.${ID}__step`);
      const formWrapper = mainWrapper.closest(`.${ID}__formWrapper`);
      const { stepActive, fillStep } = formWrapper.dataset;
      const { step } = mainWrapper.dataset;
      const inputs = mainWrapper.querySelectorAll('input');
      const allFilled = Array.from(inputs).every((input) => input.value.trim());
      const controlSubmitBtn = document.querySelector('#guideContainer-rootPanel-submit___widget');
      if (controlSubmitBtn && !allFilled && !target.closest(`.${ID}__step[data-step="3"]`)) {
        controlSubmitBtn.click();
      }

      if (target.closest(`.${ID}__step[data-step="3"]`)) {
        const checkBoxElem = mainWrapper.querySelector('input[type="checkbox"]');
        if (checkBoxElem.checked) {
          controlSubmitBtn.click();
          return;
        }
      }

      setTimeout(() => {
        if (target.closest(`.${ID}__step[data-step="3"]`)) {
          return;
        }
        const allErrorElems = mainWrapper.querySelectorAll('.validation-failure');
        console.log(allErrorElems, 'allErrorElems');
        if (allErrorElems.length === 0) {
          formWrapper.dataset.stepActive = Number(stepActive) + 1;
          formWrapper.dataset.fillStep = Number(fillStep) + 1;
          resetError(Number(stepActive) + 1);
        }
        console.log(step, 'step');
      }, 50);
    } else if (target.closest(`.${ID}__back-btn`)) {
      const clickedItem = target.closest(`.${ID}__back-btn`);
      const stepWrapper = clickedItem.closest(`.${ID}__step`);
      const formWrapper = stepWrapper.closest(`.${ID}__formWrapper`);
      //const { step } = stepWrapper.dataset;
      const { stepActive, fillStep } = formWrapper.dataset;
      formWrapper.dataset.stepActive = Number(stepActive) - 1;
      formWrapper.dataset.fillStep = Number(fillStep) - 1;
    }
  });

  init();
};
