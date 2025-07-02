import setup from './services/setup';
import shared from './shared/shared';

const { VARIATION } = shared;

const reviews = {
  1: [
    {
      author: 'Gloria D.',
      age: 76,
      text: "People guess that I am in my 40's or 50's, but I am really 76 years old!! Thanks to Ayurveda, over the past few years, for the great improvement in my skin!",
      rating: 5
    },
    {
      author: 'Louise M.',
      age: 62,
      text: "People actually can't believe that I don't wear makeup and comment on how natural and glowing my skin is... they literally don't believe a product can do this and don't believe that I am not enhanced in anyway.",
      rating: 4
    },
    {
      author: 'Marlene J.',
      age: 73,
      text: 'No one believes I am 73. I get many compliments even from my hubby. I use it twice a day.',
      rating: 5
    },
    {
      author: 'Christine T.',
      age: 67,
      text: "I've used soooo many lotions, creams & oils on my skin, but did not compare to the silkiness of body glam! Stays soft all day! Wish it came in a large tub!",
      rating: 5
    },
    {
      author: 'Sandyi O.',
      age: 56,
      text: 'Your products have now become a staple in my daily life. All my lotions I used are gone... have been using for over 8 months. These 56 year old legs are showing off this spring!!!',
      rating: 4
    }
  ],
  2: [
    {
      author: 'Marlene J.',
      age: 73,
      text: 'No one believes I am 73. I get many compliments even from my hubby. I use twice a day.',
      rating: 5
    },
    {
      author: 'Ashley W.',
      age: 71,
      text: "My husband surprised me by asking, 'What have you been doing? Your laugh lines are gone.' Most of the laugh lines around my eyes have disappeared — and I laugh a LOT.",
      rating: 4
    },
    {
      author: 'Stephanie E.',
      age: null,
      text: 'After 3 months of using this Elixir, most of my wrinkles are gone and I look 8 years younger.',
      rating: 5
    },
    {
      author: 'Peggy H.',
      age: 70,
      text: "My attending doctor came in, sat down and began his questions. His first one was, 'How old are you?' 'I will be 70 this month' And his response was 'That's hard to believe! You look great!'",
      rating: 4
    },
    {
      author: 'Kym N.',
      age: 61,
      text: 'I am constantly told I look 40 years old which thrills me!',
      rating: 5
    }
  ],
  3: [
    {
      author: 'Carol R.',
      age: 70,
      text: 'I have tried many products but this is truly the best. I had rosacea, gone! My crepey skin on my whole body has improved greatly. The fact these are natural oils makes me very happy! Buy it!!',
      rating: 5
    },
    {
      author: 'Lynn L.',
      age: 61,
      text: "These Day and Night Oils from Ayurveda changed my life. These oils have done more for me than anything I have ever used in my life. I am 61 and I finally am able to say I am happy with the skin I'm in.",
      rating: 4
    },
    {
      author: 'Kristine',
      age: 54,
      text: "After about 3 months, I was blown away when my husband, daughter and friends mentioned that they couldn't believe I had no work done! I'm 54 and have decided to go natural in my skincare, and am so happy I chose this Elixer!",
      rating: 5
    },
    {
      author: 'Susan L.',
      age: 70,
      text: 'I never really saw a difference in my skin with any creams or oils until I took a chance with Ayurveda. I finally, first time ever could see my skin as creamy and moisturized. Exactly what I have been searching for.',
      rating: 5
    },
    {
      author: 'Janelle S.',
      age: 65,
      text: "When I started using Ayurveda, people really commented saying I looked good, younger and was glowing etc. I noticed it myself too. I'm back to using Ayurveda and won't live without it now.",
      rating: 4
    }
  ]
};
//STEP 1: Load CSS
const loadCSS = (href) => {
  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    document.head.appendChild(link);
  });
};

//STEP 2: Load Swiper JS
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    document.body.appendChild(script);
  });
};
//STEP 3: When ready, inject HTML and initialize Swiper
async function initCarousel() {
  await loadCSS('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');

  await loadScript('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js');
  console.log('I am here');
  const container = document.createElement('div');
  container.className = 'swiper cart-testimonial-swiper';
  container.innerHTML = `
  <div class="swiper-wrapper" id="testimonialWrapper"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-pagination"></div>
`;

  const referenceEl = document.querySelector('.cart_testimo_cu');
  if (referenceEl && referenceEl.parentNode) {
    referenceEl.parentNode.insertBefore(container, referenceEl);
  } else {
    document.body.appendChild(container);
  }

  const wrapper = container.querySelector('#testimonialWrapper');
  const reviewsForVariation = reviews[VARIATION] || reviews[1];
  reviewsForVariation.forEach(({ rating, text, author, age }) => {
    const stars = '★'.repeat(rating).padEnd(5, '☆');
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `
    <div class="cart_testimo_cu">
      <p>${stars
        .split('')
        .map((s) => `<span class="star_rat">${s}</span>`)
        .join('')}</p>
      <p>"${text}"</p>
      <p class="author-meta">${author} <span>(Age ${age})</span></p>
    </div>
  `;
    wrapper.appendChild(slide);
  });

  const swiper = new window.Swiper('.cart-testimonial-swiper', {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  console.log('🚀 ~ initCarousel ~ swiper:', swiper);
}
export default () => {
  setup(); //use if needed

  initCarousel();
};
