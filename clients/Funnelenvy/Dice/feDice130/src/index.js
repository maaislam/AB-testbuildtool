import activate from './lib/experiment';
import { getCookie, pollerLite } from './lib/helpers/utils';
import shared from './lib/shared/shared';

const { ID } = shared;

if (!getCookie(`${ID}__modalShow`)) {
    pollerLite(['.personal-links-section .searchableFalse'], activate);
}
