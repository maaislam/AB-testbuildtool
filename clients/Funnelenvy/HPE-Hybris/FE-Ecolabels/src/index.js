import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import { urlConfigs } from './lib/pageConfigs';

const validUrls = Object.keys(urlConfigs);
const { pathname } = window.location;
const pathComponent = validUrls.find((validUrl) => pathname.includes(validUrl));
console.log('pathComponent:');

if (pathComponent) {
  pollerLite(['body'], () => {
    const pageData = urlConfigs[pathComponent];
    activate(pageData);
  });
}
