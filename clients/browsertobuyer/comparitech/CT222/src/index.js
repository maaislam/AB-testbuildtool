import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const validPages = [
  '/net-admin/mobile-device-management-software/',
  '/net-admin/network-security-tools/',
  '/net-admin/anti-spam-software/',
  '/net-admin/rmm-software-and-tools/',
  '/net-admin/network-monitoring-tools/'
];

if (validPages.some((page) => window.location.pathname.includes(page))) {
  pollerLite(['.CT245__card'], activate);
}
