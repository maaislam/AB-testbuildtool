import setup from './services/setup';
import shared from './shared/shared';
import bannerSection from './components/bannerSection';
import { uspsData } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__bannerSection`)) {
    document.querySelector('main').insertAdjacentHTML('beforebegin', bannerSection(ID, uspsData));
  }

  document.querySelector('main').insertAdjacentHTML(
    'afterend',
    `<div class="section_2">
<div class="section_2_contents">
<h4 class="sec_2_heading">The Smart Dress-Casual Shoe that Combines Style With Orthopedic Comfort</h4>
<span class="sec_2_subheading">Imagine having the elegance and craftsmanship of a traditional leather dress shoe with the comfort of athletic sneakers.</span>
<div class="sec_2_inner"> 
<div class="sec_2_img">
<img src='https://cdn.shopify.com/s/files/1/0464/9346/6777/files/gatsbyshoes.png?v=1722863041'>
</div>
<div class="sec_2_points">
<h4>Gatbsy Shoes are for you if:</h4>
<div class="bullet_points">
  <div class="bullet_point">
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 26.52C16.4478 26.52 19.7544 25.1504 22.1924 22.7124C24.6304 20.2744 26 16.9678 26 13.52C26 10.0722 24.6304 6.7656 22.1924 4.32763C19.7544 1.88966 16.4478 0.52002 13 0.52002C9.55219 0.52002 6.24558 1.88966 3.80761 4.32763C1.36964 6.7656 0 10.0722 0 13.52C0 16.9678 1.36964 20.2744 3.80761 22.7124C6.24558 25.1504 9.55219 26.52 13 26.52ZM18.7383 11.1333L12.2383 17.6333C11.7609 18.1106 10.9891 18.1106 10.5168 17.6333L7.2668 14.3833C6.78945 13.906 6.78945 13.1341 7.2668 12.6618C7.74414 12.1896 8.51602 12.1845 8.98828 12.6618L11.375 15.0485L17.0117 9.40674C17.4891 8.92939 18.2609 8.92939 18.7332 9.40674C19.2055 9.88408 19.2105 10.656 18.7332 11.1282L18.7383 11.1333Z" fill="#1AC70F"/>
</svg>
    <span>You need to <strong>alleviate foot and joint pain</strong> caused by your normal shoes.</span>
  </div>
   <div class="bullet_point">
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 26.52C16.4478 26.52 19.7544 25.1504 22.1924 22.7124C24.6304 20.2744 26 16.9678 26 13.52C26 10.0722 24.6304 6.7656 22.1924 4.32763C19.7544 1.88966 16.4478 0.52002 13 0.52002C9.55219 0.52002 6.24558 1.88966 3.80761 4.32763C1.36964 6.7656 0 10.0722 0 13.52C0 16.9678 1.36964 20.2744 3.80761 22.7124C6.24558 25.1504 9.55219 26.52 13 26.52ZM18.7383 11.1333L12.2383 17.6333C11.7609 18.1106 10.9891 18.1106 10.5168 17.6333L7.2668 14.3833C6.78945 13.906 6.78945 13.1341 7.2668 12.6618C7.74414 12.1896 8.51602 12.1845 8.98828 12.6618L11.375 15.0485L17.0117 9.40674C17.4891 8.92939 18.2609 8.92939 18.7332 9.40674C19.2055 9.88408 19.2105 10.656 18.7332 11.1282L18.7383 11.1333Z" fill="#1AC70F"/>
</svg>
    <span>You need a <strong>professional leather shoe</strong> for work that's comfortable all day.</span>
  </div>
   <div class="bullet_point">
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 26.52C16.4478 26.52 19.7544 25.1504 22.1924 22.7124C24.6304 20.2744 26 16.9678 26 13.52C26 10.0722 24.6304 6.7656 22.1924 4.32763C19.7544 1.88966 16.4478 0.52002 13 0.52002C9.55219 0.52002 6.24558 1.88966 3.80761 4.32763C1.36964 6.7656 0 10.0722 0 13.52C0 16.9678 1.36964 20.2744 3.80761 22.7124C6.24558 25.1504 9.55219 26.52 13 26.52ZM18.7383 11.1333L12.2383 17.6333C11.7609 18.1106 10.9891 18.1106 10.5168 17.6333L7.2668 14.3833C6.78945 13.906 6.78945 13.1341 7.2668 12.6618C7.74414 12.1896 8.51602 12.1845 8.98828 12.6618L11.375 15.0485L17.0117 9.40674C17.4891 8.92939 18.2609 8.92939 18.7332 9.40674C19.2055 9.88408 19.2105 10.656 18.7332 11.1282L18.7383 11.1333Z" fill="#1AC70F"/>
</svg>
    <span>You're <strong>tired of paying high prices</strong> for shoes that fall apart quickly.</span>
  </div>
   <div class="bullet_point">
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 26.52C16.4478 26.52 19.7544 25.1504 22.1924 22.7124C24.6304 20.2744 26 16.9678 26 13.52C26 10.0722 24.6304 6.7656 22.1924 4.32763C19.7544 1.88966 16.4478 0.52002 13 0.52002C9.55219 0.52002 6.24558 1.88966 3.80761 4.32763C1.36964 6.7656 0 10.0722 0 13.52C0 16.9678 1.36964 20.2744 3.80761 22.7124C6.24558 25.1504 9.55219 26.52 13 26.52ZM18.7383 11.1333L12.2383 17.6333C11.7609 18.1106 10.9891 18.1106 10.5168 17.6333L7.2668 14.3833C6.78945 13.906 6.78945 13.1341 7.2668 12.6618C7.74414 12.1896 8.51602 12.1845 8.98828 12.6618L11.375 15.0485L17.0117 9.40674C17.4891 8.92939 18.2609 8.92939 18.7332 9.40674C19.2055 9.88408 19.2105 10.656 18.7332 11.1282L18.7383 11.1333Z" fill="#1AC70F"/>
</svg>
    <span>You need <strong>wide-size shoes</strong> that won't suffocate your feet</span>
  </div>
   <div class="bullet_point">
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 26.52C16.4478 26.52 19.7544 25.1504 22.1924 22.7124C24.6304 20.2744 26 16.9678 26 13.52C26 10.0722 24.6304 6.7656 22.1924 4.32763C19.7544 1.88966 16.4478 0.52002 13 0.52002C9.55219 0.52002 6.24558 1.88966 3.80761 4.32763C1.36964 6.7656 0 10.0722 0 13.52C0 16.9678 1.36964 20.2744 3.80761 22.7124C6.24558 25.1504 9.55219 26.52 13 26.52ZM18.7383 11.1333L12.2383 17.6333C11.7609 18.1106 10.9891 18.1106 10.5168 17.6333L7.2668 14.3833C6.78945 13.906 6.78945 13.1341 7.2668 12.6618C7.74414 12.1896 8.51602 12.1845 8.98828 12.6618L11.375 15.0485L17.0117 9.40674C17.4891 8.92939 18.2609 8.92939 18.7332 9.40674C19.2055 9.88408 19.2105 10.656 18.7332 11.1282L18.7383 11.1333Z" fill="#1AC70F"/>
</svg>
    <span>You want a versatile, stylish leather shoe that can be <strong>dressed up or down.</strong></span>
  </div>
  </div>
</div>
</div>


</div>
</div>`
  );

  const sectionThreeData = [
    {
      src: ''
    },
    {
      src: ''
    },
    {
      src: ''
    }
  ];

  document.querySelector('.section_2').insertAdjacentHTML(
    'afterend',
    `<div class="section_3">
      <div class="section_3_contents">
        <h4 class="sec_3_heading">Hear From Our Happy Customers</h4>
        <span class="sec_3_subheading">Discover why our customers love Gatsby Shoes. Watch their stories and see how our innovative designs have
      transformed their daily footwear experience. From professionals seeking all-day comfort to individuals looking for
      stylish and durable shoes, our customers share their experiences.</span>

        <div class="sec_3_cards">
        ${sectionThreeData
          .map((item) => {
            return `<div class="sec_3_card">
            
          </div>`;
          })
          .join('')}
          
        </div>
      </div>
    </div>`
  );

  document.querySelector('.section_3').insertAdjacentHTML(
    'afterend',
    `<div class="section_4">
      <div class="section_4_contents">
        <div class="sec_4_heading">How We Revolutionized The Traditional Shoe</div>
        <div class="sec_4_items">
          <div class="sec_4_itm">
            <span>GATSBY Shoes</span>
            <img src="https://cdn.shopify.com/s/files/1/0464/9346/6777/files/trad-gatsbyshoes.png?v=1722863040" alt="">
          </div>
          <div class="sec_4_itm">
            <span>Traditional Shoes</span>
            <img src="https://cdn.shopify.com/s/files/1/0464/9346/6777/files/trad-traditional-shoues.png?v=1722863040" alt="">
          </div>
        </div>
      </div>
    </div>`
  );

  const sectionFiveData = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/T1_png.png?v=1722869782'
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/T2_png.png?v=1722869782'
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/T3_png.png?v=1722869782'
    }
  ];

  document.querySelector('.section_4').insertAdjacentHTML(
    'afterend',
    `<div class="section_5">
      <div class="section_5_contents">
        <h4 class="sec_5_heading">Women Love Gifting Our Shoes</h4>
        <div class="sec_5_items">
        ${sectionFiveData
          .map((item) => {
            return `<div class="sec_5_item">
          <img src="${item.src}">
          </div>`;
          })
          .join('')}
        </div>
      </div>
    </div>`
  );

  const sectionSIxData = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/sl1_png.png?v=1722863040'
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/sl2_png.png?v=1722863040'
    },
    {
      src: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/sl3_png.png?v=1722863040'
    }
  ];

  document.querySelector('.section_5').insertAdjacentHTML(
    'afterend',
    `<div class="section_6">
      <div class="section_6_contents">
        <h4 class="sec_6_heading">How Gatbsy Shoes Fits Into Your Daily Life</h4>
        <div class="sec_6_items">
        ${sectionSIxData
          .map((item) => {
            return `<div class='sec_6_item'>
          <img src="${item.src}">
          </div>`;
          })
          .join('')}
        </div>
      </div>
    </div>`
  );

  document.querySelector('.section_6').insertAdjacentHTML(
    'afterend',
    `<div class="section_7">
      <div class="section_7_contents">
        <div class="sec_7_text">
          <h4 class="sec_7_heading">Gatbsy Shoes are for you if:</h4>
          <span class="sec_7_subheading">Our sole incorporates components typically found in athletic performance sneakers, providing exceptional comfort and support. Specifically, in the heel area, we integrate a shock-absorbing construction that complements our orthopedic insole. Together, these features alleviate heel and joint pain by up to 80%, as demonstrated in a comparative study. Participants reported significant reduction in discomfort during the week they wore Gatsby Shoes compared to traditional dress shoes.</span>
          <div class="sec_7_cta">Buy Now With -50%</div>
        </div>
        <div class="sec_7_img">
          <img src="https://cdn.shopify.com/s/files/1/0464/9346/6777/files/for-you.png?v=1722863040" alt="" />
        </div>
      </div>
    </div>`
  );

  const sectionEightData = [
    {
      img_ur:
        'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/fast-delivery.png?v=1722863039',
      heading: 'Fast Delivery',
      desc: 'Enjoy fast delivery with DHL/UPS, ensuring your shoes arrive promptly.'
    },
    {
      img_ur: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/moneyback.png?v=1722863039',
      heading: 'Money Back Guarantee',
      desc: "Shop with confidence knowing we offer a money-back guarantee if you're not satisfied."
    },
    {
      img_ur:
        'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/true-to-size-fit.png?v=1722863039',
      heading: 'True to Size Fit',
      desc: 'Our shoes fit true to size. Wear what you usually wear with ease'
    }
  ];

  document.querySelector('.section_7').insertAdjacentHTML(
    'afterend',
    `<div class="section_8">
      <div class="section_8_contents">
        <h4 class="sec_8_heading">Hear From Our Happy Customers</h4>
        <div class="sec_8_cards">
        ${sectionEightData
          .map((data) => {
            return `<div class="sec_8_card">
          <img src="${data.img_ur}">
          <span class="sec_8_card_heading">${data.heading}</span>
          <span class="sec_8_card_subheading">${data.desc}</span>
          </div>`;
          })
          .join('')}
        </div>
      </div>
    </div>`
  );

  const sectionNineData = [
    {
      name: 'Vern Crona',
      desc: 'I didn’t expect much based purely onthe price, but on an ill-advised risk, I packed these (brand new) and headed for a week of business in Hawai’i. Much to my amazement and pleasure, these performed flawlessly. Comfortable and didn’t fall apart. They’re packed them with care and I t seems like they’re well made.',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    },
    {
      name: 'Rowland Kassulke',
      desc: 'Much better quality than expected. Not sure why we call this style of shoe an “Oxford”. It is a “Derby”. Oxfords have closed lacing at the bottom. Will probably by an additional pair of these in a different style',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    },
    {
      name: 'Pablo Cartwright',
      desc: 'I must say the packaging, presentation and construction of these is superb! They are very well made and with care should last and provide you well. Get taps on the back and front as the soles are not rubberized. They are beauties!',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    },
    {
      name: 'J. Burns',
      desc: 'Bought a pair for my husband to wear for our daughter’s wedding. My husband has bunions, recently had knee surgery & has Parkinson’s. He said they were the most comfortable “dress shoes” he ever wore. And for him to say that actually says a lot. His feet are in such bad shape. So a win!!!',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    },
    {
      name: 'Martin',
      desc: 'Was not sure about these shoes when I purchased them, but they arrived ahead of schedule, and are very comfortable. The quality is much better than I expected for the price we will see how they wear, I may be buying another pair!',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    },
    {
      name: 'Spartacus',
      desc: 'My husbands favorite dress shoes! He wears a 14 and is a pastor!! We ordered blue, to go with a suit!!! He loves these shoes! He just made me order all other colors available! True to size very well made and he says comfort is top notch!',
      img: 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/mc-export-download---2023-12-19T132856.395-min-p-500.png'
    }
  ];

  document.querySelector('.section_8').insertAdjacentHTML(
    'afterend',
    `<div class="section_9">
      <div class="section_9_contents">
        <h4 class="section_9_heading">Trusted By 15,000+ People</h4>
        <div class="section_9_cards">
        ${sectionNineData
          .map((data) => {
            return `<div class="section_9_card">
          <span class="card_name">${data.name}</span>
          <div class="verified_div">
              <img src="https://cdn.shopify.com/s/files/1/0346/8741/8505/files/Img_-_Verified_purchase.svg?v=1722389526" alt="Verified Icon">
              <span>Verified</span>
              </div>
              <div class="rating_div">⭐⭐⭐⭐⭐</div>
              <span class="card_desc">${data.desc}</span>
              <img class="sec_9_card_img" src="${data.img}">
          </div>`;
          })
          .join('')}
        </div>
      </div>
    </div>`
  );

  document.querySelector('.section_9').insertAdjacentHTML(
    'afterend',
    `<div class="section_footer">
<div class="section_footer_contents">
<span>Copyright © 2024 GatsbyShoes LLC</span>
</div>
</div>`
  );
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  if (VARIATION === 'control') return;

  init();
};
