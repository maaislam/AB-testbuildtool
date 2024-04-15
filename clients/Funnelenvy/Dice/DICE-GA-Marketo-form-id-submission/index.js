//disable eslint
/* eslint-disable */

function pollerLite(conditions, callback, maxTime) {
  var POLLING_INTERVAL = 25;
  var startTime = Date.now();
  maxTime = maxTime || 10000;
  var interval = setInterval(function () {
    var allConditionsMet = conditions.every(function (condition) {
      if (typeof condition === 'function') {
        return condition();
      }
      return !!document.querySelector(condition);
    });
    if (allConditionsMet) {
      clearInterval(interval);
      callback();
    } else if (Date.now() - startTime >= maxTime) {
      clearInterval(interval);
      console.error('Polling exceeded maximum time limit');
    }
  }, POLLING_INTERVAL);
}

function init() {
  var gaClientId = '';
  var marketoForm = document.querySelector('[name="formid"]');
  console.log('🚀 ~ init ~ marketoForm:', marketoForm);

  var formId = document.querySelector('[name="formid"]').value;
  var mktForm = window.MktoForms2.getForm(formId);

  if (mktForm) {
    mktForm.addHiddenFields({
      gaClientId: gaClientId
    });
  }
}

pollerLite(['[name="formid"]'], init);
