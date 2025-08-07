/*eslint-disable nonblock-statement-body-position */
import { nextArrowIcon } from '../assets/icons';
import isFormValidated from '../helpers/isFormValidated';
import removeAllActiveStepClasses from '../helpers/removeAllActiveStepClasses';
import updateDigitalData from '../helpers/updateDigitalData';

const isFormFirstPartValidated = () => {
  const firstNameInput = document.querySelector('.contact-us__firstNameRow');
  const lastNameInput = document.querySelector('.contact-us__lastNameRow');
  const emailInput = document.querySelector('.contact-us__emailRow');
  const companyInput = document.querySelector('.contact-us__companyRow');

  return ![firstNameInput, lastNameInput, emailInput, companyInput].some(
    (row) => row && row.querySelector('.mktoFormRow .mktoInvalid')
  );
};

const isAnyRadioOptionSelected = () => {
  return document.querySelector('.contact-us__option.contact-us__activeOption') !== null;
};

const nextStepHandler = (nextBtnElem) => {
  const { step1, currentStep } = window['contact-us__data'];
  const formContainerElem = document.querySelector('.contact-us__formContainer');
  const mktoFormContainer = document.querySelector('.marketo-form-container.section');
  const mktoFormElem = document.querySelector('.marketo-form');
  const mktoId = Number(mktoFormElem.getAttribute('data-form-id'));

  //if no radio option selected then return
  if (!isAnyRadioOptionSelected()) return;

  if (currentStep === 1) {
    //sales channel (show form - first part)
    //hide step 1 and show step 2
    const step2FormElem = document.querySelector('[data-step="2"][data-form-type="sales"]');
    const salesMktoFormElem = step2FormElem.querySelector('.sales-mkto-form');
    const dataForm = {
      formStatus: 'Step 1 Complete',
      formId: mktoId
    };

    salesMktoFormElem.insertAdjacentElement('afterbegin', mktoFormContainer);

    const enquiryTypeElem = document.querySelector('.sales-mkto-form #enquiryType');
    enquiryTypeElem.value = step1;

    //remove all active classes
    removeAllActiveStepClasses();

    step2FormElem.classList.add('contact-us__activeStep');

    //Update DataLayer Object per client guidance
    //window.s.tl(true, 'o', dataForm.formStatus);
    updateDigitalData('form', dataForm);
    //window.digitalData.form.formStatus = 'Step 1 Complete';
  } else if (currentStep === 2) {
    //sales channel (show form - last part)
    //update data-step attribute from 2-3 so that we can show the another half part of the form
    const step2FormElem = document.querySelector('[data-step="2"][data-form-type="sales"]');
    const headerQuestion = step2FormElem.querySelector('.contact-us__headerQuestion');
    const workNumberElem = document.querySelector('.sales-mkto-form #LblPhone');
    const formContainerElement = document.querySelector('.contact-us__formContainer');
    const jobTitleElem = document.querySelector('#Title');
    const dataForm = {
      formStatus: 'Step 2 Complete',
      formId: mktoId
    };

    //change work number to phone number
    workNumberElem.innerHTML = '<div class="mktoAsterix">*</div> Work Number:';

    window.MktoForms2.getForm(mktoId).validate();
    //mktoFormSubmitBtn.click(); //submit the form for the first part
    //after form submission, remove error-design from the second step
    formContainerElement.classList.add('contact-us__removeSecondPartFormError');
    //form validation here for the first part of the form, if not validated then return
    if (!isFormFirstPartValidated()) return;

    //Update DataLayer Object per client guidance
    //window.s.tl(true, 'o', dataForm.formStatus);
    updateDigitalData('form', dataForm);
    //window.digitalData.form.formStatus = 'Step 2 Complete';

    headerQuestion.textContent = 'Just a few more details';
    //Change the text of the next button
    nextBtnElem.innerHTML = `Contact us ${nextArrowIcon}`;

    //to hide first part of the form
    step2FormElem.setAttribute('data-step', '3');

    //focus job title input
    jobTitleElem.value = '';
    setTimeout(() => {
      jobTitleElem.focus();
      jobTitleElem.click();
    }, 100);
  } else if (currentStep === 3) {
    //sales channel - form submission & go to (thank you page)
    let thankYouStepElem = null;

    if ((step1 === 'Products' || step1 === 'Training') && currentStep === 3) {
      thankYouStepElem = document.querySelector('[data-step="4"][data-form-type="sales"]');
    } else if (step1 === 'Services and Support') {
      thankYouStepElem = document.querySelector('[data-step="4"][data-form-type="support"]');
      formContainerElem.classList.add('contact-us__thankYouScreen');
    }
    const formContainerElement = document.querySelector('.contact-us__formContainer');
    const dataForm = {
      formStatus: 'Step 3 Complete',
      formId: mktoId
    };

    if (formContainerElement.classList.contains('contact-us__removeSecondPartFormError'))
      //eslint-disable-next-line curly
      formContainerElement.classList.remove('contact-us__removeSecondPartFormError');

    //form validation here
    window.MktoForms2.getForm(mktoId).validate();
    //mktoFormSubmitBtn.click(); //submit the form

    if (isFormValidated()) {
      const submitBtn = document.querySelector('form button[type="submit"]');
      //remove all active classes
      removeAllActiveStepClasses();
      //show thank you page
      thankYouStepElem.classList.add('contact-us__activeStep');

      //Update DataLayer Object per client guidance
      //window.s.tl(true, 'o', dataForm.formStatus);
      updateDigitalData('form', dataForm);

      //update the current step in the global object
      window['contact-us__data'].currentStep = currentStep + 1;
      //update the current step in the form container for handling CSS designs
      formContainerElem.setAttribute('data-current-step', window['contact-us__data'].currentStep);

      window.scrollTo({
        top: formContainerElem.offsetTop - 200,
        behavior: 'smooth'
      });

      submitBtn.click();
    }
  }

  //do not increment the current step for checking the form validation
  if (
    (step1 === 'Products' || step1 === 'Training' || step1 === 'Services and Support') &&
    currentStep === 3
  ) {
    return;
  }

  //update the current step in the global object
  window['contact-us__data'].currentStep = currentStep + 1;
  //update the current step in the form container for handling CSS designs
  formContainerElem.setAttribute('data-current-step', window['contact-us__data'].currentStep);
};
export default nextStepHandler;
