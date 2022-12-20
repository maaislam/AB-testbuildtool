import shared from '../shared/shared';

const gaTracking = (label, action = 'click') => {
  const { ID, VARIATION, CLIENT } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  //const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  window.ga('send', {
    hitType: 'event',
    eventCategory: 'funnelenvy',
    eventAction: action,
    eventLabel: label
  });
};

export default gaTracking;
