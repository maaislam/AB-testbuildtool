import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { VARIATION } = shared;
const validIds = [
  '356JK',
  '722JK',
  '657JK',
  '102JK',
  '384JT',
  '840JT',
  '578KP',
  '226KP',
  '362KP',
  '613KP',
  '972KR',
  '208KR',
  '627KR',
  '437PF',
  '504PF',
  '332PX',
  '216PX',
  '466PX',
  '472VF',
  '974VF',
  '605VF',
  '441VF',
  '207VF',
  '679VF',
  '484VF',
  '999VF',
  '747VF',
  '270VF',
  '950VF',
  '567VF',
  '853VF',
  '670VF',
  '453VF',
  '3056J',
  '1460J',
  '8298J',
  '5339J',
  '5452P',
  '3571X',
  '6200X',
  '108HV',
  '179JK',
  '168JK',
  '216JK',
  '568KP',
  '888KP',
  '281KP',
  '847KP',
  '491KP',
  '366VF',
  '240VF',
  '602VF',
  '529VF',
  '889VF',
  '957PV',
  '297PV',
  '296PV',
  '719PV',
  '503PV',
  '974PV',
  '332PV',
  '749PV',
  '384HV',
  '424HV',
  '294HV',
  '189HV',
  '835HV',
  '101HV',
  '528VF',
  '303VF',
  '126VF',
  '440VF',
  '380VF',
  '4229P',
  '6834P',
  '9908P',
  '9407P',
  '8352P',
  '2296P',
  '2776P',
  '2157P',
  '4069P',
  '4241P',
  '7042P',
  '1533P',
  '5194P',
  '8291P',
  '3505X',
  '6360X',
  '8541X',
  '1299X',
  '4766X',
  '2035X',
  '6901X',
  '3368X',
  '4128X',
  '6249X',
  '6456X',
  '4298X',
  '287HV',
  '689HV',
  '757HV',
  '401HV',
  '847HV',
  '263HV',
  '567PX',
  '279PX',
  '655PX',
  '386PX',
  '646PX',
  '569PX',
  '374VF',
  '969VF',
  '368VF',
  '783VF',
  '581VF',
  '849VF',
  '587JH',
  '229PF',
  '174VF',
  '618VF',
  '898JK',
  '782JK',
  '152JK',
  '882JK',
  '412JK',
  '891PX',
  '222PX',
  '240PX',
  '254PX',
  '684PX',
  '842PX',
  '646HK'
];
export default () => {
  const prodId = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
  console.log(prodId);
  if (!validIds.includes(prodId.toUpperCase())) return;
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  gaTracking('user sees "18th edition baadge" in PDP'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const promoIcon = document.querySelector('.banner__promo-icon');
  promoIcon?.setAttribute('src', 'https://media.screwfix.com/is/image/ae235/18th%20Edition_3');
  if (!promoIcon) {
    document
      .querySelector('.pr__media--main')
      .insertAdjacentHTML(
        'afterend',
        '<img class="banner__promo-icon" alt="Great Value Product" src="https://media.screwfix.com/is/image/ae235/18th%20Edition_3">'
      );
  }
};
