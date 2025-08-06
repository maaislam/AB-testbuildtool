import { sendAdobeEvent } from '../helpers/utils';

const customerSupportHandler = (id, card) => {
    const controlSupportCTA = document.querySelector('a[data-cta="Visit customer support"]');
    const { currentStep } = window[`${id}__data`];

    if (currentStep === 1) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('1st step outside form support clicks', 'event27');
    } else if (currentStep === 2) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('2nd step outside form support clicks', 'event28');
    } else if (currentStep === 3) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('3rd step outside form support clicks', 'event29');
    }

    controlSupportCTA.click();
};
export default customerSupportHandler;
