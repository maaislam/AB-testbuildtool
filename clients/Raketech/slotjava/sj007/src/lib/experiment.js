import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import heroBanner from './components/heroBanner';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (VARIATION === '1') {
    if (!document.querySelector(`.${ID}__heroBanner`)) {
      document.querySelector('main').insertAdjacentHTML('afterbegin', heroBanner(ID));
    }
  }

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__description`) && target.closest('#Games')) {
      gaTracking('Games | New Hero Card');
    } else if (target.closest(`.${ID}__description`) && target.closest('#Casino')) {
      gaTracking('Casino | New Hero Card');
    } else if (target.closest(`.${ID}__description`) && target.closest('#Bonus')) {
      gaTracking('Bonus | New Hero Card');
    } else if (target.closest('a.button.button_hero ') && target.closest('.section.section_top')) {
      gaTracking('Slots Button | Hero');
    } else if (
      target.closest('a.button.button_secondary') &&
      target.closest('.section.section_top')
    ) {
      gaTracking('Casinos Button | Hero');
    } else if (target.closest('a.menu__link[href*="/slots"]')) {
      gaTracking('Free Slots | Menu');
    } else if (target.closest('a.menu__link[href*="/bonos-sin-deposito/"]')) {
      gaTracking('Bonus | Menu');
    } else if (target.closest('a.menu__link[href*="s/nuevos-casinos-online/"]')) {
      gaTracking('Casinos | Menu');
    }
  });

  document.body.addEventListener('pointerup', ({ target }) => {
    if (target.closest('a.menu__link[href*="/slots"]')) {
      gaTracking('Free Slots | Menu');
    } else if (target.closest('a.menu__link[href*="/bonos-sin-deposito/"]')) {
      gaTracking('Bonus | Menu');
    } else if (target.closest('a.menu__link[href*="s/nuevos-casinos-online/"]')) {
      gaTracking('Casinos | Menu');
    }
  });
};
