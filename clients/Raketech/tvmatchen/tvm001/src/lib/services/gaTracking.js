//import { pollerLite } from '../helpers/utils';
//import shared from '../shared/shared';

//const gaTracking = (label, action = 'click') => {
//pollerLite([() => typeof window.gtag === 'function'], () => {
//window.gtag('event', `Tips redesign variation: ${shared.VARIATION} | ${label}`);
//});
//};

//export default gaTracking;
import { pollerLite } from '../helpers/utils';

const gaTracking = (label, action = 'click') => {
  pollerLite([() => typeof window.ga.getAll === 'function'], () => {
    const trackers = [];
    window.ga.getAll().forEach((tracker) => {
      const trackingId = tracker.get('trackingId');
      if (trackers.includes(trackingId)) return;
      tracker.send('event', {
        eventCategory: 'Channel Clicks',
        eventAction: action,
        eventLabel: label
      });
      trackers.push(trackingId);
    });
  });
};

export default gaTracking;
