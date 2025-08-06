import { nextArrowIcon } from '../assets/icons';
import removeAllActiveStepClasses from '../helpers/removeAllActiveStepClasses';

const prevStepHandler = (id) => {
    const { step1, currentStep } = window[`${id}__data`];
    const formContainerElem = document.querySelector(`.${id}__formContainer`);
    const nextBtnElem = document.querySelector(`.${id}__next-btn`);

    if (currentStep === 1) {
        return;
    }

    if (step1 === 'Services and Support' && currentStep === 2) {
        //Hide step 2 and go back to step 1
        removeAllActiveStepClasses(id);
        document.querySelector('[data-step="1"]').classList.add(`${id}__activeStep`);

        //Change the text of the next button
        nextBtnElem.innerHTML = `Next ${nextArrowIcon}`;
    } else if ((step1 === 'Products' || step1 === 'Training') && currentStep === 2) {
        //Hide step 2 and go back to step 1 (Sales channel)
        removeAllActiveStepClasses(id);
        document.querySelector('[data-step="1"]').classList.add(`${id}__activeStep`);

        //Change the text of the next button
        nextBtnElem.innerHTML = `Next ${nextArrowIcon}`;
    } else if ((step1 === 'Products' || step1 === 'Training') && currentStep === 3) {
        //Reverse last change: Show the first part of step 2 instead of second part
        const step2FormElem = document.querySelector('[data-step="3"][data-form-type="sales"]');
        const headerQuestion = step2FormElem.querySelector(`.${id}__headerQuestion`);

        headerQuestion.textContent = 'What is best way to contact you?';
        step2FormElem.setAttribute('data-step', '2');

        //Change the text of the next button
        nextBtnElem.innerHTML = `Next ${nextArrowIcon}`;
    }

    //Update the current step in the global object
    window[`${id}__data`].currentStep = currentStep - 1;
    //update the current step in the form container for handling CSS designs
    formContainerElem.setAttribute('data-current-step', window[`${id}__data`].currentStep);
};
export default prevStepHandler;
