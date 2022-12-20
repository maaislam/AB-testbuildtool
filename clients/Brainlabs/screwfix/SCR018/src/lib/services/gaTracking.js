import shared from '../shared/shared';

const gaTracking = (label) => {
  const { ID, VARIATION, SITE } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  window.gtag('event', 'Experimentation', {
    event_category: 'Experimentation',
    event_action: `${SITE} - ${ID}`,
    event_label: labelMessage,
    non_interaction: `${!!label.includes('Conditions Met')}`
  });
};

export default gaTracking;
