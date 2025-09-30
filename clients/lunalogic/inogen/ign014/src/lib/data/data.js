import {
  audioIcon,
  batteryIcon,
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
    videoElemSelector: '.rove4_getting_started'
  }
};

export default prodsData;
