import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import stepsWrapper from './components/stepsWrapper';
import { firstStepOptions, secondStepOptions } from './data/data';

const updateActiveDot = (step) => {
  document.querySelectorAll('.progress-dots').forEach((group) => {
    group.querySelectorAll('.dot').forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.step === step);
    });
  });
};

const { ID } = shared;
const init = () => {
  const targetPoint = document.querySelector('form');
  const stepThree = document.querySelector('#pardot-form');
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
      const currentStepEl = target.closest('.get-started-container');
      const allSteps = document.querySelectorAll('.get-started-container');

      const currentIndex = Array.from(allSteps).indexOf(currentStepEl);
      const nextStepEl = allSteps[currentIndex + 1];

      if (nextStepEl) {
        currentStepEl.style.display = 'none';
        nextStepEl.style.display = 'block';
      }
    } else if (target.classList.contains('dot') && target.dataset.step) {
      const targetStep = target.dataset.step;
      const allSteps = document.querySelectorAll('.get-started-container');

      allSteps.forEach((step) => {
        step.style.display = step.dataset.step === targetStep ? 'block' : 'none';
      });

      updateActiveDot(targetStep);
    }
  });
  init();
};
