const triggerEvent = (el) => {
  function createEvent(elm, type) {
    if ('createEvent' in document) {
      //modern browsers, IE9+
      const e = document.createEvent('HTMLEvents');
      e.initEvent(type, true, true);
      elm.dispatchEvent(e);
    }
  }
  createEvent(el, 'mousedown');
  createEvent(el, 'mouseup');
};

export default triggerEvent;
