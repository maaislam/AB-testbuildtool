import { pollerLite } from '../helpers/utils';
//'Experiment SJ Popup F2P Slots 008
const piwikTrack = (label, device = 'Desktop') => {
  pollerLite([() => window._paq !== undefined], () => {
    window._paq.push(['trackEvent', `${device} Users Only`, 'Click', label]);
  });
};

export default piwikTrack;
