import setup from './services/setup';
import shared from './shared/shared';
import { fakeButton } from './components/fakebutton';
import { modal } from './components/modal';

const { ID, VARIATION } = shared;

const showFormMessage = () => {
  document.querySelector(`.${ID}__modal .sidebar.open`).classList.add('next-step');
};

const collectData = (element) => {
  const data = {};
  element.querySelectorAll('input').forEach((input) => {
    data[input.id] = input.value;
  });
  if (data[`${ID}__email`]) {
    showFormMessage();
  }
};

const addSubmitHandler = () => {
  const formField = document.querySelector(`.${ID}__preOrderForm`);
  formField.addEventListener('submit', (e) => {
    e.preventDefault();
    collectData(formField);
  });
};

const init = () => {
  const orderSampleBtn = document.querySelector('.sample-add-form');
  if (document.querySelector(`.${ID}__fakeATB`)) {
    document.querySelector(`.${ID}__fakeATB`).remove();
  }
  if (document.querySelector(`.${ID}__modal`)) {
    document.querySelector(`.${ID}__modal`).remove();
  }
  orderSampleBtn.insertAdjacentHTML('beforebegin', fakeButton(ID));
  document.body.insertAdjacentHTML('beforeend', modal(ID)); //

  addSubmitHandler();
};

const clearInputData = () => {
  document.querySelectorAll(`.${ID}__preOrderForm input`).forEach((input) => {
    if (input.value) {
      input.value = '';
    }
  });
};

const modalOpen = () => {
  document.querySelector(`.${ID}__modal .sidebar`).classList.add('open');
  document.querySelector(`.${ID}__modal .sidebar-overlay`).classList.add('active');
  document.querySelector(`.${ID}__modal .sidebar-close`).classList.add('active');
  clearInputData();
};

const modalClose = () => {
  document.querySelector(`.${ID}__modal .sidebar`).classList.remove('open');
  document.querySelector(`.${ID}__modal .sidebar-overlay`).classList.remove('active');
  document.querySelector(`.${ID}__modal .sidebar-close`).classList.remove('active');
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  // gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  if (VARIATION === 'control') {
    return;
  }

  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${ID}__fakeATB`)) {
      modalOpen();
    }
    if (
      e.target.closest(`.${ID}__modal .sidebar-close`) ||
      e.target.closest(`.${ID}__modal .sidebar-overlay`)
    ) {
      modalClose();
    }
  });

  init(); //
};
