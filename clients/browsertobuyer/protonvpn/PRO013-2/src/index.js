import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.bg-purple-900.text-white[data-testid="grid-section"]'], activate);
