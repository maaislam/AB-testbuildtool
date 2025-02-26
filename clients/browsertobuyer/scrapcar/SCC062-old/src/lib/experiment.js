import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

let currentStep = 1;

const nextFormRows = {
  1: {
    nextStep: 2, showInputs: ['gearbox_condition_1']
  },
  2: {
    nextStep: 3, showInputs: ['insurance_write_off_1']
  },
  3: {
    nextStep: (value) => (value === 'No' ? 4 : 5),
    showInputs: (value) => (value === 'No' ? ['warning_lights_1'] : ['insurance_write_off_1', 'insurance_write_off_2'])
  },
  4: {
    nextStep: (value) => (value === 'No' ? 7 : 6),
    showInputs: (value) => (value === 'No' ? ['crash_damaged_opt_1'] : ['warning_lights_4'])
  },
  5: {
    nextStep: 4, showInputs: ['warning_lights_1']
  },
  6: {
    nextStep: 7, showInputs: ['crash_damaged_opt_1']
  },
  7: {
    nextStep: 8, showInputs: ['interior_condition_opt_1']
  }
};

const init = () => {
  const firstFormRow = document.querySelector('.form-row');
  const allFormRows = document.querySelectorAll('.inner .form-row');
  allFormRows.forEach((row) => row.classList.add(`${ID}__hide`));

  firstFormRow.classList.remove(`${ID}__hide`);
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('label.c-btn')) {
      console.log('currentStep::', currentStep);
      const inputElem = target.closest('.form-row')?.querySelector('input[type="radio"]:checked');
      if (!inputElem) return;

      const stepData = nextFormRows[currentStep];

      //Determine next step
      const nextStep = typeof stepData.nextStep === 'function'
        ? stepData.nextStep(inputElem.value)
        : stepData.nextStep;

      currentStep = nextStep;

      //Determine what inputs to show
      const showInputs = typeof stepData.showInputs === 'function'
        ? stepData.showInputs(inputElem.value)
        : stepData.showInputs;

      //Hide all form-rows
      const allFormRows = document.querySelectorAll('.inner .form-row');
      allFormRows.forEach((row) => row.classList.add(`${ID}__hide`));

      if (currentStep === 8) {
        const submitBtn = document.querySelector('.btn.btn-submit');
        const submitBtnFormRow = submitBtn.closest('.form-row');
        submitBtnFormRow.classList.remove(`${ID}__hide`);

        return;
      }

      //Show relevant inputs for the next step
      showInputs.forEach((name) => {
        const allInputs = document.querySelectorAll(`input[name="${name}"]`);
        allInputs.forEach((input) => {
          const formRowElem = input.closest('.form-row');
          formRowElem.classList.remove(`${ID}__hide`);
        });
      });
    }
  });
};
