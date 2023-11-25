import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

pollerLite(['body', '[id^="MediaGallery-template--"]'], activate);
