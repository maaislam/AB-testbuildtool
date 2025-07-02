import setup from './services/setup';

import shared from './shared/shared';

const { VARIATION } = shared;

const rates = {
  USD: 1,
  EUR: 1.17867,
  GBP: 1.37312,
  CAD: 0.73493,
  ARS: 0.000830199,
  AUD: 0.657641,
  BRL: 0.184116,
  CLP: 0.00107312,
  CNY: 0.139583,
  CYP: 0.397899,
  CZK: 0.0476526,
  DKK: 0.15798,
  EEK: 0.0706676,
  HKD: 0.12739,
  HUF: 0.00295073,
  ISK: 0.00828848,
  INR: 0.0116682,
  JMD: 0.00623775,
  JPY: 0.00695392,
  LVL: 1.57329,
  LTL: 0.320236,
  MTL: 0.293496,
  MXN: 0.0533196,
  NZD: 0.609138,
  NOK: 0.099185,
  PLN: 0.277685,
  SGD: 0.786873,
  SKK: 21.5517,
  SIT: 175.439,
  ZAR: 0.0564323,
  KRW: 0.00074039,
  SEK: 0.105775,
  CHF: 1.26122,
  TWD: 0.0342134,
  UYU: 0.0250275,
  MYR: 0.237345,
  BSD: 1,
  CRC: 0.00198124,
  RON: 0.232074,
  PHP: 0.0177493,
  AED: 0.272294,
  VEB: 9.28689e-11,
  IDR: 0.0000617402,
  TRY: 0.0251034,
  THB: 0.0308319,
  TTD: 0.147589,
  ILS: 0.296803,
  SYP: 0.0000769114,
  XCD: 0.369604,
  COP: 0.000244412,
  RUB: 0.0127865,
  HRK: 0.156437,
  KZT: 0.00192479,
  TZS: 0.000379563,
  XPT: 1365.54,
  SAR: 0.266667,
  NIO: 0.0272079,
  LAK: 0.0000463022,
  OMR: 2.59747,
  AMD: 0.00261011,
  CDF: 0.000343688,
  KPW: 0.0011111,
  SPL: 6,
  KES: 0.00773255,
  ZWD: 0.00276319,
  KHR: 0.000249575,
  MVR: 0.0647534,
  GTQ: 0.130074,
  BZD: 0.496998,
  BYR: 0.0000305344,
  LYD: 0.18487,
  DZD: 0.00771703,
  BIF: 0.000336756,
  GIP: 1.37312,
  BOB: 0.144612,
  XOF: 0.00179688,
  STD: 0.0000476563,
  NGN: 0.000650676,
  PGK: 0.242378,
  ERN: 0.0666667,
  MWK: 0.00057657,
  CUP: 0.0417184,
  GMD: 0.0138704,
  CVE: 0.010689,
  BTN: 0.0116682,
  XAF: 0.00179688,
  UGX: 0.000278225,
  MAD: 0.111168,
  MNT: 0.00027909,
  LSL: 0.0564323,
  XAG: 36.1577,
  TOP: 0.421044,
  SHP: 1.37312,
  RSD: 0.0100606,
  HTG: 0.00762248,
  MGA: 0.000228551,
  MZN: 0.0156585,
  FKP: 1.37312,
  BWP: 0.0752042,
  HNL: 0.0382295,
  PYG: 0.000125462,
  JEP: 1.37312,
  EGP: 0.0201649,
  LBP: 0.0000111442,
  ANG: 0.55522,
  WST: 0.38438,
  TVD: 0.657641,
  GYD: 0.00478278,
  GGP: 1.37312,
  NPR: 0.00728923,
  KMF: 0.00239584,
  IRR: 0.0000238178,
  XPD: 1110.92,
  SRD: 0.0267953,
  TMM: 0.0000569839,
  SZL: 0.0564323,
  MOP: 0.12368,
  BMD: 1,
  XPF: 0.00987728,
  ETB: 0.00739561,
  JOD: 1.41044,
  MDL: 0.0592503,
  MRO: 0.00251441,
  YER: 0.00412888,
  BAM: 0.602646,
  AWG: 0.558659,
  PEN: 0.282284,
  VEF: 9.28621e-8,
  SLL: 0.0000445431,
  KYD: 1.20607,
  AOA: 0.00109019,
  TND: 0.346456,
  TJS: 0.101012,
  SCR: 0.0706571,
  LKR: 0.00333541,
  DJF: 0.00561706,
  GNF: 0.00011532,
  VUV: 0.0083735,
  SDG: 0.0016656,
  IMP: 1.37312,
  GEL: 0.367535,
  FJD: 0.447486,
  DOP: 0.0168363,
  XDR: 1.37401,
  MUR: 0.0221999,
  MMK: 0.000476382,
  LRD: 0.00499876,
  BBD: 0.5,
  ZMK: 0.0000417194,
  XAU: 3312.24,
  VND: 0.0000381635,
  UAH: 0.0239487,
  TMT: 0.284919,
  IQD: 0.000763477,
  BGN: 0.602646,
  KGS: 0.0114524,
  RWF: 0.000696929,
  BHD: 2.65957,
  UZS: 0.0000789493,
  PKR: 0.00352397,
  MKD: 0.0191463,
  AFN: 0.0142414,
  NAD: 0.0564323,
  BDT: 0.00815337,
  AZN: 0.588235,
  SOS: 0.00175191,
  QAR: 0.274725,
  PAB: 1,
  CUC: 1,
  SVC: 0.114286,
  SBD: 0.118364,
  ALL: 0.0120016,
  BND: 0.786873,
  KWD: 3.2729,
  GHS: 0.0965968,
  ZMW: 0.0417194,
  XBT: 105357,
  NTD: 0.0337206,
  BYN: 0.305344,
  CNH: 0.139729,
  MRU: 0.0251441,
  STN: 0.0476563,
  VES: 0.00928621,
  MXV: 0.452881,
  VED: 0.00928621,
  SLE: 0.0445431,
  XCG: 0.55522
};

export default () => {
  setup(); //use if needed
  const injectTarget = document.querySelector('.csmtcart-right');
  const priceEl = document.querySelector('.js-cart_subtotal .money');

  if (!injectTarget || !priceEl) return;

  //Extract numeric value
  const cartText = priceEl.textContent.trim();
  const currentValue = parseFloat(cartText.replace(/[^0-9.]/g, '')) || 0;
  console.log('🚀 ~ currentValue:', currentValue);

  const thresholds = [
    {
      amount: 28,
      label: 'FREE shipping'
    },
    {
      amount: 75,
      label: 'FREE Lytlift Brightening Under-Eye-Oil-Serum'
    }
  ];

  const currencyConvertedThresholds = thresholds.map((t) => {
    const storeCurrency = window.Shopify.currency.active;
    const rate = rates[storeCurrency] || 1;

    const roundUpToNearestTen = (num) => {
      return Math.ceil(num / 10) * 10;
    };

    return {
      ...t,
      amount: roundUpToNearestTen(t.amount / rate)
    };
  });
  console.log('🚀 currencyConvertedThresholds:', currencyConvertedThresholds);

  const maxThreshold = Math.max(...currencyConvertedThresholds.map((t) => t.amount));
  console.log('🚀 ~ maxThreshold:', maxThreshold);

  //Wrapper
  const wrapper = document.createElement('div');
  wrapper.id = 'threshold-bar-wrapper';

  //Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'threshold-progress-bar';

  const fill = document.createElement('div');
  fill.className = 'threshold-fill';
  fill.style.width = `${Math.min((currentValue / maxThreshold) * 100, 100)}%`;
  progressBar.appendChild(fill);

  currencyConvertedThresholds.forEach((thresh) => {
    const marker = document.createElement('div');
    marker.className = 'threshold-marker';
    marker.style.left = `${(thresh.amount / maxThreshold) * 100}%`;
    marker.innerHTML = `<span>${thresh.label}</span>`;
    //progressBar.appendChild(marker);
  });

  //Message
  const message = document.createElement('p');
  message.className = 'threshold-message';

  const nextThreshold = currencyConvertedThresholds.find((t) => currentValue < t.amount);
  if (nextThreshold) {
    const remaining = (nextThreshold.amount - currentValue).toFixed(2);
    message.innerHTML = `You are <strong>$${remaining}</strong> away from getting a <strong class="reward-label">${nextThreshold.label}</strong><strong>!</strong>`;
  } else {
    message.innerHTML = "<strong>You've unlocked all available rewards!</strong>";
  }

  //Render
  wrapper.appendChild(progressBar);
  wrapper.appendChild(message);
  injectTarget.prepend(wrapper);

  if (VARIATION !== '2') return;

  const promoProduct = async () => {
    const productUrl = '/products/iyura-lytlift.js';
    const productData = await fetch(productUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching product data:', error);
        return null;
      });
    if (!productData) return;
    console.log('productData:', productData);
    const { price } = productData;
    const rewardTextElem = document.querySelector('.reward-label');
    const currency = window.Shopify.money_format;
    const symbol = currency.match(/^(.*?)\{\{amount\}\}/);
    if (rewardTextElem) {
      rewardTextElem.textContent = `${rewardTextElem.textContent} worth ${symbol[1]}${price / 100}`;
    }
  };
  promoProduct();
};
