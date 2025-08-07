import { nextArrowIcon } from '../assets/icons';
import removeAllActiveStepClasses from '../helpers/removeAllActiveStepClasses';

const prevStepHandler = () => {
  const { step1, currentStep } = window['contact-us__data'];
  const formContainerElem = document.querySelector('.contact-us__formContainer');
  const nextBtnElem = document.querySelector('.contact-us__next-btn');

  if (currentStep === 1) {
    return;
  }

  if (
    (step1 === 'Products' || step1 === 'Training' || step1 === 'Services and Support') &&
    currentStep === 2
  ) {
    //Hide step 2 and go back to step 1 (Sales channel)
    removeAllActiveStepClasses();
    document.querySelector('[data-step="1"]').classList.add('contact-us__activeStep');

    //Change the text of the next button
    nextBtnElem.innerHTML = `Next ${nextArrowIcon}`;
  } else if (
    (step1 === 'Products' || step1 === 'Training' || step1 === 'Services and Support') &&
    currentStep === 3
  ) {
    //Reverse last change: Show the first part of step 2 instead of second part
    const step2FormElem = document.querySelector('[data-step="3"][data-form-type="sales"]');
    const headerQuestion = step2FormElem.querySelector('.contact-us__headerQuestion');

    headerQuestion.textContent = 'What is best way to contact you?';
    step2FormElem.setAttribute('data-step', '2');

    //Change the text of the next button
    nextBtnElem.innerHTML = `Next ${nextArrowIcon}`;
  }

  //Update the current step in the global object
  window['contact-us__data'].currentStep = currentStep - 1;
  //update the current step in the form container for handling CSS designs
  formContainerElem.setAttribute('data-current-step', window['contact-us__data'].currentStep);
};
export default prevStepHandler;
