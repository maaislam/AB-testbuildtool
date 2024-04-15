//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import allSteps from './components/allSteps';
import { stepsCopy } from './data';
import { obsIntersection } from './helpers/obsIntersection';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const controlStepsSection = document.querySelector('.tiles__item--colored1').closest('section');
  controlStepsSection.classList.add(`${ID}__hide`);

  //render new section

  document.querySelector(`.${ID}__steps--section`)?.remove();

  controlStepsSection.insertAdjacentHTML('afterend', allSteps(ID, stepsCopy));

  const newStepsElm = document.querySelector(`.${ID}__steps--section`);
  const intersectingCalback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      console.log('Conditions Met');
      console.log('User has seen the new element');
      document.body.classList.add(`${ID}__seen`);
      document.querySelectorAll(`.${ID}__step`).forEach((stepElm, index) => {
        stepElm.classList.add(`${ID}__animate--${index + 1}`);
      });
    }
  };

  const intersectionConfig = {
    threshold: 0.3
  };

  obsIntersection(newStepsElm, intersectingCalback, intersectionConfig);

  newStepsElm.addEventListener('click', (e) => {
    if (e.target.matches(`.${ID}__join--btn`) || e.target.closest(`.${ID}__join--btn`)) {
      console.log('User clicks the “Join Today” button after the new steps element');
    }
  });
};
