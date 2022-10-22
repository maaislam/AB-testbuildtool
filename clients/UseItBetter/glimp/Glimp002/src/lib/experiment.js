//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import backButton from './components/backButton';
import optionItems from './components/optionItems';
import { renderData } from './data';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  const step5 = document.getElementById('step-5');
  const step4 = document.getElementById('step-4');
  const step5Inner = step5.querySelector('.forms-inner');
  const backBtnContainer = document.querySelector('.back-btn');
  const stepCountContainer = document.querySelector('.cnt-back');
  const totalStepsCount = ' Question <span class="step-no">1</span> of 7</div>';

  step5Inner.classList.add(`${ID}__hide`);

  //insert new html here
  document.querySelector(`.${ID}__forms-inner`)?.remove();
  step5Inner.insertAdjacentHTML('beforebegin', optionItems(ID, renderData));

  //adjust step count
  stepCountContainer.innerHTML = totalStepsCount;

  //click handler
  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__checkbox-label`)) {
      target.closest(`.${ID}__checkbox-label`).classList.toggle('selected');
    } else if (target.closest(`.${ID}__continue`)) {
      const selectedItems = [...document.querySelectorAll(`.${ID}__checkbox-label.selected`)].map(
        (item) => {
          return item.dataset.option;
        }
      );
      step5Inner.classList.remove(`${ID}__hide`);
      target.closest(`.${ID}__forms-inner`).classList.add(`${ID}__hide`);
      console.log(selectedItems);
      //adjust back button functionality
      //insert new back button
      backBtnContainer.querySelector('.btn-back.btnBack').classList.add(`${ID}__hide`);
      backBtnContainer.insertAdjacentHTML('afterbegin', backButton(ID));
      document.querySelector('.step-no').innerText = '6';
    } else if (
      (target.closest('.btn-back.btnBack') && step4.getAttribute('style') === 'display: block;') ||
      target.closest(`.${ID}__btnBack`)
    ) {
      step5Inner.classList.add(`${ID}__hide`);
      document.querySelector(`.${ID}__forms-inner`).classList.remove(`${ID}__hide`);
      document.querySelector(`.${ID}__btnBack`)?.remove();
      backBtnContainer.querySelector('.btn-back.btnBack').classList.remove(`${ID}__hide`);
      target.closest(`.${ID}__btnBack`) && (document.querySelector('.step-no').innerText = '5');
    }

    //if (document.querySelector('.step-no').innerText === '5') {
    //document.querySelector(`.${ID}__forms-inner`).classList.add('in');
    //}
  });
};
