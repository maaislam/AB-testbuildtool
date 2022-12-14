import activate from './lib/experiment';
import { pollerLite } from '../../../../../globalUtil/util';

pollerLite(['body', '.Cart_Body', () => window.ga !== undefined], activate);
