import form from './component/form';
import chatWithUsHandler from './handlers/chatWithUsHandler';
import customerSupportHandler from './handlers/customerSupportHandler';
import getInTouchHandler from './handlers/getInTouchHandler';
import nextStepHandler from './handlers/nextStepHandler';
import prevStepHandler from './handlers/prevStepHandler';
import applyDynamicRowClasses from './helpers/applyDynamicRowClasses';
import updateDigitalData from './helpers/updateDigitalData';
import { observeDOM } from './helpers/utils';
import shared from './shared/shared';

const { VARIATION } = shared;

window['contact-us__data'] = {
  currentStep: 1
};

const addHiddenField = () => {
  const formElement = document.querySelector('form.mktoForm');

  if (formElement) {
    const mktoForm = window.MktoForms2.allForms()[0];
    const hiddenInputValue = VARIATION === '1' ? 'AVEVA-1-variation' : 'AVEVA-1-control';
    if (mktoForm) {
      mktoForm.addHiddenFields({
        eventMisc2: hiddenInputValue
      });
    }
  }
};

const init = () => {
  const attachPoint = document.querySelector('section.background-container');

  attachPoint.insertAdjacentHTML('afterbegin', form());

  applyDynamicRowClasses();
  //addHiddenField();
};

export default () => {
  //setup();

  document.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('.contact-us__option')) {
      const options = document.querySelectorAll('.contact-us__option');
      const currentOption = target.closest('.contact-us__option');
      const stepValue = currentOption.querySelector('[type="radio"]').value;

      //Remove active class from all options
      options.forEach((opt) => opt.classList.remove('contact-us__activeOption'));

      //Add active class to the clicked option
      target.closest('.contact-us__option').classList.add('contact-us__activeOption');

      //Save the selected value to the global object for step 1
      window['contact-us__data'].step1 = stepValue;
    } else if (target.closest('.contact-us__next-btn')) {
      const nextBtn = target.closest('.contact-us__next-btn');
      nextStepHandler(nextBtn);
    } else if (target.closest('.contact-us__prev-btn')) {
      prevStepHandler();
    } else if (target.closest('.contact-us__supportOption')) {
      window.location.href = 'https://www.aveva.com/en/support-and-success/support-contact/';
    } else if (target.closest('.contact-us__selfServeOption')) {
      window.location.href = 'https://docs.aveva.com/';
    } else if (target.closest('.contact-us__chat-with-us')) {
      chatWithUsHandler();
    } else if (target.closest('.contact-us__get-in-touch')) {
      getInTouchHandler();
    } else if (target.closest('.contact-us__customer-support')) {
      customerSupportHandler();
    }

    if (target.closest('.contact-us__formContainer')) {
      //Update DataLayer Object per client guidance
      const formContainerElem = target.closest('.contact-us__formContainer');
      const mktoFormElem = document.querySelector('.marketo-form');
      const mktoId = Number(mktoFormElem.getAttribute('data-form-id'));

      if (!formContainerElem.classList.contains('form-initiated')) {
        const dataForm = {
          formStatus: 'Form Initiated',
          formId: mktoId
        };
        //Update DataLayer Object per client guidance
        window.s.tl(true, 'o', dataForm.formStatus);
        updateDigitalData('form', dataForm);

        formContainerElem.classList.add('form-initiated');
      }
    }
  });

  init();

  document.body.style.opacity = '1';

  const callbackFn = (mutation) => {
    const ismktoFieldDescriptor =
      mutation?.addedNodes[0]?.classList?.contains('mktoFieldDescriptor');
    const ismktoFormCol = mutation?.addedNodes[0]?.classList?.contains('mktoFormCol');

    if (mutation.addedNodes.length > 0 && (ismktoFieldDescriptor || ismktoFormCol)) {
      const privacyPolicyLabels = document.querySelectorAll(
        '.mktoFormRow a[href*="/legal/privacy-policy"]'
      );
      const privacyPolicyDropdown = document.querySelector('select#pmi_Opt_In__c');
      const allMktoHtmlTextElems = document.querySelectorAll('.mktoFieldWrap .mktoHtmlText');
      const hasPostalCode = document.querySelector('.mktoFormRow #PostalCode');
      const hasStateCode = document.querySelector('.mktoFormRow #State');

      if (hasStateCode && !hasPostalCode) {
        hasStateCode.closest('.mktoFormRow').classList.add('contact-us__onlyStateCode');
      } else if (hasStateCode && hasPostalCode) {
        hasStateCode.closest('.mktoFormRow').classList.remove('contact-us__onlyStateCode');
      } else if (!hasStateCode && hasPostalCode) {
        hasPostalCode.closest('.mktoFormRow').classList.remove('contact-us__onlyPostalCode');
      }

      //if privacy policy is linked in the label
      //multiple privacy policy links
      if (privacyPolicyLabels.length > 0) {
        privacyPolicyLabels.forEach((privacyPolicyLabel, index) => {
          const privacyPolicyLabelParent = privacyPolicyLabel.closest('.mktoFormRow');
          privacyPolicyLabelParent.classList.add(`contact-us__privacyPolicyLabel-${index + 1}`);
        });
      }

      if (privacyPolicyDropdown) {
        const optInDataProcessingElem = document.querySelector('#optInDataProcessing');
        const dropdownParent = privacyPolicyDropdown.closest('.mktoFormRow');
        dropdownParent.classList.add('contact-us__privacyPolicyDropdown');

        if (optInDataProcessingElem) {
          //china
          const optInDataProcessingElemParent = optInDataProcessingElem.closest('.mktoFormRow');
          optInDataProcessingElemParent.classList.add('contact-us__optInDataProcessing');
        }

        //for some country, the privacy policy is linked can't be found in the label
        if (privacyPolicyLabels.length === 0) {
          //china //india
          allMktoHtmlTextElems.forEach((mktoHtmlTextElem) => {
            const mktoHtmlTextElemText = mktoHtmlTextElem.textContent;
            const isLabelMatch =
              mktoHtmlTextElemText.includes('related information on other topics') ||
              mktoHtmlTextElemText.includes('We will use the personal information');

            if (isLabelMatch) {
              const privacyPolicyLabelParent = mktoHtmlTextElem.closest('.mktoFormRow');
              privacyPolicyLabelParent.classList.add('contact-us__privacyPolicyLabel-1');
            }

            if (mktoHtmlTextElemText.includes('We will use the personal information')) {
              const privacyPolicyLabelParent = mktoHtmlTextElem.closest('.mktoFormRow');
              privacyPolicyLabelParent.classList.add('contact-us__dataProcessingConsent');
            }
          });
        }
      }
    }
  };
  observeDOM('form.mktoForm', callbackFn);
};
