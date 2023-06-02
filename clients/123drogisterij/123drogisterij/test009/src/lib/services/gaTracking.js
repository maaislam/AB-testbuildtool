import { pollerLite } from '../../../../../../../globalUtil/util';

const gaTracking = (label, action = 'click') => {
  pollerLite([() => typeof window.ga.getAll === 'function'], () => {
    window.ga.getAll().forEach((tracker) => {
      tracker.send('event', {
        eventCategory: 'funnelenvy',
        eventAction: action,
        eventLabel: label
      });
    });
  });
};

export default gaTracking;
