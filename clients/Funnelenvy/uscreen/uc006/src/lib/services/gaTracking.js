//import { pollerLite } from '../../../../../../../globalUtil/util';

const gaTracking = (eventLabel, trackingId = 'G-KXMYLX5B91') => {
  const measurementId = trackingId.split('-')[1];
  const apiUrl = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=maanCIZkSRCJXZafQLG6uQ`;
  const getSessionId = () => {
    const pattern = /_ga_KXMYLX5B91=GS\d\.\d\.(.+?)(?:;|$)/;
    const match = document.cookie.match(pattern);
    const parts = match?.[1].split('.');
    return parts.shift();
  };

  const data = {
    client_id: window.ga.getAll()[0].get('clientId') || Math.random().toString(36).substring(2),
    events: [
      {
        name: eventLabel,
        params: {
          engagement_time_msec: '1000',
          session_id: getSessionId()
        }
      }
    ]
  };

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export default gaTracking;
