/*eslint-disable no-underscore-dangle */
import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;

const piwikTrack = (label, device = 'Desktop') => {
  pollerLite([() => window._paq !== undefined], () => {
    //console.log(label);
    window._paq.push([
      'trackEvent',
      'Experiment HP Slot Filtering 010',
      `${device} Users Only`,
      `010 | Variant ${VARIATION} | ${label}`
    ]);
  });
};

export default piwikTrack;
