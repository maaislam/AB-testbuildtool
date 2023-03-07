import { pollerLite } from '../../../../../../../globalUtil/util';

const gaTracking = (label, action = 'click') => {
  pollerLite([() => typeof window.ga.getAll === 'function'], () => {
    let eventSent;
    window.ga.getAll().forEach((tracker) => {
      if (tracker.get('trackingId') === 'UA-718299-1' && !eventSent) {
        tracker.send('event', {
          eventCategory: 'funnelenvy',
          eventAction: action,
          eventLabel: label
        });
        eventSent = true;
      }
    });
  });
};

export default gaTracking;
