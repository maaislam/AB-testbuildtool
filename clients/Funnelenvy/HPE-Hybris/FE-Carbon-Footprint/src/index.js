import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';
import pageConfigs from './lib/pageConfig';

const validUrls = Object.keys(pageConfigs);
const { pathname } = window.location;
const pathComponent = validUrls.find((validUrl) => pathname.includes(validUrl));
console.log('pathComponent:');

if (pathComponent) {
  pollerLite(['body'], () => {
    const pageData = pageConfigs[pathComponent];
    activate(pageData);
  });
}
//zzz_dp_pur_be@yahoo.com
//qwerty.2

//https://b2b.hpe.com/
//adrian.mihoc@hpe.com /  Ste112Ste163#
//impersonate: test_newrelic_mi@yopmail.com
