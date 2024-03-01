import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body'], activate);
//pollerLite(['button.Cart__Checkout#checkout_btn', '[class*="free_shipping_card_progress_bar"]'], activate);
