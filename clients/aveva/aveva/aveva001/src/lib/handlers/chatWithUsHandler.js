import { sendAdobeEvent } from '../helpers/utils';

const chatWithUsHandler = (id, card) => {
    const controlChatWithUsCTA = document.querySelector('a[data-cta="Chat now"]');
    const { currentStep } = window[`${id}__data`];

    if (currentStep === 1) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('1st step outside form chat with us clicks', 'event45');
    } else if (currentStep === 2) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('2nd step outside form chat with us clicks', 'event46');
    } else if (currentStep === 3) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('3rd step outside form chat with us clicks', 'event47');
    }

    controlChatWithUsCTA.click();
};
export default chatWithUsHandler;
