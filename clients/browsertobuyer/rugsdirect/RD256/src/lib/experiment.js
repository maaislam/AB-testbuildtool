import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'gaCustomEvent',
      eventCategory,
      eventAction,
      eventLabel
    });

    console.log('event tracked', eventCategory, eventAction, eventLabel);
  }
};

const getSavingAmount = (sellPrice, originalPrice) => {
  const clean = (str) => parseFloat(str.replace(/[£,]/g, '')); //remove £ and ,

  const sell = clean(sellPrice);
  const original = clean(originalPrice);

  let saving = original - sell;

  //Fix floating point issues
  saving = Math.round((saving + Number.EPSILON) * 100) / 100;

  //If integer, no decimals; else keep 2 decimals
  const formatted = Number.isInteger(saving) ? saving.toString() : saving.toFixed(2);

  return `£${formatted}`;
};

const formatDeliveryText = (text) => {
  //Match "Get it XXX" where XXX is a 3-letter weekday
  const match = text.match(/Get it (\w{3})/i);
  if (!match) return text; //if no match, return original text

  const shortDay = match[1].toLowerCase();
  const dayMap = {
    mon: 'Monday',
    tue: 'Tuesday',
    wed: 'Wednesday',
    thu: 'Thursday',
    fri: 'Friday',
    sat: 'Saturday',
    sun: 'Sunday'
  };

  const fullDay = dayMap[shortDay] || match[1];
  return `Get it ${fullDay}`;
};

const init = () => {
  pollerLite(
    [
      '.variant-selector__toggle-dimensions--container',
      () =>
        document.querySelectorAll('[data-variant-delivery]') &&
        document.querySelectorAll('[data-variant-delivery]').length > 0
    ],
    () => {
      document.documentElement.classList.add(`${ID}-${VARIATION}`);
      try {
        let intervalId;
        const updateDeliveryMessages = () => {
          const listItems = document.querySelectorAll('.variant-selector__list-item');
          listItems.forEach((item) => {
            console.log(item, 'item');
            const sellPriceElem = item.querySelector(
              '.variant-selector__list-item--header > span span.ff-heading'
            );

            const sellPrice = sellPriceElem ? sellPriceElem.textContent : null;
            const OriginalPriceElem = item.querySelector(
              '.variant-selector__list-item--header > span .ff-heading.block'
            );
            const originalPrice = OriginalPriceElem ? OriginalPriceElem.textContent : null;

            console.log(sellPrice, originalPrice);

            if (sellPrice && originalPrice) {
              const savingsPrice = getSavingAmount(sellPrice, originalPrice);
              const targetPoint = item.querySelector('.variant-selector__list-item--header > span');
              console.log(targetPoint, 'targetPoint');
              if (!targetPoint.querySelector(`.${ID}__savingsPrice`)) {
                targetPoint.insertAdjacentHTML(
                  'beforeend',
                  `<span class="${ID}__savingsPrice block">Save ${savingsPrice}</span>`
                );
              }
            }

            const controlDDeliverMsgElem = item.querySelector('[data-variant-delivery] span');
            const deliveryMsg = controlDDeliverMsgElem ? controlDDeliverMsgElem.textContent : null;
            controlDDeliverMsgElem.textContent = formatDeliveryText(deliveryMsg);
          });
        };
        //updateDeliveryMessages();
        //Invoke the function every 5 milliseconds
        intervalId = setInterval(updateDeliveryMessages, 50);

        setTimeout(() => {
          clearInterval(intervalId);
        }, 250);
      } catch (Err) {
        console.log(Err);
      }
    }
  );
};
export default () => {
  setup(); //use if needed
  console.log(ID);
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.variant-selector__btn')) {
      pollerLite([() => target.closest('.variant-selector__btn[open="true"]')], () => {
        trackGAEvent('RD 256', 'drop_down_open');
      });
    }
  });
  init();
};
