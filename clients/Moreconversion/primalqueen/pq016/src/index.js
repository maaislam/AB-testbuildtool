import activate from './lib/experiment';
import { addJsToPage, pollerLite } from './lib/helpers/utils';

addJsToPage('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.min.js');
pollerLite(['body', '.join_package_box', '#join_pkg', () => typeof window.pdfjsLib === 'object'], activate);
