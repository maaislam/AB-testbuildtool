import shared from './shared/shared';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  if (VARIATION === 'control') {
    return;
  }
  setUniqueClass();

  //countdown
  const isValidDate = (date) => date.getTime();

  class Countdown {
    constructor(deadlines = []) {
      this.deadlines = deadlines;

      //eslint-disable-next-line prefer-destructuring
      this.currentDeadline = deadlines[0];
      this.deadlines.shift();

      this.currentIndex = 0;

      this.listeners = {
        tick: [],
        update: [],
        expired: [],
        error: []
      };

      this.tick = this.tick.bind(this);
    }

    tick() {
      const now = new Date();
      const { start, end, format } = this.currentDeadline;

      if (!isValidDate(start) || !isValidDate(end)) {
        this.listeners.error.forEach((listener) => listener());
        return;
      }

      const nowSeconds = Math.floor(now / 1000);
      const startSeconds = Math.floor(start / 1000);
      const endSeconds = Math.floor(start / 1000);

      //Start is not passed yet
      if (nowSeconds < startSeconds) {
        //eslint-disable-next-line no-console
        console.warn(`Countdown start: ${start}`);
        return;
      }

      const time = Math.floor((end.getTime() - now.getTime()) / 1000);

      //Timer expired
      if (endSeconds > nowSeconds || time <= 0) {
        if (this.deadlines.length === 0) {
          this.listeners.expired.forEach((listener) => listener());
          return;
        }

        //eslint-disable-next-line prefer-destructuring
        this.currentDeadline = this.deadlines[0];
        this.deadlines.shift();
        this.currentIndex += 1;

        this.listeners.update.forEach((listener) => listener(this.currentIndex));
      }

      const minute = 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(time / day);
      const hours = Math.floor((time % day) / hour);
      const minutes = Math.floor((time % hour) / minute);
      const seconds = time % minute;

      let returnData = {

      };

      //TODO: Refactor this block
      switch (format) {
        case 'DD:HH:MM:SS': {
          returnData = {
            days,
            hours,
            minutes,
            seconds
          };
          break;
        }
        case 'HH:MM:SS': {
          returnData = {
            hours: days > 0 ? days * 24 + hours : hours,
            minutes,
            seconds
          };
          break;
        }
        default: {
          returnData = {
            days,
            hours,
            minutes,
            seconds
          };
          break;
        }
      }
      //eslint-disable-next-line object-curly-newline
      this.listeners.tick.forEach((listener) => listener(returnData));
      const timeToNextSecond = (nowSeconds + 1) * 1000 - now;
      setTimeout(this.tick, timeToNextSecond);
    }

    on(eventName, listener) {
      this.listeners[eventName].push(listener);
    }
  }
  //

  setTimeout(() => {
    const tabWiseDiscount = document
      .querySelector('.DiscountTabsNavigation .Tab.-Active')
      .getAttribute('data-discount');

    const swatchesDiscount = Math.round(
      document.querySelector('.ColorSwatch__Radio:checked').getAttribute('data-variant-discount')
    );

    const saleBox = `
    <section class="salesBox">
      <div class="review-badge"></div>
      <div class="salesBox-tooltip"><div class="tooltip-arrow"></div></div>
      <div class="percentage"><span class="percentage-text"></span></div>
      <div class="priceBox">
        <div class="price-compare">${document.querySelector('.SaleBox__Price .Price--compareAt').innerText}</div>
        <div class="price-highlight">${document.querySelector('.SaleBox__Price .Price--highlight').innerText}</div>
      </div>
    </section>`;

    setTimeout(() => {
      if (
        document.querySelector('.DiscountTabsNavigation').firstChild.classList.contains('-Active')
      ) {
        if (document.querySelector('.percentage-text')) {
          document.querySelector(
            '.percentage-text'
          ).innerHTML = `<b>-${swatchesDiscount}%</b> Sale-Artikel sind <b>schnell ausverkauft.</b> Kaufe jetzt zum <b>Bestpreis.</b>`;
        }
      } else {
        document.querySelector(
          '.percentage-text'
        ).innerHTML = `<b>-${tabWiseDiscount}%</b> Sale-Artikel sind <b>schnell ausverkauft.</b> Kaufe jetzt zum <b>Bestpreis.</b>`;
      }
    }, 200);

    //Mutation observer for price changing....
    //Select the node that will be observed for mutations
       const targetNodePrice = document.querySelector('.ProductMeta__PriceList');

       //Options for the observer (which mutations to observe)
       const configPrice = {
        attributes: true, childList: true, subtree: true
      };

       //Callback function to execute when mutations are observed
       const callbackPrice = () => {
         document.querySelector('.price-compare').innerHTML = document.querySelector('.SaleBox__Price .Price--compareAt').innerHTML;
         document.querySelector('.price-highlight').innerHTML = document.querySelector('.SaleBox__Price .Price--highlight').innerHTML;
       };

       //Create an observer instance linked to the callback function
       const observerPrice = new MutationObserver(callbackPrice);

       //Start observing the target node for configured mutations
       observerPrice.observe(targetNodePrice, configPrice);

    //Mutation observer for color swatches and discount price.
    const targetNode = document.querySelector('.ProductForm');

    //Options for the observer (which mutations to observe)
    const config = {
      attributes: true,
      childList: true,
      subtree: true
    };

    //Callback function to execute when mutations are observed
    const callback = () => {
      if (
        document.querySelector('.DiscountTabsNavigation').firstChild.classList.contains('-Active')
      ) {
        if (
          document
            .querySelector('.ColorSwatch__Radio:checked')
            .getAttribute('data-variant-discount') > 0
        ) {
          document.querySelector('body').classList.add('__discount');
          document.querySelector('.salesBox').classList.remove('hidden');
          document
            .querySelector('.ProductMeta__PriceList .ProductMeta__Price')
            .classList.add('hidden');
          document.querySelector('.ProductMeta__UnitPrice').classList.remove('show');
          document.querySelector('.ProductMeta__UnitPrice').classList.add('hidden');
          document.querySelector('.ProductMeta__TaxNote').classList.remove('show');
          document.querySelector('.ProductMeta__TaxNote').classList.add('hidden');
          document.querySelector('.ProductMeta__Shipping').classList.remove('show');
          document.querySelector('.ProductMeta__Shipping').classList.add('hidden');
          document.querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight') &&
            document
              .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
              .classList.remove('show');
          document.querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight') &&
            document
              .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
              .classList.add('hidden');

          if (document.querySelector('.percentage-text')) {
            document.querySelector('.percentage-text').innerHTML = `<b>-${Math.round(
              document
                .querySelector('.ColorSwatch__Radio:checked')
                .getAttribute('data-variant-discount')
            )}%</b> Sale-Artikel sind <b>schnell ausverkauft.</b> Kaufe jetzt zum <b>Bestpreis.</b>`;
          }
          setTimeout(() => {
            if (document.querySelector('.jdgm-widget.jdgm-preview-badge.jdgm--done-setup')) {
              document.querySelector('.review-badge').insertAdjacentElement('beforeend', document.querySelector(
                '.jdgm-widget.jdgm-preview-badge.jdgm--done-setup'
              ));
            }
          }, 200);
        } else {
          if (document.querySelector('.salesBox')) {
            document.querySelector('.salesBox').classList.add('hidden');
          }
          document.querySelector('body').classList.remove('__discount');
          document
            .querySelector('.ProductMeta__PriceList .ProductMeta__Price').classList.remove('hidden');
          document.querySelector('.ProductMeta__Shipping').classList.add('show');
          document.querySelector('.ProductMeta__Shipping').classList.remove('hidden');
          document.querySelector('.ProductMeta__UnitPrice').classList.remove('u-hidden');
          document.querySelector('.ProductMeta__UnitPrice').classList.remove('hidden');
          document.querySelector('.Price--highlight').classList.add('show');
          document.querySelector('.ProductMeta__TaxNote').classList.add('show');
          document.querySelector('.ProductMeta__PriceList').classList.add('show');
          if (
            document.querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--compareAt')
          ) {
            document
              .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--compareAt')
              .classList.add('hidden');
          }
          if (
            document.querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
          ) {
            document
              .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
              .classList.add('variantPriceColorControl');
          }
          if (
            document.querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
          ) {
            document
              .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
              .classList.add('show');
          }
          setTimeout(() => {
            if (!document.querySelector('.product-price-review-css .jdgm-widget.jdgm-preview-badge.jdgm--done-setup')) {
              document.querySelector('.product-price-review-css').insertAdjacentElement('beforeend', document.querySelector('.review-badge .jdgm-widget.jdgm-preview-badge.jdgm--done-setup'));
            }
          }, 200);
        }
      } else {
        document.querySelector('body').classList.add('__discount');
        document
            .querySelector('.ProductMeta__PriceList .ProductMeta__Price')
            .classList.add('hidden');
        document.querySelector('.percentage-text').innerHTML = `<b>-${document
          .querySelector('.DiscountTabsNavigation .Tab.-Active')
          .getAttribute(
            'data-discount'
          )}%</b> Sale-Artikel sind <b>schnell ausverkauft.</b> Kaufe jetzt zum <b>Bestpreis.</b>`;
        if (document.querySelector('.salesBox')) {
          document.querySelector('.salesBox').classList.remove('hidden');
        }
        document.querySelector('.ProductMeta__UnitPrice').classList.remove('show');
        document.querySelector('.ProductMeta__UnitPrice').classList.add('hidden');
        document.querySelector('.ProductMeta__TaxNote').classList.remove('show');
        document.querySelector('.ProductMeta__TaxNote').classList.add('hidden');
        document.querySelector('.ProductMeta__Shipping').classList.remove('show');
        document.querySelector('.ProductMeta__Shipping').classList.add('hidden');
        if (document
          .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')) {
            document
            .querySelector('.ProductMeta__PriceList .ProductMeta__Price.Price--highlight')
            .classList.remove('show');
          }
      }
    };

    //Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    //Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    const semiColon = '<span class="semiColon">:</span>';

    window.addEventListener('load', () => {
      const { startDate, endDate } = window.snocks.settings.countdown;

      const dates = [
        {
          //The date pattern set in section settings ('yyyy-mm-dd') isn't an officially supported
          //format for Date constructor. In some browsers like chrome it's working perfectly
          //fine but in others (e.g. Safari) this would result in an invalid date object here.
          //See: https://stackoverflow.com/a/4310986/18794537
          start: new Date(startDate.replace(/-/g, '/')),
          end: new Date(endDate.replace(/-/g, '/')),
          format: 'HH:MM:SS'
        }
      ];

      const countdown = new Countdown(dates);
      const countdownTimerEls = document.querySelectorAll('.tooltip-arrow');

      countdown.on('tick', (data) => {
        //TODO: Fix ESlint error.
        //eslint-disable-next-line arrow-body-style
        Object.keys(data).forEach((key) => {
          //eslint-disable-next-line no-param-reassign
          return data[key] === undefined ? delete data[key] : {

          };
        });

        countdownTimerEls.forEach((el) => {
          //We are assigning to a HTML Element so we don't need to be concerned about side effects.
          //eslint-disable-next-line no-param-reassign
          el.innerHTML = Object.entries(data)
            .map((item) => {
              let timeStr = `0${item[1]}`;

              if (timeStr.length === 4) {
                timeStr = timeStr.slice(-3);
              } else {
                timeStr = `${timeStr.slice(-2)}`;
              }
              return `<span class="timer__Item">${timeStr}</span>`;
            })
            .join(`${semiColon}`);
        });
      });

      countdown.on('expired', () => {
        countdownTimerEls.forEach((el) => {
          //We are assigning to a HTML Element so we don't need to be concerned about side effects.
          //eslint-disable-next-line no-param-reassign
          el.parentNode.parentNode.style.display = 'none';
        });
      });

      countdown.tick();
    });

      document.querySelector('.SaleBox').insertAdjacentHTML('beforebegin', saleBox);

    if (swatchesDiscount === 0) {
      if (document.querySelector('.SaleBox')) {
        document.querySelector('.salesBox').classList.add('hidden');
      }
    }
  }, 10);
  //-----------------------------
  //...
};
