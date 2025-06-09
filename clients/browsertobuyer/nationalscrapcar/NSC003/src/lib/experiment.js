import setup from './services/setup';
import shared from './shared/shared';
import progressContainer from './components/progressContainer';

const { ID } = shared;

const toggleScreens = (hideSelector, showSelector) => {
  const hideElem = document.querySelector(`.decoy_loader_screen ${hideSelector}`);
  const showElem = document.querySelector(`.decoy_loader_screen ${showSelector}`);
  if (hideElem) hideElem.style.display = 'none';
  if (showElem) showElem.style.display = 'block';
};

const init = () => {
  document.body.classList.add('is-decoy');
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const formElement = document.querySelector('#form');
    if (target.closest('#submit:not(.next-step)') && formElement.checkValidity()) {
      e.preventDefault();
      const targetPoint = document.querySelector('.wrap.page-step-2 main');
      if (!document.querySelector(`.${ID}__decoy`)) {
        targetPoint.insertAdjacentHTML('afterbegin', progressContainer(ID));
        //Handle screen transitions
        setTimeout(() => toggleScreens('.screen1', '.screen2'), 5000);
        //Final step debug log
        setTimeout(() => {
          target.closest('#submit').classList.add('next-step');
          //target.closest('#submit').click();
        }, 18000);
      }
    }
  });

  init();
};
