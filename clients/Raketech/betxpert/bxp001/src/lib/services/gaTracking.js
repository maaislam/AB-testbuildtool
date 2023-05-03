import { pollerLite } from '../../../../../../../globalUtil/util';

const gaTracking = (label, action = 'click') => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', label);
  });
};

export default gaTracking;
