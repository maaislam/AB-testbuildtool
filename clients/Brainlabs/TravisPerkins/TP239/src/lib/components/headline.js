import { tickIcon } from '../data';

const headline = (id, { name, tradeCategory, traderIcon, userHasDataPoint }) => {
  const htmlStr = `<div class="${id}__headline">
        <span class="${id}__headline--tick">${tickIcon}</span>
        <span class="${id}__headline--para">Hi ${name}, success! You're logged in and will receive
            discount ${userHasDataPoint ? 'for: ' : ''}</span>
        <div class="${id}__headline--traderinfo ${userHasDataPoint ? '' : `${id}__hide`}">
            <div class="trader-icon">${traderIcon}</div>
            <span class="trader-type">${tradeCategory}</span>
        </div>
    </div>`;

  return htmlStr;
};

export default headline;
