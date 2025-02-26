import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const firstFormRow = document.querySelector('.form-row');
  firstFormRow.classList.add(`${ID}__active`);
};

export default () => {
  setup(); //use if needed

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('label.c-btn')) {
      const currentLabel = target.closest('label.c-btn');
      const currentInput = currentLabel.querySelector('input');
      const currentFormRow = currentLabel.closest('.form-row');
      let nextFormRow = currentFormRow.nextElementSibling;
      const isInteriorOption = currentInput?.name === 'interior_condition_opt_1';

      const currentInputValue = currentInput?.value;

      //if no option is selected, skip the next form row
      if (currentInputValue === 'No') {
        nextFormRow = nextFormRow.nextElementSibling;
      }

      //next form row has the dent option
      const nextFormRowInput = nextFormRow.querySelector('input');
      const isDentOption = nextFormRowInput?.name === 'body_scratches_1';

      //if dent option is selected, skip the next form row
      if (isDentOption) {
        nextFormRow = nextFormRow.nextElementSibling;
      }

      console.log('isDentOption: ', isDentOption);

      //if interior option is selected, skip the next form row and show the submit button
      if (isInteriorOption) {
        const submitBtn = document.querySelector('.btn.btn-submit');
        const submitBtnFormRow = submitBtn.closest('.form-row');

        currentFormRow.classList.remove(`${ID}__active`);
        submitBtnFormRow.classList.add(`${ID}__active`);

        return;
      }

      currentFormRow.classList.remove(`${ID}__active`);
      nextFormRow.classList.add(`${ID}__active`);
    }
  });
};
