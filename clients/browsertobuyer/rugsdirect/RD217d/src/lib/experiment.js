import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { VARIATION } = shared;

export default () => {
  setup(); //use if needed

  const trackGAEvent = (c, a, l) => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'gaCustomEvent',
        eventCategory: c,
        eventAction: a,
        eventLabel: l
      });
      console.log('event tracked', c, a, l);
    }
  };

  const observerHandler = (mutation) => {
    const { addedNodes } = mutation;
    if (addedNodes.length > 0 && addedNodes[0].nodeName === 'DIV') {
      trackGAEvent('RD 217d', 'Search Click', '');
    }
  };

  observeDOM('#salesfire-search', observerHandler); //

  if (VARIATION === 'control') return;
};
