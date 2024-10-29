import { pollerLite } from '../helpers/utils';

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

//function trackGAEvent(c, a, l) {
//if (window.dataLayer) {
//window.dataLayer.push({
//'event': 'gaCustomEvent',
//'eventCategory': c,
//'eventAction': a,
//'eventLabel': l
//});
//console.log('event tracked', c, a, l);
//}
//}
