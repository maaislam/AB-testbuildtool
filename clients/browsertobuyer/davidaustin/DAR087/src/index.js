import './experiment.scss';
import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '[data-pagination]'], activate);
