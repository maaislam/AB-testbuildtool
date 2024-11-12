/*eslint-disable no-param-reassign */
import setup from './services/setup';

const newTickIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.6 13.1995L14.65 6.14951L13.25 4.74951L7.6 10.3995L4.75 7.54951L3.35 8.94951L7.6 13.1995ZM2 17.9995C1.45 17.9995 0.979333 17.8038 0.588 17.4125C0.196667 17.0212 0.000666667 16.5502 0 15.9995V1.99951C0 1.44951 0.196 0.978845 0.588 0.587512C0.98 0.196178 1.45067 0.000178385 2 -0.000488281H16C16.55 -0.000488281 17.021 0.195512 17.413 0.587512C17.805 0.979512 18.0007 1.45018 18 1.99951V15.9995C18 16.5495 17.8043 17.0205 17.413 17.4125C17.0217 17.8045 16.5507 18.0002 16 17.9995H2Z" fill="#A1803F"/>
  </svg>`;

const newCrossIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.71 1.70954L14.2901 0.289551L8.00004 6.58955L1.71002 0.289551L0.290039 1.70954L6.59004 7.99955L0.290039 14.2896L1.71002 15.7096L8.00004 9.40955L14.2901 15.7096L15.71 14.2896L9.41004 7.99955L15.71 1.70954Z" fill="#5F5F5F"/>
  </svg>
  `;

const init = () => {
  const variantDiscounts = document.querySelectorAll('.variant-discount');

  variantDiscounts.forEach((variantDiscount) => {
    variantDiscount.innerHTML = variantDiscount.innerHTML
      .replace(/✅/g, newTickIcon) //Replace all occurrences of ✅
      .replace(/❌ No free shipping/g, `${newCrossIcon} <span class="no-shipping-text">No free shipping</span>`); //Replace ❌ and wrap text in <span>
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('input[name="Size"]')) {
      const { value } = target;
      const productImg = document.querySelector('.product__media img');

      setTimeout(() => {
        if (value.trim() === '1 Set') {
          productImg.setAttribute('src', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
          productImg.setAttribute('srcset', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
        } else if (value.trim() === '2 Sets') {
          productImg.setAttribute('src', 'https://myshieldsystem.com/cdn/shop/files/Bundle2.Pic3_fc102dd9-924a-441c-9a4d-805547b9d461.jpg?v=1686098515&width=1100');
          productImg.setAttribute('srcset', 'https://myshieldsystem.com/cdn/shop/files/Bundle2.Pic3_fc102dd9-924a-441c-9a4d-805547b9d461.jpg?v=1686098515&width=1100');
        } else if (value.trim() === '3 Sets') {
          productImg.setAttribute('src', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
          productImg.setAttribute('srcset', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
        } else if (value.trim() === '6 Sets') {
          productImg.setAttribute('src', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
          productImg.setAttribute('srcset', 'https://myshieldsystem.com/cdn/shop/files/benefits_homepage_mobile_v4_1_ddb084c0-d21e-4b7a-b71d-2f7d777eb2a0.png?v=1713724744&width=194');
        }
      }, 250);
    }
  });

  init();
};
