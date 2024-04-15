const trackGAEvent = (eventCategory, eventAction, eventLabel) => {
  if ('ga' in window) {
    window.ga.getAll()[0].send('event', {
      eventCategory,
      eventAction,
      eventLabel
    });
  }
};
export default trackGAEvent;
