import setup from './services/setup';
import shared from './shared/shared';
import genericQuestionsWrapper from './components/genericQuestionsWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.product-full-width');
  if (!document.querySelector(`.${ID}__container`)) {
    targetElement
      .querySelector('.page-width')
      ?.insertAdjacentHTML('afterbegin', genericQuestionsWrapper(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  init();
};
