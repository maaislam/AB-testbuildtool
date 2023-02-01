import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import modal from './components/modal';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${ID}__modal--header span`)) {
      const modalEl = document.querySelector(`.${ID}__modal`);
      if (modalEl.classList.contains('open')) {
        gaTracking('minimize_popup');
      }
      modalEl.classList.toggle('open');
    } else if (e.target.closest(`.${ID}__modal--btncontainer a`)) {
      gaTracking('get_a_demo_popup');
    } else if (e.target.closest('.header__cta.d-lg-none')) {
      gaTracking('Transformed nav CTA clicks');
    } else if (e.target.closest('.header__cta.d-none.d-lg-inline-block')) {
      gaTracking('Top nav CTA clicks');
    }
  });
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  if (document.querySelector(`.${ID}__modal`)) return;
  document.body.insertAdjacentHTML('beforeend', modal(ID));
};
