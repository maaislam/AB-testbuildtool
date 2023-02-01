import shared from '../shared/shared';

const gaTracking = (label, nonInteraction = false) => {
  const { ID, VARIATION, SITE } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  //console.log(labelMessage);

  window.ga.getAll()[0].send('event', {
    eventCategory: 'Experimentation',
    eventAction: `${SITE} - ${ID}`,
    eventLabel: labelMessage
  });
};

export default gaTracking;
