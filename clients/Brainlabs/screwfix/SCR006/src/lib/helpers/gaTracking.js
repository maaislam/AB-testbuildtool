import shared from '../shared/shared';

const fireEvent = (label) => {
  //console.log(label);
  const { ID, VARIATION, SITE } = shared;
  document.documentElement.classList.add(ID);
  document.documentElement.classList.add(`${ID}-${VARIATION}`);
  const labelMessage = `Test ID: ${ID} Variation: ${VARIATION} Label: ${label}`;
  //window.ga('send', 'event', 'Experimentation', `${SITE} - ${ID}`, labelMessage);
  //window.gtag('send', {
  //hitType: 'event',
  //eventCategory: 'Experimentation',
  //eventAction: `${SITE} - ${ID}`,
  //eventLabel: labelMessage
  //});
  window.gtag('event', 'Experimentation', {
    event_category: 'Experimentation',
    event_action: `${SITE} - ${ID}`,
    event_label: labelMessage
  });
};

export default fireEvent;
