/*eslint-disable no-underscore-dangle */
import { pollerLite } from '../helpers/utils';
import shared from '../shared/shared';

const { VARIATION } = shared;

const piwikTrack = (label, device = 'Desktop') => {
  pollerLite([() => window._paq !== undefined], () => {
    //console.log(label);
    window._paq.push([
      'trackEvent',
      'Experiment SJ Slot Card Redesign 011',
      'click',
      `${device} Users Only`,
      `011 | Variation: ${VARIATION} | ${label}`
    ]);
  });
};

export default piwikTrack;
