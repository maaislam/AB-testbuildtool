import { pollerLite } from '../../../../../../globalUtil/util';
import { isCheckoutPage } from './helpers/pageTypes';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
    if (isCheckoutPage) {
        if (document.querySelector('.handheld')) {
            document.querySelector('body').classList.add(`${ID}-mobile`);
            pollerLite(document.querySelector('.order-summary-toggle'), () => {
                console.log('run');
                document.querySelector('.order-summary-toggle').click();
            });
        }
    }
};

export default () => {
    init();
};
