import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '.MuiBox-root.mui-1smddtb'], () => setTimeout(activate, 2000));
