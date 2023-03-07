//import { pollerLite } from '../../../../../../../globalUtil/util';

const gaTracking = (eventLabel, trackingId = 'G-KXMYLX5B91', eventName = 'click') => {
  const measurementId = trackingId.split('-')[1];
  const apiUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=maanCIZkSRCJXZafQLG6uQ`;

  const data = {
    client_id: Math.random().toString(36).substring(2),
    events: [
      {
        name: eventLabel
        //params: {
        //event_category: 'funnelenvy',
        //event_label: eventLabel
        //}
      }
    ]
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export default gaTracking;
