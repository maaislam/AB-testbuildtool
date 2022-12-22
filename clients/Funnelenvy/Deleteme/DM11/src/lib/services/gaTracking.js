import shared from '../shared/shared';

const gaTracking = (label, action = 'click') => {
  const { ID, VARIATION } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  //const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  //window.ga.getAll()[0]('send', {
  //hitType: 'event',
  //eventCategory: 'funnelenvy',
  //eventAction: action,
  //eventLabel: label
  //});

  window.ga.getAll()[0].send('event', {
    eventCategory: 'funnelenvy',
    eventAction: action,
    eventLabel: label
  });
};

export default gaTracking;
