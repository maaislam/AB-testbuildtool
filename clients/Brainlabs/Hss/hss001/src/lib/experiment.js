import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const anchorPoint = document.querySelector('b .pdps1cTextSec:not(.onlyMobileView) .date_selection .hire_now #beforePriceDisplay');

  const hireLonger = `<div class='${ID}__hireLonger'>
    <div class='${ID}__hireLonger-header'>
      <div class='${ID}__hireLonger-header-title'>Hire longer at no extra cost</div>
      <div class='${ID}__hireLonger-header-details'>Hiring for 7 days is the same as x days, giving you more time for the same price.</div>
    </div>
    <div class='${ID}__hireLonger-options'>
      <form>
        <label class='${ID}__hireLonger-option'>
          <input type="radio" id="hireDayWise" name="hireOption" value="1">
          <span for="hireDayWise">Hire for 7 days</span>
        </label>
        <label class='${ID}__hireLonger-option ${ID}__active'>
          <input type="radio" id="noThanks" name="hireOption" value="2" checked="checked">
          <span for="noThanks">No thanks</span>
        </label>
      </form>
    </div>
    <div>
      <span class='${ID}__hireLonger-endDateText'>New end date:</span>
      <span class='${ID}__hireLonger-date'>10/10/2023</span>
    </div>
    <div class='${ID}__hireLonger-offer'>X extras day free</div>
  </div>`;
  anchorPoint.insertAdjacentHTML('beforebegin', hireLonger);
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__hireLonger-option`)) {
      const option = target.closest(`.${ID}__hireLonger-option`);
      const radioBtn = option.querySelector('input');
      if (radioBtn.checked) {
        const allOptions = document.querySelectorAll(`.${ID}__hireLonger-option`);
        allOptions.forEach((otherOption) => {
          if (otherOption !== option) {
            otherOption.classList.remove(`${ID}__active`);
          }
        });
        option.classList.add(`${ID}__active`);
      }
    }
  });
};
