import setup from './services/setup';
import shared from './shared/shared';
import { embedMedchatInIframe } from './helpers/utils';
import stepsWrapper from './components/stepsWrapper';
import { firstStepOptions, secondStepOptions } from './data/data';

const loadEmbeddedMessaging = () => {
  const initEmbeddedMessaging = () => {
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

  const externalScript = document.createElement('script');
  externalScript.src =
    'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768/assets/js/bootstrap.min.js';
  externalScript.onload = initEmbeddedMessaging;
  document.head.appendChild(externalScript);
};

const loadMedchatWidget = () => {
  if (document.querySelector('script[src*="medchatapp.com/widget/widget.js"]')) {
    if (document.querySelector('#medchat-launcher-frame')) {
      document.querySelector('#medchat-launcher-frame').classList.remove('hidden');
    }

    return;
  }
  const script = document.createElement('script');
  script.src = 'https://medchatapp.com/widget/widget.js?api-key=AWshYCMkWUG_ZraiOGvG4Q';
  script.async = true;
  script.dataset.medchat = 'true'; //mark it for easy removal
  document.head.appendChild(script);
};

const removeMedchatWidget = () => {
  if (document.querySelector('#medchat-launcher-frame')) {
    document.querySelector('#medchat-launcher-frame').classList.add('hidden');
  }
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

const showFinalStep = () => {
  const finalForm = document.querySelector('#pardot-form');
  const titleElem = finalForm.querySelector('h2');
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
  const stepOneContainer = document.querySelector('.get-started-container[data-step="1"]');
  const stepOneSelectedOption = stepOneContainer.querySelector('input[type="radio"]:checked');
  const stepTwoContainer = document.querySelector('.get-started-container[data-step="2"]');
  const selectedOption = stepTwoContainer.querySelector('input[type="radio"]:checked');
  if (selectedOption) {
    const selectedValue = selectedOption.value;
    titleElem.textContent = stepOneSelectedOption.value;
    selectOptionByLabel(selectedValue);
    selectNoForLabel();
  }
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
  const targetPoint = document.querySelector('form');
  const stepThree = document.querySelector('#pardot-form');
  stepThree.classList.add('final-step');
  stepThree.setAttribute('step', '3');
  if (!document.querySelector(`.${ID}__stepsWrapper`)) {
    targetPoint.insertAdjacentHTML(
      'beforebegin',
      stepsWrapper(ID, firstStepOptions, secondStepOptions)
    );
  }
};
export default () => {
  setup(); //use if needed

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
          embedMedchatInIframe('https://medchatapp.com/widget/AWshYCMkWUG_ZraiOGvG4Q');
          return;
        }

        if (secondStepInput && secondStepInput.value === 'Patient Engagement') {
          embedMedchatInIframe(
            'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768/?lwc.mode=prod'
          );
          return;
        }
      }

      if (nextStepEl && nextStepEl.dataset.step) {
        console.log('enter');
        updateActiveDot(target, nextStepEl.dataset.step);
      }

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
          embedMedchatInIframe(
            'https://experityhealth.my.site.com/ESWUngatedMessaging1728591322768/?lwc.mode=prod'
          );
          return;
        }
      }

      if (!selectedOption && targetStep === '2' && !target.closest('#pardot-form')) return;
      if (!selectedOption && targetStep === '3' && !target.closest('#pardot-form')) return;
      allSteps.forEach((step) => {
        step.style.display = step.dataset.step === targetStep ? 'block' : 'none';
      });

      updateActiveDot(target, targetStep);
    }
  });
  init();
};
