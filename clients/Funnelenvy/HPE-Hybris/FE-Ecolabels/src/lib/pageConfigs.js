export const urlConfigs = {
  '/c/': {
    targetSelector: '.hpe-product-list__row',
    attachPoint: '.hpe-product-list__meta'
  },
  '/search': {
    targetSelector: '.hpe-product-list__row',
    attachPoint: '.hpe-product-list__meta'
  },
  '/p/': {
    targetSelector: ''
  },
  '/cart': {
    targetSelector: ''
  },
  '/my-quotes/': {
    targetSelector: ''
  },
  '/order/': {
    targetSelector: ''
  },
  '/orderApprovalDetails/': {
    targetSelector: ''
  },
  '/favorites/': {
    targetSelector: ''
  },
  '/createQuoteView': {
    targetSelector: ''
  },
  '/quoteConfirmSummary': {
    targetSelector: ''
  },
  '/createCheckoutView': {
    targetSelector: ''
  }
};

export const ecoLabelConfig = [
  {
    name: 'energy_star',
    href: 'https://www.energystar.gov/productfinder/?s=mega',
    src: 'https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/Energy_Star_Logo.png',
    title: 'Energy Star'
  },
  {
    name: 'epeat',
    href: 'https://epeat.net/search-servers',
    src: 'https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/EPEAT_logo_transprent_bg.png',
    title: 'Epeat'
  },
  {
    name: 'tco',
    href: 'https://tcocertified.com/',
    src: 'https://fe-test-dev.s3.amazonaws.com/hpe/hpe-elite-matinfo-rfp-portal-including-carbon-footprints/TCO_logo_transparent_bg.png',
    title: 'TCO Certified'
  }
];
