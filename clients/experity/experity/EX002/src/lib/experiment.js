import setup from './services/setup';
import shared from './shared/shared';
import { embedMedchatInIframe, pollerLite } from './helpers/utils';
import stepsWrapper from './components/stepsWrapper';
import { firstStepOptions, secondStepOptions } from './data/data';

//const loadEmbeddedMessaging = () => {
//const initEmbeddedMessaging = () => {
//try {
//window.embeddedservice_bootstrap.settings.language = 'en_US';
//window.embeddedservice_bootstrap.init(
//'00Di0000000HSwp',
//'Ungated_Messaging',
//'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768',
//{
//scrt2URL: 'https://experityhealth.my.salesforce-scrt.com'
//}
//);
//} catch (err) {
//console.error('Error loading Embedded Messaging: ', err);
//}
//};

//const externalScript = document.createElement('script');
//externalScript.src =
//'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768/assets/js/bootstrap.min.js';
//externalScript.onload = initEmbeddedMessaging;
//document.head.appendChild(externalScript);
//};

//const loadMedchatWidget = () => {
//if (document.querySelector('script[src*="medchatapp.com/widget/widget.js"]')) {
//if (document.querySelector('#medchat-launcher-frame')) {
//document.querySelector('#medchat-launcher-frame').classList.remove('hidden');
//}

//return;
//}
//const script = document.createElement('script');
//script.src = 'https://medchatapp.com/widget/widget.js?api-key=AWshYCMkWUG_ZraiOGvG4Q';
//script.async = true;
//script.dataset.medchat = 'true'; //mark it for easy removal
//document.head.appendChild(script);
//};

const removeMedchatWidget = () => {
  if (document.querySelector('#medchat-launcher-frame')) {
    document.querySelector('#medchat-launcher-frame').classList.add('hidden');
  }
};

const isChatServiceAvailable = () => {
  const now = new Date();

  //Convert current time to UTC hours
  const utcHour = now.getUTCHours();

  //Central Time (CDT) is UTC - 5
  const ctHour = (utcHour - 5 + 24) % 24;

  //Check if time is between 8:00 a.m. and 5:00 p.m. CT
  const isWithinOfficeHours = ctHour >= 8 && ctHour < 17;

  return isWithinOfficeHours;
};

const loadEmbeddedMessaging = () => {
  window.initEmbeddedMessaging = () => {
    try {
      window.embeddedservice_bootstrap.settings.language = 'en_US';

      window.embeddedservice_bootstrap.init(
        '00Di0000000HSwp',
        'Ungated_Messaging',
        'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768',
        {
          scrt2URL: 'https://experityhealth.my.salesforce-scrt.com'
        }
      );
    } catch (err) {
      console.error('Error loading Embedded Messaging: ', err);
    }
  };

  const script = document.createElement('script');
  script.src =
    'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768/assets/js/bootstrap.min.js';
  script.onload = window.initEmbeddedMessaging;
  document.body.appendChild(script);
};

const selectOptionByLabel = (label) => {
  const selectEl = document.querySelector('.Inquiry_Primary_Solution_Interest select');
  if (!selectEl) return;

  const optionToSelect = Array.from(selectEl.options).find(
    (opt) => opt.textContent.toLowerCase().trim() === label.toLowerCase().trim()
  );

  if (optionToSelect) {
    selectEl.value = optionToSelect.value;

    //Trigger change event to simulate user interaction
    const event = new Event('change', {
      bubbles: true
    });
    selectEl.dispatchEvent(event);

    selectEl.closest('.form_col').classList.add('field-hidden');
  } else {
    selectEl.closest('.form_col').classList.remove('field-hidden');
  }
};

const selectNoForLabel = (labelText = 'Are You a Patient?') => {
  const labelEl = Array.from(document.querySelectorAll('label')).find(
    (label) => label.textContent.trim() === labelText
  );

  if (!labelEl) return;

  const container = labelEl.closest('.form_col, .form-field');
  if (!container) return;

  const selectEl = container.querySelector('select');
  if (!selectEl) return;

  const option = Array.from(selectEl.options).find((opt) => opt.textContent.trim() === 'No');

  if (option) {
    selectEl.value = option.value;
    selectEl.dispatchEvent(
      new Event('change', {
        bubbles: true
      })
    );

    labelEl.closest('.form_col').classList.add('field-hidden');
  } else {
    labelEl?.closest('.form_col')?.classList.add('field-hidden');
  }
};

const parentPage = () => window.location.href.includes('/get-started');
const renderprogressDotInIframe = () => {
  if (parentPage()) return;

  const finalForm = document.querySelector('#pardot-form');
  //nst titleElem = finalForm.querySelector('h2');
  if (finalForm) finalForm.classList.remove('final-step');
  if (finalForm.querySelector('.progress-dots')) {
    finalForm.querySelector('.progress-dots').remove();
  }
  if (!finalForm.querySelector('.progress-dots')) {
    finalForm.insertAdjacentHTML(
      'afterbegin',
      `
          <div class="progress-dots">
                <span class="dot" data-step="1"></span>
                <span class="dot" data-step="2"></span>
                <span class="dot active" data-step="3"></span>
          </div>
        `
    );
  }
  //const stepOneContainer = document.querySelector('.get-started-container[data-step="1"]');
  //const stepOneSelectedOption = stepOneContainer.querySelector('input[type="radio"]:checked');
  //const stepTwoContainer = document.querySelector('.get-started-container[data-step="2"]');
  //const selectedOption = stepTwoContainer.querySelector('input[type="radio"]:checked');
  //if (selectedOption) {
  //const selectedValue = selectedOption.value;
  //titleElem.textContent = stepOneSelectedOption.value;
  ////selectOptionByLabel(selectedValue);
  ////selectNoForLabel();
  //}
};

const showFinalStep = () => {
  const iframe = document.querySelector('#xframe');
  const stepOneContainer = document.querySelector('.get-started-container[data-step="1"]');
  const stepOneSelectedOption = stepOneContainer.querySelector('input[type="radio"]:checked');

  const stepTwoContainer = document.querySelector('.get-started-container[data-step="2"]');
  const selectedOption = stepTwoContainer.querySelector('input[type="radio"]:checked');

  if (selectedOption) {
    const selectedValue = selectedOption.value;
    const titleElem = stepOneSelectedOption.value;
    //send these to iframe
    iframe.contentWindow.postMessage(
      {
        type: 'UPDATE_FORM',
        data: {
          title: titleElem,
          stepOne: stepOneSelectedOption.value,
          stepTwo: selectedValue
        }
      },
      '*'
    );
  }

  if (iframe) {
    iframe.classList.remove('hidden');
  }
  //const parentPage = window.location.href.includes('/get-started');

  //const finalForm = document.querySelector('#pardot-form');
  //const titleElem = finalForm.querySelector('h2');
  //if (finalForm) finalForm.classList.remove('final-step');
  //if (finalForm.querySelector('.progress-dots')) {
  //finalForm.querySelector('.progress-dots').remove();
  //}
  //if (!finalForm.querySelector('.progress-dots')) {
  //finalForm.insertAdjacentHTML(
  //'afterbegin',
  //`
  //<div class="progress-dots">
  //<span class="dot" data-step="1"></span>
  //<span class="dot" data-step="2"></span>
  //<span class="dot active" data-step="3"></span>
  //</div>
  //`
  //);
  //}
  //const stepOneContainer = document.querySelector('.get-started-container[data-step="1"]');
  //const stepOneSelectedOption = stepOneContainer.querySelector('input[type="radio"]:checked');
  //const stepTwoContainer = document.querySelector('.get-started-container[data-step="2"]');
  //const selectedOption = stepTwoContainer.querySelector('input[type="radio"]:checked');
  //if (selectedOption) {
  //const selectedValue = selectedOption.value;
  //titleElem.textContent = stepOneSelectedOption.value;
  //selectOptionByLabel(selectedValue);
  //selectNoForLabel();
  //}
};

const updateActiveDot = (target, step) => {
  const conatiner = target.closest('#pardot-form');
  document.querySelectorAll('.progress-dots').forEach((group) => {
    group.querySelectorAll('.dot').forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.step === step);
    });
  });

  if (step === '3') {
    showFinalStep();
  } else {
    const finalForm = document.querySelector('#pardot-form');
    if (finalForm) finalForm.classList.add('final-step');

    if (step === '2') {
      const firstStep = document.querySelector('.get-started-container[data-step="1"]');
      const firstStepInput = firstStep.querySelector('input[type="radio"]:checked');
      const secondStep = document.querySelector('.get-started-container[data-step="2"]');
      const title = secondStep.querySelector('.title');
      const form = secondStep.querySelector('#checkboxForm');

      if (firstStepInput && !conatiner) {
        form.innerHTML = '';
        title.textContent = firstStepInput.value;
        const inputValue = firstStepInput.value;
        const findOptions = firstStepOptions.find((option) => option.value === inputValue);
        if (findOptions && findOptions.options) {
          form.innerHTML = findOptions.options
            .map((option) => {
              return `
                <label class="option-card">
                  <input type="radio" name="service" value="${option.value}" />
                  <span class="checkmark"></span>
                  <div class="option-content">
                    <div class="option-icon">${option.icon}</div>
                    <div class="option-label">${option.label}</div>
                  </div>
                </label>`;
            })
            .join('\n');
        }
      }
    }
  }
};

const { ID } = shared;

const init = () => {
  const targetPoint = document.querySelector('.spz-form-wrap .the-form');

  if (!document.querySelector(`.${ID}__stepsWrapper`)) {
    document.getElementById('xframe').classList.add('hidden');
    targetPoint.insertAdjacentHTML(
      'beforebegin',
      stepsWrapper(ID, firstStepOptions, secondStepOptions)
    );
  }

  loadEmbeddedMessaging();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.next-button')) {
      removeMedchatWidget();
      const currentStepEl = target.closest('.get-started-container');
      const allSteps = document.querySelectorAll('.get-started-container');
      const selectedOption = currentStepEl.querySelector('input[type="radio"]:checked');

      if (!selectedOption) return;

      const currentIndex = Array.from(allSteps).indexOf(currentStepEl);
      const nextStepEl =
        currentIndex === 0 ? allSteps[currentIndex + 1] : document.querySelector('#pardot-form');

      const firstStep = document.querySelector('.get-started-container[data-step="1"]');
      const firstStepInput = firstStep.querySelector('input[type="radio"]:checked');
      const secondStep = document.querySelector('.get-started-container[data-step="2"]');
      const secondStepInput = secondStep.querySelector('input[type="radio"]:checked');

      if (firstStepInput && firstStepInput.value === 'Help From a Care Provider') {
        window.location.href = 'https://findurgentcare.com/';
        return;
      }

      if (firstStepInput && firstStepInput.value === 'Help from Support' && currentIndex !== 0) {
        if (secondStepInput && secondStepInput.value === 'Teleradiology') {
          //remove step 3 if exists
          const stepThreeContainer = document.querySelector(
            '.get-started-container[data-step="3"]'
          );
          if (stepThreeContainer && stepThreeContainer.querySelector('#embedded-messaging')) {
            const mbedChatBubble = document.getElementById('embedded-messaging');
            mbedChatBubble.classList.remove('show');
            embedMedchatInIframe('https://medchatapp.com/widget/AWshYCMkWUG_ZraiOGvG4Q');
            //hide step 1 and 2
            firstStep.style.display = 'none';
            secondStep.style.display = 'none';
            stepThreeContainer.style.display = 'block';
            return;
          }
          //create a get started container with progress dot and an iframe
          const getStartedContainer = document.createElement('div');
          getStartedContainer.classList.add('get-started-container');
          getStartedContainer.setAttribute('data-step', '3');

          const progressDots = document.createElement('div');
          progressDots.classList.add('progress-dots');
          progressDots.innerHTML = `
              <div class="dot-fake" data-step="1"></div>
              <div class="dot-fake" data-step="2"></div>
              <div class="dot active" data-step="3"></div>
            `;

          //place the new container after step2

          getStartedContainer.appendChild(progressDots);
          secondStep.insertAdjacentElement('afterend', getStartedContainer);
          embedMedchatInIframe('https://medchatapp.com/widget/AWshYCMkWUG_ZraiOGvG4Q');
          //hide step 1 and 2
          firstStep.style.display = 'none';
          secondStep.style.display = 'none';
          //append right after step 2

          //bedMedchatInIframe('https://medchatapp.com/widget/AWshYCMkWUG_ZraiOGvG4Q');
          return;
        }

        if (secondStepInput && secondStepInput.value === 'Patient Engagement') {
          //do exact same as above but with different URL
          //remove step 3 if exists
          const stepThreeContainer = document.querySelector(
            '.get-started-container[data-step="3"]'
          );
          if (stepThreeContainer && stepThreeContainer.querySelector('#embedded-messaging')) {
            //stepThreeContainer.remove();
            firstStep.style.display = 'none';
            secondStep.style.display = 'none';
            stepThreeContainer.style.display = 'block';
            const medChatBubble = document.getElementById('embedded-messaging');
            medChatBubble.classList.add('show');
            const teleChat = document.querySelector('.med-iframe');
            if (teleChat) {
              teleChat.remove();
            }
            return;
          }
          //create a get started container with progress dot and an iframe
          const getStartedContainer = document.createElement('div');
          getStartedContainer.classList.add('get-started-container');
          getStartedContainer.setAttribute('data-step', '3');
          const progressDots = document.createElement('div');
          progressDots.classList.add('progress-dots');
          progressDots.innerHTML = `
              <div class="dot-fake" data-step="1"></div>
              <div class="dot-fake" data-step="2"></div>
              <div class="dot-fake active" data-step="3"></div>
            `;
          //place the new container after step2
          getStartedContainer.appendChild(progressDots);
          secondStep.insertAdjacentElement('afterend', getStartedContainer);

          if (isChatServiceAvailable()) {
            const medChatBubble = document.getElementById('embedded-messaging');
            const stepContainerThree = document.querySelector(
              '.get-started-container[data-step="3"]'
            );
            if (stepContainerThree) {
              stepContainerThree.insertAdjacentElement('beforeend', medChatBubble);
              medChatBubble.querySelector('button').click();
              const teleChat = document.querySelector('.med-iframe');
              if (teleChat) {
                teleChat.remove();
              }
              medChatBubble.classList.add('show');
            }
          } else {
            window.location.href = 'https://www.experityhealth.com/contact/';
          }

          //hide step 1 and 2
          firstStep.style.display = 'none';
          secondStep.style.display = 'none';
          return;
        }
      }

      if (firstStepInput && firstStepInput.value === 'Get a Demo' && currentIndex === 0) {
        const formIframe = document.querySelector('#xframe');
        if (formIframe) {
          formIframe.src = 'https://go.experityhealth.com/l/26642/2019-09-23/6yx786';
        }
      } else if (
        firstStepInput &&
        firstStepInput.value === 'Talk to an Expert' &&
        currentIndex === 0
      ) {
        const formIframe = document.querySelector('#xframe');
        if (formIframe) {
          formIframe.src = 'https://go.experityhealth.com/l/26642/2025-06-12/871rdr';
        }
      }

      if (nextStepEl && nextStepEl.dataset.step) {
        console.log('enter');
        updateActiveDot(target, nextStepEl.dataset.step);
      }

      //console.log('step', nextStepEl.dataset.step, firstStepInput.value, currentIndex);
      if (nextStepEl && currentIndex === 0) {
        currentStepEl.style.display = 'none';
        nextStepEl.style.display = 'block';
      } else {
        console.log('final step shown');
        allSteps.forEach((step) => {
          step.style.display = 'none';
        });

        showFinalStep();
      }
    } else if (target.classList.contains('dot') && target.dataset.step) {
      removeMedchatWidget();
      const targetStep = target.dataset.step;
      const allSteps = document.querySelectorAll('.get-started-container');
      const stepContainer =
        target.closest('.get-started-container') || target.closest('#pardot-form');
      const selectedOption = target.closest('.get-started-container')
        ? stepContainer.querySelector('input[type="radio"]:checked')
        : null;

      const firstStep = document.querySelector('.get-started-container[data-step="1"]');
      const firstStepInput = firstStep.querySelector('input[type="radio"]:checked');
      const secondStep = document.querySelector('.get-started-container[data-step="2"]');
      const secondStepInput = secondStep.querySelector('input[type="radio"]:checked');

      const progressDotContainer = target.closest('.progress-dots');
      const currentActiveDot = progressDotContainer.querySelector('.dot.active');
      const currentActiveStep = currentActiveDot ? currentActiveDot.dataset.step : null;

      if (currentActiveStep === '1' && targetStep === '3') {
        return;
      }

      if (
        firstStepInput &&
        firstStepInput.value === 'Help From a Care Provider' &&
        targetStep !== '1'
      ) {
        window.location.href = 'https://findurgentcare.com/';
        return;
      }

      if (firstStepInput && firstStepInput.value === 'Help from Support' && targetStep === '3') {
        if (secondStepInput && secondStepInput.value === 'Teleradiology') {
          embedMedchatInIframe('https://medchatapp.com/widget/AWshYCMkWUG_ZraiOGvG4Q');
          return;
        }

        if (secondStepInput && secondStepInput.value === 'Patient Engagement') {
          if (isChatServiceAvailable()) {
            const stepThreeContainer = document.querySelector(
              '.get-started-container[data-step="3"]'
            );

            const medChatBubble = document.getElementById('embedded-messaging');

            if (stepThreeContainer) {
              stepThreeContainer.insertAdjacentElement('beforeend', medChatBubble);
              medChatBubble.querySelector('button').click();
              const teleChat = document.querySelector('.med-iframe');
              if (teleChat) {
                teleChat.remove();
              }
              medChatBubble.classList.add('show');
            }
          } else {
            window.location.href = 'https://www.experityhealth.com/contact/';
          }
          return;
        }
      }

      if (!selectedOption && targetStep === '2' && !target.closest('#pardot-form')) return;
      if (!selectedOption && targetStep === '3' && !target.closest('#pardot-form')) return;
      allSteps.forEach((step) => {
        step.style.display = step.dataset.step === targetStep ? 'block' : 'none';
      });

      updateActiveDot(target, targetStep);
    } else if (target.closest('.dot-fake')) {
      //Handle fake dot clicks
      const targetStep = target.closest('.dot-fake').dataset.step;
      const allSteps = document.querySelectorAll('.get-started-container');
      allSteps.forEach((step) => {
        step.style.display = step.dataset.step === targetStep ? 'block' : 'none';
      });
      //reposition embedchat and hide it

      updateActiveDot(target, targetStep);
    }
  });

  //add listener for DOT_CLICK
  window.addEventListener('message', (event) => {
    if (event.data.type === 'DOT_CLICK') {
      const targetStep = event.data.step;
      console.log('🚀 ~ window.addEventListener ~ targetStep:', targetStep);
      //do js click on the dot
      const dot = document.querySelector(`.progress-dots .dot[data-step="${targetStep}"]`);
      if (dot) {
        document.getElementById('xframe').classList.add('hidden');
        dot.click();
      }
    }
  });
};
export default () => {
  setup(); //use if needed

  pollerLite(['.spz-form-wrap'], init);

  if (!parentPage()) {
    pollerLite(['#pardot-form'], () => {
      renderprogressDotInIframe();

      document.body.addEventListener('click', (e) => {
        const { target } = e;
        if (target.classList.contains('dot') && target.dataset.step) {
          //send data to parent page as this page is iframe
          const targetStep = target.dataset.step;
          console.log('🚀 ~ document.body.addEventListener ~ targetStep:', targetStep);
          window.parent.postMessage(
            {
              type: 'DOT_CLICK',
              step: targetStep
            },
            '*'
          );
        }
      });
      document
        .querySelector('a[href="/contact/"]')
        ?.closest('p')
        ?.style.setProperty('display', 'none', 'important');
      selectNoForLabel();
      //listen from parent window to update form
      const titleElem = document.querySelector('#pardot-form h2');
      if (
        titleElem &&
        window.location.href.includes('https://go.experityhealth.com/l/26642/2025-06-12/871rdr')
      ) {
        titleElem.textContent = 'Talk to an Expert';
      }
      selectOptionByLabel('EMR | PM');
      window.addEventListener('message', (event) => {
        console.log('🚀 ~ window.addEventListener ~ event:', event.data.type);
        if (event.data.type === 'UPDATE_FORM') {
          const { title, stepOne, stepTwo } = event.data.data;
          selectOptionByLabel(stepOne);

          selectOptionByLabel(stepTwo === 'Insurance Follow-Up' ? 'Billing Services' : stepTwo);
        }
      });
    });
  }
};
