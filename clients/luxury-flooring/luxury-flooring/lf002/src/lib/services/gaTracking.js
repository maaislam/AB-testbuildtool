import { pollerLite } from '../helpers/utils';
//import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.dataLayer !== 'undefined'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_category: '133 - Add Roomvo to PLP',
      event_label: label
    });
  });
};

export default gaTracking;
