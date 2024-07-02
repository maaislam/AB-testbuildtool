import setup from './services/setup';

import shared from './shared/shared';

import { greenTickMark, redTickMark } from './assets/svgs';

const { ID } = shared;

export default () => {
  setup();
  const itemData = [
    {
      img_src: 'https://cdn.shopify.com/s/files/1/0805/3971/3813/files/lid-jar.png?v=1719955535',
      text: 'Bamboo lid glass jar'
    },
    {
      img_src: 'https://cdn.shopify.com/s/files/1/0805/3971/3813/files/pill-case.png?v=1719955534',
      text: 'On-the-go pill case'
    },
    {
      img_src: 'https://cdn.shopify.com/s/files/1/0805/3971/3813/files/mystery-gift.png?v=1719955534',
      text: 'Mystery gift'
    }
  ];

  const packageListData = [
    {
      description: "<div><span>30-day supply</span> <span class='extra-text'>delivered monthly</span></div>",
      price: '$49',
      isFree: false
    },
    {
      description: 'Shipping!',
      price: '$12',
      isFree: true
    },
    {
      description: 'Cancel anytime through our online portal',
      price: '',
      isFree: false
    }
  ];

  const packageTable = `
      <div class='package-table'>
          ${packageListData.map((item, index) => `
              <div class='package-row package-row-${index + 1}'>
                <div class='package-check'>${greenTickMark}</div>
                <div class='package-description'>
                    ${item.isFree ? `<span class='free-text'>Free</span><span class='item-text'>${item.description}</span>` : `<span class='item-text'>${item.description}</span>`}
                </div>
                <div class='package-price ${item.isFree ? 'strikethrough' : ''}'>
                    ${item.price}
                </div>
              </div>
          `).join('')}
      </div>
  `;

  const atcBtn = `<button class='atc-btn'>
    <span class='atc-price'>$49</span>
    <span class='atc-text'>Buy Now</span>
  </button>`;

  const uspsHTML = `<div class='usps'>
    <div class='monthly-delivery'>
      <span class='usps-icon'>${redTickMark}</span>
      <span class='usps-text'>Delivered monthly</span>
    </div>
    <div class='guarantee-usp'>
      <span class='usps-icon'>${redTickMark}</span>
      <span class='usps-text'>365 Day Guarantee</span>
    </div>
  </div>`;

  document.querySelector('.pkf_strip').innerHTML = document
    .querySelector('.pkf_strip')
    .innerHTML.replace('<br>', ' ');

  document.querySelectorAll('.pakge_heading').forEach((el) => {
    //eslint-disable-next-line no-param-reassign
    el.innerHTML = el.innerHTML.replace('<br>', ' ');
  });

  document.querySelectorAll('.package').forEach((el) => {
    el.querySelector('.pkage_list').insertAdjacentElement(
      'beforebegin',
      el.querySelector('.pakge_heading')
    );

    el.querySelector('.pakge_heading').insertAdjacentElement(
      'afterend',
      el.querySelector('.price_text2')
    );
  });

  const packageBox1 = `<div class="cstm_package_list ${ID}__packageBox1">
    <div class="free-items-wrapper">
      <div class="free-items">FREE ITEMS</div>
    </div>
    <div class="cstm_list_items">
      ${itemData.map((data) => {
        return `<div class="cstm_item">
                <img src="${data.img_src}" alt="">
                <div class="text_div">
                  <div class="info_text">${data.text}</div>
                </div>
              </div>`;
      }).join('')}
    </div>
    <div class='package-table-wrapper'>
      ${packageTable}
    </div>
    <div class='atc-btn-wrapper'>
      ${atcBtn}
    </div>
    <div class='usps-wrapper'>
      ${uspsHTML}
    </div>
  </div>`;

  if (!document.querySelector(`.${ID}__packageBox1`)) {
    document.querySelector('.package1 .price_text2').insertAdjacentHTML('afterend', packageBox1);
  }

  const packageBox2 = `<div class="cstm_package_list ${ID}__packageBox2">
    <div class="free-items-wrapper">
      <div class="free-items">FREE ITEMS</div>
    </div>
    <div class="cstm_list_items">
      ${itemData.map((data) => {
        return `<div class="cstm_item">
                <img src="${data.img_src}" alt="">
                <div class="text_div">
                  <div class="info_text">${data.text}</div>
                </div>
              </div>`;
      }).join('')}
    </div>
    <div class='package-table-wrapper'>
      ${packageTable}
    </div>
    <div class='atc-btn-wrapper'>
      ${atcBtn}
    </div>
    <div class='usps-wrapper'>
      ${uspsHTML}
    </div>
  </div>`;

  if (!document.querySelector(`.${ID}__packageBox2`)) {
    document.querySelector('.package2 .price_text2').insertAdjacentHTML('afterend', packageBox2);
  }
};
