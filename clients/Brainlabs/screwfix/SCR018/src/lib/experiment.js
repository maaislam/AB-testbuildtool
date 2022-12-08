import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import promoMsg from './components/promoMsg';
import obsIntersection from './helpers/observeIntersection';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__terms--title`)) {
      document.querySelector(`.${ID}__terms--content`).classList.toggle('open');
      document.querySelector(`.${ID}__closebtn`).classList.toggle('open');
      const openState = document.querySelector(`.${ID}__closebtn`).classList.contains('open');
      gaTracking(`User ${openState ? 'opens' : 'closes'} T&Cs tab`);
    } else if (target.closest('.bosch-toolbag')) {
      gaTracking('User interacts with the hyperlink in the promo');
    } else if (target.closest('[id^="product_add_to_trolley"]')) {
      gaTracking('User interacts with the delivery CTA');
    } else if (
      target.closest('[id^="add_for_collection_button"]') &&
      target.closest('[id^="add_for_sticky_collection_button"]')
    ) {
      gaTracking('User interacts with the click & collect CTA');
    }
  });

  //document.querySelector('.pr__product #qty').addEventListener('keyup', () => {});

  //console.log(ID);

  const prodDescription = document.querySelector('#product_description');
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      gaTracking('Conditions Met');
    }
  };

  obsIntersection(prodDescription, 1, intersectionCallback);
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
  const anchorElem = document.querySelector('.pr__infobox');
  anchorElem.classList.add(`${ID}__hide`);
  anchorElem.insertAdjacentHTML('beforebegin', promoMsg(ID, VARIATION));
};
