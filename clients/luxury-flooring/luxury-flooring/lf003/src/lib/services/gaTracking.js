import { pollerLite } from '../helpers/utils';
//import shared from '../shared/shared';

const gaTracking = (label) => {
  pollerLite([() => typeof window.dataLayer !== 'undefined'], () => {
    window.dataLayer.push({
      event: 'cro_event',
      event_category: '121 - Utilize % usage when showing pricing',
      event_label: label
    });
  });
};

export default gaTracking;
