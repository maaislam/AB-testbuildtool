/*eslint-disable no-underscore-dangle */
import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;

const piwikTrack = (label, device = 'Desktop') => {
  pollerLite([() => window._paq !== undefined], () => {
    window._paq.push([
      'trackEvent',
      'Experiment SJ Popup F2P Slots 008',
      `${device} Users Only`,
      `008 | Variation: ${VARIATION} | ${label}`
    ]);
  });
};

export default piwikTrack;
