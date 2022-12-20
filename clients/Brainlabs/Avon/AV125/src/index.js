import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

pollerLite(
  ['body', '.Cart_Body', '.Cart-Products', '.Cart-Footer', () => window.ga !== undefined],
  activate
);
