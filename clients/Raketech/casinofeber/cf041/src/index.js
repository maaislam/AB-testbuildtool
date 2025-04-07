import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '#topplista'], () => setTimeout(activate, 2000));
