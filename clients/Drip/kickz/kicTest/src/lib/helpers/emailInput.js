//fetching email address input from login page
const emailInputField = async () => {
    const response = await fetch('/de/checkout-login/');
    const responseTxt = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(responseTxt, 'text/html');
    const emailInput = doc.querySelector('[data-widget="inputEmail"]');
    return emailInput;
};

export default emailInputField;
