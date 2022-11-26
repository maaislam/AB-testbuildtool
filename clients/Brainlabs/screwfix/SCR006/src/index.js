import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';
import spinner from './lib/components/spinner';

if (window.location.pathname.includes('/p/')) {
  pollerLite(['main'], () => {
    setTimeout(activate, 2000);
  });
} else if (
  window.location.pathname.includes('/c/') &&
  !window.location.pathname.includes('compare') &&
  sessionStorage.getItem('SCR006__selectedforcompare')
) {
  //document.querySelector('main').classList.add('SCR006__loader');
  pollerLite(['main'], () => {
    const main = document.querySelector('main');
    main.insertAdjacentHTML('afterbegin', spinner());
    const url = sessionStorage.getItem('SCR006__selectedforcompare');
    window.location.replace(url);
    sessionStorage.removeItem('SCR006__selectedforcompare');
  });
}
