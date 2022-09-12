import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import { isCartPage, isCheckoutPage, isLoginPage } from './lib/helpers/pageTypes';
import loginLoader from './lib/components/loginLoader';

const ieChecks = /MSIE|Trident|Edge\/(12|13|14|15|16|17|18)/.test(window.navigator.userAgent);
const elemToPollFor = isCheckoutPage
    ? '#checkout-main'
    : isCartPage
    ? '[data-tau="start_checkout_bottom"]'
    : 'body';
if (!ieChecks) {
    pollerLite(['body', elemToPollFor], activate);
}
if (isLoginPage) {
            if (!sessionStorage.getItem('fromShipping')) {
                //document.body.classList.add('kicTest--loader');
        window.location.replace('https://dev.kickz.com/de/checkout/?step=shipping');
        pollerLite(['#maincontent'], () => {
            console.log('main content');
            document.querySelector('#maincontent').insertAdjacentHTML('beforebegin', loginLoader('kicTest'));
            });
    } else {
            document.querySelector('[data-tau-unique="Checkout-Login"]').classList.add('kicTest--no-loader');
            document.querySelector('.b-checkout_login').classList.add('kicTest--no-loader');
    }
}
if (isCheckoutPage) {
    sessionStorage.setItem('checkoutClicked', 'true');
}

pollerLite([() => document.querySelectorAll('a[data-event-click="proceedToCheckout"]')], () => {
    document.querySelectorAll('a[data-event-click="proceedToCheckout"]').forEach((item, key) => {
        item.addEventListener('click', (e) => {
          sessionStorage.removeItem('fromShipping');
          console.log('clicked after shipping');
        });
      });
});
