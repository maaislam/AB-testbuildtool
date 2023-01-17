import gaTracking from '../services/gaTracking';
import { VARIATION } from '../shared/shared';

const clickHandler = (event) => {
  const { target } = event;
  //console.log(target);
  if (target.closest('.css-19nbx3n') && VARIATION === '1') {
    event.preventDefault();
    gaTracking('User interacts with “Contact Sales” CTA in banner');
    document.querySelector('.css-5j6s9h').click();
  } else if (target.closest('.css-mo3vs8')) {
    gaTracking('User interacts with “Login” CTA in banner');
  } else if (target.closest('.css-19nbx3n') && VARIATION === 'control') {
    gaTracking('User interacts with “Sign up” CTA in banner');
  } else if (
    target.closest('button') &&
    target.closest('[data-testid="navigationBar"]') &&
    target.closest('button').childNodes[0].nodeValue
  ) {
    gaTracking(
      `User interacts with navigation - ${target.closest('button').childNodes[0].nodeValue}`
    );
  } else if (target.closest('a.css-j4wfjc')) {
    gaTracking('User interacts with navigation - price');
  } else if (target.closest('[data-module-name="menuItem"]')) {
    gaTracking(
      `User interacts with navigation - ${
        target.closest('button').querySelector('.css-fozzn4').innerText
      }`
    );
  } else if (target.closest('.css-5j6s9h')) {
    gaTracking('User interacts with “Contact sales” CTA in hero slot');
  } else if (target.closest('.css-qcchdl')) {
    document.querySelectorAll('.css-qcchdl').forEach((el, i) => {
      if (el.contains(target)) {
        gaTracking(`User interacts with the “Read story” CTA on the ${i + 1} customer story`);
      }
    });
  } else if (target.closest('.css-jhvn9x')) {
    const eventConfig = {
      0: 'User interacts with “Get freedom from payments” CTA on the fourth slot',
      1: 'User interacts with “Integrate at pace” CTA on fifth slot',
      2: 'User interacts with  “Supercharge your growth” CTA on the sixth slot'
    };
    document.querySelectorAll('.css-jhvn9x').forEach((el, i) => {
      if (el.contains(target)) {
        gaTracking(eventConfig[i]);
      }
    });
  } else if (target.closest('.css-108z2xh')) {
    gaTracking('User interacts with  “read customer story” CTA');
  } else if (target.closest('.css-m5wlkr')) {
    gaTracking('User interacts with the “Contact sales” CTA in the footer');
  } else if (target.closest('.css-g9cl69')) {
    gaTracking('User plays the video on the page ');
    gaTracking('User sees the video pop up');
  } else if (target.closest('.css-1wvtvys')) {
    gaTracking('User opens burger menu');
  } else if (target.closest('.css-1cr3yw6')) {
    gaTracking('User select log in in burger menu');
  } else if (target.closest('.css-1rhoc2k')) {
    gaTracking('User select contact us in burger menu');
  } else if (target.closest('.css-1wwbxco') || target.closest('.css-pxzd6o')) {
    gaTracking('User closes burger menu');
  } else if (
    target.closest('#wistia-qu3rohwaec-1_popover_popover_close_button') ||
    target.closest('#wistia-qu3rohwaec-1_popover_popover_close_button')
  ) {
    gaTracking('User closes the pop up');
  }
};

export default clickHandler;
