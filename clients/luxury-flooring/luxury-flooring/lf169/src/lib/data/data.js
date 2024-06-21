import { deliveryReturns } from '../components/deliveryReturns';
import { installation } from '../components/installation';
import { warranty } from '../components/warranty';

export const keyBenefitsData = [
  {
    benifit: '<b>Real Oak</b> wood flooring sourced from Europe'
  },
  {
    benifit: '<b>Unfinished</b> - make it yours by applying different oils or lacquers!'
  },
  {
    benifit: '<b>Rustic grade</b> highlights the unique charm of each plank'
  },
  {
    benifit: 'Works well in: <b>Bedrooms, Dining rooms, Kitchens and Lounges</b>'
  },
  {
    benifit: '<b>Tongue & Groove</b> joining method'
  },
  {
    benifit: '<b>Underfloor heating</b> compatible'
  },
  {
    benifit: '<b>25-years</b> manufacturing guarantee'
  },
  {
    benifit: '<b>Underfloor heating</b> compatible'
  },
  {
    benifit: '<b>25-years</b> manufacturing guarantee'
  }
];

export const cardData = [
  {
    image:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/img_unfinished.png',
    title: 'Unfinished Wood - Make it Yours',
    description:
      "This timeless herringbone bestseller comes unfinished, so you'll be able to match it to any space in your home. Use oils or lacquers to create a style you love."
  },
  {
    image:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/img_contact.png',
    title: 'Friendly Flooring Experts',
    description:
      "Our experienced team are always happy to help if you have any questions - big or small! <a href=''>Get in touch today.</a>"
  },
  {
    image:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/img_stock.png',
    title: 'Store Your Floor with us for FREE',
    description:
      "Renovation taking over your home? Let us store your floor conveniently at our warehouse, ready to ship when you are. Head to our <a href=''> stock holding page</a> to find out more."
  },
  {
    image:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/img_warranty.png',
    title: '30-day Hassle Free Returns',
    description:
      "We hope you’ll love your new floor as much as we do! But in the unlikely event that you’re not happy or if you have any leftover packs, our 30-day hassle free returns policy is here to save the day. Head to our <a href=''>returns page</a> for full details."
  }
];

export const uspsData = [
  {
    imageUrl:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/icon_delivery.png',
    text: 'Delivery Available from&nbsp<strong>Mon, 26 Sept</strong>'
  },
  {
    imageUrl:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/icon_stock.png',
    text: 'Pay 25% Now, <a href="/hold-your-stock">Get&nbspYour&nbspFloor&nbspLater</a>'
  },
  {
    imageUrl:
      'https://www.luxuryflooringandfurnishings.co.uk/media/wysiwyg/ab_tests/test303/icon_price.png',
    text: 'Price Match Promise'
  }
];

export const floorSpecifications = [
  {
    'Product Code:': 'HE6000',
    isTooltip: false
  },
  {
    'Species:': 'Oak',
    isTooltip: false
  },
  {
    'Finish:': 'Unfinished',
    isTooltip: false
  },
  {
    'Surface:': 'Smooth',
    isTooltip: false
  },
  {
    'Grade:': 'Rustic',
    isTooltip: true
  },
  {
    'Edge Detail:': '4 Sides Micro Bevel',
    isTooltip: false
  },
  {
    'Construction:': 'Multi Ply',
    isTooltip: false
  },
  {
    'Underfloor Heating:': 'Suitable',
    isTooltip: false
  },
  {
    'Product Origin:': 'Europe',
    isTooltip: false
  },
  {
    'Installation Method:': 'Nailed or Glued Down',
    isTooltip: false
  },
  {
    'Room Suitability:': 'Bedroom, Dining, Kitchen, Lounge',
    isTooltip: false
  },
  {
    'Range:': 'Painswick',
    isTooltip: false
  },
  {
    'Plank Style:': 'Herringbone/Parquet',
    isTooltip: false
  },
  {
    'Guarantee:': '25 Years',
    isTooltip: false
  }
];

export const floorMeasurements = [
  {
    'Length:': '300mm'
  },
  {
    'Width:': '80mm'
  },
  {
    'Thickness:': '10mm'
  },
  {
    'Wear layer:': '3mm'
  },
  {
    'Pack Weight:': '7kg'
  },
  {
    'Pack Size:': '0.96m2'
  }
];

export const accordionData = [
  {
    uid: 'Delivery & Returns',
    key: 'Delivery-Returns',
    body: deliveryReturns()
  },
  {
    uid: 'Installation &amp; Care',
    key: 'Installation-Care',
    body: installation()
  },
  {
    uid: 'Warranty',
    key: 'Warranty',
    body: warranty()
  }
];

export const productDescData = [
  {
    text: `If you’re a fan of rustic charm, you’ll fall in love with our Painswick Fresh Engineered Oak floor. Knots and grains
          dance across the surface of the real wood top layer, creating a look that simply exudes character.`
  },
  {
    text: 'Featuring a sought-after herringbone design, this gorgeous floor is guaranteed to capture attention.'
  },
  {
    text: `Crafted from engineered oak,
          it boasts all the beauty of solid wood with the practicality of engineered construction, making it a top choice for
          your modern home.`
  }
];
