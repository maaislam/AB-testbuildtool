import {
  audioIcon,
  batteryIcon,
  greenIcon,
  layer_1svg,
  layer_2svg,
  layer_3svg,
  usaFlag
} from '../assets/icons';

const prodsData = {
  '/product/rove4-system/': {
    id: 'rove4-system',
    title:
      '<h1 class="post__title post--pdp__title">Inogen <sup>®</sup> Rove 4<sup>™</sup> System</h1>',
    subtext: 'Lightweight & Highly Portable',
    imagesList: [
      'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2.png',
      'https://cdn.inogen.com/wp-content/uploads/2023/04/AC_Power_Supply_Rove4.png',
      'https://cdn.inogen.com/wp-content/uploads/2016/05/G4-single-battery-400px.png',
      'https://cdn.inogen.com/wp-content/uploads/2016/05/Rove-4-Carry-Bag-No-Strap.png'
    ],
    features: [
      {
        icon: layer_1svg,
        title: '2.9lbs',
        isTooltip: true,
        tooltipText: 'test'
      },
      {
        icon: layer_2svg,
        title: '5 Hour Battery life',
        isTooltip: true,
        tooltipText: 'test'
      },
      {
        icon: layer_3svg,
        title: 'FAA Approved',
        isTooltip: false,
        tooltipText: 'test'
      }
    ],
    uspList: ['Free Shipping', 'Financing available', 'Free Eligibility Check', 'RX Required'],
    descriptionText: 'Designed & Assembled in the USA',
    descriptionIcon: usaFlag,
    feature_1: {
      title: 'Lightweight design',
      mainWeight: '4.8lbs ≈',
      subtext: 'with Standard battery',
      items: [
        {
          item: 'Small desktop printer',
          weight: '4.7–5 lbs'
        },
        {
          item: 'Bag of apples <span>(8–10 medium)</span>',
          weight: '4.8 lbs'
        },
        {
          item: "Pair of men's hiking boots",
          weight: '4.5–5 lbs'
        },
        {
          item: 'Cast iron skillet <span>(10-inch)</span>',
          weight: '4.6–5 lbs'
        },
        {
          item: 'Medium-sized laptop <span>(15-inch)</span>',
          weight: '4.8 lbs'
        },
        {
          item: 'Household vacuum <span>(handheld)</span>',
          weight: '4.7–4.9 lbs'
        }
      ]
    },

    feature_2: {
      items: [
        {
          title: 'Long Battery Life',
          subtitle: 'Up to 6 hours 15 minutes on a single charge.',
          icon: batteryIcon,
          bgLink:
            'https://cdn-3.convertexperiments.com/uf/10041653/10041910/frame-56_68dbed5c05f64.png'
        },
        {
          title: 'Only 39 dBA',
          subtitle: 'Quiet as a home refrigerator, on setting 2',
          icon: audioIcon,
          bgLink:
            'https://cdn-3.convertexperiments.com/uf/10041653/10041910/dba-card_68dbed93429a8.png',
          imageLink: ''
        }
      ]
    },

    feature_3: {
      imageLink:
        'https://cdn.inogen.com/wp-content/uploads/2025/07/rove4_top_view_diagram.png.webp',
      items: [
        {
          title: 'FDA Cleared'
        },
        {
          title: '30-Day Risk-Free Trial'
        },
        {
          title: '3-Year Warranty'
        },
        {
          title: 'Customer Support'
        }
      ]
    },
    videoElemSelector: '.rove4_getting_started',
    packages: {
      title: 'Battery Bundles to Keep You Moving',
      subtitle: 'Inogen Rove 6™ Freedom Packages',
      stickyInfo: [
        {
          title: 'What’s included'
        },
        {
          title: 'Standard Batteries'
        },
        {
          title: 'Intermediate Batteries'
        },
        {
          title: 'Extended Batteries'
        },
        {
          title: 'Concentrator'
        },
        {
          title: 'Lifetime warranty'
        },
        {
          title: 'AC/DC power supplies'
        },
        {
          title: 'Carry Bag, User Manual'
        },
        {
          title: 'Bluetooth System'
        },
        {
          title: 'Inogen Connect App'
        }
      ],

      productsInfo: [
        {
          id: '87987788653',
          bgColor: '#DEEFFF',
          heading: '1',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,900',
          atc: 'Add to cart'
        },
        {
          id: '87987788662',
          bgColor: '#B0D9FF',
          heading: '1i',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,980',
          atc: 'Add to cart'
        },
        {
          id: '87987788657',
          bgColor: '#7CBFFF',
          heading: '2',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,900',
          atc: 'Add to cart'
        },
        {
          id: '87987788664',
          bgColor: '#00549E',
          heading: '2i',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,980',
          atc: 'Add to cart'
        },
        {
          id: '87987788659',
          bgColor: '#002D55',
          heading: '3',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$4,340',
          atc: 'Add to cart'
        }
      ]
    },

    productComparison: {
      stickyInfo: {
        title: 'Compare </br>Rove Systems',
        items: [
          {
            title: 'Weight <span>(with Standard battery)</span>'
          },
          {
            title: 'Battery'
          },
          {
            title: 'Hands-free Portability'
          },
          {
            title: 'Noise Level <span>(at flow setting 2)</span>'
          },
          {
            title: 'Warranty'
          },
          {
            title: 'FAA Approved'
          },
          {
            title: 'Designed & Assembled in the USA'
          },
          {
            title: 'Available Direct from Inogen'
          }
        ]
      },
      productsInfo: [
        {
          bgColor: '#95C0EA',
          weightInfo: '2.9lbs',
          batteryInfo: 'Up to 5 Hours',
          probability: 'Yes',
          noiseLavel: '39dBA',
          warranty: '3 Years or lifetime',
          faaValue: 'Yes',
          assembledValue: 'Yes',
          availability: 'Yes',
          prodName: 'Rove 4™',
          prodPrice: 'From $2,995',
          ctaText: '',
          ctaLink: '',
          imageLink: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2-1717x2048.png.webp'
        },
        {
          bgColor: '#bcd2e5',
          weightInfo: '4.8lbs',
          batteryInfo: 'Up to 12 hours 45 mins',
          probability: 'Yes',
          noiseLavel: '39dBA',
          warranty: '3 Years or lifetime',
          faaValue: 'Yes',
          assembledValue: 'Yes',
          availability: 'Yes',
          prodName: 'Rove 6™',
          prodPrice: 'From $2,995',
          ctaText: 'Find out more',
          ctaLink: '',
          imageLink: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2-1717x2048.png.webp'
        }
      ]
    }
  },
  '/product/rove6-system/': {
    id: 'rove6-system',
    title: '<h1 class="post__title post--pdp__title">Rove 6<sup>™</sup> System</h1>',
    subtext: 'Powerfully Portable',
    imagesList: [
      'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2.png',
      'https://cdn.inogen.com/wp-content/uploads/2023/04/AC_Power_Supply_Rove4.png',
      'https://cdn.inogen.com/wp-content/uploads/2014/02/g3-dc-power-ba306.png',
      'https://cdn.inogen.com/wp-content/uploads/2019/03/g5_single_battery.png',
      'https://cdn.inogen.com/wp-content/uploads/2016/05/Rove-4-Carry-Bag-No-Strap.png'
    ],
    features: [
      {
        icon: layer_1svg,
        title: '4.8lbs',
        isTooltip: true,
        tooltipText: 'test'
      },
      {
        icon: layer_2svg,
        title: 'Up to 6 Hours, 15 Minutes Battery life',
        isTooltip: true,
        tooltipText: 'test'
      },
      {
        icon: layer_3svg,
        title: 'FAA Approved',
        isTooltip: false,
        tooltipText: 'test'
      }
    ],
    uspList: ['Free Shipping', 'Financing available', 'Free Eligibility Check', 'RX Required'],
    descriptionText: 'Designed & Assembled in the USA',
    descriptionIcon: usaFlag,
    feature_1: {
      title: 'Lightweight design',
      mainWeight: '4.8lbs ≈',
      subtext: 'with Standard battery',
      items: [
        {
          item: 'Small desktop printer',
          weight: '4.7–5lbs'
        },
        {
          item: 'Bag of apples <span>(8–10 medium)</span>',
          weight: '4.8 lbs'
        },
        {
          item: "Pair of men's hiking boots",
          weight: '4.5–5 lbs'
        },
        {
          item: 'Cast iron skillet <span>(10-inch)</span>',
          weight: '4.6–5 lbs'
        },
        {
          item: 'Medium-sized laptop <span>(15-inch)</span>',
          weight: '4.8 lbs'
        },
        {
          item: 'Household vacuum <span>(handheld)</span>',
          weight: '4.7–4.9 lbs'
        }
      ]
    },

    feature_2: {
      items: [
        {
          title: 'Long Battery Life',
          subtitle: 'Up to 6 hours 15 minutes on a single charge.',
          icon: batteryIcon,
          bgLink:
            'https://cdn-3.convertexperiments.com/uf/10041653/10041910/frame-56_68dbed5c05f64.png'
        },
        {
          title: 'Only 39 dBA',
          subtitle: 'Quiet as a home refrigerator.',
          icon: audioIcon,
          bgLink:
            'https://cdn-3.convertexperiments.com/uf/10041653/10041910/dba-card_68dbed93429a8.png',
          imageLink: ''
        }
      ]
    },

    feature_3: {
      imageLink:
        'https://cdn.inogen.com/wp-content/uploads/2025/07/rove6_top_view_diagram.png.webp',
      items: [
        {
          title: 'FDA Cleared'
        },
        {
          title: '30-Day Risk-Free Trial'
        },
        {
          title: '3-Year Warranty'
        },
        {
          title: 'Customer Support'
        }
      ]
    },
    videoElemSelector: '.rove6_getting_started',
    packages: {
      title: 'Battery Bundles to Keep You Moving',
      subtitle: 'Inogen Rove 6™ Freedom Packages',
      stickyInfo: [
        {
          title: 'What’s included'
        },
        {
          title: 'Standard Batteries'
        },
        {
          title: 'Intermediate Batteries'
        },
        {
          title: 'Extended Batteries'
        },
        {
          title: 'Concentrator'
        },
        {
          title: 'Lifetime warranty'
        },
        {
          title: 'AC/DC power supplies'
        },
        {
          title: 'Carry Bag, User Manual'
        },
        {
          title: 'Bluetooth System'
        },
        {
          title: 'Inogen Connect App'
        }
      ],

      productsInfo: [
        {
          id: '87987774990',
          bgColor: '#DEEFFF',
          heading: '1',
          standard_value: '3',
          intermediate_value: '-',
          extended_batteries: '-',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$4,215',
          atc: 'Add to cart'
        },
        {
          id: '87987775212',
          bgColor: '#B0D9FF',
          heading: '2',
          standard_value: '1',
          intermediate_value: '-',
          extended_batteries: '1',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,980',
          atc: 'Add to cart'
        },
        {
          id: '87987775214',
          bgColor: '#7CBFFF',
          heading: '3',
          standard_value: '-',
          intermediate_value: '-',
          extended_batteries: '2',
          connector: greenIcon,
          warranty: greenIcon,
          power_supplies: greenIcon,
          user_manual: greenIcon,
          bluetooth: greenIcon,
          app: greenIcon,
          price: '$3,900',
          atc: 'Add to cart'
        }
      ]
    },

    productComparison: {
      stickyInfo: {
        title: 'Compare </br>Rove Systems',
        items: [
          {
            title: 'Weight <span>(with Standard battery)</span>'
          },
          {
            title: 'Battery'
          },
          {
            title: 'Hands-free Portability'
          },
          {
            title: 'Noise Level <span>(at flow setting 2)</span>'
          },
          {
            title: 'Warranty'
          },
          {
            title: 'FAA Approved'
          },
          {
            title: 'Designed & Assembled in the USA'
          },
          {
            title: 'Available Direct from Inogen'
          }
        ]
      },
      productsInfo: [
        {
          bgColor: '#95C0EA',
          weightInfo: '4.8lbs',
          batteryInfo: 'Up to 12 hours 45 mins',
          probability: 'Yes',
          noiseLavel: '39dBA',
          warranty: '3 Years or lifetime',
          faaValue: 'Yes',
          assembledValue: 'Yes',
          availability: 'Yes',
          prodName: 'Rove 6™',
          prodPrice: 'From $2,995',
          ctaText: '',
          ctaLink: '',
          imageLink: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2-1717x2048.png.webp'
        },
        {
          bgColor: '#bcd2e5',
          weightInfo: '2.9lbs',
          batteryInfo: 'Up to 5 Hours',
          probability: 'Yes',
          noiseLavel: '39dBA',
          warranty: '3 Years or lifetime',
          faaValue: 'Yes',
          assembledValue: 'Yes',
          availability: 'Yes',
          prodName: 'Rove 4™',
          prodPrice: 'From $2,995',
          ctaText: 'Find out more',
          ctaLink: '/product/rove4-system/',
          imageLink: 'https://cdn.inogen.com/wp-content/uploads/2023/05/Rove4v2-1717x2048.png.webp'
        }
      ]
    }
  }
};

export default prodsData;
