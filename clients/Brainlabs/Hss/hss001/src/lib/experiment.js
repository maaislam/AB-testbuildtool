import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('b .pdps1cTextSec:not(.onlyMobileView) .date_selection .hire_now #beforePriceDisplay');

  const hireLonger = `<div class='${ID}__hireLonger'>
    <div class='${ID}__hireLonger-header'>
      <div class='${ID}__hireLonger-header-title'>Hire longer at no extra cost</div>
      <div class='${ID}__hireLonger-header-details'>Hiring for 7 days is the same as x days, giving you more time for the same price.</div>
    </div>
    <div class='${ID}__hireLonger-options'>
      <form>
        <div class='${ID}__hireLonger-option'>
          <input type="radio" id="hireDayWise" name="hireOption" value="1">
          <label for="hireDayWise">Hire for 7 days</label>
        </div>
        <div class='${ID}__hireLonger-option'>
          <input type="radio" id="noThanks" name="hireOption" value="2" checked="checked">
          <label for="noThanks">No thanks</label>
        </div>
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
