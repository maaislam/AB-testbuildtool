import form from './component/form';
import chatWithUsHandler from './handlers/chatWithUsHandler';
import customerSupportHandler from './handlers/customerSupportHandler';
import getInTouchHandler from './handlers/getInTouchHandler';
import nextStepHandler from './handlers/nextStepHandler';
import prevStepHandler from './handlers/prevStepHandler';
import applyDynamicRowClasses from './helpers/applyDynamicRowClasses';
import updateDigitalData from './helpers/updateDigitalData';
import { observeDOM, sendAdobeEvent } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

window[`${ID}__data`] = {
  currentStep: 1
};

//const url = new URL(window.location.href);

//if (url.searchParams.get('v') !== VARIATION) {
//url.searchParams.set('v', VARIATION);
//window.location.href = url.toString();
//}

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

  const supportSectionHTML = `
  <div class="${ID}-support-section">
    <div class="contact-card ${ID}__chat-with-us">
        <img class="lozad" data-src="/content/dam/aveva/images/icons/w012/purple/W012_query-icon.png" alt="Chat with us" src="/content/dam/aveva/images/icons/w012/purple/W012_query-icon.png" data-loaded="true">
        <p class="card-title">Chat with us</p>
        <p>Speak with sales, get support, or ask a question.</p>
        <a class="body-action">Chat now</a>
    </div>
    <div class="contact-card ${ID}__get-in-touch">
        <img class="lozad" data-src="/content/dam/aveva/images/icons/w012/purple/W012-Email-contact-icon-06-07.png" alt="Get in touch" src="/content/dam/aveva/images/icons/w012/purple/W012-Email-contact-icon-06-07.png" data-loaded="true">
        <p class="card-title">Get in touch</p>
        <p>Have a questions about products services or training? Our team can help.</p>
        <a class="body-action smart-link">Email us</a>
    </div>
    <div class="contact-card ${ID}__customer-support">
        <img class="lozad" data-src="/content/dam/aveva/images/icons/w012/purple/W012-contactus01-07-201.png" alt="contact" src="/content/dam/aveva/images/icons/w012/purple/W012-contactus01-07-201.png" data-loaded="true">
        <p class="card-title">Customer support</p>
        <p>Get help with product installation and more.</p>
        <a class="body-action smart-link">
        Visit customer support
        </a>
    </div>
  </div>`;

  attachPoint.insertAdjacentHTML('afterbegin', form(ID));
  attachPoint.insertAdjacentHTML('afterend', supportSectionHTML);

  applyDynamicRowClasses(ID);
  addHiddenField();
};

export default () => {
  setup();

  //Update DataLayer Object per client guidance
  //window.digitalData.form.formStatus = 'Form Load';
  sendAdobeEvent('Form Load(e2)', 'event2');

  document.addEventListener('pointerup', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__option`)) {
      const currentOption = target.closest(`.${ID}__option`);
      const stepValue = currentOption.querySelector('[type="radio"]').value;
      const stepValueLowerCase = stepValue.toLowerCase();
      const eventLabel = stepValueLowerCase === 'products' ? '1st step sales/product clicks' : `1st step ${stepValueLowerCase} clicks`;

      //fire event - 1st step {step-value} clicks
      if (eventLabel.includes('sales/product')) {
        sendAdobeEvent(eventLabel, 'event26');
      } else if (eventLabel.includes('training')) {
        sendAdobeEvent(eventLabel, 'event25');
      } else if (eventLabel.includes('support')) {
        sendAdobeEvent(eventLabel, 'event18');
      }
    }
  });

  document.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__option`)) {
      const options = document.querySelectorAll(`.${ID}__option`);
      const currentOption = target.closest(`.${ID}__option`);
      const stepValue = currentOption.querySelector('[type="radio"]').value;

      //Remove active class from all options
      options.forEach((opt) => opt.classList.remove(`${ID}__activeOption`));

      //Add active class to the clicked option
      target.closest(`.${ID}__option`).classList.add(`${ID}__activeOption`);

      //Save the selected value to the global object for step 1
      window[`${ID}__data`].step1 = stepValue;
    } else if (target.closest(`.${ID}__next-btn`)) {
      const nextBtn = target.closest(`.${ID}__next-btn`);
      nextStepHandler(ID, nextBtn);
    } else if (target.closest(`.${ID}__prev-btn`)) {
      prevStepHandler(ID);
    } else if (target.closest(`.${ID}__supportOption`)) {
      //fire event - support TY call clicks
      sendAdobeEvent('support TY call clicks', 'event49');
      window.location.href = 'https://www.aveva.com/en/support-and-success/support-contact/';
    } else if (target.closest(`.${ID}__selfServeOption`)) {
      //fire event - support TY self-serve clicks
      sendAdobeEvent('support TY self-serve clicks', 'event50');
      window.location.href = 'https://docs.aveva.com/';
    } else if (target.closest(`.${ID}__chat-with-us`)) {
      chatWithUsHandler(ID, target.closest(`.${ID}__chat-with-us`));
    } else if (target.closest(`.${ID}__get-in-touch`)) {
      getInTouchHandler(ID, target.closest(`.${ID}__get-in-touch`));
    } else if (target.closest(`.${ID}__customer-support`)) {
      customerSupportHandler(ID, target.closest(`.${ID}__customer-support`));
    }

    if (target.closest(`.${ID}__formContainer`)) {
      //Update DataLayer Object per client guidance
      const formContainerElem = target.closest(`.${ID}__formContainer`);
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

        //window.digitalData.form.formStatus = 'Initiated Form';
        //fire event - support TY self-serve clicks
        // sendAdobeEvent({
        //   mbox: 'Initiated form'
        // });
        formContainerElem.classList.add('form-initiated');
      }
    }
  });

  init();

  const callbackFn = (mutation) => {
    const ismktoFieldDescriptor = mutation?.addedNodes[0]?.classList?.contains('mktoFieldDescriptor');
    const ismktoFormCol = mutation?.addedNodes[0]?.classList?.contains('mktoFormCol');

    if (mutation.addedNodes.length > 0 && (ismktoFieldDescriptor || ismktoFormCol)) {
      const privacyPolicyLabels = document.querySelectorAll('.mktoFormRow a[href*="/legal/privacy-policy"]');
      const privacyPolicyDropdown = document.querySelector('select#pmi_Opt_In__c');
      const allMktoHtmlTextElems = document.querySelectorAll('.mktoFieldWrap .mktoHtmlText');
      const hasPostalCode = document.querySelector('.mktoFormRow #PostalCode');
      const hasStateCode = document.querySelector('.mktoFormRow #State');

      if (hasStateCode && !hasPostalCode) {
        hasStateCode.closest('.mktoFormRow').classList.add(`${ID}__onlyStateCode`);
      } else if (hasStateCode && hasPostalCode) {
        hasStateCode.closest('.mktoFormRow').classList.remove(`${ID}__onlyStateCode`);
      } else if (!hasStateCode && hasPostalCode) {
        hasPostalCode.closest('.mktoFormRow').classList.remove(`${ID}__onlyPostalCode`);
      }

      //if privacy policy is linked in the label
      //multiple privacy policy links
      if (privacyPolicyLabels.length > 0) {
        privacyPolicyLabels.forEach((privacyPolicyLabel, index) => {
          const privacyPolicyLabelParent = privacyPolicyLabel.closest('.mktoFormRow');
          privacyPolicyLabelParent.classList.add(`${ID}__privacyPolicyLabel-${index + 1}`);
        });
      }

      if (privacyPolicyDropdown) {
        const optInDataProcessingElem = document.querySelector('#optInDataProcessing');
        const dropdownParent = privacyPolicyDropdown.closest('.mktoFormRow');
        dropdownParent.classList.add(`${ID}__privacyPolicyDropdown`);

        if (optInDataProcessingElem) { //china
          const optInDataProcessingElemParent = optInDataProcessingElem.closest('.mktoFormRow');
          optInDataProcessingElemParent.classList.add(`${ID}__optInDataProcessing`);
        }

        //for some country, the privacy policy is linked can't be found in the label
        if (privacyPolicyLabels.length === 0) { //china //india
          allMktoHtmlTextElems.forEach((mktoHtmlTextElem) => {
            const mktoHtmlTextElemText = mktoHtmlTextElem.textContent;
            const isLabelMatch = mktoHtmlTextElemText.includes('related information on other topics') || mktoHtmlTextElemText.includes('We will use the personal information');

            if (isLabelMatch) {
              const privacyPolicyLabelParent = mktoHtmlTextElem.closest('.mktoFormRow');
              privacyPolicyLabelParent.classList.add(`${ID}__privacyPolicyLabel-1`);
            }

            if (mktoHtmlTextElemText.includes('We will use the personal information')) {
              const privacyPolicyLabelParent = mktoHtmlTextElem.closest('.mktoFormRow');
              privacyPolicyLabelParent.classList.add(`${ID}__dataProcessingConsent`);
            }
          });
        }
      }
    }
  };
  observeDOM('form.mktoForm', callbackFn);
};
