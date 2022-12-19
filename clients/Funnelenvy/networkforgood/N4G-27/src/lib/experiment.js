import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    const leadFormContainer = document.getElementById('multistepId');
    leadFormContainer.addEventListener('click', ({ target }) => {
      if (target.closest('input') || target.closest('select')) {
        gaTracking('Form engagement');
      }
    });

    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  // const circleBlue = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  //   <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  // </svg>`;

  // const formNavElems = (stepNum) => `<div class="FE-${ID}__formnavelems">
  //     <div class="${stepNum === 2 ? 'circle-blue' : 'circle-left'}"
  //       ${stepNum === 2 ? 'data-action="step-toggle"' : ''}>
  //       ${stepNum === 2 ? circleBlue : ''}
  //     </div>
  //     <div class="line-middle"></div>
  //     <div class="circle-right" ${stepNum !== 2 ? ' data-action="step-toggle"' : ''}></div>
  //   </div>`;

  // const nextStepBtn = `<button type="button" data-action="step-toggle" class="FE-${ID}__mktoButton mktoButton">Next Step</button>`;

  // const formNav = `<div class="FE-${ID}__formnav">
  //     <span class="step-1">${formNavElems()}</span>
  //     <span class="step-2 FE-${ID}__hide">${formNavElems(2)}</span>
  //   </div>`;

  // const leadFormContainer = document.getElementById('multistepId');
  // const formTitle = leadFormContainer.querySelector('.formTitle');
  // const formElement = leadFormContainer.querySelector('form');
  // const formInputs = formElement.querySelectorAll('input');
  // const formSelects = formElement.querySelectorAll('select');
  // const submitBtn = formElement.querySelector('button[type="submit"]');

  // leadFormContainer.classList.add(`FE-${ID}__leadformcontainer`);

  // const inputElemAdjust = (inputs) => {
  //   inputs.forEach((input) => {
  //     if (input.type === 'hidden') return;
  //     const inputId = input.id || input.name;
  //     input
  //       .closest('.mktoFormRow')
  //       ?.classList.add(
  //         `FE-${ID}__${inputId}`,
  //         `FE-${ID}__inputrow`,
  //         `FE-${ID}__${input.tagName.toLowerCase()}`
  //       );
  //   });
  // };

  // const toggleDisplay = (elements) => {
  //   elements.forEach((element) => {
  //     element?.classList.toggle(`FE-${ID}__hide`);
  //   });
  // };

  // inputElemAdjust(formInputs);
  // inputElemAdjust(formSelects);

  // //make all input field full width
  // //hide all select fields
  // const stepOneInputs = document.querySelectorAll(`.FE-${ID}__input:not(.FE-${ID}__Company)`);

  // const stepTwoInputs = [
  //   ...document.querySelectorAll(`.FE-${ID}__select`),
  //   document.querySelector(`.FE-${ID}__Company`)
  // ];
  // const currentTitle = formTitle.innerText;

  // formTitle.innerHTML = `<h2 class="FE-${ID}__formtitle">${currentTitle}</h2>`;
  // submitBtn.insertAdjacentHTML('beforebegin', nextStepBtn);
  // formTitle.insertAdjacentHTML('afterend', formNav);
  // submitBtn.classList.add(`FE-${ID}__hide`);

  // submitBtn.innerText = currentTitle.includes('Download') ? 'Download' : 'Watch Now';
  // toggleDisplay(stepTwoInputs);

  // //add a button with functionality to show hide
  // const companyRow = document.querySelector(`.FE-${ID}__Company`);
  // const phoneRow = document.querySelector(`.FE-${ID}__Phone`);
  // phoneRow.insertAdjacentElement('afterend', companyRow);

  // //update phone label
  // phoneRow.querySelector('label').innerHTML = '<div class="mktoAsterix">*</div> Work Phone';
  // //on load changes ends here//

  // leadFormContainer.addEventListener('click', ({ target }) => {
  //   if (target.closest('[data-action="step-toggle"]')) {
  //     const isStep1 = window.getComputedStyle(submitBtn).display === 'none';
  //     if (isStep1) {
  //       submitBtn.click();
  //     }
  //     setTimeout(() => {
  //       const hasError = [...stepOneInputs].some((stepOneInput) => {
  //         const errDiv = stepOneInput.querySelector('.mktoError');
  //         return errDiv && window.getComputedStyle(errDiv).display !== 'none';
  //       });

  //       if (hasError) return;
  //       //return if error

  //       if (isStep1) {
  //         gaTracking('Step 1 Completion');
  //       }

  //       const inputRows = formElement.querySelectorAll(`.FE-${ID}__inputrow`);
  //       const navElems = document.querySelectorAll(`.FE-${ID}__formnav span`);
  //       toggleDisplay(inputRows);
  //       toggleDisplay(navElems);
  //       document.querySelector(`.FE-${ID}__mktoButton`).classList.toggle(`FE-${ID}__hide`);
  //       submitBtn.classList.toggle(`FE-${ID}__hide`);
  //     }, 1000);
  //   } else if (target.closest('input') && !target.closest('input#Company')) {
  //     gaTracking('Form engagement');
  //   } else if (target.closest('button[type="submit"].mktoButton')) {
  //     setTimeout(() => {
  //       const hasError = [...stepTwoInputs].some((stepTwoInput) => {
  //         const errDiv = stepTwoInput.querySelector('.mktoError');
  //         return errDiv && window.getComputedStyle(errDiv).display !== 'none';
  //       });

  //       if (!hasError && window.getComputedStyle(submitBtn).display !== 'none') {
  //         gaTracking('Step 2 Completion');
  //       }
  //     }, 1000);
  //   }
  // });
};
