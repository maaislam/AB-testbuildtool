/*eslint-disable no-param-reassign */
import setup from './services/setup';

const newTickIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.6 13.1995L14.65 6.14951L13.25 4.74951L7.6 10.3995L4.75 7.54951L3.35 8.94951L7.6 13.1995ZM2 17.9995C1.45 17.9995 0.979333 17.8038 0.588 17.4125C0.196667 17.0212 0.000666667 16.5502 0 15.9995V1.99951C0 1.44951 0.196 0.978845 0.588 0.587512C0.98 0.196178 1.45067 0.000178385 2 -0.000488281H16C16.55 -0.000488281 17.021 0.195512 17.413 0.587512C17.805 0.979512 18.0007 1.45018 18 1.99951V15.9995C18 16.5495 17.8043 17.0205 17.413 17.4125C17.0217 17.8045 16.5507 18.0002 16 17.9995H2Z" fill="#A1803F"/>
  </svg>`;

const newCrossIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.71 1.70954L14.2901 0.289551L8.00004 6.58955L1.71002 0.289551L0.290039 1.70954L6.59004 7.99955L0.290039 14.2896L1.71002 15.7096L8.00004 9.40955L14.2901 15.7096L15.71 14.2896L9.41004 7.99955L15.71 1.70954Z" fill="#5F5F5F"/>
  </svg>
  `;

const preloadImage = () => {
  //List of image URLs you want to preload
  const imageUrls = [
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/Region_-_Gallery_Viewer.png?v=1731532814',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/4_month_supply_4b9d5502-48da-49b4-8917-3a25335a9869.png?v=1731533048',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/6_month_supply_dc1b2ce6-78a0-4c05-9114-ef052bfb5b1d.png?v=1731533047',
    'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/12_month_supply_c4fa82f5-03dd-4463-bf76-235ced1949f5.png?v=1731533047'
  ];

  //Preload images and insert them into the end of the body
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url; //Start preloading the image
    img.style.display = 'none'; //Hide the image

    img.onload = () => {
      document.body.insertAdjacentElement('beforeend', img);
    };
  });
};

const init = () => {
  const productImg = document.querySelector('.product__media img');
  productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/Region_-_Gallery_Viewer.png?v=1731532814');
  productImg.setAttribute('srcset', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/Region_-_Gallery_Viewer.png?v=1731532814');

  const variantDiscounts = document.querySelectorAll('.variant-discount');

  variantDiscounts.forEach((variantDiscount) => {
    variantDiscount.innerHTML = variantDiscount.innerHTML
      .replace(/✅/g, newTickIcon) //Replace all occurrences of ✅
      .replace(/❌ No free shipping/g, `${newCrossIcon} <span class="no-shipping-text">No free shipping</span>`); //Replace ❌ and wrap text in <span>
  });
};

export default () => {
  setup();

  preloadImage();

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('input[name="Size"]')) {
      const { value } = target;
      const productImg = document.querySelector('.product__media img');

      setTimeout(() => {
        if (value.trim() === '1 Set') {
          productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/Region_-_Gallery_Viewer.png?v=1731532814');
          productImg.setAttribute('srcset', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/Region_-_Gallery_Viewer.png?v=1731532814');
        } else if (value.trim() === '2 Sets') {
          productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/4_month_supply_4b9d5502-48da-49b4-8917-3a25335a9869.png?v=1731533048');
          productImg.setAttribute('srcset', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/4_month_supply_4b9d5502-48da-49b4-8917-3a25335a9869.png?v=1731533048');
        } else if (value.trim() === '3 Sets') {
          productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/6_month_supply_dc1b2ce6-78a0-4c05-9114-ef052bfb5b1d.png?v=1731533047');
          productImg.setAttribute('srcset', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/6_month_supply_dc1b2ce6-78a0-4c05-9114-ef052bfb5b1d.png?v=1731533047');
        } else if (value.trim() === '6 Sets') {
          productImg.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/12_month_supply_c4fa82f5-03dd-4463-bf76-235ced1949f5.png?v=1731533047');
          productImg.setAttribute('srcset', 'https://cdn.shopify.com/s/files/1/0644/1349/9629/files/12_month_supply_c4fa82f5-03dd-4463-bf76-235ced1949f5.png?v=1731533047');
        }
      }, 250);
    }
  });

  init();
};
