const sendAdobeEvent = (options) => {
  const { linkName, events = [], eVars = {}, props = {}, contextData = {} } = options;

  if (typeof window.s !== 'undefined') {
    const { s } = window;

    //Combine all variable keys to send
    const eVarKeys = Object.keys(eVars);
    const propKeys = Object.keys(props);
    const contextKeys = Object.keys(contextData);

    const allVars = ['events']
      .concat(eVarKeys)
      .concat(propKeys)
      .concat(contextKeys.map((key) => `contextData.${key}`));

    s.linkTrackVars = allVars.join(',');
    s.linkTrackEvents = events.join(',');
    s.events = events.join(',');

    //Set eVars
    eVarKeys.forEach((key) => {
      s[key] = eVars[key];
    });

    //Set props
    propKeys.forEach((key) => {
      s[key] = props[key];
    });

    //Set contextData
    contextKeys.forEach((key) => {
      s.contextData = s.contextData || {};
      s.contextData[key] = contextData[key];
    });

    //Fire Adobe Analytics custom link event
    s.tl(true, 'o', linkName);
  }
};
