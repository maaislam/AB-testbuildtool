const isEmailValid = (emailAddress, errorMsgObj) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isValid = re.test(String(emailAddress).toLowerCase());
  const errorMsgConfig = errorMsgObj || {
    pattern: 'Bitte gib eine gültige E-Mail-Adresse ein.',
    length: 'Dieses Feld wird benötigt.'
  };

  return {
    errorMsg: emailAddress === '' ? errorMsgConfig.length : isValid ? '' : errorMsgConfig.pattern,
    isValid
  };
};

export default isEmailValid;
