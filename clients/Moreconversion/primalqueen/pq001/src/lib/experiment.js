import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const itemData = [
    {
      img_src: 'https://primalqueen.com/cdn/shop/files/1_700x535.png?v=1696349447',
      text: 'bamboo lid glass jar'
    },
    {
      img_src: 'https://primalqueen.com/cdn/shop/files/1_700x535.png?v=1696349447',
      text: 'on-the-go pill case'
    },
    {
      img_src: 'https://primalqueen.com/cdn/shop/files/1_700x535.png?v=1696349447',
      text: 'mystery gift'
    }
  ];

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

  document.querySelector('.package1 .price_text2').insertAdjacentHTML(
    'afterend',
    `<div class="cstm_package_list">
  
  <div class="cstm_list_items">
  ${itemData
    .map((data) => {
      return `<div class="cstm_item">
    <img src="${data.img_src}" alt="">
    <div class="text_div">
      
      <span class="info_text">${data.text}</span>
    </div>
    </div>`;
    })
    .join('')}
    
  </div>
  
</div>`
  );

  document.querySelectorAll('.packge_button_outer a').forEach((btn) => {
    //eslint-disable-next-line no-param-reassign
    btn.innerText = 'BUY NOW';
  });

  document.querySelector('.package2 .pkage_list li:nth-child(1)').firstChild.textContent =
    '30-day supply delivered monthly';

  document
    .querySelectorAll(
      '.package2 .pkage_list li:nth-child(2), .package2 .pkage_list li:nth-child(3), .package2 .pkage_list li:nth-child(4)'
    )
    .forEach((el) => {
      //eslint-disable-next-line no-param-reassign
      el.innerHTML = el.innerHTML.replace('Free', "<span id='free_text'>Free</span>");
    });

  document.querySelector('.package2 .pkage_list li:nth-child(2)').innerHTML = 'Delivered monthly';
};
