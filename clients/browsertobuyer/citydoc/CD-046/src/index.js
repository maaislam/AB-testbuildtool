import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#main .c-accord', '.c-accord__item:nth-child(2)'], () => {
  setTimeout(activate, 1000);
});
//fallback in case something fails to load or there is an error
setTimeout(() => {
  document.getElementById('main').style.opacity = '1';
}, 3000);
