/*eslint-disable no-param-reassign */
import { pdpDeliveryIcon,
  pdpFlexiblePaymentIcon,
  pdpPriceMatchPromiseIcon,
  pdpStockIcon } from '../assets/icons';
import { pollerLite } from '../helpers/utils';

const dropdownData = [
  {
    title: 'Next-Day Delivery to Site',
    icon: pdpDeliveryIcon,
    content: `<p>We’ll deliver your order the very next day, so you won’t have to worry about delays holding up your projects.</p>
        <p>And forget the hassle of transporting your goods - we'll send them straight to your site so you can focus on the important stuff.</p>
        <p>Not ready to receive your order yet? Ask your account manager about our <a href='https://www.luxuryflooringandfurnishings.co.uk/hold-your-stock'>Stock Holding service</a>.</p>
        `
  },
  {
    title: 'Huge Stock Levels',
    icon: pdpStockIcon,
    content: `<p>Our warehouse is based in the UK and is carefully stocked to make sure the majority of our floors are available immediately.</p>
        <p>Whether you need a floor for a one-off project or a collection of flooring for a big commercial deal, we’ll make sure you’ve got everything you need, when you need it.</p>`
  },
  {
    title: 'Price Match Promise',
    icon: pdpPriceMatchPromiseIcon,
    content: `<p>We watch the market closely to make sure you’re always getting the lowest price. But on the off chance you find an identical floor with another UK trade supplier, we’ll match it penny to penny!</p>
        <p>Ask your account manager about our Price Match Promise today.</p>`
  },
  {
    title: 'Flexible Payments',
    icon: pdpFlexiblePaymentIcon,
    content: `<p>We offer flexible payment options so you can choose whichever suits your budget.</p>
        <p>Need to get your order placed but still waiting on payment from a client? Our Credit Terms option allows you to get your flooring straight away and cover the cost later!</p>
        <p>Speak to your account manager to find out more.  </p>`
  }
];

const productPage = (ID) => {
  document.body.classList.add(`${ID}__loggedInPdp`);

  pollerLite(['.product-info-price'], () => {
    setTimeout(() => {
      const priceWrapper =
        document.querySelector('.final-price') || document.querySelector('.price-wrapper');

      const oldPriceWrapper = document.querySelector('.flooring-price > .old-price');
      const oldPriceElement = oldPriceWrapper?.lastElementChild;
      const tradePriceTextElem = `<span class="${ID}__tradePriceText only-price">Trade Price: </span>`;

      if (!priceWrapper.querySelector(`.${ID}__tradePriceText`)) {
        priceWrapper.insertAdjacentHTML('afterbegin', tradePriceTextElem);
      }

      if (oldPriceElement && !oldPriceElement.querySelector(`.${ID}__price-label`)) {
        oldPriceElement.insertAdjacentHTML(
          'afterbegin',
          `<span class="${ID}__price-label">was</span>`
        );
      }

      if (!priceWrapper.querySelector(`.${ID}__accordion`)) {
        const spAccordion = document.querySelector('#sp_accordion');
        spAccordion.classList.add(`${ID}__accordion`);
        const accordionHeaderElems = document.querySelectorAll('#sp_accordion .collapsible');
        const accordionContentElems = document.querySelectorAll('#sp_accordion .content');

        accordionHeaderElems.forEach((header, index) => {
          if (!header.querySelector('.pdpIcon')) {
            const iconElem = header.querySelector('h4 .icon svg');
            const titleElem = header.querySelector('h4 em');

            const { title, icon } = dropdownData[index];

            iconElem.classList.add(`${ID}__hide`);
            titleElem.textContent = title;
            iconElem.insertAdjacentHTML('afterend', icon);
          }
        });

        accordionContentElems.forEach((content, index) => {
          if (!content.classList.contains(`${ID}__content`)) {
            content.innerHTML = dropdownData[index].content;
            content.classList.add(`${ID}__content`);
          }
        });
      }

      const upsellWrapperElems = document.querySelectorAll('.upsell-title + .products-grid');
      upsellWrapperElems.forEach((upsellWrapperElem) => {
        const onlyPriceElems = upsellWrapperElem.querySelectorAll('.only-price');
        if (onlyPriceElems.length > 0) {
          onlyPriceElems.forEach((item) => {
            if (!item.textContent.includes('Trade Price')) {
              item.classList.add(`${ID}__tradePriceText`);
              item.textContent = 'Trade Price: ';
            }
          });
        } else {
          const priceElems = upsellWrapperElem.querySelectorAll(
            '[data-price-type="finalPrice"] .price'
          );
          priceElems.forEach((priceElem) => {
            const finalPriceElem = priceElem.closest('[data-price-type="finalPrice"]');
            const priceWrapperElem = priceElem.closest('.price-container');
            priceWrapperElem.classList.add(`${ID}__upsell`);
            if (finalPriceElem.querySelector(`.${ID}__tradePriceText`)) return;

            const tradeTextElem = `<span class="${ID}__tradePriceText only-price">Trade Price: </span>`;
            priceElem.insertAdjacentHTML('beforebegin', tradeTextElem);
          });
        }
      });
    }, 500);
  });
};
export default productPage;
