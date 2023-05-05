import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const gaTracking = (label, action = 'click') => {
  pollerLite([() => typeof window.gtag === 'function'], () => {
    window.gtag('event', 'Experimentation', {
      event_action: action,
      event_label: `HP redesign variation: ${shared.VARIATION} | ${label}`
    });
  });
};

export default gaTracking;
