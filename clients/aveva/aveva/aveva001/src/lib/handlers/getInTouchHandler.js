import { sendAdobeEvent } from '../helpers/utils';

const getInTouchHandler = (id, card) => {
    const controlEmailUsCTA = document.querySelector('a[data-cta="Email us"]');
    const { currentStep } = window[`${id}__data`];

    if (currentStep === 1) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('1st step outside form get in touch clicks', 'event33');
    } else if (currentStep === 2) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('2nd step outside form get in touch clicks', 'event34');
    } else if (currentStep === 3) {
        //fire event - support TY self-serve clicks
        sendAdobeEvent('3rd step outside form get in touch clicks', 'event38');
    }

    controlEmailUsCTA.click();
};
export default getInTouchHandler;
