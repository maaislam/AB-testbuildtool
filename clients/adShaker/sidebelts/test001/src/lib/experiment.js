import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import obsIntersection from './helpers/observeIntersection';
import stickyAtc from './components/stickyAtc';

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
  //const atcForm = document.getElementById('AddToCartForm');
  const header = document.querySelector('.site-navigation');

  //header.insertAdjacentHTML('afterend', stickyAtc(ID));
  //const stickyAtcBtn = document.querySelector(`.${ID}__stickyatc`);

  //const intersectionCallback = (entry) => {
  //if (!entry.isIntersecting) {
  //stickyAtcBtn.classList.add('slide-in-top');
  //stickyAtcBtn.classList.remove('slide-out-top');
  //entry.target.classList.add('seen-sticky-atc');
  //return;
  //}
  //stickyAtcBtn.classList.add('slide-out-top');
  //stickyAtcBtn.classList.remove('slide-in-top');
  //};
  //obsIntersection(atcForm, 0, intersectionCallback);
  //stickyAtcBtn.addEventListener('click', (click) => {
  //click.preventDefault();
  //atcForm.querySelector('input[type="submit"]').click();
  //});

  /**
   * new requirement make header sticky on scroll up not scroll down
   */
  let scrollPos = 0;
  //adding scroll event
  window.addEventListener('scroll', () => {
    //detects new state and compares it with the new one
    if (document.body.getBoundingClientRect().top > scrollPos) {
      //console.log('data-scroll-direction', 'UP');
      header.classList.add('slide-in-top');
      header.classList.remove('slide-out-top');
    } else {
      //console.log('data-scroll-direction', 'DOWN');
      //saves the new position for iteration.
      header.classList.remove('slide-in-top');
      header.classList.add('slide-out-top');
    }
    scrollPos = document.body.getBoundingClientRect().top;
  });
};
