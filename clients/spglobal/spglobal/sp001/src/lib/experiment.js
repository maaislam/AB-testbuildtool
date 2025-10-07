import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';
import form from './components/form';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

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
  const { pathname } = window.location;

  if (pathname === '/market-intelligence/en/info/request-follow-up') {
    document.body.classList.add(`${ID}__reverseOrder`);
  }
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

  const firstlabelElem = thirdStepInner.querySelector('label');
  if (firstlabelElem) {
    firstlabelElem.classList.add(`${ID}__thirdStepLabel`);
  }

  if (!document.querySelector(`${ID}__thirdStepText`)) {
    firstlabelElem.insertAdjacentHTML(
      'afterend',
      `<p class="${ID}__thirdStepText">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>`
    );
  }
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__next-btn`)) {
      const clickedItem = target.closest(`.${ID}__next-btn`);
      const mainWrapper = clickedItem.closest(`.${ID}__step`);
      const formWrapper = mainWrapper.closest(`.${ID}__formWrapper`);
      const { stepActive, fillStep } = formWrapper.dataset;
      const { step } = mainWrapper.dataset;
      const inputs = mainWrapper.querySelectorAll('input');
      const allFields = Array.from(inputs).every((input) => input.value.trim());
      const controlSubmitBtn = document.querySelector('#guideContainer-rootPanel-submit___widget');
      if (controlSubmitBtn && !allFields && !target.closest(`.${ID}__step[data-step="3"]`)) {
        controlSubmitBtn.click();
      }

      if (target.closest(`.${ID}__step[data-step="3"]`)) {
        const checkBoxElem = mainWrapper.querySelector('input[type="checkbox"]');
        if (checkBoxElem.checked) {
          if (!document.body.classList.contains(`${ID}__stepComplete-3`)) {
            console.log('step--3 completes');
            console.log('form completes in variation');
            document.body.classList.add(`${ID}__stepComplete-3`);
          }
          controlSubmitBtn.click();
          return;
        }
      }

      setTimeout(() => {
        if (target.closest(`.${ID}__step[data-step="3"]`)) {
          return;
        }
        const allErrorElems = mainWrapper.querySelectorAll('.validation-failure');
        if (allErrorElems.length === 0) {
          formWrapper.dataset.stepActive = Number(stepActive) + 1;
          formWrapper.dataset.fillStep = Number(fillStep) + 1;
          resetError(Number(stepActive) + 1);
          if (!document.body.classList.contains(`${ID}__stepComplete-${step}`)) {
            console.log(`step--${step} completes`);
            document.body.classList.add(`${ID}__stepComplete-${step}`);
          }
        }
      }, 50);
    } else if (target.closest(`.${ID}__back-btn`)) {
      const clickedItem = target.closest(`.${ID}__back-btn`);
      const stepWrapper = clickedItem.closest(`.${ID}__step`);
      const formWrapper = stepWrapper.closest(`.${ID}__formWrapper`);
      const { stepActive, fillStep } = formWrapper.dataset;
      formWrapper.dataset.stepActive = Number(stepActive) - 1;
      formWrapper.dataset.fillStep = Number(fillStep) - 1;
    } else if (
      target.closest('#guideContainer-rootPanel-submit___widget') &&
      VARIATION === 'control'
    ) {
      pollerLite(['.thankyou-message-component'], () => {
        if (!document.body.classList.contains(`${ID}__formComplete`)) {
          console.log('form completes in control');
          document.body.classList.add(`${ID}__formComplete`);
        }
      });
    }
  });

  if (VARIATION === 'control') return;

  init();
};
