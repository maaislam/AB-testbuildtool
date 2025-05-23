/*eslint-disable no-confusing-arrow */
/*eslint-disable max-len */
import { toolTipIcon } from './assets/icons';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const tooltipData = {
  engine_condition_1: `<div class="${ID}__tooltipContent">
    <div><span>No faults</span> - Engine that starts and runs as intended.</div>
    <div><span>Faulty but runs</span> - There is an engine problem, but it stll drives.</div>
    <div><span>Doesn’t run</span> - The engine won’t start or cuts out shortly after starting.</div>
  </div>`,
  gearbox_condition_1: `<div class="${ID}__tooltipContent">
    <div><span>Drives - </span>Gearbox works as intended.</div>
    <div><span>Faulty but drives - </span>There is an issue but you can still drive the vehicle.</div>
    <div><span>Doesn’t drive - </span>The gearbox fault prevents the engine from driving.</div>
  </div>`,
  insurance_write_off_1: `<div class="${ID}__tooltipContent">
    <div><span>No - </span>This vehicle has never been recorded as an insurance write off.</div>
    <div><span>Cat C - </span>This vehicle has previously been, or is currently a Cat C write off.</div>
    <div><span>Cat D - </span>This vehicle has previously been, or is currently a Cat D write off.</div>
    <div><span>Cat S - </span>This vehicle has previously been, or is currently a Cat S write off.</div>
    <div><span>Cat N - </span>This vehicle has previously been, or is currently a Cat N write off.</div>
  </div>`,
  warning_lights_1: `
    <div class="${ID}__tooltipContent">
    <div><span>No - </span>There are no warning lights staying lit on the dashboard</div>
    <div><span>Yes - </span>At least 1 warning light stays lit on the dashboard after the engine has started up and is idling.</div>
  </div>
  `,
  warning_lights_2: `
  <div class="${ID}__tooltipContent">
    <div><span>EML - </span>Engine Management Light.</div>
    <div><span>ABS - </span>Anti-skid Braking System.</div>
    <div><span>SRS - </span>Supplemental Restraint System (Airbags).</div>
    <div><span>OTHER - </span>Any other warning lights on the dashboard.</div>
  </div>`,
  crash_damaged_opt_1: `
    <div class="${ID}__tooltipContent">
    <div>Does any crash damage impact your ability to drive the vehicle safely?</div>
  </div>
  `,
  interior_condition_opt_1: `
    <div class="${ID}__tooltipContent">
    <div>Is there normal wear and tear relative to the age of the vehicle?</div>
  </div>
  `
};

//Mapping input names to the next set of inputs that should be displayed
const formFlow = {
  engine_condition_1: ['gearbox_condition_1'],
  gearbox_condition_1: ['insurance_write_off_1'],
  insurance_write_off_1: (value) =>
    value === 'No' ? ['warning_lights_1'] : ['insurance_write_off_1', 'insurance_write_off_2'],
  insurance_write_off_2: ['warning_lights_1'],
  warning_lights_1: (value) =>
    value === 'No' ? ['crash_damaged_opt_1'] : ['warning_lights_1', 'warning_lights_2'],
  warning_lights_next: ['crash_damaged_opt_1'],
  crash_damaged_opt_1: ['interior_condition_opt_1']
};

//Define steps where multiple selections are allowed
const multiSelectSteps = ['warning_lights_2', 'warning_lights_3', 'warning_lights_4', 'warning_lights_5'];

const tooltipHTML = (classTag) =>
  `<div class="${ID}__tooltipIcon ${classTag}">${toolTipIcon}</div>`;

//HTML for the Next button
const nextBtnHTML = `<button type="button" name="warning_lights_next" class="c-btn ${ID}__nextBtn">Next</button>`;

const initializeTooltips = () => {
  const formElements = document.querySelectorAll(`.offerform-body .form-row:not(.${ID}__hide)`);

  formElements.forEach((formElement) => {
    const tooltipTargetPoint = formElement.querySelector('h2.ttl > img');
    const tooltipContentTargetPoint = formElement.querySelector('h2.ttl');
    const activeInputElem = formElement.querySelector('[type="radio"]');
    const activeInputName = activeInputElem?.name;

    //Insert tooltip icon if it does not already exist
    if (
      tooltipData[activeInputName] &&
      tooltipTargetPoint &&
      !formElement.querySelector(`.${ID}__tooltipIcon`)
    ) {
      tooltipTargetPoint.insertAdjacentHTML('beforebegin', tooltipHTML(`${ID}__custom`));
    }

    //Insert tooltip content if it does not already exist
    if (
      tooltipData[activeInputName] &&
      tooltipContentTargetPoint &&
      !formElement.querySelector(`.${ID}__tooltipContent`)
    ) {
      tooltipContentTargetPoint.insertAdjacentHTML('afterend', tooltipData[activeInputName]);
    }
  });
};

//Function to initialize and hide all form rows except the first one
const init = () => {
  const firstFormRow = document.querySelector('.form-row');
  const whatlightFormGroupElem = document.querySelector('.whatlight-on .c-form-group');
  const allFormRows = document.querySelectorAll('.inner .form-row');
  allFormRows.forEach((row) => row.classList.add(`${ID}__hide`));

  firstFormRow.classList.remove(`${ID}__hide`);
  whatlightFormGroupElem.insertAdjacentHTML('afterend', nextBtnHTML);

  //tooltip start
  initializeTooltips();
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('label.c-btn')) {
      const inputElem = target.closest('.form-row')?.querySelector('input[type="radio"]:checked');
      if (!inputElem) return;

      const inputName = inputElem.name; //Get the clicked radio input name
      let nextInputs = formFlow[inputName];

      //If the nextInputs is a function (e.g., based on Yes/No), call it with the selected value
      if (typeof nextInputs === 'function') {
        nextInputs = nextInputs(inputElem.value);
      }

      //Check if this step requires multiple selections (e.g., multiple warning lights)
      if (multiSelectSteps.includes(inputName)) return;

      //Hide all form rows
      const allFormRows = document.querySelectorAll('.inner .form-row');
      allFormRows.forEach((row) => row.classList.add(`${ID}__hide`));

      if (!nextInputs) {
        //If there's no next input (end of form), show the submit button
        const submitBtn = document.querySelector('.btn.btn-submit');
        const submitBtnFormRow = submitBtn.closest('.form-row');
        submitBtnFormRow.classList.remove(`${ID}__hide`);
        return;
      }

      //Show the next relevant form rows
      nextInputs.forEach((name) => {
        const matchingInputs = document.querySelectorAll(`input[name="${name}"]`);
        matchingInputs.forEach((input) => {
          const formRowElem = input.closest('.form-row');
          formRowElem.classList.remove(`${ID}__hide`);
        });
      });

      initializeTooltips();
    } else if (target.closest(`.${ID}__nextBtn`)) {
      const nextStepBtn = target.closest(`.${ID}__nextBtn`);
      const nextInputs = formFlow[nextStepBtn.name];

      //Hide all form rows before showing the next ones
      const allFormRows = document.querySelectorAll('.inner .form-row');
      allFormRows.forEach((row) => row.classList.add(`${ID}__hide`));

      //Show the next relevant form rows
      nextInputs.forEach((name) => {
        const matchingInputs = document.querySelectorAll(`input[name="${name}"]`);
        matchingInputs.forEach((input) => {
          const formRowElem = input.closest('.form-row');
          formRowElem.classList.remove(`${ID}__hide`);
        });
      });

      //tooltip start
      initializeTooltips();
    }
  });

  document.addEventListener(
    'mouseenter',
    (event) => {
      if (event.target instanceof Element && event.target.matches(`.${ID}__tooltipIcon`)) {
        const tooltip = event.target;
        const fromWrapper = tooltip.closest('.form-row');
        const tooltipContentElem = fromWrapper?.querySelector(`.${ID}__tooltipContent`);
        if (tooltipContentElem) {
          tooltipContentElem.classList.add('show');
        }
      }
    },
    true
  );

  document.addEventListener(
    'mouseleave',
    (event) => {
      if (event.target instanceof Element && event.target.matches(`.${ID}__tooltipIcon`)) {
        const tooltip = event.target;
        const fromWrapper = tooltip.closest('.form-row');
        const tooltipContentElem = fromWrapper?.querySelector(`.${ID}__tooltipContent`);
        if (tooltipContentElem) {
          tooltipContentElem.classList.remove('show');
        }
      }
    },
    true
  );
};
