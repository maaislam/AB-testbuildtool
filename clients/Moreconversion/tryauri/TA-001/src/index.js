import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body.template-product', 'form.ntg-product-add-form'], activate);
