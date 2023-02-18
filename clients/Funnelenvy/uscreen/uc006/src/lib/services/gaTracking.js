import shared from '../shared/shared';

const gaTracking = (label, action = 'click') => {
  const { ID, VARIATION } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  //const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  //window.ga('create', 'UA-55205898-4', 'auto');
  window.ga.getAll().forEach((tracker) => {
    tracker.send('event', {
      eventCategory: 'funnelenvy',
      eventAction: action,
      eventLabel: label
    });
    //if (tracker.get('trackingId') === 'UA-55205898-4') {
    //}
  });
  //window.ga('send', 'event', 'funnelenvy', action, label);
};

export default gaTracking;
